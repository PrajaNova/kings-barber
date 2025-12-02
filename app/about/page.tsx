import BrandStory from "##/components/about/BrandStory";
import Milestones from "##/components/about/Milestones";
import TeamShowcase from "##/components/about/TeamShowcase";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <BrandStory />
      {/* <Milestones /> */}
      <TeamShowcase />
    </main>
  );
};

export default AboutPage;
