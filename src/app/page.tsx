import { FeaturesSection } from "./features-section";
import { HeroSection } from "./hero-section";

const Home = () => {
  return (
    <div className="space-y-40 md:space-y-52">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
