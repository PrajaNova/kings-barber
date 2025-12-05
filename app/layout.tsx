import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./main.css";
import { ThemeProvider } from "##/components/providers/ThemeProvider";
import { Navbar } from "##/components/ui/Navbar/Navbar";

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
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ paddingTop: "72px" }}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
