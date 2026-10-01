import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full font-semibold outline-none select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "glass-btn-primary",
        secondary: "glass-btn-secondary",
        ghost:
          "border border-transparent text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/5 hover:border-white/20 transition-colors duration-200",
        icon: "liquid-glass text-foreground size-11 p-0 rounded-full hover:-translate-y-0.5 transition-all duration-200",
      },
      size: {
        sm:      "min-h-[36px] px-4 text-xs gap-1.5",
        default: "min-h-[44px] px-6 text-sm gap-2",
        md:      "min-h-[44px] px-6 text-sm gap-2",
        lg:      "min-h-[52px] px-8 text-base gap-2.5",
        icon:    "size-11",
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
        // variant classes first so child className can override decoration only
        className: cn(glassButtonVariants({ variant, size }), className, child.props.className),
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
