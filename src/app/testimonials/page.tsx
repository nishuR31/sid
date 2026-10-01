import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Client Stories & Reviews",
  description: "Real feedback and transformation stories from verified clients coached by Siddharth.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Client Stories & Reviews | Siddharth Fit",
    description: "Read verified feedback and real transformation stories from athletes and lifestyle clients.",
    url: `${siteConfig.url}/testimonials`,
  },
};

export default function TestimonialsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Genuine Feedback"
          title="Verified Client Stories"
          description="Every testimonial published here represents a real human with whom Siddharth has completed a sustained coaching engagement. We do not manufacture fake reviews."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Integrity Notice */}
        <div className="clay-card p-8 sm:p-12 rounded-3xl bg-secondary/10 border border-secondary/25 text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
          <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <ShieldCheck className="size-6" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Review Authenticity Policy</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Client privacy is paramount. High-profile executives or individuals requesting privacy are listed under &ldquo;Verified Client&rdquo;. No quotes or photos are published without explicit client permission.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" className="rounded-2xl">
              <Link href="/contact">Inquire About Working With Siddharth &rarr;</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
