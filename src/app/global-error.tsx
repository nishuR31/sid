"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global catastrophic error boundary:", error);

    // Stale build / Chunk load failure automatic recovery guard
    const isChunkError =
      error?.name === "ChunkLoadError" ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("Failed to fetch dynamically imported module");

    if (isChunkError && typeof window !== "undefined") {
      const attemptKey = "chunk-recovery-attempted";
      const hasAttempted = sessionStorage.getItem(attemptKey);

      if (!hasAttempted) {
        sessionStorage.setItem(attemptKey, "true");
        window.location.reload();
      }
    }
  }, [error]);

  const handleManualReload = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("chunk-recovery-attempted");
      window.location.reload();
    }
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF8F5] text-[#2A3B30] flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full p-8 sm:p-12 rounded-3xl bg-white border border-[#D8E0DA] shadow-xl text-center flex flex-col items-center gap-6">
          <div className="size-16 rounded-3xl bg-red-50 text-red-600 flex items-center justify-center">
            <AlertCircle className="size-8" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#6B7E72]">
              System Recovery
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-[#1A2E22]">
              Something went wrong. Let&apos;s get you back on track.
            </h1>
            <p className="text-sm text-[#6B7E72] leading-relaxed">
              A core interface error occurred. Refreshing the application will reload clean bundles.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleManualReload}
              className="px-6 py-2.5 rounded-2xl bg-[#2D5A3D] text-white font-semibold text-sm hover:bg-[#3A7A52] transition-colors cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="size-4" />
              <span>Reload Application</span>
            </button>
            <Link
              href="/"
              className="px-6 py-2.5 rounded-2xl border border-[#D8E0DA] text-[#2A3B30] font-semibold text-sm hover:bg-neutral-100 transition-colors flex items-center gap-2"
            >
              <Home className="size-4" />
              <span>Go to Home</span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
