import { useState } from "react";
import SlideDown from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import type { FAQItem } from "@/types";

interface FAQITemProps {
  item: FAQItem;
  order: number;
}

const FAQItem = ({ order, item }: FAQITemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex-1">
          <div className="text-[12px] font-semibold leading-[18px] tracking-[0.03em] mb-1.5 text-p3 max-lg:hidden">
            {order < 10 ? "0" : ""}
            {order}
          </div>
          <div
            className={`h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center
            ${open ? "max-lg:text-p1" : ""}`}
          >
            {item.question}
          </div>
        </div>
        <div
          className={`faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4 ${
            open ? "before:bg-p1 after:bg-p1 after:rotate-0" : ""
          }`}
        >
          <div className="g4 size-11/12 rounded-full shadow-300"></div>
        </div>
      </div>
      <SlideDown>
        {open && (
          <p className="text-[16px] leading-[28px] tracking-[0.02em] px-7 py-3.5">
            {item.answer}
          </p>
        )}
      </SlideDown>

      <div
        className={`g4 -bottom-6 -top-6 left-0.5 right-0.5 -z-1 opacity-0 transition-opacity duration-500 absolute rounded-3xl ${
          open ? "opacity-100" : ""
        }`}
      >
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};

export default FAQItem;
