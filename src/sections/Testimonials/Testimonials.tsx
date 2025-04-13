import Container from "../../components/Container";
import { testimonials } from "../../constants";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <Container className="block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <p className="text-[12px] font-bold leading-[16px] tracking-[0.3em] uppercase text-p3 mb-5 max-md:mb-2.5">
            Words of Love
          </p>
          <h3 className="h3 max-md:h5 text-p4">Our users' feedback</h3>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                className="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                className="last:after:hidden after:right-auto after:left-0 after:max-md:left-4 md:px-12 "
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
