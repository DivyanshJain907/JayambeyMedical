import type { Metadata } from "next";

const siteUrl = "https://www.jayambeymedical.in";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View Jay Ambey Medical Store gallery highlights for medicines, wellness products, health devices, baby care, and pharmacy support in Moradabad.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Jay Ambey Medical Store",
    description:
      "Gallery highlights from Jay Ambey Medical Store in Manpur Narayanpur, Linepar, Moradabad.",
    url: `${siteUrl}/gallery`,
    type: "website",
    siteName: "Jay Ambey Medical Store",
    images: ["/medical-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Jay Ambey Medical Store",
    description: "View pharmacy, healthcare, and wellness product gallery highlights.",
    images: ["/medical-logo.svg"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
