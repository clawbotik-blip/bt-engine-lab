import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BT Engine Lab — Life Science & Proteomics Equipment Supplier",
    template: "%s | BT Engine Lab — Life Science & Proteomics Equipment",
  },
  description:
    "BT Engine Lab LLC supplies precision lab equipment, proteomics instruments, chromatography systems, and consumables for life science and biotech research. Based in Woodland Hills, CA.",
  keywords: [
    "lab equipment supplier",
    "proteomics instruments",
    "life science supplies",
    "chromatography systems",
    "mass spectrometry accessories",
    "Woodland Hills biotech",
    "sample prep kits",
    "HPLC systems",
  ],
  authors: [{ name: "BT Engine Lab LLC" }],
  creator: "BT Engine Lab LLC",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://btenginelabllc.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BT Engine Lab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BT Engine Lab LLC",
  description:
    "Life science and proteomics equipment supplier — lab instruments, consumables, and reagents for research institutions.",
  url: "https://btenginelabllc.com",
  telephone: "+13477773990",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6200 Variel Ave, Apt 617",
    addressLocality: "Woodland Hills",
    addressRegion: "CA",
    postalCode: "91367",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1833,
    longitude: -118.5994,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
