import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Shield, Clock, Calendar, MessageCircle } from "lucide-react";
import { Plan } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PlanDetailProps {
  plan: Plan;
}

export function PlanDetail({ plan }: PlanDetailProps) {
  return (
    <article className="max-w-4xl mx-auto flex flex-col gap-10">
      {/* Back button */}
      <div>
        <Link
          href="/plans"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group py-1"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Coaching Plans</span>
        </Link>
      </div>

      {/* Plan Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Badge variant={plan.recommended ? "default" : "secondary"}>
            {plan.recommended ? "Featured Program" : "Coaching Track"}
          </Badge>
          {plan.includesNutrition && (
            <Badge variant="outline" className="border-accent/40 text-accent">
              Includes Nutrition Periodization
            </Badge>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          {plan.name}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {plan.description}
        </p>
      </div>

      {/* Pricing & Intake Card */}
      <Card className="border-2 border-primary/30 bg-card p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/80">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground block">
              Estimated Investment
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-4xl sm:text-5xl font-black text-foreground">
                {plan.startingPrice}
              </span>
              <span className="text-base text-muted-foreground font-medium">
                / {plan.period}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 max-w-md">
              Pricing is customized based on individual assessment, training cadence, and level of support needed. No upfront payment happens on this site.
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <Button asChild size="lg" className="rounded-2xl text-base px-8 font-semibold shadow-md">
              <Link href={`/contact?plan=${encodeURIComponent(plan.name)}`}>
                Discuss This Plan
              </Link>
            </Button>
            <span className="text-[11px] text-center text-muted-foreground">
              Direct intake conversation with Siddharth
            </span>
          </div>
        </div>

        {/* Value pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-sm text-foreground">
          <div className="flex items-center gap-3">
            <Shield className="size-5 text-primary shrink-0" />
            <span>Form &amp; safety priority</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="size-5 text-accent shrink-0" />
            <span>24h response SLA</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="size-5 text-secondary shrink-0" />
            <span>Flexible scheduling</span>
          </div>
        </div>
      </Card>

      {/* Deep Breakdown Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Included Deliverables */}
        <Card className="p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <Sparkles className="size-5 text-primary" />
            <span>What&apos;s Included</span>
          </h2>
          <ul className="space-y-3 text-sm text-foreground/90">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-primary/15 text-primary shrink-0 mt-0.5">
                  <Check className="size-3.5" />
                </div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Suitable For & Delivery Format */}
        <div className="flex flex-col gap-6">
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-3 text-foreground">Who This Is For</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {plan.suitableFor}
            </p>
          </Card>

          {plan.deliveryMethod && (
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                <MessageCircle className="size-5 text-accent" />
                <span>Delivery &amp; Communication</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {plan.deliveryMethod}
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Next Step Banner */}
      <div className="p-8 rounded-3xl bg-secondary/15 border border-secondary/30 text-center flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold text-foreground">Ready to explore how this plan fits you?</h3>
        <p className="text-muted-foreground text-sm max-w-lg">
          No automated billing or forced commitment. Send Siddharth a message with your current routine, and he will reply with candid advice.
        </p>
        <Button asChild size="lg" className="rounded-2xl px-8">
          <Link href={`/contact?plan=${encodeURIComponent(plan.name)}`}>
            Start Conversation &rarr;
          </Link>
        </Button>
      </div>
    </article>
  );
}
