import Button from "@/components/Button";
import type { Feature } from "@/types";

interface FeatureProps {
  feature: Feature;
}

const Feature = ({ feature }: FeatureProps) => {
  return (
    <div className="relative z-2 md:px-10 px-5 pb-5 md:pb-10 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320">
      <div className="w-full flex justify-start items-start">
        <div className="-ml-3 mb-12 flex flex-col items-center justify-center">
          <div className="w-0.5 h-16 bg-s3" />
          <img
            src={feature.icon}
            alt={feature.title}
            className="size-28 object-contain"
          />
        </div>
      </div>

      <p className="text-[12px] font-bold leading-[16px] tracking-[0.3em] mb-5 uppercase text-p3 max-md:mb-6">
        {feature.caption}
      </p>
      <h2 className="max-w-400 mb-7 text-h3 text-p4 max-md:mb-6 max-md:text-h5">
        {feature.title}
      </h2>
      <p className="mb-11 text-[22px] leading-[36px] max-md:mb-8 max-md:text-[16px] max-md:leading-[28px] max-md:tracking-[0.02em]">
        {feature.text}
      </p>

      <Button icon={feature.button.icon}>{feature.button.text}</Button>
    </div>
  );
};

export default Feature;
