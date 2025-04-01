"use client";

import { Calendar1, Home, LayoutDashboard } from "lucide-react";
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
  { url: "google.com", title: "Home", icon: Home },
  { url: "google.com", title: "Dashboard", icon: LayoutDashboard },
  { url: "google.com", title: "Reservation", icon: Calendar1 },
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
