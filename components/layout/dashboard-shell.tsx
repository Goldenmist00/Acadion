"use client"

import type React from "react"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"
import { useRole } from "@/components/providers/role-provider"

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { role, isLoaded } = useRole()
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen grid md:grid-cols-[16rem_1fr]">
      <Sidebar role={role} />
      <div className="flex flex-col">
        <Topbar role={role} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}

export function DashboardShell({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardContent>{children}</DashboardContent>
}
