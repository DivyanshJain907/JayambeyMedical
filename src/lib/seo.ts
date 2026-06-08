export const siteConfig = {
  name: "Jay Ambey Medical Store",
  url: "https://www.jayambeymedical.in",
  logo: "/medical-logo.svg",
  phone: "+91-9368555196",
  displayPhone: "+91 9368555196",
  owner: "Jitendra Saini",
  email: "jayambeymedicalstore@gmail.com",
  address: {
    streetAddress: "Manpur Narayanpur, Linepar",
    locality: "Moradabad",
    region: "Uttar Pradesh",
    postalCode: "244001",
    country: "IN",
  },
  geo: {
    latitude: 28.8386,
    longitude: 78.7733,
  },
};

export const seoKeywords = [
  "Jay Ambey Medical Store",
  "medical store in Moradabad",
  "pharmacy in Moradabad",
  "medical store in Linepar",
  "medicine shop Manpur Narayanpur",
  "medicine shop near me",
  "chemist shop Moradabad",
  "pharmacy near Linepar Moradabad",
  "genuine medicines",
  "prescription medicines Moradabad",
  "OTC medicines Moradabad",
  "wellness products",
  "health devices",
  "baby care products",
  "personal care products",
];

export const productCategoryDetails = [
  {
    slug: "medicines",
    name: "Prescription Medicines",
    description:
      "Check availability for prescription medicines, branded medicines, and generic medicine support at Jay Ambey Medical Store in Moradabad.",
  },
  {
    slug: "otc-first-aid",
    name: "OTC & First Aid",
    description:
      "Find OTC care, cold and fever support, pain relief, ORS, antiseptics, bandages, and first-aid essentials in Moradabad.",
  },
  {
    slug: "wellness-nutrition",
    name: "Wellness & Nutrition",
    description:
      "Browse vitamins, supplements, protein products, immunity support, and daily wellness essentials at Jay Ambey Medical Store.",
  },
  {
    slug: "health-devices",
    name: "Health Devices",
    description:
      "Explore thermometers, BP monitors, glucometers, vaporizers, masks, and home healthcare devices in Moradabad.",
  },
  {
    slug: "baby-mother-care",
    name: "Baby & Mother Care",
    description:
      "Shop baby hygiene, feeding support, mother-care essentials, gentle skin care, and family healthcare products.",
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    description:
      "Find hygiene products, oral care, skin care, sanitizers, and everyday personal-care essentials at Jay Ambey Medical Store.",
  },
];

export const productCategorySlugs = productCategoryDetails.map((category) => category.slug);

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export function getLocalBusinessSchema() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.locality,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.logo),
        description:
          "Medical store in Manpur Narayanpur, Linepar, Moradabad for medicines, wellness products, baby care, personal care, and health devices.",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        founder: siteConfig.owner,
        address,
        areaServed: [
          "Moradabad",
          "Linepar",
          "Manpur Narayanpur",
          "Uttar Pradesh",
        ],
        sameAs: [],
      },
      {
        "@type": ["Pharmacy", "LocalBusiness"],
        "@id": `${siteConfig.url}/#pharmacy`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.logo),
        description:
          "Trusted pharmacy and medical store in Moradabad for genuine medicines, OTC care, wellness products, baby care, and healthcare essentials.",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        paymentAccepted: "Cash, UPI",
        priceRange: "$$",
        areaServed: "Moradabad",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "en-IN",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };
}
