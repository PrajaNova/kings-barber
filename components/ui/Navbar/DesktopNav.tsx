import { GlassContainer, StyledNavLink } from "./Navbar.styled";

export interface NavItem {
  label: string;
  href: string;
}

interface DesktopNavProps {
  items: NavItem[];
}

/**
 * DesktopNav - Desktop navigation menu with glass pill container
 * Displays navigation links in a horizontal glass morphism container
 */
export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <GlassContainer
      gap="6"
      align="center"
      display={{ initial: "none", md: "none", lg: "flex" }}
      shape="pill"
      size="md"
    >
      {items.map((item) => (
        <StyledNavLink
          key={item.label}
          href={item.href}
          size="lg"
          variant="default"
        >
          {item.label}
        </StyledNavLink>
      ))}
    </GlassContainer>
  );
}
