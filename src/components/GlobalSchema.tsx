import React from "react";

export const GlobalSchema = () => {
  const siteUrl = "https://dreevn.com"; // change when your final domain is live

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dreevn",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`, // update to your real logo URL later
    description:
      "Dreevn is a premium digital transformation studio building brand systems, premium websites, AI agents and growth engines for ambitious brands.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Mahesh Banoth",
    },
    sameAs: [
      "https://www.instagram.com/maheshdreevn",
      "https://x.com/maheshdreevn",
      "https://www.linkedin.com/in/maheshdreevn/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "mahesh@dreevn.com",
        telephone: "+91-9281163366",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mahesh Banoth",
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "Dreevn",
    },
    email: "mahesh@dreevn.com",
    url: siteUrl,
    sameAs: [
      "https://www.instagram.com/maheshdreevn",
      "https://x.com/maheshdreevn",
      "https://www.linkedin.com/in/maheshdreevn/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
};
