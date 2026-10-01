import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GlassImageFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: "portrait" | "landscape" | "square" | "editorial" | "certificate";
  priority?: boolean;
  overlayBadge?: React.ReactNode;
}

export function GlassImageFrame({
  src,
  alt,
  width = 800,
  height = 1000,
  aspectRatio = "portrait",
  priority = false,
  overlayBadge,
  className,
  ...props
}: GlassImageFrameProps) {
  const aspectStyles = {
    portrait: "aspect-[3/4] sm:aspect-[4/5]",
    landscape: "aspect-[16/10]",
    square: "aspect-square",
    editorial: "aspect-[4/3] sm:aspect-[16/10]",
    certificate: "aspect-[1.414/1]", // A4 document ratio
  };

  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden border border-white/40 dark:border-white/10 shadow-xl group",
        aspectStyles[aspectRatio],
        className
      )}
      {...props}
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent z-10 pointer-events-none" />

      {/* Image with controlled subtle zoom (Section 78) */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      {/* Dynamic Glass Top Highlight / Sheen */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        aria-hidden="true"
      />

      {/* Inner Rim Glass Edge */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/30 dark:ring-white/15 z-20"
        aria-hidden="true"
      />

      {/* Optional Floating Overlay Badge */}
      {overlayBadge && (
        <div className="absolute bottom-4 left-4 right-4 z-30 pointer-events-auto">
          {overlayBadge}
        </div>
      )}
    </div>
  );
}

export interface GlassSectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function GlassSection({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
  ...props
}: GlassSectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-24 lg:py-32 relative", className)}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div
          className={cn(
            "flex flex-col gap-3 mb-12 sm:mb-16",
            align === "center" ? "text-center items-center max-w-3xl mx-auto" : "max-w-2xl"
          )}
        >
          {eyebrow && (
            <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-primary dark:text-sage">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-heading text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function GlassDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full h-px bg-gradient-to-r from-transparent via-border-glass to-transparent my-12 opacity-80",
        className
      )}
      aria-hidden="true"
    />
  );
}
