import * as React from "react";
import { cn } from "@/lib/utils";

function Card({
  className,
  glass = true,
  ...props
}: React.ComponentProps<"div"> & { glass?: boolean; neu?: boolean; clay?: boolean }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col rounded-3xl text-foreground transition-all duration-300",
        glass ? "liquid-glass hover:-translate-y-1 hover:border-primary/30" : "bg-card border border-border",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-2 p-6 sm:p-8", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm sm:text-base text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 sm:p-8 pt-0 sm:pt-0 flex-1", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 sm:p-8 pt-0 sm:pt-0 mt-auto", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
