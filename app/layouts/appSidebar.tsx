"use client";

import { Calendar1, Home, LayoutDashboard, PersonStanding } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

type SidebarMenuItem = {
  url: string;
  title: string;
  icon: React.ComponentType;
};

const menus: SidebarMenuItem[] = [
  // { url: "/welcome", title: "Welcome", icon: Home },
  // { url: "/about", title: "About", icon: PersonStanding },
  // { url: "/home", title: "Home", icon: Home },
  { url: "/design/dashboard", title: "Dashboard", icon: LayoutDashboard },
  { url: "/design/manage", title: "예약 관리", icon: Calendar1 },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between px-4 py-6">
        <h1 className="text-lg font-bold">Reservation</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {menus.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
