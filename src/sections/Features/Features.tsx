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
          <div className="border-s2 rounded-7xl feature-after md:g7 relative flex flex-nowrap border-2 max-md:flex-col max-md:gap-3 max-md:rounded-none max-md:border-none md:flex-wrap md:overflow-hidden">
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
