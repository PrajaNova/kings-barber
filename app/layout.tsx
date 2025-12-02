import type { Metadata } from "next";
import { Inter, Playfair_Display, Bebas_Neue, Outfit } from "next/font/google";
import "./main.css";
import { Navbar } from "##/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "King's Barber - Premium Grooming Services",
  description:
    "Experience the finest cuts and shaves at King's Barber. Classic style, modern service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'min-h-screen bg-background'}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
