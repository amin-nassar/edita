import { Element } from "react-scroll";
import { details, features } from "@/constants";
import Details from "./Details";
import Feature from "./Feature";
import Container from "@/components/Container";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <Container>
          <div className="relative flex flex-nowrap md:flex-wrap border-2 border-s2 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map((feature) => (
              <Feature key={feature.id} feature={feature} />
            ))}

            <Details details={details} />
          </div>
        </Container>
      </Element>
    </section>
  );
};

export default Features;
