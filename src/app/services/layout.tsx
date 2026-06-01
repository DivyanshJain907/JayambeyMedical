import type { Metadata } from "next";

const siteUrl = "https://www.jayambeymedicalstore.com";

export const metadata: Metadata = {
  title: "Pharmacy Services",
  description: "Explore pharmacy services including medicine availability, OTC care, wellness support, health devices, and family care products.",
  keywords: ["pharmacy services", "medicine availability", "OTC medicine", "health devices", "medical store Moradabad"],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Pharmacy Services | Jay Ambey Medical Store",
    description: "Medicine availability, wellness products, health devices, and family care support.",
    url: `${siteUrl}/services`,
    type: "website",
    siteName: "Jay Ambey Medical Store",
    images: ["/medical-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacy Services | Jay Ambey Medical Store",
    description: "Healthcare and pharmacy services in Moradabad.",
    images: ["/medical-logo.svg"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
