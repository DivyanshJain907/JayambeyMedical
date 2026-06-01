import type { Metadata } from "next";

const siteUrl = "https://www.jayambeymedicalstore.com";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Jay Ambey Medical Store, a trusted medical store in Manpur Narayanpur, Linepar, Moradabad.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Jay Ambey Medical Store",
    description: "Trusted medical store in Moradabad for family healthcare needs.",
    url: `${siteUrl}/about`,
    type: "website",
    siteName: "Jay Ambey Medical Store",
    images: ["/medical-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Jay Ambey Medical Store",
    description: "Pharmacy support for medicines, wellness, and daily essentials.",
    images: ["/medical-logo.svg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
