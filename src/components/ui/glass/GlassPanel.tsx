import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "subtle" | "default" | "elevated" | "strong";
  intensity?: "light" | "medium" | "heavy";
  radius?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  interactive?: boolean;
  children?: React.ReactNode;
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  (
    {
      variant = "default",
      intensity = "medium",
      radius = "xl",
      interactive = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      subtle: "liquid-glass-subtle",
      default: "liquid-glass",
      elevated: "liquid-glass shadow-lg border-white/40 dark:border-white/15",
      strong: "liquid-glass-strong",
    };

    const radiusStyles = {
      sm: "rounded-lg",
      md: "rounded-xl",
      lg: "rounded-2xl",
      xl: "rounded-3xl",
      "2xl": "rounded-[2rem]",
      full: "rounded-full",
    };

    const blurMap = {
      light: "backdrop-blur-sm",
      medium: "backdrop-blur-md",
      heavy: "backdrop-blur-xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          variantStyles[variant],
          radiusStyles[radius],
          blurMap[intensity],
          interactive && "liquid-glass-hover cursor-pointer transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";
