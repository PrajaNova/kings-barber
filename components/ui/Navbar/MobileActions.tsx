"use client";

import { IconButton } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import { GlassContainer } from "./Navbar.styled";
import ThemeToggle from "./ThemeToggle";

interface MobileActionsProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

/**
 * MobileActions - Mobile action buttons (theme toggle, menu toggle)
 * Compact glass pill for mobile viewports
 */
export function MobileActions({
  isMenuOpen,
  onToggleMenu,
}: MobileActionsProps) {
  return (
    <GlassContainer
      gap="2"
      align="center"
      display={{ initial: "flex", md: "flex", lg: "none" }}
      shape="pill"
      size="sm"
    >
      <ThemeToggle />
      <IconButton
        variant="ghost"
        color="gray"
        onClick={onToggleMenu}
        aria-label="Toggle menu"
        size="1"
      >
        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </IconButton>
    </GlassContainer>
  );
}
