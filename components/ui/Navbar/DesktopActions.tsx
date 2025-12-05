"use client";

import { GlassContainer, StyledNavLink } from "./Navbar.styled";
import ThemeToggle from "./ThemeToggle";

interface DesktopActionsProps {
  bookNowHref?: string;
}

export function DesktopActions({ bookNowHref = "#" }: DesktopActionsProps) {
  return (
    <GlassContainer
      gap="6"
      align="center"
      display={{ initial: "none", md: "none", lg: "flex" }}
      shape="pill"
      size="lg"
    >
      <ThemeToggle />
      <StyledNavLink
        href={bookNowHref}
        size="lg"
        variant="primary"
        underline={false}
      >
        Book Now
      </StyledNavLink>
    </GlassContainer>
  );
}
