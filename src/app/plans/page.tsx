import { Metadata } from "next";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { plans } from "@/content/plans";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlanCard } from "@/components/plans/PlanCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Coaching Plans",
  description: "Explore personal training and online coaching plans. Transparent non-transactional pricing with personalized progression.",
  alternates: {
    canonical: "/plans",
  },
  openGraph: {
    title: "Coaching Plans | Siddharth Fit",
    description: "Explore personal training and online coaching tracks tailored to your schedule and athletic baseline.",
    url: `${siteConfig.url}/plans`,
  },
};

export default function PlansPage() {
  const faqs = [
    {
      q: "How does payment work if not on the website?",
      a: "All financial transactions and billing arrangements occur after your initial discovery call with Siddharth. Once you mutually agree on goals and scheduling, Siddharth will issue an official electronic invoice and onboarding documentation.",
    },
    {
      q: "What if I travel frequently or don't have gym equipment?",
      a: "The Online Coaching and Yearly Transformation tracks are explicitly designed around your equipment reality. Workouts are adapted dynamically whether you are in a commercial gym, hotel facility, or using resistance bands in your living room.",
    },
    {
      q: "Can I switch plans later?",
      a: "Yes. Programs are reviewed periodically. Many clients begin with 1-on-1 In-Person coaching to master compound lift mechanics, then graduate to remote Online Coaching for long-term consistency.",
    },
    {
      q: "Is there a minimum commitment period?",
      a: "Because physiological adaptation, tendon remodeling, and motor learning take time, a minimum 8 to 12-week consistency block is strongly recommended for measurable body recomposition.",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Coaching Programs"
          title="Coaching Plans &amp; Pathways"
          description="Transparent, non-transactional starting points. Final agreements are calibrated according to your movement evaluation, calendar constraints, and support intensity."
        />

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Custom Coaching Highlight */}
        <div className="clay-card p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-card via-card to-secondary/10 border-2 border-primary/20 mb-20">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-primary block mb-2">
              Bespoke Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
              Need a completely personalized schedule or hybrid protocol?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              Siddharth regularly designs custom hybrid protocols combining monthly in-person biomechanical audits with weekly asynchronous digital oversight for founders, athletes, and traveling professionals.
            </p>
            <Button asChild size="lg" className="rounded-2xl">
              <Link href="/contact?plan=Custom%20Coaching">
                Discuss a Custom Arrangement &rarr;
              </Link>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Clear answers regarding onboarding, payments, and program structure."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-bold text-base text-foreground mb-2 flex items-start gap-2">
                  <HelpCircle className="size-5 text-primary shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
