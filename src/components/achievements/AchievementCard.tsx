import { Calendar, Building, ExternalLink } from "lucide-react";
import { Achievement } from "@/types/content";
import { GlassBadge } from "@/components/ui/glass/GlassBadge";
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  achievement: Achievement;
  className?: string;
}

export function AchievementCard({ achievement, className }: AchievementCardProps) {
  const getBadgeVariant = (category: string): "default" | "primary" | "sage" | "highlight" => {
    switch (category) {
      case "Competitive":
        return "highlight";
      case "Coaching":
        return "primary";
      case "Honor":
        return "sage";
      default:
        return "default";
    }
  };

  return (
    <div
      className={cn(
        "liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 h-full",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <GlassBadge variant={getBadgeVariant(achievement.category)} size="sm">
            {achievement.category}
          </GlassBadge>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-muted-foreground">
            <Calendar className="size-3.5" aria-hidden="true" />
            <span>{achievement.year}</span>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground font-heading mb-2">
          {achievement.title}
        </h3>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary dark:text-sage mb-4">
          <Building className="size-3.5" aria-hidden="true" />
          <span>{achievement.organization}</span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {achievement.description}
        </p>
      </div>

      {achievement.verificationUrl && (
        <div className="pt-4 mt-6 border-t border-border-glass/60">
          <a
            href={achievement.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary dark:text-sage hover:underline"
          >
            <span>Official Record</span>
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}
