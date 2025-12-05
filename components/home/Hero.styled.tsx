import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { keyframes, styled } from "@stitches/react";

// Animations
const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const slideUp = keyframes({
  "0%": { opacity: 0, transform: "translateY(20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const bounce = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(25%)" },
});

export const HeroSection = styled("section", {
  position: "relative",
  minHeight: "85vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "var(--gray-1)", // Fallback
});

export const HeroContent = styled(Box, {
  position: "relative",
  zIndex: 10,
  textAlign: "center",
  width: "100%",
  maxWidth: "1200px",
  padding: "0 0px",
  animation: `${fadeIn} 1s ease-out forwards`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Subtitle = styled(Text, {
  fontFamily: "'Outfit', sans-serif",
  color: "var(--amber-9)",
  textTransform: "uppercase",
  letterSpacing: "0.3em",
  fontSize: "14px",
  fontWeight: 600,
  marginBottom: "24px",
  display: "block",
  animation: `${slideUp} 0.8s ease-out 0.2s forwards`,
});

export const MainHeading = styled(Heading, {
  fontSize: "clamp(60px, 10vw, 100px)",
  lineHeight: 0.9,
  color: "white",
  opacity: 0,
  animation: `${slideUp} 0.8s ease-out 0.4s forwards`,
  textShadow: "0 4px 20px rgba(0,0,0,0.5)",
  margin: 0,
});

export const HeroHeading = styled(Heading, {
  fontFamily: "'Playfair Display', serif",
  fontSize: "28px",
  fontWeight: 700,
  color: "white",
  margin: "0 0 40px 0",
  lineHeight: 1.2,
  textAlign: "center",
  opacity: 0,
  animation: `${slideUp} 0.8s ease-out 0.4s forwards`,

  "@media (min-width: 640px)": {
    fontSize: "36px",
  },
  "@media (min-width: 1024px)": {
    fontSize: "30px",
  },

  "& span": {
    display: "inline",
    color: "var(--amber-9)",
    marginLeft: "8px",
  },
});

export const Description = styled(Text, {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "clamp(18px, 2vw, 24px)",
  color: "rgba(255, 255, 255, 0.9)",
  maxWidth: "600px",
  margin: "0 auto 40px",
  lineHeight: 1.6,
  opacity: 0,
  animation: `${slideUp} 0.8s ease-out 0.6s forwards`,

  "& span": {
    display: "block",
    marginTop: "8px",
    background: "linear-gradient(90deg, var(--amber-8), var(--amber-11))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 600,
  },
});

export const HeroDescription = styled(Text, {
  fontSize: "18px",
  color: "var(--gray-6)",
  marginBottom: "32px",
  maxWidth: "512px",
  display: "block",
  lineHeight: 1.6,
  opacity: 0,
  animation: `${slideUp} 0.8s ease-out 0.6s forwards`,

  "@media (min-width: 640px)": {
    fontSize: "20px",
  },
});

export const ButtonGroup = styled(Flex, {
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
  opacity: 0,
  animation: `${slideUp} 0.8s ease-out 0.8s forwards`,
});

export const ScrollIndicator = styled("button", {
  position: "absolute",
  bottom: "32px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "rgba(255,255,255,0.6)",
  background: "none",
  border: "none",
  cursor: "pointer",
  transition: "color 0.2s",
  opacity: 0,
  animation: `${fadeIn} 1s ease-out 1s forwards`,

  "&:hover": {
    color: "white",
  },

  "& span": {
    fontSize: "14px",
    marginBottom: "8px",
    fontFamily: "'Outfit', sans-serif",
  },
});

export const MouseIcon = styled("div", {
  width: "24px",
  height: "40px",
  borderRadius: "9999px",
  border: "2px solid currentColor",
  display: "flex",
  justifyContent: "center",
  paddingTop: "8px",
});

export const ScrollDot = styled("div", {
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "currentColor",
  animation: `${bounce} 1s infinite`,
});
