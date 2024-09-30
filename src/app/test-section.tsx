import { Button } from "@/components/button";
import { Container } from "@/components/container";
import Image from "next/image";

export const TestSection = () => (
  <Container className="p-4 md:px-10">
    <div className="flex flex-col md:h-[526px] md:flex-row lg:h-[648px]">
      <Image
        src="/image-founder.webp"
        alt="founder photo"
        width={477}
        height={477}
        className="mx-auto -mb-[60px] size-[280px] md:-mr-[105px] md:mt-10 lg:-mr-[95px] lg:size-[477px]"
      />

      <div className="space-y-4 self-end bg-russianViolet p-8 text-center md:space-y-6 md:px-12 md:text-left lg:space-y-8 lg:p-16 lg:py-14">
        <h2 className="heading-medium text-white">Be the first to test it.</h2>

        <p className="body text-white">
          Hi, I&apos;m Louis Graham, the founder of the company. Book a demo
          call with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>

        <Button>Apply for access</Button>
      </div>
    </div>
  </Container>
);
