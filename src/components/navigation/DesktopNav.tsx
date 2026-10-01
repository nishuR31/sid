"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  onOpenSearch: () => void;
}

const navItems = [
  { href: "/about", label: "About" },
  { href: "/plans", label: "Plans" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certificates", label: "Certificates" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function DesktopNav({ onOpenSearch }: DesktopNavProps) {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
      <nav
        className="flex items-center gap-1 relative p-1 rounded-full bg-muted/40 border border-border/50 backdrop-blur-xs"
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
                "relative py-1.5 px-3 rounded-full text-xs font-semibold transition-colors duration-200 z-10 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isActive
                  ? "text-primary dark:text-white font-bold"
                  : isHovered
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {/* Active Tab Moving Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-card clay-pill border border-border/80 shadow-xs -z-10"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              {/* Hover Highlight Tab Moving Indicator when not active */}
              {!isActive && isHovered && (
                <motion.div
                  layoutId="hoverTabPill"
                  className="absolute inset-0 rounded-full bg-background/70 border border-border/40 -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="h-5 w-px bg-border mx-2" aria-hidden="true" />

      <button
        onClick={onOpenSearch}
        type="button"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-muted-foreground bg-muted/50 hover:bg-muted border border-border/60 transition-colors focus-visible:ring-2 focus-visible:ring-primary cursor-pointer clay-pill"
        aria-label="Open search dialog (Press Ctrl+K or Cmd+K)"
      >
        <Search className="size-3.5 text-muted-foreground" aria-hidden="true" />
        <span>Search</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-background rounded border border-border text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      <Button asChild size="sm" className="ml-1 rounded-full">
        <Link href="/contact">Talk to Siddharth</Link>
      </Button>
    </div>
  );
}
