"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CSS3DObjectProps {
  className?: string;
}

export function CSS3DObject({ className }: CSS3DObjectProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn("relative flex items-center justify-center pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      {/* 3D Isometric Stylized Athletic Crest & Gyroscope Core */}
      <div
        className={cn(
          "relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center",
          !shouldReduceMotion && "animate-[pulse_6s_ease-in-out_infinite]"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(20deg) rotateY(-20deg)",
        }}
      >
        {/* Glow ambient background aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/30 rounded-full blur-2xl opacity-60" />

        {/* Outer Orbiting Kinetic Ring */}
        <div
          className="absolute inset-2 sm:inset-4 rounded-full border-2 border-primary/40 shadow-sm"
          style={{
            transform: "rotateX(60deg) rotateY(15deg)",
          }}
        />

        {/* Inner Secondary Kinetic Ring */}
        <div
          className="absolute inset-6 sm:inset-8 rounded-full border border-dashed border-accent/50"
          style={{
            transform: "rotateX(30deg) rotateY(-50deg)",
          }}
        />

        {/* Central Isometric Claymorphic Emblem Shield */}
        <div
          className="clay-card relative size-20 sm:size-24 rounded-3xl bg-card border-2 border-primary/50 flex flex-col items-center justify-center z-10"
          style={{
            transform: "translateZ(30px)",
            boxShadow: "var(--clay-shadow)",
          }}
        >
          <div className="size-12 sm:size-14 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-accent/20 border border-primary/30 flex items-center justify-center clay-pill shadow-xs">
            <span className="font-heading font-black text-lg sm:text-xl text-primary tracking-tight">SF</span>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mt-1">COACH</span>
        </div>
      </div>
    </div>
  );
}
