import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import type { DashboardCardProps } from "~/types/dashboard";

export default function DashboardCard({
  title = "Card Title",
  description,
  content = "Card Content",
  footer,
  classNames,
}: DashboardCardProps) {
  return (
    <Card className={cn(classNames, footer ? "" : "min-h-48")}>
      <CardHeader>
        <CardTitle className={cn("text-center", "text-2xl")}>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      {content}
      {footer ? (
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      ) : null}
    </Card>
  );
}
