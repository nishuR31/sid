"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative py-1.5 px-3 rounded-xl text-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary",
        isActive
          ? "text-primary dark:text-white font-bold bg-primary/10 dark:bg-primary/20 border border-primary/25 dark:border-primary/40 shadow-xs"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50 font-medium",
        className
      )}
    >
      {children}
    </Link>
  );
}
