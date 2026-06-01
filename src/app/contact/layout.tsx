import type { Metadata } from "next";

const siteUrl = "https://www.jayambeymedicalstore.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Jay Ambey Medical Store for medicine availability, healthcare products, wellness essentials, and store support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Jay Ambey Medical Store",
    description: "Reach Jay Ambey Medical Store for medicine and healthcare product support.",
    url: `${siteUrl}/contact`,
    type: "website",
    siteName: "Jay Ambey Medical Store",
    images: ["/medical-logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Jay Ambey Medical Store",
    description: "Connect for medicines, health devices, and wellness essentials.",
    images: ["/medical-logo.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
