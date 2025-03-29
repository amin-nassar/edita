import { features } from "../../constants";
import Feature from "./Feature";

const Features = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
        <div className="relative flex flex-nowrap md:flex-wrap border-2 border-s2 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
          {features.map((feature) => (
            <Feature feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
