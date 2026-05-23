import type { Metadata } from "next";
import { Lato, Arvo, Cormorant_Garamond, Cambo } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const arvo = Arvo({
  variable: "--font-arvo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const cambo = Cambo({
  variable: "--font-cambo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Anneliese Designs | Brand & Web Designer in Whitby, Durham Region, Ontario",
    template: "%s | Anneliese Designs",
  },
  description: "Anneliese Designs is a creative branding and web design studio in Whitby, Ontario. Serving Durham Region and beyond with brand identity, graphic design, web design, and strategic writing.",
  keywords: [
    "graphic designer Whitby Ontario",
    "web designer Durham Region",
    "brand designer Whitby",
    "branding studio Ontario",
    "creative director Durham Region",
    "brand identity Whitby",
    "web design Ontario",
    "graphic design Durham Region",
    "Anneliese Designs",
    "Vanessa Witkowski designer",
    "freelance designer Whitby",
    "logo design Durham Region",
  ],
  authors: [{ name: "Vanessa Witkowski", url: "https://anneliesedesigns.com" }],
  creator: "Vanessa Witkowski",
  metadataBase: new URL("https://anneliesedesigns.com"),
  alternates: {
    canonical: "https://anneliesedesigns.com",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://anneliesedesigns.com",
    siteName: "Anneliese Designs",
    title: "Anneliese Designs | Brand & Web Designer in Whitby, Durham Region, Ontario",
    description: "Creative branding and web design studio in Whitby, Ontario. Serving Durham Region businesses with brand identity, graphic design, web design, and strategic writing.",
    images: [
      {
        url: "/images/logo.png",
        width: 1000,
        height: 1000,
        alt: "Anneliese Designs Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Anneliese Designs | Brand & Web Designer in Whitby, Ontario",
    description: "Creative branding and web design studio in Whitby, Durham Region, Ontario.",
    creator: "@anneliesedesign",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${arvo.variable} ${cormorantGaramond.variable} ${cambo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
