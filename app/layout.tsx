import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://primeautointernational.com";
const siteName = "Prime Auto International";
const siteDescription =
  "Importers and exporters in all kinds of brand new and used motor vehicles. Specialists in motor spares and machineries — established in 1995.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Your Trusted Automotive Partner`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Prime Auto International",
    "car importers Sri Lanka",
    "vehicle exporters",
    "brand new cars",
    "used cars",
    "motor spares",
    "machinery",
    "Kurunegala",
    "Toyota",
    "Mercedes-Benz",
    "BMW",
    "Audi",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "automotive",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteUrl,
    siteName,
    title: `${siteName} | Your Trusted Automotive Partner`,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Prime Auto International logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Your Trusted Automotive Partner`,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/seo/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/seo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/seo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: siteName,
  legalName: "Prime Auto International (Pvt) Ltd.",
  url: siteUrl,
  logo: `${siteUrl}/Logo.jpg`,
  image: `${siteUrl}/og-image.jpg`,
  description: siteDescription,
  foundingDate: "1995",
  telephone: ["+94768931709", "+94759094211", "+94761718046"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Colombo Road",
    addressLocality: "Kurunegala",
    addressCountry: "LK",
  },
  areaServed: ["Middle East", "Europe", "Americas", "Sri Lanka"],
  sameAs: [siteUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
