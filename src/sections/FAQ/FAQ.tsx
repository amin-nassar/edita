import { Element } from "react-scroll";
import { faqs } from "../../constants";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const halfLength = Math.floor(faqs.length / 2);

  return (
    <section>
      <Element name="faq">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn't crash the timeline, it refined the cut
            </h3>
            <p className="text-[22px] leading-[36px] max-lg:max-w-sm">
              You ask, we deliver the answers, frame by frame
            </p>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[50%] top-0 -z-1 bg-s2" />
        </div>
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 flex gap-10 pt-24 max-lg:flex-col max-lg:gap-0">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img
                src="./images/faq-logo.svg"
                alt="logo"
                className="size-1/2"
              />
            </div>

            <div className="relative flex-1">
              {faqs.slice(0, halfLength).map((item, index) => (
                <FAQItem key={item.id} item={item} order={index + 1} />
              ))}
            </div>
            <div className="relative flex-1">
              {faqs.slice(halfLength).map((item, index) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  order={index + 1 + halfLength}
                />
              ))}
            </div>
          </div>

          <div className="absolute left-[50%] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default FAQ;
