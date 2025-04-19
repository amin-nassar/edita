import { Element } from "react-scroll";
import { faqs } from "@/constants";
import FAQItem from "./FAQItem";
import Container from "@/components/Container";

const FAQ = () => {
  const halfLength = Math.floor(faqs.length / 2);

  return (
    <section>
      <Element name="faq">
        <Container className="relative z-2 py-28">
          <div>
            <h3 className="text-h3 max-md:text-h5 text-p4 mb-7 max-w-640 max-lg:max-w-md">
              Curiosity didn't crash the timeline, it refined the cut
            </h3>
            <p className="text-[22px] leading-[36px] max-lg:max-w-sm">
              You ask, we deliver the answers, frame by frame
            </p>
          </div>

          <div className="faq-line_after bg-s2 absolute top-0 left-[50%] -z-1 h-full w-0.5" />
        </Container>
        <div className="faq-glow_before border-s2 bg-s1 relative z-2 border-2">
          <Container className="flex gap-10 pt-24 max-lg:flex-col max-lg:gap-0">
            <div className="rounded-half border-s2 bg-s1 absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2">
              <img
                src="/edita/images/faq-logo.svg"
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
          </Container>

          <div className="bg-s2 absolute top-0 left-[50%] -z-1 h-full w-0.5 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default FAQ;
