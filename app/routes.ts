import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/welcome.tsx"),
  route("about", "./routes/about.tsx"),
  route("home", "./routes/home.tsx"),
  ...prefix("design", [
    layout("layouts/layout.tsx", [
      route("dashboard", "./routes/dashboard.tsx"),
      route("manage", "./routes/manage.tsx"),
    ]),
  ]),
  // ...prefix("dashboard", [
  //   layout("layouts/layout.tsx", [route("", "./routes/dashboard.tsx")]),
  // ]),
] satisfies RouteConfig;
