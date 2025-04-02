import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import AppSidebar from "./appSidebar";
import { cn } from "utils/ui_utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={cn("w-full")}>
        <div className={cn("flex", "items-center", "m-4")}>
          <SidebarTrigger className={cn("mr-3")} />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className={cn("h-screen", "m-6")}>
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
