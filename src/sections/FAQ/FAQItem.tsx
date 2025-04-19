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
          <div className="text-p3 mb-1.5 text-[12px] leading-[18px] font-semibold tracking-[0.03em] max-lg:hidden">
            {order < 10 ? "0" : ""}
            {order}
          </div>
          <div
            className={`text-h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center ${open ? "max-lg:text-p1" : ""}`}
          >
            {item.question}
          </div>
        </div>
        <div
          className={`faq-icon border-s2 shadow-400 group-hover:border-s4 relative flex size-12 items-center justify-center rounded-full border-2 transition-all duration-500 ${
            open ? "before:bg-p1 after:bg-p1 after:rotate-0" : ""
          }`}
        >
          <div className="g4 shadow-300 size-11/12 rounded-full"></div>
        </div>
      </div>
      <SlideDown>
        {open && (
          <p className="px-7 py-3.5 text-[16px] leading-[28px] tracking-[0.02em]">
            {item.answer}
          </p>
        )}
      </SlideDown>

      <div
        className={`g4 absolute -top-6 right-0.5 -bottom-6 left-0.5 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 ${
          open ? "opacity-100" : ""
        }`}
      >
        <div className="bg-p1 absolute top-0 left-8 h-0.5 w-40" />
      </div>
    </div>
  );
};

export default FAQItem;
