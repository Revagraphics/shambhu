<?php
header('Content-Type: application/json; charset=utf-8');

// ─────────────────────────────────────────────
// CORS – change to your real domain in production
// ─────────────────────────────────────────────
$allowed_origins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000',
    'https://shambhucorp.com',
    'https://www.shambhucorp.com',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && (in_array($origin, $allowed_origins, true) || preg_match('/^https?:\/\/(localhost|127\.0\.0\.1|::1)(:\d+)?$/', $origin))) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
} else {
    header('Access-Control-Allow-Origin: *');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Access-Control-Max-Age: 86400');

// Pre-flight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ─────────────────────────────────────────────
// READ INPUT-----------------------------------
// ─────────────────────────────────────────────
$input = file_get_contents('php://input');
$data  = json_decode($input, true);

if (!is_array($data)) {
    $data = $_POST; // fallback for form-data
}

// ─────────────────────────────────────────────
// CLEAN & VALIDATE-----------------------------
// ─────────────────────────────────────────────
$name       = isset($data['name'])       ? trim(strip_tags($data['name']))       : '';
$phone      = isset($data['phone'])      ? trim(strip_tags($data['phone']))      : '';
$email      = isset($data['email'])      ? trim(strip_tags($data['email']))      : '';
$department = isset($data['department']) ? trim(strip_tags($data['department'])) : '';
$message    = isset($data['message'])    ? trim(strip_tags($data['message']))    : '';
$source     = isset($data['source'])     ? trim(strip_tags($data['source']))     : 'Website';

$errors = [];

if ($name === '') {
    $errors[] = 'Name is required';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email is required';
}
if ($message === '') {
    $errors[] = 'Message is required';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode('. ', $errors)]);
    exit;
}

// ─────────────────────────────────────────────
// RECIPIENTS – put the emails that should receive inquiries
// ─────────────────────────────────────────────
$recipients = [
    'shambhu220670@gmail.com',
    'sourabhnegi557@gmail.com'
];

if (getenv('CONTACT_TO_EMAILS') !== false && getenv('CONTACT_TO_EMAILS') !== '') {
    $recipients = array_filter(array_map('trim', explode(',', getenv('CONTACT_TO_EMAILS'))));
}

// ─────────────────────────────────────────────
// EMAIL CONTENT---------------
// ─────────────────────────────────────────────
$subject = "New Inquiry – Shambhu Corporation ({$department})";

$body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
</head>
<body style='margin:0; padding:20px; background:#f4f4f4; font-family:Arial, Helvetica, sans-serif;'>
  <table width='100%' cellpadding='0' cellspacing='0'>
    <tr>
      <td align='center'>
        <table width='100%' cellpadding='0' cellspacing='0' style='max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);'>
          
          <!-- Header -->
          <tr>
            <td style='background:#0B1E33; padding:28px 30px; text-align:center;'>
              <h1 style='margin:0; color:#D98E2C; font-size:22px; letter-spacing:0.5px;'>
                Shambhu Corporation
              </h1>
              <p style='margin:8px 0 0; color:#94a3b8; font-size:13px;'>
                New Website Inquiry
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style='padding:32px 30px;'>
              <h2 style='margin:0 0 20px; color:#0B1E33; font-size:18px;'>
                Inquiry Details
              </h2>

              <table width='100%' cellpadding='12' cellspacing='0' style='border-collapse:collapse; font-size:14px;'>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; width:140px; font-weight:600; color:#334155;'>Name</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>{$name}</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Phone</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>{$phone}</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Email</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>
                    <a href='mailto:{$email}' style='color:#D98E2C; text-decoration:none;'>{$email}</a>
                  </td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Service</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>{$department}</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Message</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a; white-space:pre-wrap;'>{$message}</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Source</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>{$source}</td>
                </tr>
                <tr>
                  <td style='border:1px solid #e2e8f0; background:#f8fafc; font-weight:600; color:#334155;'>Submitted</td>
                  <td style='border:1px solid #e2e8f0; color:#0f172a;'>" . date('d M Y, h:i A') . " IST</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style='padding:18px 30px; background:#f8fafc; text-align:center; color:#64748b; font-size:12px; border-top:1px solid #e2e8f0;'>
              This email was sent from the Shambhu Corporation website contact form.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
";

// ─────────────────────────────────────────────
// HEADERS
// ─────────────────────────────────────────────
// IMPORTANT: The "From" address should be an email that exists on your hosting
// (e.g. noreply@yourdomain.com). Using a Gmail address here often gets blocked.
$fromEmail = getenv('CONTACT_FROM_EMAIL') !== false && getenv('CONTACT_FROM_EMAIL') !== ''
    ? getenv('CONTACT_FROM_EMAIL')
    : 'noreply@shambhucorp.com';
$fromName  = 'Shambhu Corporation';

$headers = [
    "From: {$fromName} <{$fromEmail}>",
    "Reply-To: {$name} <{$email}>",
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "X-Mailer: PHP/" . phpversion(),
];

// ─────────────────────────────────────────────
// SEND
// ─────────────────────────────────────────────
$success = true;
$failed  = [];

foreach ($recipients as $to) {
    $to = trim($to);
    if ($to === '') continue;

    $sent = @mail($to, $subject, $body, implode("\r\n", $headers));
    if (!$sent) {
        $success = false;
        $failed[] = $to;
    }
}

// ─────────────────────────────────────────────
// RESPONSE
// ─────────────────────────────────────────────
if ($success) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your inquiry has been received. We will contact you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to send inquiry at the moment. Please try again or call us directly.',
        // 'debug' => $failed   // uncomment only while testing
    ]);
}