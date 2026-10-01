import { Quote, CheckCircle, Calendar, TrendingUp } from "lucide-react";
import { Testimonial } from "@/types/content";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between p-6 sm:p-8">
      <div className="flex flex-col gap-4">
        {/* Quote Header */}
        <div className="flex items-center justify-between">
          <div className="size-10 rounded-2xl bg-secondary/15 text-primary flex items-center justify-center">
            <Quote className="size-5" aria-hidden="true" />
          </div>
          {testimonial.isVerified && (
            <Badge variant="secondary" className="gap-1.5 text-[11px]">
              <CheckCircle className="size-3 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Client</span>
            </Badge>
          )}
        </div>

        {/* Quote body */}
        <blockquote className="text-sm sm:text-base text-foreground/90 italic leading-relaxed pt-1">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Specific achievement outcome metric */}
        {testimonial.achievementMetric && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <TrendingUp className="size-3.5 shrink-0" />
            <span>{testimonial.achievementMetric}</span>
          </div>
        )}
      </div>

      {/* Client Identity & Date */}
      <div className="pt-6 border-t border-border/60 flex items-center justify-between mt-6">
        <div>
          <div className="font-bold text-foreground text-sm">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
          <Calendar className="size-3" />
          <span>{testimonial.date}</span>
        </div>
      </div>
    </Card>
  );
}
