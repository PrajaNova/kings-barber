"use client";

import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "##/components/ui/Button";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={
                  "https://kingsbarber.com.sg/wp-content/uploads/2016/08/LOGO.png"
                }
                height={200}
                width={200}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-outfit text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="font-outfit text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="font-outfit text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="font-outfit text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="font-outfit text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-outfit text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="font-outfit text-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="font-outfit text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="font-outfit text-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="font-outfit text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
