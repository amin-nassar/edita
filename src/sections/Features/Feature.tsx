import Button from "@/components/Button";
import type { Feature } from "@/types";

interface FeatureProps {
  feature: Feature;
}

const Feature = ({ feature }: FeatureProps) => {
  return (
    <div className="max-md:g7 max-md:border-s3 relative z-2 flex-50 px-5 pb-5 max-md:flex-320 max-md:rounded-3xl max-md:border-2 md:px-10 md:pb-10">
      <div className="flex w-full items-start justify-start">
        <div className="mb-12 -ml-3 flex flex-col items-center justify-center">
          <div className="bg-s3 h-16 w-0.5" />
          <img
            src={feature.icon}
            alt={feature.title}
            className="size-28 object-contain"
          />
        </div>
      </div>

      <p className="text-p3 mb-5 text-[12px] leading-[16px] font-bold tracking-[0.3em] uppercase max-md:mb-6">
        {feature.caption}
      </p>
      <h2 className="text-h3 text-p4 max-md:text-h5 mb-7 max-w-400 max-md:mb-6">
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
