"use client";

import { Box, Container, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { DesktopActions } from "./DesktopActions";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileActions } from "./MobileActions";
import { MobileMenu } from "./MobileMenu";

/**
 * Navigation items configuration
 */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Navbar - Main navigation component
 * A modular, responsive navigation bar with glass morphism design
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Box position="fixed" top="0" left="0" right="0" style={{ zIndex: 50 }}>
      <Container size="4" px={{ initial: "4", sm: "6" }}>
        <Flex justify="between" align="center" py={{ initial: "3", md: "4" }}>
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav items={navLinks} />

          {/* Desktop Actions */}
          <DesktopActions bookNowHref="#" />

          {/* Mobile Actions */}
          <MobileActions isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
        </Flex>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenu
            isOpen={isMenuOpen}
            items={navLinks}
            onClose={() => setIsMenuOpen(false)}
            bookNowHref="#"
          />
        )}
      </Container>
    </Box>
  );
}
