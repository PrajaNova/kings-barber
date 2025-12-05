"use client";

import { Badge, Button, Flex, Text } from "@radix-ui/themes";
import { ArrowRight, Award } from "lucide-react";
import {
  ButtonGroup,
  HeroContent,
  HeroHeading,
  HeroSection,
  MainHeading,
  MouseIcon,
  ScrollDot,
  ScrollIndicator,
} from "./Hero.styled";
import { HeroBackground } from "./HeroBackground";
import { BusinessInfo } from "./HeroData";

export const Hero = () => {
  return (
    <HeroSection>
      <HeroBackground />
      <HeroContent>
        <Flex
          direction="column"
          align="start"
          gap="4"
          style={{ width: "fit-content" }}
        >
          <Badge
            variant="surface"
            color="amber"
            size="3"
            style={{
              background: "rgba(255, 179, 0, 0.1)",
              color: "white",
              border: "1px solid rgba(255, 179, 0, 0.3)",
              backdropFilter: "blur(4px)",
              padding: "6px 16px",
            }}
          >
            <Award size={14} style={{ marginRight: "6px" }} />
            Certified by {BusinessInfo.certification}
          </Badge>

          <Text
            size="4"
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.05em",
              textAlign: "left",
            }}
          >
            Premium barbering services since {BusinessInfo.established}.
          </Text>

          <MainHeading as="h1" style={{ margin: "16px 0", textAlign: "left" }}>
            KINGS BARBER
          </MainHeading>
        </Flex>

        <HeroHeading as="h2">
          {BusinessInfo.tagline.split(",")[0]},
          <span>{BusinessInfo.tagline.split(",")[1]}</span>
        </HeroHeading>

        <ButtonGroup>
          <Button
            size="4"
            variant="outline"
            color="amber"
            style={{
              cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              padding: "24px 32px",
            }}
          >
            Shop Collection
            <ArrowRight width={20} height={20} />
          </Button>
          <Button
            size="4"
            variant="outline"
            color="amber"
            style={{
              cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              padding: "24px 32px",
            }}
          >
            View Services
            <ArrowRight width={20} height={20} />
          </Button>
        </ButtonGroup>
      </HeroContent>

      <ScrollIndicator>
        <span>Scroll to explore</span>
        <MouseIcon>
          <ScrollDot />
        </MouseIcon>
      </ScrollIndicator>
    </HeroSection>
  );
};
