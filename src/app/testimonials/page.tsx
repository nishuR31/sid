import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { GlassButton } from "@/components/ui/glass/GlassButton";

export const metadata: Metadata = {
  title: "Client Outcomes & Reviews",
  description:
    "Real feedback and transformation stories from verified clients coached by Siddharth.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Client Outcomes & Reviews | Siddharth Fit",
    description:
      "Read verified feedback and real transformation stories from athletes and lifestyle clients.",
    url: `${siteConfig.url}/testimonials`,
  },
};

export default function TestimonialsPage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Section 33: Testimonials Header */}
        <SectionHeading
          eyebrow="Genuine Feedback"
          title="Verified Client Stories"
          description="Every testimonial published here represents a real human with whom Siddharth has completed a sustained coaching engagement. We do not manufacture fake reviews."
        />

        {/* Testimonials Grid (Section 33-34) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              featured={idx === 0}
            />
          ))}
        </div>

        {/* Integrity Notice */}
        <div className="liquid-glass-strong p-8 sm:p-12 rounded-3xl border border-white/60 dark:border-white/15 text-center max-w-2xl mx-auto flex flex-col items-center gap-4 shadow-xl">
          <div className="size-12 rounded-full bg-primary/10 text-primary dark:text-sage flex items-center justify-center border border-primary/20">
            <ShieldCheck className="size-6" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-foreground">
            Review Authenticity Policy
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Client privacy is paramount. High-profile executives or individuals requesting anonymity are listed under &ldquo;Verified Client&rdquo;. No quotes or metrics are published without explicit client consent.
          </p>
          <div className="pt-2">
            <GlassButton asChild variant="primary" size="lg">
              <Link href="/contact">
                <span>Inquire About Working With Siddharth</span>
                <ArrowRight className="size-4 ml-1" />
              </Link>
            </GlassButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
