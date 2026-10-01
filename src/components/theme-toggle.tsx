"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-8.5 w-24 rounded-full bg-muted/50 border border-border/60 animate-pulse",
          className
        )}
      />
    );
  }

  const options = [
    { value: "light", label: "Light mode", icon: Sun },
    { value: "system", label: "System default", icon: Laptop },
    { value: "dark", label: "Dark mode", icon: Moon },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Theme selection"
      className={cn(
        "inline-flex items-center p-1 rounded-full bg-muted/60 border border-border/70 backdrop-blur-xs",
        className
      )}
    >
      {options.map((opt) => {
        const Icon = opt.icon;
        const isSelected = theme === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => setTheme(opt.value)}
            className={cn(
              "relative p-1.5 rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer",
              isSelected
                ? "bg-card text-primary clay-pill shadow-xs border border-border/80"
                : "text-muted-foreground hover:text-foreground hover:bg-background/40"
            )}
            title={opt.label}
            aria-label={opt.label}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            <span className="sr-only">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
