import { Helmet } from "react-helmet-async";

import { useLocation } from "react-router-dom";

export default function Seo({
  title = "shambhu corporation ",
  description = "shambhu corporation is a leading provider of logistics and export services across the globe.",
  noIndex = false,
}) {
  const location = useLocation();

  const url = `https://shambhucorporation.com${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* SEO */}
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
