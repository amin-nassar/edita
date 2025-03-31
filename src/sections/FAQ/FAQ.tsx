import { faqs } from "../../constants";
import FAQItem from "./FAQItem";

const FAQ = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 relative z-2 py-28">
        <div>
          <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
            Curiosity didn't kill the cat, it gave it answers.
          </h3>
          <p className="text-[22px] leading-[36px] max-lg:max-w-sm">
            You've got questions, we've got answers.
          </p>
        </div>

        <div className="faq-line_after w-0.5 h-full absolute left-[50%] top-0 -z-1 bg-s2" />
      </div>
      <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 flex gap-10 max-lg:block">
          <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
            <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
          </div>

          <div className="relative flex-1 pt-24">
            {faqs.map((item, index) => (
              <FAQItem key={item.id} item={item} order={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
