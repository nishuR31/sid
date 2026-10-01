import * as React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassButton } from "./GlassButton";
import { GlassBadge } from "./GlassBadge";

export interface PlanFeature {
  text: string;
}

export interface GlassPricingCardProps {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
  suitableFor?: string;
  className?: string;
}

export function GlassPricingCard({
  id,
  name,
  price,
  period,
  description,
  features,
  recommended = false,
  suitableFor,
  className,
}: GlassPricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative",
        recommended
          ? "liquid-glass-strong border-sage/50 dark:border-primary/50 shadow-2xl scale-[1.02] z-10"
          : "liquid-glass hover:-translate-y-1 hover:border-primary/30",
        className
      )}
    >
      {recommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <GlassBadge variant="primary" size="md">
            <Sparkles className="size-3 text-primary dark:text-sage fill-current" />
            <span>Most Popular Choice</span>
          </GlassBadge>
        </div>
      )}

      <div>
        <div className="flex flex-col gap-1 mb-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-heading">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1">
            {description}
          </p>
        </div>

        {/* Price display: large price, small period (Section 37) */}
        <div className="flex items-baseline gap-1.5 py-4 my-2 border-y border-border/40">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-heading">
            {price}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground font-medium">
            {period}
          </span>
        </div>

        {suitableFor && (
          <div className="my-4 p-3 rounded-2xl bg-primary/5 border border-primary/10 text-xs text-muted-foreground">
            <strong className="text-foreground block font-semibold mb-0.5">Best For:</strong>
            {suitableFor}
          </div>
        )}

        {/* Features: 3 to 6 items */}
        <div className="space-y-3 my-6">
          <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground block">
            What is Included
          </span>
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
              <div className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <Check className="size-3.5 stroke-[2.5]" />
              </div>
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button: Discuss Plan (Section 37 & 91) */}
      <div className="pt-6 mt-auto">
        <GlassButton
          asChild
          variant={recommended ? "primary" : "secondary"}
          className="w-full"
        >
          <Link href={`/contact?plan=${encodeURIComponent(id)}`}>
            <span>Discuss Plan</span>
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </GlassButton>
      </div>
    </div>
  );
}

/* Section 39: Custom Plan Distinct Glass Panel */
export function CustomCoachingPanel() {
  return (
    <div className="relative rounded-3xl overflow-hidden liquid-glass-strong border-sage/40 dark:border-primary/40 p-8 sm:p-12 shadow-2xl mt-12">
      {/* Background Organic Ambient Light */}
      <div
        className="absolute -top-24 -right-24 size-80 rounded-full bg-gradient-to-br from-sage/20 via-primary/10 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl flex flex-col gap-4">
        <GlassBadge variant="sage" size="md" className="w-fit">
          Bespoke Architecture
        </GlassBadge>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground font-heading">
          Your goal is specific. <br />
          <span className="text-primary dark:text-sage">Your coaching should be too.</span>
        </h3>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Whether you are preparing for a sanctioned strength meet, recovering from an orthopedic injury, or managing an executive travel calendar with zero room for error, Siddharth crafts bespoke periodization designed specifically for your constraints.
        </p>

        <div className="pt-4">
          <GlassButton asChild variant="primary" size="lg">
            <Link href="/contact?type=custom">
              <span>Discuss Custom Coaching</span>
              <ArrowRight className="size-4 ml-1" />
            </Link>
          </GlassButton>
        </div>
      </div>
    </div>
  );
}
