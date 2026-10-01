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
          "size-10 rounded-2xl bg-muted/40 border border-border/60 animate-pulse",
          className
        )}
      />
    );
  }

  // Sequence: light -> dark -> system -> light
  const handleCycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getThemeInfo = () => {
    switch (theme) {
      case "light":
        return {
          label: "Theme: Light (Click for Dark)",
          icon: Sun,
          badge: "Light",
        };
      case "dark":
        return {
          label: "Theme: Dark (Click for System)",
          icon: Moon,
          badge: "Dark",
        };
      default:
        return {
          label: "Theme: System (Click for Light)",
          icon: Laptop,
          badge: "Auto",
        };
    }
  };

  const current = getThemeInfo();
  const Icon = current.icon;

  return (
    <button
      type="button"
      onClick={handleCycleTheme}
      className={cn(
        "relative inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass border border-white/40 dark:border-white/10 text-foreground hover:border-primary/40 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer group min-h-[38px]",
        className
      )}
      title={current.label}
      aria-label={current.label}
    >
      <Icon className="size-4 text-primary dark:text-sage transition-transform duration-200 group-hover:rotate-12" aria-hidden="true" />
      <span className="text-[11px] font-bold text-muted-foreground group-hover:text-foreground hidden sm:inline-block">
        {current.badge}
      </span>
    </button>
  );
}
