import { useState, memo, useCallback } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

const social = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    content: (
      <div className="text-center">
        <img
          src="/qr-whatsapp.png"
          alt="WhatsApp QR"
          className="h-32 w-32  mx-auto"
          loading="lazy"
        />
        <p className="mt-2 text-xs">Scan to Chat</p>
      </div>
    ),
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    content: (
      <div>
        <p className="font-semibold">+91 9876543210</p>
      </div>
    ),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: (
      <div>
        <p className="break-all">
          shambhu220670@gmail.com
        </p>
      </div>
    ),
  },
  // {
  //   icon: <FaLinkedinIn />,
  //   title: "LinkedIn",
  //   content: (
  //     <a
  //       href="https://linkedin.com"
  //       target="_blank"
  //       rel="noreferrer"
  //       className="text-blue-600"
  //     >
  //       Visit Profile
  //     </a>
  //   ),
  // },
];

const Social = () => {
  const [active, setActive] = useState(null);

  const handleMouseEnter = useCallback((index) => {
    setActive(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <div className="fixed bottom-10 right-5 z-[9999] flex flex-col gap-3">
      {social.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="w-10 h-10 lg:h-14 lg:w-14 rounded-full bg-[#ffac1c] text-white flex items-center justify-center shadow-lg hover:bg-[#E0920F] transition-colors text-xl"
            aria-label={item.title}
          >
            {item.icon}
          </button>

          {active === index && (
            <div className="absolute right-16 bottom-0 bg-white rounded-xl shadow-2xl border p-4 min-w-[220px] animate-in fade-in duration-200">
              <h4 className="font-semibold mb-2">
                {item.title}
              </h4>

              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default memo(Social);