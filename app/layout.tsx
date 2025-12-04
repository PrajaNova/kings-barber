import type { Metadata } from "next";
import "./main.css";

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
      <body className={"min-h-screen bg-background"}>{children}</body>
    </html>
  );
}
