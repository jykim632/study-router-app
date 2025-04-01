import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import AppSidebar from "./appSidebar";
import { cn } from "utils/ui_utils";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className={cn("h-screen", "m-6")}>
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
