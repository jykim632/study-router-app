"use client";

import {
  Calendar1,
  Home,
  LayoutDashboard,
  PersonStanding,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";

type SidebarMenuItem = {
  url: string;
  title: string;
  icon: React.ComponentType;
  children?: SidebarMenuItem[];
};

const menus: SidebarMenuItem[] = [
  // { url: "/welcome", title: "Welcome", icon: Home },
  // { url: "/about", title: "About", icon: PersonStanding },
  // { url: "/home", title: "Home", icon: Home },
  { url: "/design/dashboard", title: "Dashboard", icon: LayoutDashboard },
  {
    url: "/design/manage",
    title: "예약 관리",
    icon: Settings,
    children: [
      { url: "/design/list", title: "예약 리스트", icon: Calendar1 },
      { url: "/design/calendar", title: "예약 달력", icon: Calendar1 },
    ],
  },
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
              {menus.map((item) => {
                if (item.children) {
                  return (
                    <Collapsible key={item.url}>
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton asChild>
                            <div>
                              <item.icon />
                              <span>{item.title}</span>
                            </div>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {item.children.map((child) => {
                            return (
                              <SidebarMenuButton key={child.url}>
                                <NavLink to={child.url}>
                                  {child.title}
                                </NavLink>
                              </SidebarMenuButton>
                            );
                          })}
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
