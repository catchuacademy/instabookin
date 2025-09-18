"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useSession } from "next-auth/react"
import { url } from "inspector"
import { usePathname } from "next/navigation"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true
    },
    {
      title: "Trips",
      url : "/trips",
      icon: Bot,
    },
    {
      title: "Driver Management",
      icon: Bot,
      items: [
        {
          title: "Driver List",
          url: "/driver-list",
        },
        {
          title: "Add Driver",
          url: "/add-driver",
        }
      ],
    },
    {
      title: "Customer Management",
      icon: BookOpen,
      items: [
        {
          title: "Customer List",
          url: "/customer-list",
        },
        {
          title: "Add Customer",
          url: "/add-customer",
        }
      ],
    },
    {
      title: "Settings",
      icon: Settings2,
      items: [
        {
          title: "Trip Fare Setup",
          url: "/trip-fare-setup",
        },
        {
          title: "Email Templates",
          url: "/email-templates",
        }
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ setHeaderName, variant }: { setHeaderName: React.Dispatch<React.SetStateAction<string>>; variant: string }) {
  
  const { data: session } = useSession();

  const pathname = usePathname();
  
  React.useEffect(() => {
    const activeItem = data.navMain.find(item => item.url === pathname);
    if (activeItem) {
      setHeaderName(activeItem.title);
    } else {
      setHeaderName("");
    }
  }, [pathname, setHeaderName]);

  return (
    <Sidebar variant="inset" >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">EC Auto</span>
                  <span className="truncate text-xs">Catchu IT Solutions</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain setHeaderName={setHeaderName} items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: session?.user?.name ?? "Unknown",
            email: session?.user?.email ?? "unknown@example.com",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}
