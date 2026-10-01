import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "subtle" | "default" | "elevated" | "featured";
  hoverEffect?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ variant = "default", hoverEffect = true, className, children, ...props }, ref) => {
    const variantStyles = {
      subtle: "liquid-glass-subtle",
      default: "liquid-glass",
      elevated: "liquid-glass shadow-lg border-white/50 dark:border-white/15",
      featured:
        "liquid-glass-strong border-sage/40 dark:border-primary/40 ring-1 ring-sage/20 dark:ring-primary/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-300",
          variantStyles[variant],
          hoverEffect && "liquid-glass-hover",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

export function GlassCardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2 mb-4", className)} {...props} />;
}

export function GlassCardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl sm:text-2xl font-bold tracking-tight text-foreground", className)}
      {...props}
    />
  );
}

export function GlassCardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm sm:text-base text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

export function GlassCardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1", className)} {...props} />;
}

export function GlassCardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center pt-4 mt-auto border-t border-border/40", className)} {...props} />;
}
