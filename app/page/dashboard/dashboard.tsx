import { cn } from "~/lib/utils";
import DashboardCard from "./dashboardCard";
import ListContent from "./listContent";
import CountContent from "./countContent";

export default function DashboardPage() {
  return (
    <div>
      <section className={cn("grid", "grid-cols-4", "gap-4")}>
        <DashboardCard
          title="오늘 예약 수"
          content={<CountContent count={6} />}
        />
        <DashboardCard
          title="예약 대기 고객"
          content={<CountContent count={5} />}
        />
        <DashboardCard
          title="이번 달 예약 고객 수"
          content={<CountContent count={82} />}
        />
        <DashboardCard
          title="이번 주 예약 고객 수"
          content={<CountContent count={61} />}
        />
        <DashboardCard
          classNames={cn("lg:col-span-2")}
          title="고객 문의사항"
          content={<ListContent />}
        />
        <DashboardCard
          classNames={cn("lg:col-span-2")}
          content={<ListContent />}
        />
        {/* <DashboardListCard classNames={cn("lg:col-span-2")} />
        <DashboardListCard classNames={cn("lg:col-span-4")} /> */}
      </section>
    </div>
  );
}
