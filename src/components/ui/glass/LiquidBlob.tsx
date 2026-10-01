"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function LiquidBlob({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-10 select-none overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Primary Organic Ambient Sage Blob (Section 54) */}
      <div
        className="w-[480px] sm:w-[650px] lg:w-[800px] h-[400px] sm:h-[500px] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-gradient-to-tr from-primary/12 via-sage/15 to-transparent blur-[80px] opacity-60 animate-[spin_40s_linear_infinite]"
        style={{
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}

export function LiquidBlobSecondary({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-10 select-none overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Secondary Warm Highlight Glow Blob */}
      <div
        className="w-[350px] sm:w-[500px] h-[350px] rounded-[50%_50%_40%_60%_/_60%_40%_60%_40%] bg-gradient-to-br from-highlight/10 via-accent/10 to-transparent blur-[70px] opacity-40 animate-[spin_55s_linear_infinite_reverse]"
        style={{
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}
