import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "outline";
  className?: string;
}

export default function TechBadge({
  name,
  variant = "outline",
  className,
}: TechBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={cn(
        "text-xs font-medium px-3 py-1 rounded-full",
        variant === "outline"
          ? "border-orange/30 text-orange bg-orange/5"
          : "bg-orange text-white border-transparent",
        className
      )}
    >
      {name}
    </Badge>
  );
}
