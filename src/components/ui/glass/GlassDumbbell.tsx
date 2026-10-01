"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlassDumbbell({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex items-center justify-center pointer-events-none select-none",
        className
      )}
      aria-hidden="true"
    >
      {/* 3D Glass Dumbbell (Section 53) - transparent body, soft green tint, specular highlights */}
      <div
        className={cn(
          "relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center",
          !shouldReduceMotion && "animate-[pulse_8s_ease-in-out_infinite]"
        )}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Soft atmospheric ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-sage/20 to-transparent rounded-full blur-2xl opacity-50" />

        {/* 3D Glass Dumbbell Assembly */}
        <div
          className={cn(
            "relative w-40 h-28 flex items-center justify-center transition-transform",
            !shouldReduceMotion && "animate-[spin_45s_linear_infinite]"
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(25deg) rotateY(-35deg) rotateZ(10deg)",
          }}
        >
          {/* Left Glass Plate */}
          <div
            className="absolute left-0 w-8 h-24 rounded-2xl liquid-glass border border-white/60 dark:border-white/20 shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(145,182,164,0.3) 50%, rgba(23,60,50,0.4) 100%)",
              backdropFilter: "blur(12px)",
              transform: "translateZ(10px)",
            }}
          >
            {/* Specular Highlight */}
            <div className="absolute top-1 left-1 right-1 h-3 rounded-t-xl bg-white/40 blur-[1px]" />
          </div>

          {/* Left Inner Smaller Plate */}
          <div
            className="absolute left-7 w-4 h-18 rounded-xl liquid-glass border border-white/40 shadow-md"
            style={{
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(10px)",
              transform: "translateZ(8px)",
            }}
          />

          {/* Glass Center Handle / Bar */}
          <div
            className="w-24 h-4 rounded-full border border-white/50 dark:border-white/20 shadow-md relative"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(145,182,164,0.4) 50%, rgba(255,255,255,0.5) 100%)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Subtle knurling grip lines */}
            <div className="absolute inset-x-3 inset-y-0.5 border-y border-dashed border-primary/30" />
          </div>

          {/* Right Inner Smaller Plate */}
          <div
            className="absolute right-7 w-4 h-18 rounded-xl liquid-glass border border-white/40 shadow-md"
            style={{
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(10px)",
              transform: "translateZ(8px)",
            }}
          />

          {/* Right Glass Plate */}
          <div
            className="absolute right-0 w-8 h-24 rounded-2xl liquid-glass border border-white/60 dark:border-white/20 shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(145,182,164,0.3) 50%, rgba(23,60,50,0.4) 100%)",
              backdropFilter: "blur(12px)",
              transform: "translateZ(10px)",
            }}
          >
            {/* Specular Highlight */}
            <div className="absolute top-1 left-1 right-1 h-3 rounded-t-xl bg-white/40 blur-[1px]" />
          </div>
        </div>

        {/* Contact shadow on floor below */}
        <div className="absolute bottom-2 w-32 h-4 rounded-full bg-black/15 dark:bg-black/40 blur-md pointer-events-none" />
      </div>
    </div>
  );
}
