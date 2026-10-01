"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  onOpenSearch: () => void;
}

const navItems = [
  { href: "/about", label: "About" },
  { href: "/plans", label: "Plans" },
  { href: "/achievements", label: "Results" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export function DesktopNav({ onOpenSearch }: DesktopNavProps) {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex items-center gap-2 xl:gap-3">
      <nav
        className="flex items-center gap-1 relative px-2 py-1 rounded-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/5 backdrop-blur-md"
        aria-label="Main Navigation"
        onMouseLeave={() => setHoveredHref(null)}
      >
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          const isHovered = hoveredHref === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredHref(item.href)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative py-1.5 px-3.5 rounded-full text-xs font-semibold transition-colors duration-200 z-10 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isActive
                  ? "text-primary dark:text-emerald-300 font-bold"
                  : isHovered
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {/* Active Tab Moving Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full liquid-glass-strong border border-white/50 dark:border-white/15 -z-10 shadow-xs"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              {/* Hover Highlight Tab Moving Indicator */}
              {!isActive && isHovered && (
                <motion.div
                  layoutId="hoverTabPill"
                  className="absolute inset-0 rounded-full bg-white/30 dark:bg-white/10 -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="h-5 w-px bg-border-glass mx-1" aria-hidden="true" />

      {/* Cmd+K Search trigger (Section 45) */}
      <button
        onClick={onOpenSearch}
        type="button"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-muted-foreground liquid-glass hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary cursor-pointer border border-white/30 dark:border-white/10"
        aria-label="Open search dialog (Press Ctrl+K or Cmd+K)"
      >
        <Search className="size-3.5 text-muted-foreground" aria-hidden="true" />
        <span>Search</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white/40 dark:bg-black/30 rounded border border-border/50 text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      {/* Primary CTA (Section 17) */}
      <GlassButton asChild variant="primary" size="sm" className="ml-1 shadow-sm">
        <Link href="/contact">Talk to Siddharth</Link>
      </GlassButton>
    </div>
  );
}
