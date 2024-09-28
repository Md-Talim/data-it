import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Topbar } from "@/components/topbar";
import Image from "next/image";

export const HeroSection = () => (
  <main className="bg-russianViolet">
    <Container className="px-4 py-6 text-ghostWhite md:px-10">
      <Topbar />

      <div className="mx-auto my-16 max-w-2xl space-y-10 text-center">
        <h1 className="heading-large">Data tailored to your needs.</h1>

        <Button>Learn More</Button>
      </div>

      <Image
        src="/image-hero.webp"
        alt="mobile"
        width={767}
        height={441}
        className="mx-auto -mb-24 max-sm:w-80"
      />
    </Container>
  </main>
);
