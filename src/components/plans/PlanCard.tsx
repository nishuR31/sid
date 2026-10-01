import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Plan } from "@/types/content";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { GlassBadge } from "@/components/ui/glass/GlassBadge";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  plan: Plan;
  featured?: boolean;
}

export function PlanCard({ plan, featured = false }: PlanCardProps) {
  const isRecommended = plan.recommended || featured;

  return (
    <div
      className={cn(
        "rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative h-full",
        isRecommended
          ? "liquid-glass-strong border-sage/50 dark:border-primary/50 shadow-2xl scale-[1.01]"
          : "liquid-glass hover:-translate-y-1 hover:border-primary/30"
      )}
    >
      {isRecommended && (
        <div className="absolute -top-3 right-4 z-20">
          <GlassBadge variant="primary" size="sm">
            <Sparkles className="size-3 fill-current text-primary dark:text-sage" />
            <span>Popular Choice</span>
          </GlassBadge>
        </div>
      )}

      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary dark:text-sage border border-primary/20">
            {plan.period === "one-time" ? "Audit" : "Track"}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-heading">
          {plan.name}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1.5 min-h-[36px]">
          {plan.description}
        </p>

        {/* Large Price, Small Period (Section 37) */}
        <div className="my-4 py-3 border-y border-border-glass/60 flex items-baseline gap-1.5">
          <span className="text-3xl sm:text-4xl font-black text-foreground font-heading">
            {plan.startingPrice}
          </span>
          <span className="text-xs font-semibold text-muted-foreground">
            / {plan.period}
          </span>
        </div>

        {/* Features: 3 to 6 items */}
        <div className="space-y-2.5 my-4" aria-label={`Highlights of ${plan.name}`}>
          {plan.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
              <div className="size-4 rounded-full bg-primary/10 text-primary dark:text-sage flex items-center justify-center shrink-0 mt-0.5">
                <Check className="size-3 stroke-[2.5]" aria-hidden="true" />
              </div>
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border-glass/60 flex flex-col gap-2 mt-auto">
        {/* Section 37 & 91 CTA: Discuss Plan */}
        <GlassButton
          asChild
          variant={isRecommended ? "primary" : "secondary"}
          size="default"
          className="w-full text-xs sm:text-sm font-bold"
        >
          <Link href={`/contact?plan=${encodeURIComponent(plan.name)}`}>
            <span>Discuss Plan</span>
            <ArrowRight className="size-3.5 ml-1" />
          </Link>
        </GlassButton>

        <Link
          href={`/plans/${plan.slug}`}
          className="text-[11px] text-muted-foreground hover:text-foreground text-center font-medium transition-colors py-1 hover:underline"
        >
          Inspect Full Curriculum &rarr;
        </Link>
      </div>
    </div>
  );
}
