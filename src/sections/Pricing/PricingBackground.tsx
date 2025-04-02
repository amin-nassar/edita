const PricingBackground = () => {
  return (
    <div className="pointer-events-none absolute -bottom-16 left-[calc(50%-480px)] z-2 mx-auto w-960">
      <img
        src="/edita/images/bg-outlines.svg"
        alt="Outline"
        width={960}
        height={380}
        className="relative z-2"
      />
      <img
        src="/edita/images/bg-outlines-fill.png"
        alt="Outline"
        width={960}
        height={380}
        className="absolute inset-0 opacity-5 mix-blend-soft-light"
      />
    </div>
  );
};

export default PricingBackground;
