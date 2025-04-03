import { CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import type { DashboardCountCardProps } from "~/types/dashboard";

export default function CountContent({ count }: DashboardCountCardProps) {
  return (
    <CardContent className={cn("text-center", "text-6xl", "font-bold")}>
      {count}
    </CardContent>
  );
}
// Compare this snippet from app/page/manage/manage.tsx:
