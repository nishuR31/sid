import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Plan } from "@/types/content";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/effects/TiltCard";

interface PlanCardProps {
  plan: Plan;
  featured?: boolean;
}

export function PlanCard({ plan, featured = false }: PlanCardProps) {
  const isRecommended = plan.recommended || featured;

  return (
    <TiltCard className="h-full pt-3">
      <Card
        className={`h-full flex flex-col justify-between relative transition-all duration-300 ${
          isRecommended
            ? "border-2 border-primary/50 shadow-xl dark:border-primary/60 bg-gradient-to-b from-card via-card to-primary/5"
            : "border border-border/80"
        }`}
      >
        {isRecommended && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide uppercase clay-pill flex items-center gap-1.5 z-20">
            <Sparkles className="size-3.5" />
            <span>Most Popular</span>
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between">
          <CardHeader className="pt-8">
            <div className="flex items-start justify-between gap-2 mb-2">
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
            </div>
            <CardDescription className="text-sm min-h-[40px]">
              {plan.description}
            </CardDescription>

            {/* Non-transactional starting price display */}
            <div className="mt-4 pt-4 border-t border-border/60">
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground block">
                Starting from
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                  {plan.startingPrice}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  / {plan.period}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                *Final rates customized following initial movement consultation.
              </p>
            </div>
          </CardHeader>

          <CardContent className="pt-2 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Included Curriculum
              </div>
              <ul className="space-y-2.5 text-sm" aria-label={`Features included in ${plan.name}`}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-foreground/90">
                    <div className="p-0.5 rounded-full bg-primary/15 text-primary shrink-0 mt-0.5">
                      <Check className="size-3.5" aria-hidden="true" />
                    </div>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {plan.suitableFor && (
              <div className="mt-6 p-3.5 rounded-2xl bg-muted/40 border border-border/50 text-xs text-muted-foreground clay-input">
                <strong className="text-foreground font-semibold block mb-0.5">Ideal For:</strong>
                {plan.suitableFor}
              </div>
            )}
          </CardContent>
        </div>

        <CardFooter className="flex flex-col gap-2.5 pt-4">
          <Button
            asChild
            variant={isRecommended ? "default" : "outline"}
            className="w-full rounded-2xl text-sm font-semibold h-11"
          >
            <Link href={`/contact?plan=${encodeURIComponent(plan.name)}`}>
              Discuss This Plan
            </Link>
          </Button>

          <Link
            href={`/plans/${plan.slug}`}
            className="text-xs text-muted-foreground hover:text-foreground text-center font-medium transition-colors flex items-center justify-center gap-1 py-1"
          >
            <span>Learn full breakdown</span>
            <ArrowRight className="size-3" />
          </Link>
        </CardFooter>
      </Card>
    </TiltCard>
  );
}
