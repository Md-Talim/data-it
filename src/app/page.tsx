import { FeaturesSection } from "./features-section";
import { FooterSection } from "./footer-section";
import { HeroSection } from "./hero-section";
import { TestSection } from "./test-section";

const Home = () => {
  return (
    <div className="space-y-40 pb-16 md:space-y-52 md:pb-56">
      <HeroSection />
      <FeaturesSection />
      <TestSection />
      <FooterSection />
    </div>
  );
};

export default Home;
