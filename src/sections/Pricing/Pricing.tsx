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
          <div className="pricing-head_before border-s2 bg-s1/50 relative mx-auto max-w-960 border-r border-l pt-28 pb-40 max-xl:max-w-4xl max-lg:border-none max-md:pt-16 max-md:pb-32">
            <h3 className="text-h3 max-lg:text-h4 max-md:text-h5 text-p4 relative z-3 mx-auto mb-14 max-w-lg text-center max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="border-s4/25 bg-s1/50 relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <PricingButton selected={isMonthlyPlan} onClick={togglePlan}>
                Monthly
              </PricingButton>
              <PricingButton selected={!isMonthlyPlan} onClick={togglePlan}>
                Annually
              </PricingButton>

              <div
                className={`g4 rounded-14 pricing-head_btn_before shadow-400 absolute top-2 left-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden transition-transform duration-500 before:h-100 ${
                  isMonthlyPlan ? "" : "translate-x-full"
                }`}
              />
            </div>

            <PricingBackground />
          </div>

          <div className="scroll-hide relative z-2 -mt-12 flex items-start justify-start max-xl:overflow-auto max-xl:pt-6 max-lg:gap-3 max-md:gap-5">
            {plans.map((plan, index) => {
              const { priceMonthly, priceYearly } = plan;
              const isPrimary = index === 1;

              return (
                <div
                  key={plan.id}
                  className="pricing-plan_first pricing-plan_last pricing-plan_even pricing-plan_odd relative grow border-2 p-7 max-xl:min-w-72 max-lg:rounded-3xl"
                >
                  {isPrimary && (
                    <div className="g4 absolute top-0 right-0 left-0 z-1 h-330 rounded-t-3xl" />
                  )}

                  <div
                    className={`absolute -top-6 right-0 left-0 z-2 flex items-center justify-center ${
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
                      className={`rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 text-[12px] leading-[16px] font-bold tracking-[0.3em] uppercase ${
                        isPrimary ? "border-p3 text-p3" : "border-p1 text-p1"
                      }`}
                    >
                      {plan.title}
                    </p>

                    <div className="relative z-2 flex items-center justify-center">
                      <div
                        className={`font-inter flex items-start text-[72px] leading-[84px] font-bold ${
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
                      <div className="relative top-3 ml-1 text-[14px] leading-[18px] font-semibold tracking-[0.03em] uppercase">
                        / mo
                      </div>
                    </div>
                  </div>
                  <div
                    className={`border-b-s2 text-p4 relative z-2 mb-10 w-full pb-9 text-center text-[22px] leading-[36px] ${
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
                    <p className="text-p3 mt-9 text-center text-[12px] leading-[18px] font-semibold tracking-[0.03em] before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
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
