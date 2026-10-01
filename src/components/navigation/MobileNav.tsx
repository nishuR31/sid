"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Siddharth" },
    { href: "/plans", label: "Coaching Plans" },
    { href: "/achievements", label: "Achievements" },
    { href: "/certificates", label: "Certifications" },
    { href: "/testimonials", label: "Client Stories" },
    { href: "/contact", label: "Contact & Consult" },
  ];

  return (
    <div className="lg:hidden flex items-center gap-2">
      <button
        onClick={onOpenSearch}
        type="button"
        className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border/60 transition-colors focus-visible:ring-2 focus-visible:ring-primary cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Open search dialog"
      >
        <Search className="size-4" aria-hidden="true" />
      </button>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="p-2.5 rounded-xl text-foreground hover:bg-muted/50 border border-border/60 transition-colors focus-visible:ring-2 focus-visible:ring-primary cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Mobile Drawer Backdrop & Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-16 bottom-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in-50 duration-200"
        >
          <nav className="flex flex-col gap-2 pt-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base transition-colors ${
                    isActive
                      ? "bg-primary/15 dark:bg-primary/25 text-foreground dark:text-white font-bold border border-primary/30"
                      : "text-foreground/90 hover:bg-muted font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs bg-primary/20 text-primary dark:text-primary-light px-2.5 py-0.5 rounded-full font-bold">Active</span>}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-border/80 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-medium text-muted-foreground">Color Theme</span>
              <ThemeToggle />
            </div>

            <Button asChild size="lg" className="w-full rounded-2xl text-base font-semibold shadow-md">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Talk to Siddharth
              </Link>
            </Button>

            <div className="flex items-center justify-center gap-6 pt-2 text-xs text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors py-2"
              >
                <Mail className="size-3.5" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
