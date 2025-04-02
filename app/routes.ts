import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "./routes/about.tsx"),
  ...prefix("design", [
    layout("layouts/layout.tsx", [
      route("list", "./routes/design/list.tsx"),
      route("dashboard", "./routes/dashboard.tsx"),
    ]),
  ]),
  // ...prefix("dashboard", [
  //   layout("layouts/layout.tsx", [route("", "./routes/dashboard.tsx")]),
  // ]),
] satisfies RouteConfig;
