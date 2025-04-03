import { cn } from "~/lib/utils";
import DashboardCard from "./dashboardCard";
import ListContent from "./listContent";
import CountContent from "./countContent";

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
