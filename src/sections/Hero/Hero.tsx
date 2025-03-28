const Hero = () => {
  return (
    <section className="relative border-2 border-amber-400 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="mb-5 uppercase text-p3 text-[12px] font-bold leading-[16px] tracking-[0.3em]">
            Video Editing
          </div>
          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Amazingly Simple
          </h1>

          <p className="max-w-440 mb-14 text-[22px] leading-[36px] max-md:mb-10">
            We designed EDITA AI Video Editor to be an easy to use, quick to
            learn, and surprisingly powerful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
