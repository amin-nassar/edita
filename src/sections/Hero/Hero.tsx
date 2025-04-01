import Button from "../../components/Button";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="mb-5 uppercase text-p3 text-[12px] font-bold leading-[16px] tracking-[0.3em]">
              Effortless Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Incredibly Intuitive
            </h1>

            <p className="max-w-440 mb-14 text-[22px] leading-[36px] max-md:mb-10">
              XORA AI Video Editor makes video editing simple, fast, and
              surprisingly powerful—no experience needed.
            </p>

            <Button icon="/images/zap.svg">Get Started</Button>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none max-lg:-top-40 max-lg:left-[calc(50%-280px)] max-lg:w-[1160px] max-md:bottom-[-590px] max-md:left-[calc(50%-390px)] max-md:top-auto">
            <img
              src="/images/hero.png"
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
