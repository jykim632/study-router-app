import type { Route } from "./+types/home";
import DashboardPage from "~/dashboard/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Dashboard() {
  return <DashboardPage />;
}
