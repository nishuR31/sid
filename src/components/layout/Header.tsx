"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Settings } from "lucide-react";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { SearchDialog } from "@/components/search/SearchDialog";
import { cn } from "@/lib/utils";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Global Cmd+K / Ctrl+K listener (Section 45)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Section 14: Navigation Behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Section 13: Floating pill navigation approximately 20px from top */}
      <header className="sticky top-4 sm:top-5 z-40 w-full px-3 sm:px-6 lg:px-8 transition-all duration-200">
        <div
          className={cn(
            "container mx-auto max-w-6xl rounded-full transition-all duration-200 px-4 sm:px-6 h-16 flex items-center justify-between",
            scrolled
              ? "liquid-glass-strong border-white/60 dark:border-white/15 shadow-xl"
              : "liquid-glass border-white/40 dark:border-white/10 shadow-sm"
          )}
        >
          {/* Section 75: Brand Logo SF Monogram + Siddharth Fit */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-heading font-extrabold text-lg sm:text-xl tracking-tight text-foreground group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
            aria-label={`${siteConfig.name} - Homepage`}
          >
            <div className="size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform border border-white/20">
              <span>SF</span>
            </div>
            <div className="flex flex-col">
              <span className="leading-none text-foreground font-black tracking-tight text-base sm:text-lg">
                Siddharth <span className="font-light text-primary dark:text-sage">Fit</span>
              </span>
              <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest leading-none mt-0.5">
                Coaching
              </span>
            </div>
          </Link>

          {/* Desktop Navigation & Actions */}
          <DesktopNav onOpenSearch={() => setSearchOpen(true)} />

          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/settings"
              className="size-9 rounded-full liquid-glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:border-primary/40"
              title="Site Settings & Accessibility"
              aria-label="Settings"
            >
              <Settings className="size-4" />
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Trigger */}
          <MobileNav onOpenSearch={() => setSearchOpen(true)} />
        </div>
      </header>

      {/* Global Search Dialog (Section 45) */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
