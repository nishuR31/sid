import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full font-semibold transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "glass-btn-primary",
        secondary: "glass-btn-secondary",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/5 border border-transparent hover:border-white/20",
        icon: "liquid-glass hover:liquid-glass-strong text-foreground size-11 p-0 rounded-full",
      },
      size: {
        default: "h-12 px-7 text-sm sm:text-base gap-2.5",
        sm: "h-9 px-4 text-xs gap-1.5",
        md: "h-12 px-7 text-sm sm:text-base gap-2.5",
        lg: "h-14 px-8 text-base font-semibold gap-3",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(glassButtonVariants({ variant, size, className }), child.props.className),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={cn(glassButtonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";
