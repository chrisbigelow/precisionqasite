import ogImageSrc from "@/images/social.png";

export const SITE = {
  title: "Precision QA",
  tagline: "AI Tools For Safety-Critical Software Development",
  description: "AI Tools For Safety-Critical Software Development.",
  description_short: "AI Tools For Safety-Critical Software Development.",
  url: "https://precisionqa.ai",
  author: "Chris Bigelow",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : AI Tools For Safety-Critical Software Development`,
  description: "AI Tools For Safety-Critical Software Development",
  image: ogImageSrc,
};
