import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export const SEO = ({ title, description, url, image }: SEOProps) => {
  const fullTitle = title ? `${title} | Dreevn` : "Dreevn — Luxury Digital Agency";

  return (
    <Helmet>
      {/* Basic */}
      {fullTitle && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph (for social) */}
      {title && <meta property="og:title" content={fullTitle} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={fullTitle} />}
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};
