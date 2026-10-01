import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border-secondary/30 bg-secondary/15 text-primary dark:text-foreground hover:bg-secondary/25",
        outline:
          "border-border text-foreground hover:bg-muted/50",
        accent:
          "border-accent/30 bg-accent/15 text-accent-foreground dark:text-foreground",
        highlight:
          "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
        ghost: "border-transparent text-muted-foreground hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
