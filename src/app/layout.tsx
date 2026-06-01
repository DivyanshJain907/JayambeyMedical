import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { absoluteUrl, getLocalBusinessSchema, seoKeywords, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Jay Ambey Medical Store | Medical Store in Moradabad",
    template: "%s | Jay Ambey Medical Store",
  },
  description: "Jay Ambey Medical Store is a trusted medical store in Manpur Narayanpur, Linepar, Moradabad for genuine medicines, wellness products, baby care, personal care, and health devices.",
  applicationName: "Jay Ambey Medical Store",
  alternates: {
    canonical: "/",
  },
  referrer: "origin-when-cross-origin",
  keywords: seoKeywords,
  authors: [{ name: siteConfig.owner }],
  creator: "Jay Ambey Medical Store",
  publisher: "Jay Ambey Medical Store",
  category: "Medical Store",
  verification: {
    google: "google7335ea3e6df0c5c0.html",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/medical-logo.jpg",
    shortcut: "/medical-logo.jpg",
    apple: "/medical-logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Jay Ambey Medical Store",
    title: "Jay Ambey Medical Store | Medical Store in Moradabad",
    description: "Trusted medical store in Manpur Narayanpur, Linepar, Moradabad for genuine medicines, wellness essentials, baby care, personal care, and health devices.",
    images: [
      {
        url: absoluteUrl("/medical-logo.jpg"),
        width: 1200,
        height: 630,
        alt: "Jay Ambey Medical Store Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Ambey Medical Store | Medical Store in Moradabad",
    description: "Medical store for medicines, wellness products, and healthcare essentials.",
    images: [absoluteUrl("/medical-logo.jpg")],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F766E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaMarkup = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18052344301" strategy="afterInteractive" />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18052344301');
          `}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      </head>
      <body className="bg-white text-gray-700 pt-16 md:pt-32">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
