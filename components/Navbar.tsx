"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
} from "@radix-ui/themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Glass styles
const glassStyle = {
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Box position="fixed" top="0" left="0" right="0" style={{ zIndex: 50 }}>
      <Container size="4" px={{ initial: "4", sm: "6" }}>
        <Flex justify="between" align="center" py={{ initial: "3", md: "4" }}>
          {/* Logo - Responsive size */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image
              src="https://kingsbarber.com.sg/wp-content/uploads/2016/08/LOGO.png"
              alt="Kings Barber"
              width={120}
              height={40}
              style={{ height: "32px", width: "auto" }}
              unoptimized
            />
          </Link>

          {/* Desktop Navigation - Glass Pill */}
          <Flex
            gap="6"
            align="center"
            display={{ initial: "none", md: "flex", lg: "flex" }}
            style={{
              ...glassStyle,
              borderRadius: "9999px",
              padding: "10px 24px",
              height: "50px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                size="4"
                weight="medium"
                color="gray"
                highContrast
                style={{ textDecoration: "none", whiteSpace: "nowrap" }}
              >
                {link.label}
              </Link>
            ))}
          </Flex>

          {/* Desktop Actions - Glass Pill */}
          <Flex
            gap="6"
            align="center"
            display={{ initial: "none", md: "flex", lg: "flex" }}
            style={{
              ...glassStyle,
              borderRadius: "9999px",
              padding: "10px 24px",
              height: "50px",
            }}
          >
            <IconButton
              variant="ghost"
              color="gray"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              size="1"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </IconButton>

            <Link
              key={"book-now"}
              href={"#"}
              size="3"
              weight="medium"
              color="gray"
              highContrast
              style={{
                textDecoration: "none",
                whiteSpace: "nowrap",
                color: "var(--amber-9)",
              }}
            >
              Book Now
            </Link>
          </Flex>

          {/* Mobile Actions - Glass Pill */}
          <Flex
            gap="2"
            align="center"
            display={{ initial: "flex", md: "none" }}
            style={{
              ...glassStyle,
              borderRadius: "9999px",
              padding: "6px 12px",
              height: "40px",
            }}
          >
            <IconButton
              variant="ghost"
              color="gray"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              size="1"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </IconButton>

            <IconButton
              variant="ghost"
              color="gray"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              size="1"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </IconButton>
          </Flex>
        </Flex>

        {/* Mobile Menu - Glass Card */}
        {isMenuOpen && (
          <Box
            display={{ initial: "block", md: "none" }}
            mb="4"
            style={{
              ...glassStyle,
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <Flex direction="column" gap="1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  size="4"
                  color="gray"
                  highContrast
                  style={{
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Box pt="4">
                <Button size="3" style={{ width: "100%" }}>
                  Book Now
                </Button>
              </Box>
            </Flex>
          </Box>
        )}
      </Container>
    </Box>
  );
}
