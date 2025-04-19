import Button from "@/components/Button";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="text-p3 mb-5 text-[12px] leading-[16px] font-bold tracking-[0.3em] uppercase">
              Effortless Video Editing
            </div>
            <h1 className="text-h1 text-p4 max-lg:text-h2 mb-6 uppercase max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Incredibly Intuitive
            </h1>

            <p className="mb-14 max-w-440 text-[22px] leading-[36px] max-md:mb-10">
              EDITA AI Video Editor makes video editing simple, fast, and
              surprisingly powerful—no experience needed.
            </p>

            <Button icon="/edita/images/zap.svg">Get Started</Button>
          </div>
          <div className="pointer-events-none absolute -top-32 left-[calc(50%-340px)] w-[1230px] max-lg:-top-40 max-lg:left-[calc(50%-280px)] max-lg:w-[1160px] max-md:top-auto max-md:bottom-[-590px] max-md:left-[calc(50%-390px)]">
            <img
              src="/edita/images/hero.png"
              alt="Hero"
              className="size-1230 max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
