import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "##/components/Footer";
import Navbar from "##/components/Navbar";
import { ThemeProvider } from "##/components/theme-provider";
import { cn } from "##/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kings Barber",
  description: "Premium Barber Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50 transition-colors duration-300",
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
