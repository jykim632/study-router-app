import { cn } from "utils/ui_utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

type DashboardCardProps = {
  title?: string;
  description?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  classNames?: string;
};

const DashboardCountCard = ({
  title = "Card Title",
  description,
  content = "Card Content",
  footer,
  classNames,
}: DashboardCardProps) => {
  return (
    <Card className={cn(classNames, footer ? "" : "min-h-48")}>
      <CardHeader>
        <CardTitle className={cn("text-center", "text-2xl")}>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className={cn("text-center", "text-6xl", "font-bold")}>
        <p>{content}</p>
      </CardContent>
      {footer ? (
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      ) : null}
    </Card>
  );
};

const DashboardListCard = ({
  title = "Card Title",
  description,
  content = "Card Content",
  footer,
  classNames,
}: DashboardCardProps) => {
  return (
    <Card className={cn(classNames, footer ? "" : "min-h-48")}>
      <CardHeader>
        <CardTitle className={cn("text-center", "text-2xl")}>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className={cn("text-center", "text-6xl", "font-bold")}>
        <p>{content}</p>
      </CardContent>
      {footer ? (
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Welcome to the dashboard.</p>
      <p>Here you can manage your settings and preferences.</p>
      <br />
      <section>
        <h2>i will make this contents</h2>
        <ul>
          <li>Today Reservation Count - Card</li>
          <li>Waiting Reservation Customer Count - Card</li>
          <li>This Month Reservation Count - Card</li>
          <li>This week reservation Count - Card</li>
        </ul>
      </section>
      <section className={cn("grid", "grid-cols-4", "gap-4")}>
        <DashboardCountCard title="오늘 예약 수" content={6} />
        <DashboardCountCard title="예약 대기 고객" content={8} />
        <DashboardCountCard title="이번 달 예약 고객 수" content={92} />
        <DashboardCountCard title="이번 주 예약 고객 수" content={13} />
        <DashboardListCard classNames={cn("lg:col-span-2")} />
        <DashboardListCard classNames={cn("lg:col-span-2")} />
      </section>
    </div>
  );
}
