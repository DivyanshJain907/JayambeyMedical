import type { Metadata } from "next";

const siteUrl = "https://www.jayambeymedical.in";

export const metadata: Metadata = {
  title: "Request Medicine",
  description: "Send a medicine or healthcare product request to Jay Ambey Medical Store and confirm availability quickly.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Request Medicine | Jay Ambey Medical Store",
    description: "Request medicine availability and healthcare product support.",
    url: `${siteUrl}/quote`,
    type: "website",
    siteName: "Jay Ambey Medical Store",
    images: ["/medical-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Medicine | Jay Ambey Medical Store",
    description: "Submit your medicine requirement and receive support.",
    images: ["/medical-logo.svg"],
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
