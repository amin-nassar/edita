import { useState } from "react";
import PricingButton from "./PricingButton";
import PricingBackground from "./PricingBackground";

const Pricing = () => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const togglePlan = () => setIsMonthlyPlan((prev) => !prev);

  return (
    <section>
      <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
        <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
          <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
            Flexible pricing for teams of all sizes
          </h3>

          <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
            <PricingButton selected={isMonthlyPlan} onClick={togglePlan}>
              Monthly
            </PricingButton>
            <PricingButton selected={!isMonthlyPlan} onClick={togglePlan}>
              Annually
            </PricingButton>

            <div
              className={`g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500 ${
                isMonthlyPlan ? "" : "translate-x-full"
              }`}
            />
          </div>

          <PricingBackground />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
