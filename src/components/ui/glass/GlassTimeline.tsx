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
    <div className="relative pl-6 sm:pl-8 border-l border-primary/25 dark:border-primary/20 space-y-10 my-8">
      {items.map((item, i) => (
        <div key={i} className="relative group">
          {/* Glass Node Dot on the Rail */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 size-4 rounded-full bg-background border-2 border-primary shadow-xs group-hover:scale-125 group-hover:bg-primary transition-all duration-300" />

          {/* Achievement Glass Card */}
          <div className="liquid-glass p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {item.year}
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                {item.organization}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
            {item.verificationUrl && (
              <div className="mt-4 pt-3 border-t border-border/40">
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
