import { Calendar, Building, ExternalLink } from "lucide-react";
import { Achievement } from "@/types/content";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const getCategoryVariant = (
    category: string
  ): "default" | "secondary" | "outline" | "accent" | "highlight" | "ghost" => {
    switch (category) {
      case "Competitive":
        return "highlight";
      case "Coaching":
        return "default";
      case "Honor":
        return "accent";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-between gap-3 mb-2">
          <Badge variant={getCategoryVariant(achievement.category)}>
            {achievement.category}
          </Badge>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Calendar className="size-3.5" aria-hidden="true" />
            <span>{achievement.year}</span>
          </div>
        </div>

        <CardTitle className="text-xl sm:text-2xl font-bold leading-snug">
          {achievement.title}
        </CardTitle>

        <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
          <Building className="size-3.5" aria-hidden="true" />
          <span>{achievement.organization}</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0 flex flex-col justify-between gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {achievement.description}
        </p>

        {achievement.verificationUrl && (
          <div className="pt-2 border-t border-border/50">
            <a
              href={achievement.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <span>Verify credential</span>
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
