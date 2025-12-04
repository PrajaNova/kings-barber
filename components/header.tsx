"use client";

import { Menu, Phone, Scissors, X } from "lucide-react";
import { useState } from "react";
import { Button } from "##/components/ui/button";
import { businessInfo } from "##/lib/schema";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
            data-testid="link-home"
          >
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <Scissors className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-bold text-foreground">
                Kings Barber
              </span>
              <span className="block text-xs text-muted-foreground -mt-1">
                Est. {businessInfo.established}
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => scrollToSection(link.href)}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-phone"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">{businessInfo.phone}</span>
            </a>

            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="hidden sm:inline-flex"
              data-testid="button-book-now"
            >
              Book Now
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="mt-2"
                data-testid="button-mobile-book"
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
