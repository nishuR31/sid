import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-2xl text-sm font-semibold transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98] clay-pill [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01] shadow-xs active:translate-y-0.5",
        outline:
          "border border-border/80 text-foreground bg-card hover:bg-muted hover:text-primary hover:border-primary/40 shadow-xs active:translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85 shadow-xs active:translate-y-0.5",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-muted/50 shadow-none border-transparent",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-xs",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto font-medium shadow-none",
      },
      size: {
        default: "h-10 gap-2 px-5 py-2",
        xs: "h-7 gap-1 rounded-lg px-2.5 text-xs",
        sm: "h-8 gap-1.5 rounded-xl px-3.5 text-xs",
        lg: "h-12 gap-2.5 rounded-2xl px-7 text-base font-semibold",
        icon: "size-10 rounded-xl",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-12 rounded-2xl",
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
