"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import {
  CardImage,
  CardOverlay,
  MemberName,
  MemberRole,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  SocialIcon,
  SocialLinks,
  TeamCard,
  TeamGrid,
  TeamSection,
} from "./Team.styled";

const teamMembers = [
  {
    id: 1,
    name: "James Anderson",
    role: "Master Barber",
    image: "/team/member1.png",
    socials: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Style Specialist",
    image: "/team/member2.png",
    socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Robert Cole",
    role: "Senior Barber",
    image: "/team/member3.png",
    socials: {
      instagram: "#",
      linkedin: "#",
    },
  },
];

export const Team = () => {
  return (
    <TeamSection>
      <SectionHeader>
        <SectionTitle>Meet Our Experts</SectionTitle>
        <SectionSubtitle>
          Our team of skilled professionals is dedicated to providing you with
          the best grooming experience.
        </SectionSubtitle>
      </SectionHeader>

      <TeamGrid>
        {teamMembers.map((member) => (
          <TeamCard key={member.id}>
            <CardImage src={member.image} alt={member.name} />
            <CardOverlay>
              <MemberName as="h3">{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>

              <SocialLinks>
                {member.socials.instagram && (
                  <SocialIcon
                    href={member.socials.instagram}
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </SocialIcon>
                )}
                {member.socials.twitter && (
                  <SocialIcon
                    href={member.socials.twitter}
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </SocialIcon>
                )}
                {member.socials.facebook && (
                  <SocialIcon
                    href={member.socials.facebook}
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </SocialIcon>
                )}
                {member.socials.linkedin && (
                  <SocialIcon
                    href={member.socials.linkedin}
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </SocialIcon>
                )}
              </SocialLinks>
            </CardOverlay>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamSection>
  );
};
