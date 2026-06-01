import type { Metadata } from "next";

const siteUrl = "https://www.jayambeymedicalstore.com";

export const metadata: Metadata = {
  title: "Medicines and Healthcare Products",
  description: "Browse medicine categories, wellness products, baby care, personal care, and health devices at Jay Ambey Medical Store.",
  keywords: ["medical store in Moradabad", "medicine shop", "wellness products", "health devices", "baby care products"],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Medicines and Healthcare Products | Jay Ambey Medical Store",
    description: "Medicines, wellness products, and daily healthcare essentials.",
    url: `${siteUrl}/products`,
    type: "website",
    siteName: "Jay Ambey Medical Store",
    images: ["/medical-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicines and Healthcare Products | Jay Ambey Medical Store",
    description: "Find medicines and healthcare essentials in Moradabad.",
    images: ["/medical-logo.svg"],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
