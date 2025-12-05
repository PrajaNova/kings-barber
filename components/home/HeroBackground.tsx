"use client";

import { Box } from "@radix-ui/themes";
import { styled } from "@stitches/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Images } from "##/utils/Constant";

const Container = styled(Box, {
  position: "absolute",
  inset: 0,
  zIndex: 0,
  overflow: "hidden",
  backgroundColor: "var(--gray-1)",
});

const ImageWrapper = styled("div", {
  position: "absolute",
  inset: 0,
  transition: "opacity 2s ease-in-out",

  // Gradient Overlay
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `
      linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))
    `,
    zIndex: 1,
  },
});

const banners = [Images.HERO_BANNER_1, Images.HERO_BANNER_2];

export const HeroBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {banners.map((src, index) => (
        <ImageWrapper
          key={src}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={`Hero Banner ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </ImageWrapper>
      ))}
    </Container>
  );
};
