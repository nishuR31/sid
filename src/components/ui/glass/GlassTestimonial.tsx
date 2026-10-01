import * as React from "react";
import { CheckCircle2, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialProps {
  id: string;
  name: string;
  role: string;
  quote: string;
  date: string;
  isVerified: boolean;
  achievementMetric?: string;
  featured?: boolean;
}

export function GlassTestimonial({
  name,
  role,
  quote,
  date,
  isVerified,
  achievementMetric,
  featured = false,
}: TestimonialProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative",
        featured
          ? "liquid-glass-strong border-sage/40 dark:border-primary/40 shadow-xl bg-white/70 dark:bg-[#142822]/70"
          : "liquid-glass bg-white/50 dark:bg-[#10221C]/50 hover:-translate-y-1"
      )}
    >
      <div>
        {/* Decorative Quote SVG (Section 34) */}
        <div className="flex items-center justify-between mb-4">
          <Quote className="size-8 text-primary/30 dark:text-sage/30 fill-primary/10" />
          {achievementMetric && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-sage border border-primary/20">
              {achievementMetric}
            </span>
          )}
        </div>

        {/* Quote text dominates (Section 93) */}
        <blockquote className={cn(
          "text-foreground/90 font-medium leading-relaxed mb-6",
          featured ? "text-base sm:text-lg italic" : "text-sm sm:text-base"
        )}>
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      {/* Person Identity Follows (Section 93) */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/40">
        <div className="size-10 sm:size-11 rounded-full bg-gradient-to-tr from-primary to-secondary text-primary-foreground font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
          {name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm sm:text-base text-foreground">
              {name}
            </span>
            {isVerified && (
              <span title="Verified Client">
                <CheckCircle2 className="size-3.5 text-primary dark:text-sage shrink-0" />
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{role} • {date}</span>
        </div>
      </div>
    </div>
  );
}
