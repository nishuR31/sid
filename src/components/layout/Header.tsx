"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { SearchDialog } from "@/components/search/SearchDialog";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Global Cmd+K / Ctrl+K listener
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

  return (
    <>
      <header className="sticky top-2 sm:top-3 z-40 w-full px-3 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl clay-card rounded-2xl sm:rounded-full bg-card/90 backdrop-blur-xl border border-border/80 h-16 sm:h-18 flex items-center justify-between px-4 sm:px-6 shadow-md transition-all">
          {/* Brand Logo with wellness/strength emblem */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-foreground group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            aria-label={`${siteConfig.name} - Homepage`}
          >
            <div className="size-9 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground clay-pill shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-bold text-lg leading-none">S</span>
            </div>
            <div className="flex flex-col">
              <span className="leading-none text-foreground font-black tracking-tight">{siteConfig.name}</span>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest leading-tight">Coaching</span>
            </div>
          </Link>

          {/* Desktop Navigation & Actions */}
          <DesktopNav onOpenSearch={() => setSearchOpen(true)} />

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Drawer Trigger */}
          <MobileNav onOpenSearch={() => setSearchOpen(true)} />
        </div>
      </header>

      {/* Global Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
