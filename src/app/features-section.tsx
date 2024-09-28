import { Container } from "@/components/container";
import { features } from "@/lib/constants";

export const FeaturesSection = () => (
  <Container className="px-4 md:px-10 xl:px-0">
    <ul className="flex flex-col items-center justify-between gap-10 lg:flex-row">
      {features.map((feature) => (
        <li
          key={feature.id}
          className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-8 md:text-left lg:flex-col lg:gap-14 lg:text-center"
        >
          <div className="mx-auto w-fit rounded-full border border-englishViolet px-4 py-1.5 font-serif text-russianViolet">
            {feature.id}
          </div>

          <div className="space-y-4 lg:space-y-7">
            <h2 className="heading-small text-russianViolet">
              {feature.title}
            </h2>
            <p className="body text-englishViolet">{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </Container>
);
