import type { Metadata } from "next";

const siteUrl = "https://www.jayambeymedicalstore.com";

export const metadata: Metadata = {
  title: "Customer Testimonials",
  description: "Read customer feedback for Jay Ambey Medical Store and our pharmacy support.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Customer Testimonials | Jay Ambey Medical Store",
    description: "Customer feedback on medicines, wellness products, and pharmacy service.",
    url: `${siteUrl}/testimonials`,
    type: "website",
    siteName: "Jay Ambey Medical Store",
    images: ["/medical-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Testimonials | Jay Ambey Medical Store",
    description: "What customers say about Jay Ambey Medical Store.",
    images: ["/medical-logo.svg"],
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
