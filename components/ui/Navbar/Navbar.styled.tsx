/**
 * Navbar Styled Components
 * Using Stitches with inline values (no config needed)
 */

import { Box, Flex } from "@radix-ui/themes";
import { styled } from "@stitches/react";
import NextLink from "next/link";
import type React from "react";

/**
 * GlassContainer - A reusable glass morphism container component
 * Adapts to light/dark theme automatically
 */
export const GlassContainer = styled(Flex, {
  // Theme-aware glass effect
  background: "var(--color-overlay)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid var(--gray-a6)",
  transition: "all 0.3s ease",

  "&:hover": {
    background: "var(--gray-a3)",
    borderColor: "var(--gray-a7)",
  },

  variants: {
    shape: {
      pill: {
        borderRadius: "9999px",
        padding: "10px 24px",
        height: "50px",
      },
      card: {
        borderRadius: "16px",
        padding: "20px",
      },
      rounded: {
        borderRadius: "12px",
        padding: "16px",
      },
    },
    size: {
      sm: {
        height: "40px",
        padding: "6px 12px",
      },
      md: {
        height: "70px",
        padding: "10px 24px",
      },
      lg: {
        height: "70px",
        padding: "14px 32px",
      },
    },
    interactive: {
      true: {
        cursor: "pointer",
        "&:active": {
          transform: "scale(0.98)",
        },
      },
    },
  },

  defaultVariants: {
    shape: "pill",
    size: "md",
  },
});

/**
 * GlassBox - A box variant of the glass container
 * Adapts to light/dark theme automatically
 */
export const GlassBox = styled(Box, {
  background: "var(--color-overlay)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid var(--gray-a6)",
  transition: "all 0.3s ease",

  variants: {
    shape: {
      pill: {
        borderRadius: "9999px",
        padding: "10px 24px",
      },
      card: {
        borderRadius: "16px",
        padding: "20px",
      },
      rounded: {
        borderRadius: "12px",
        padding: "16px",
      },
    },
    interactive: {
      true: {
        cursor: "pointer",
        "&:hover": {
          background: "var(--gray-a3)",
          borderColor: "var(--gray-a7)",
        },
        "&:active": {
          transform: "scale(0.98)",
        },
      },
    },
  },

  defaultVariants: {
    shape: "card",
  },
});

/**
 * StyledNavLink - Navigation link with Next.js routing and hover effects
 */
const StyledAnchor = styled("a", {
  textDecoration: "none",
  whiteSpace: "nowrap",
  position: "relative",
  transition: "all 0.3s ease",
  fontWeight: 500,
  cursor: "pointer",
  padding: "8px 16px",
  borderRadius: "12px",
  outline: "none",

  "&:hover": {
    background: "var(--gray-a2)",

    "&::after": {
      transform: "translateX(-50%) scaleX(1)",
    },
  },

  // Apple-style glass effect on focus (theme-aware)
  "&:focus, &:focus-visible": {
    background: "var(--gray-a3)",
    backdropFilter: "blur(10px) saturate(180%)",
    WebkitBackdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid var(--gray-a7)",
    boxShadow: "0 0 0 3px var(--gray-a4), 0 4px 12px var(--black-a5)",
    outline: "none",
  },

  variants: {
    variant: {
      default: {
        color: "var(--gray-12)",
        "&:hover": {
          color: "var(--gray-11)",
        },
      },
      primary: {
        color: "var(--amber-9)",
        "&:hover": {
          color: "var(--amber-10)",
        },
      },
      ghost: {
        color: "var(--gray-11)",
        "&:hover": {
          color: "var(--gray-12)",
        },
      },
    },
    size: {
      sm: {
        fontSize: "14px",
      },
      md: {
        fontSize: "16px",
      },
      lg: {
        fontSize: "18px",
      },
    },
    underline: {
      false: {
        "&::after": {
          display: "none",
        },
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface StyledNavLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  underline?: boolean;
  className?: string;
}

export const StyledNavLink = ({
  href,
  children,
  variant = "default",
  size = "md",
  underline = true,
  className,
}: StyledNavLinkProps) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <StyledAnchor
        variant={variant}
        size={size}
        underline={underline}
        className={className}
      >
        {children}
      </StyledAnchor>
    </NextLink>
  );
};

// Legacy exports for backward compatibility
export const GlassFlex = GlassContainer;
