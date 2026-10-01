import * as React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export interface GlassSocialButtonProps {
  platform: string;
  url: string;
  handle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function GlassSocialButton({
  platform,
  url,
  handle,
  icon,
  className,
}: GlassSocialButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "liquid-glass flex items-center justify-between gap-4 px-5 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 group min-h-[48px]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {icon && <div className="text-primary dark:text-sage shrink-0 group-hover:scale-110 transition-transform">{icon}</div>}
        <div className="flex flex-col">
          <span className="font-bold text-sm text-foreground leading-tight">
            {platform}
          </span>
          {handle && (
            <span className="text-xs text-muted-foreground font-mono">
              {handle}
            </span>
          )}
        </div>
      </div>
      <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary dark:group-hover:text-sage transition-colors" />
    </a>
  );
}
