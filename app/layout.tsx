import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./main.css";
import { Navbar } from "../components/Navbar";

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
        <Theme
          accentColor="amber"
          grayColor="sand"
          radius="medium"
          scaling="100%"
          appearance="dark"
        >
          <Navbar />
          <main style={{ paddingTop: "72px" }}>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
