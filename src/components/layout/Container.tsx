import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "small" | "narrow" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-3xl",
    small: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
