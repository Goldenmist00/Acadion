import type React from "react"
import { DashboardShell } from "@/components/layout/dashboard-shell"
import { RoleProvider } from "@/components/providers/role-provider"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RoleProvider>
      <DashboardShell>{children}</DashboardShell>
    </RoleProvider>
  )
}
