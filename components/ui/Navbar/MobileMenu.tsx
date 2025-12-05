"use client";

import { Box, Button, Flex, Link } from "@radix-ui/themes";
import type { NavItem } from "./DesktopNav";
import { GlassBox } from "./Navbar.styled";

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  onClose: () => void;
  bookNowHref?: string;
}

/**
 * MobileMenu - Mobile navigation menu
 * Displays a dropdown menu with navigation links and book now button
 */
export function MobileMenu({
  isOpen,
  items,
  onClose,
  bookNowHref = "#",
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <GlassBox
      display={{ initial: "block", md: "block", lg: "none" }}
      mb="4"
      shape="card"
      style={{
        borderRadius: "16px",
        padding: "20px",
      }}
    >
      <Flex direction="column" gap="1">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            size="4"
            color="gray"
            highContrast
            style={{
              textDecoration: "none",
              padding: "12px 0",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}

        <Box pt="4">
          <Button size="3" style={{ width: "100%" }} asChild>
            <a href={bookNowHref}>Book Now</a>
          </Button>
        </Box>
      </Flex>
    </GlassBox>
  );
}
