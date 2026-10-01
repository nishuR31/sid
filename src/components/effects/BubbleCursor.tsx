"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const emptySubscribe = () => () => {};

export function BubbleCursor() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for fluid trailing feel
  const springX = useSpring(mouseX, { stiffness: 450, damping: 36 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 36 });

  useEffect(() => {
    // Check if device supports fine hover (desktop mouse) and user hasn't reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hover on interactive glass elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, input, textarea, [role='button'], .liquid-glass, .glass-pill");
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!mounted || !isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen dark:mix-blend-lighten"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 44 : 22,
        height: isHovering ? 44 : 22,
        backgroundColor: isHovering
          ? "rgba(118, 185, 157, 0.22)"
          : "rgba(145, 182, 164, 0.25)",
        boxShadow: isHovering
          ? "0 0 20px 6px rgba(118, 185, 157, 0.35), inset 0 0 10px rgba(255, 255, 255, 0.4)"
          : "0 0 12px 3px rgba(145, 182, 164, 0.25), inset 0 0 6px rgba(255, 255, 255, 0.3)",
        border: isHovering
          ? "1px solid rgba(183, 216, 199, 0.6)"
          : "1px solid rgba(183, 216, 199, 0.4)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    />
  );
}
