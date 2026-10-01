import * as React from "react";

export function GlassRefractionFilter() {
  return (
    <svg
      className="sr-only absolute pointer-events-none -z-50"
      aria-hidden="true"
      width="0"
      height="0"
    >
      <defs>
        {/* Tier 2: SVG Refraction displacement map (Section 2 & 56) */}
        <filter id="glass-refraction" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="0.4" result="blurred" />
          <feComposite in="SourceGraphic" in2="blurred" operator="over" />
        </filter>

        {/* Edge highlight filter */}
        <filter id="glass-edge-glow">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#ffffff" floodOpacity="0.4" />
        </filter>
      </defs>
    </svg>
  );
}
