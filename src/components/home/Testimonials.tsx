import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { blob } from "@/lib/blob";

const background = [
  blob({ color: "blue", x: -594, y: 718, radius: 568.5, opacity: 0.24 }),
  blob({ color: "lime", x: 11, y: 198, radius: 336, opacity: 0.6 }),
  blob({ color: "lime", x: 691, y: 328, radius: 568.5, opacity: 0.4 }),
].join(", ");

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-surface" style={{ backgroundImage: background }}>
      <div className="container-page flex flex-col gap-12 py-20 lg:gap-[72px] lg:pt-[74px] lg:pb-[57px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-heading-m lg:w-[577px] lg:shrink-0">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-body-l text-body lg:w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-[repeat(3,374px)] lg:justify-between lg:gap-0">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
