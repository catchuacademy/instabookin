// components/LayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useState } from 'react';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [headerName, setHeaderName] = useState<string>("");
  const pathname = usePathname();
  const showSidebar = pathname !== '/login';

  return (
    <>
      {showSidebar ?
          <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar setHeaderName={setHeaderName} variant="inset" />
      <SidebarInset>
        <SiteHeader headerName={headerName}/>
        {children}
        </SidebarInset>
    </SidebarProvider>
        : children}
    </>
  );
}
