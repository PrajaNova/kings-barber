"use client";

import { About } from "##/components/about";
import { Awards } from "##/components/awards";
import { Contact } from "##/components/contact";
import { Footer } from "##/components/footer";
import { Header } from "##/components/header";
import { Hero } from "##/components/hero";
import { InstagramFeed } from "##/components/instagram";
import { Products } from "##/components/products";
import { Services } from "##/components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Awards />
        <Products />
        <About />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
