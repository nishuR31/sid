import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

export function PhilosophySequence({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {steps.map((item, index) => (
        <div
          key={item.step}
          className="liquid-glass p-5 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-2xl font-black text-primary/70 dark:text-sage/70 group-hover:text-primary dark:group-hover:text-sage transition-colors">
              {item.step}
            </span>
            <div className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
              <Check className="size-3.5 stroke-[2.5]" />
            </div>
          </div>
          <h4 className="font-bold text-base text-foreground tracking-tight">
            {item.title}
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export interface AchievementItem {
  year: number;
  title: string;
  organization: string;
  category: string;
  description: string;
  verificationUrl?: string;
}

export function GlassTimeline({ items }: { items: AchievementItem[] }) {
  return (
    <div className="relative pl-8 sm:pl-10 border-l-2 border-primary/20 dark:border-primary/15 space-y-8 my-6">
      {items.map((item, i) => (
        <div key={i} className="relative group min-w-0">
          {/* Glass Node Dot on the Rail — positioned using precise calc for perfect centering */}
          <div className="absolute -left-[calc(2rem+1px-7px)] sm:-left-[calc(2.5rem+1px-7px)] top-3 size-3.5 rounded-full bg-primary/90 shadow-sm group-hover:scale-125 group-hover:shadow-primary/40 group-hover:shadow-md transition-all duration-300 border-2 border-background" />

          {/* Achievement Glass Card */}
          <div className="liquid-glass p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary dark:text-sage border border-primary/20">
                {item.year}
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground truncate max-w-[60%]">
                {item.organization}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight mb-1.5">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
            {item.verificationUrl && (
              <div className="mt-3 pt-2 border-t border-border/40">
                <a
                  href={item.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary dark:text-sage hover:underline inline-flex items-center gap-1"
                >
                  Official Sanctioned Record ↗
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
