"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Role = "admin" | "student" | "finance" | "warden" | "staff"

const roleNavigation: Record<Role, Array<{ href: string; label: string }>> = {
  admin: [
    { href: "/admin", label: "Dashboard" },
    { href: "/admissions", label: "Admissions" },
    { href: "/fees", label: "Fees" },
    { href: "/hostel", label: "Hostel" },
    { href: "/exams", label: "Exams" },
    { href: "/users", label: "Users" },
    { href: "/ai", label: "AI Predictor" },
    { href: "/career", label: "Career Hub" },
    { href: "/profile", label: "Profile" },
  ],
  student: [
    { href: "/student", label: "Dashboard" },
    { href: "/fees", label: "My Fees" },
    { href: "/exams", label: "Exams" },
    { href: "/hostel", label: "Hostel" },
    { href: "/career", label: "Career Hub" },
    { href: "/ai", label: "AI Support" },
    { href: "/profile", label: "Profile" },
  ],
  finance: [
    { href: "/finance", label: "Dashboard" },
    { href: "/fees", label: "Fee Management" },
    { href: "/admissions", label: "Admissions" },
    { href: "/users", label: "Students" },
    { href: "/profile", label: "Profile" },
  ],
  warden: [
    { href: "/warden", label: "Dashboard" },
    { href: "/hostel", label: "Hostel Management" },
    { href: "/users", label: "Residents" },
    { href: "/profile", label: "Profile" },
  ],
  staff: [
    { href: "/staff", label: "Dashboard" },
    { href: "/exams", label: "Exams" },
    { href: "/users", label: "Students" },
    { href: "/profile", label: "Profile" },
  ],
}

const roleLabels: Record<Role, string> = {
  admin: "Admin Panel",
  student: "Student Portal",
  finance: "Finance Department",
  warden: "Hostel Management",
  staff: "Staff Portal",
}

export function Sidebar({ role = "admin" }: { role?: Role }) {
  const pathname = usePathname()
  const items = roleNavigation[role] || roleNavigation.admin
  const dashboardHref = role === "admin" ? "/admin" : `/${role}`

  return (
    <aside className="w-full md:w-64 shrink-0 border-r bg-sidebar">
      <div className="p-4">
        <Link href={dashboardHref} className="block">
          <h2 className="font-semibold">Acadion</h2>
          <p className="text-xs text-muted-foreground">{roleLabels[role]}</p>
        </Link>
      </div>
      <nav className="px-2 pb-4">
        <ul className="grid gap-1">
          {items.map((item) => {
            const active = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm",
                    active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="mt-auto p-4 hidden md:block">
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link href="/">Back to site</Link>
        </Button>
      </div>
    </aside>
  )
}
