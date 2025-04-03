import { Welcome } from "~/welcome/welcome";
import type { Route } from "./+types/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function WelcomePage() {
  return <Welcome />;
}
