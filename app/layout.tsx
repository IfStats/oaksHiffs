import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oakshiffs.com"),

  title: {
    default: "Oakshiffs | Premium Real Estate",
    template: "%s | Oakshiffs",
  },

  description:
    "Discover carefully selected properties for sale and rent across Lagos, Accra and Abuja with Oakshiffs.",

  applicationName: "Oakshiffs",

  keywords: [
    "Oakshiffs",
    "real estate",
    "properties",
    "Lagos properties",
    "Accra properties",
    "Abuja properties",
    "houses for sale",
    "houses for rent",
    "apartments",
    "villas",
  ],

  authors: [
    {
      name: "Oakshiffs",
    },
  ],

  creator: "Oakshiffs",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Oakshiffs",
    title: "Oakshiffs | Premium Real Estate",
    description:
      "Discover carefully selected properties for sale and rent across Lagos, Accra and Abuja.",
    url: "https://oakshiffs.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "Oakshiffs | Premium Real Estate",
    description:
      "Discover carefully selected properties for sale and rent across Lagos, Accra and Abuja.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}