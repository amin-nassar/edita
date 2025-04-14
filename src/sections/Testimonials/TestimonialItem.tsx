import type { Testimonial } from "../../types";

interface TestimonialItemProps {
  item: Testimonial;
  className: string;
}

const TestimonialItem = ({ className, item }: TestimonialItemProps) => {
  return (
    <div
      className={`relative px-14 pt-11 pb-14 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 after:max-md:right-4 ${className}`}
    >
      <blockquote className="text-h6 mb-8 text-p4">{item.comment}</blockquote>
      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-[18px] font-semibold leading-[32px] mb-0.5 text-p1">
            {item.name}
          </h4>
          <p className="text-[12px] font-semibold leading-[18px] tracking-[0.03em] uppercase text-s3">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
