"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Home,
  User,
  Target,
  Award,
  Send,
  ArrowRight,
  Mail,
} from "lucide-react";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

interface MobileNavProps {
  onOpenSearch: () => void;
}

export function MobileNav({ onOpenSearch }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key (Section 89)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Section 15: Exactly 5 items (Home, About, Proof, Plans, Contact)
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/achievements", label: "Proof & Results", icon: Award },
    { href: "/plans", label: "Coaching Plans", icon: Target },
    { href: "/contact", label: "Contact", icon: Send },
  ];

  return (
    <div className="lg:hidden flex items-center gap-2">
      <button
        onClick={onOpenSearch}
        type="button"
        className="size-10 rounded-full liquid-glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-white/40 dark:border-white/10"
        aria-label="Open search dialog"
      >
        <Search className="size-4" aria-hidden="true" />
      </button>

      {/* Section 15: Contact CTA button on mobile header */}
      <GlassButton asChild variant="primary" size="sm" className="hidden sm:inline-flex h-9 px-3.5 text-xs">
        <Link href="/contact">Talk</Link>
      </GlassButton>

      {/* Menu Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="size-10 rounded-full liquid-glass flex items-center justify-center text-foreground cursor-pointer border border-white/40 dark:border-white/10"
        aria-label="Open navigation menu"
      >
        <Menu className="size-5" />
      </button>

      {/* Section 89: GlassSheet mobile menu sliding from top */}
      {isOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col bg-background/90 dark:bg-[#07120F]/92 backdrop-blur-2xl animate-in fade-in-50 duration-200"
        >
          {/* Top Bar with Brand & Close Button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/40">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 font-heading font-extrabold text-lg text-foreground"
            >
              <div className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs shadow-xs">
                SF
              </div>
              <span className="font-black tracking-tight">{siteConfig.name}</span>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="size-10 rounded-full liquid-glass flex items-center justify-center text-foreground cursor-pointer border border-white/50 dark:border-white/15"
              aria-label="Close navigation menu"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Search trigger inside mobile sheet */}
          <div className="px-6 pt-5 pb-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-2xl liquid-glass text-muted-foreground hover:text-foreground text-sm cursor-pointer border border-white/40 dark:border-white/10"
            >
              <span className="flex items-center gap-2.5">
                <Search className="size-4 text-primary dark:text-sage" />
                <span>Search plans, credentials, proof...</span>
              </span>
              <kbd className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-white/40 dark:bg-black/40 text-muted-foreground">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Navigation Items (Section 15: 5 core items) */}
          <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base transition-all min-h-[52px] ${
                    isActive
                      ? "liquid-glass-strong text-primary dark:text-sage font-bold border border-primary/40 shadow-xs"
                      : "liquid-glass text-foreground/90 hover:text-foreground font-semibold"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-white/30 dark:bg-white/10 text-muted-foreground"
                      }`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                  {isActive ? (
                    <span className="text-[10px] bg-primary/10 text-primary dark:text-sage px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Current
                    </span>
                  ) : (
                    <ArrowRight className="size-4 text-muted-foreground/50" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Sheet Controls */}
          <div className="p-6 border-t border-border/40 liquid-glass-subtle flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Theme
              </span>
              <ThemeToggle />
            </div>

            <GlassButton asChild variant="primary" size="lg" className="w-full">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Talk to Siddharth
              </Link>
            </GlassButton>

            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Mail className="size-3.5" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
