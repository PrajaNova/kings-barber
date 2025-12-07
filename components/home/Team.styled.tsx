import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { styled } from "@stitches/react";

export const TeamSection = styled("section", {
  padding: "80px 20px",
  backgroundColor: "var(--gray-1)",
  textAlign: "center",

  "@media (min-width: 768px)": {
    padding: "120px 40px",
  },
});

export const SectionHeader = styled(Box, {
  marginBottom: "60px",
  maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
});

export const SectionTitle = styled(Heading, {
  fontFamily: "'Playfair Display', serif",
  fontSize: "36px",
  marginBottom: "16px",
  color: "var(--gray-12)",

  "@media (min-width: 768px)": {
    fontSize: "48px",
  },
});

export const SectionSubtitle = styled(Text, {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "18px",
  color: "var(--gray-10)",
  lineHeight: "1.6",
});

export const TeamGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "24px",
  maxWidth: "1200px",
  margin: "0 auto",

  "@media (min-width: 640px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export const CardOverlay = styled(Flex, {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "32px",
  flexDirection: "column",
  alignItems: "flex-start",
  background:
    "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
  transform: "translateY(20px)",
  transition: "transform 0.3s ease, opacity 0.3s ease",
  zIndex: 2,
});

export const SocialLinks = styled(Flex, {
  gap: "16px",
  marginTop: "16px",
  opacity: 0,
  transform: "translateY(10px)",
  transition: "all 0.3s ease 0.1s",
});

export const TeamCard = styled("div", {
  position: "relative",
  height: "500px",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: "var(--gray-3)",

  "&:hover": {
    [`& ${CardOverlay}`]: {
      transform: "translateY(0)",
    },
    [`& ${SocialLinks}`]: {
      opacity: 1,
      transform: "translateY(0)",
    },
    "& img": {
      transform: "scale(1.05)",
    },
  },
});

export const CardImage = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
});

export const MemberName = styled(Heading, {
  fontFamily: "'Playfair Display', serif",
  fontSize: "24px",
  color: "white",
  marginBottom: "4px",
});

export const MemberRole = styled(Text, {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "16px",
  color: "var(--amber-9)",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const SocialIcon = styled("a", {
  color: "rgba(255,255,255,0.7)",
  transition: "color 0.2s ease, transform 0.2s ease",

  "&:hover": {
    color: "var(--amber-9)",
    transform: "translateY(-2px)",
  },
});
