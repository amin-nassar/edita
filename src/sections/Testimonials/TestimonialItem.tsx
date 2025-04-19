import type { Testimonial } from "../../types";

interface TestimonialItemProps {
  item: Testimonial;
  className: string;
}

const TestimonialItem = ({ className, item }: TestimonialItemProps) => {
  return (
    <div
      className={`after:bg-s2 relative px-14 pt-11 pb-14 after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-screen after:content-[''] max-md:px-0 max-md:after:right-4 ${className}`}
    >
      <blockquote className="text-h6 text-p4 mb-8">{item.comment}</blockquote>
      <div className="flex items-center max-xl:-mr-8">
        <div className="rounded-half border-s2 mr-4 size-20 shrink-0 border-2 p-1.5">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-p1 mb-0.5 text-[18px] leading-[32px] font-semibold">
            {item.name}
          </h4>
          <p className="text-s3 text-[12px] leading-[18px] font-semibold tracking-[0.03em] uppercase">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
