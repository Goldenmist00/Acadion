"use client"

import { Button } from "@/components/ui/button"
import { useRole } from "@/components/providers/role-provider"
import Link from "next/link"

type Role = "admin" | "student" | "finance" | "warden" | "staff"

const roleLabels: Record<Role, string> = {
  admin: "Administrator",
  student: "Student",
  finance: "Finance Officer",
  warden: "Hostel Warden",
  staff: "Staff Member",
}

export function Topbar({ role = "admin" }: { role?: Role }) {
  return (
    <header className="w-full border-b bg-background">
      <div className="h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Welcome,</span>
          <span className="font-medium">{roleLabels[role]}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Notifications
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:opacity-90" asChild>
            <Link href="/profile">Profile</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Logout</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
