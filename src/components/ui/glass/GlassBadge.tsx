import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "sage" | "highlight" | "outline";
  size?: "sm" | "md";
}

export function GlassBadge({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: GlassBadgeProps) {
  const variantStyles = {
    default: "bg-surface-glass border-border-glass text-foreground",
    primary:
      "bg-primary/10 border-primary/25 text-primary dark:text-emerald-300 font-semibold",
    sage: "bg-sage/15 border-sage/30 text-secondary dark:text-sage font-semibold",
    highlight:
      "bg-highlight/20 border-highlight/40 text-amber-900 dark:text-highlight font-semibold",
    outline: "bg-transparent border-border text-muted-foreground",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px] gap-1.5",
    md: "px-3.5 py-1 text-xs sm:text-sm gap-2",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border backdrop-blur-md shadow-xs select-none transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface GlassPillProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export function GlassPill({ active = false, className, children, ...props }: GlassPillProps) {
  return (
    <div
      className={cn(
        "glass-pill inline-flex items-center px-4 py-1.5 text-xs sm:text-sm font-medium",
        active && "bg-primary text-primary-foreground border-primary shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface GlassStatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  subtext?: string;
  highlight?: boolean;
}

export function GlassStat({ value, label, subtext, highlight = false, className, ...props }: GlassStatProps) {
  return (
    <div
      className={cn(
        "liquid-glass p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-1",
        highlight && "border-primary/40 bg-primary/5",
        className
      )}
      {...props}
    >
      <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground font-heading">
        {value}
      </span>
      <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground mt-1">
        {label}
      </span>
      {subtext && <span className="text-[11px] text-muted-foreground/80">{subtext}</span>}
    </div>
  );
}
