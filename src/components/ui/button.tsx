import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "glass-btn-primary",
        outline:
          "glass-btn-secondary",
        secondary:
          "bg-secondary/80 text-secondary-foreground hover:bg-secondary/95 border border-white/20 active:scale-[0.98]",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-white/15 dark:hover:bg-white/5 border border-transparent shadow-none",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-md",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto font-medium shadow-none",
      },
      size: {
        default: "h-11 gap-2 px-6 py-2 text-sm",
        xs: "h-7 gap-1 px-3 text-xs",
        sm: "h-9 gap-1.5 px-4 text-xs",
        md: "h-11 gap-2 px-6 py-2 text-sm",
        lg: "h-13 gap-2.5 px-8 text-base font-semibold",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(buttonVariants({ variant, size, className }), child.props.className),
        ...props,
      });
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
