import { useState } from "react";
import PricingButton from "./PricingButton";
import PricingBackground from "./PricingBackground";
import { plans } from "@/constants";
import Button from "@/components/Button";
import CountUp from "react-countup";
import { Element } from "react-scroll";
import Container from "@/components/Container";

const Pricing = () => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const togglePlan = () => setIsMonthlyPlan((prev) => !prev);

  return (
    <section>
      <Element name="pricing">
        <Container>
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

          <div className="scroll-hide relative z-2 -mt-12 flex items-start justify-start max-lg:gap-3 max-md:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => {
              const { priceMonthly, priceYearly } = plan;
              const isPrimary = index === 1;

              return (
                <div
                  key={plan.id}
                  className="pricing-plan_first pricing-plan_last pricing-plan_even pricing-plan_odd relative border-2 p-7 max-xl:min-w-72 max-lg:rounded-3xl flex-grow"
                >
                  {isPrimary && (
                    <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-t-3xl" />
                  )}

                  <div
                    className={`absolute left-0 right-0 z-2 flex items-center justify-center -top-6 ${
                      isPrimary ? "" : "xl:-top-11"
                    }`}
                  >
                    <img
                      src={plan.logo}
                      alt={plan.title}
                      className={`object-contain drop-shadow-2xl hue-rotate-1 ${
                        isPrimary ? "size-[120px]" : "size-[88px]"
                      }`}
                    />
                  </div>

                  <div
                    className={`relative flex flex-col items-center ${
                      isPrimary ? "pt-24" : "pt-12"
                    }`}
                  >
                    <p
                      className={`text-[12px] font-bold leading-[16px] tracking-[0.3em] rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase ${
                        isPrimary ? "border-p3 text-p3" : "border-p1 text-p1"
                      }`}
                    >
                      {plan.title}
                    </p>

                    <div className="relative z-2 flex items-center justify-center">
                      <div
                        className={`font-inter text-[72px] font-bold leading-[84px] flex items-start ${
                          isPrimary ? "text-p3" : "text-p4"
                        }`}
                      >
                        <CountUp
                          start={isMonthlyPlan ? priceYearly : priceMonthly}
                          end={isMonthlyPlan ? priceMonthly : priceYearly}
                          duration={0.4}
                          useEasing
                          prefix="$"
                        />
                      </div>
                      <div className="text-[14px] font-semibold leading-[18px] tracking-[0.03em] relative top-3 ml-1 uppercase">
                        / mo
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-[22px] leading-[36px] relative z-2 mb-10 w-full border-b-s2 pb-9 text-p4 text-center ${
                      isPrimary ? "border-b" : ""
                    }`}
                  >
                    {plan.caption}
                  </div>
                  <ul className="mx-auto space-y-4 xl:px-7">
                    {plan.features.map((feature) => {
                      return (
                        <li
                          key={feature}
                          className="relative flex items-center gap-5"
                        >
                          <img
                            src="/edita/images/check.png"
                            alt="check"
                            className="size-10 object-contain"
                          />
                          <p className="flex-1">{feature}</p>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-10 flex w-full justify-center">
                    <Button icon={plan.icon}>Get Started</Button>
                  </div>

                  {isPrimary && (
                    <p className="mt-9 text-center text-[12px] font-semibold leading-[18px] tracking-[0.03em] text-p3 before:content-['-'] before:mx-2.5 after:content-['-'] after:mx-2.5">
                      limited time offer
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Element>
    </section>
  );
};

export default Pricing;
