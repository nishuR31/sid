import { Testimonial } from "@/types/content";
import { GlassTestimonial } from "@/components/ui/glass/GlassTestimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
}

export function TestimonialCard({ testimonial, featured }: TestimonialCardProps) {
  return <GlassTestimonial {...testimonial} featured={featured} />;
}
