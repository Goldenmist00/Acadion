"use client"

import { useEffect, useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type Person = {
  id: string
  name: string
  email: string
  finance: boolean
  warden: boolean
}

const STORAGE_KEY = "acadion-access-demo"

const seedPeople: Person[] = [
  { id: "p1", name: "Arjun Kumar", email: "arjun@example.com", finance: false, warden: false },
  { id: "p2", name: "Maya Lee", email: "maya@example.com", finance: true, warden: false },
  { id: "p3", name: "Sanjay Patel", email: "sanjay@example.com", finance: false, warden: true },
]

export function AccessManager() {
  const [people, setPeople] = useState<Person[]>([])

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setPeople(JSON.parse(raw))
      else setPeople(seedPeople)
    } catch {
      setPeople(seedPeople)
    }
  }, [])

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(people))
    } catch {}
  }, [people])

  const stats = useMemo(() => {
    return {
      financeCount: people.filter((p) => p.finance).length,
      wardenCount: people.filter((p) => p.warden).length,
    }
  }, [people])

  function toggleRole(id: string, role: "finance" | "warden") {
    setPeople((prev) => prev.map((p) => (p.id === id ? ({ ...p, [role]: !p[role] } as Person) : p)))
  }

  function resetDemo() {
    setPeople(seedPeople)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {}
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-balance">Access Management</CardTitle>
        <p className="text-sm text-muted-foreground">
          Grant or revoke Finance and Warden access. This is a demo; changes are saved to your browser only.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="rounded-md border p-3">
            <div className="text-sm text-muted-foreground">Finance Access</div>
            <div className="text-2xl font-semibold">{stats.financeCount}</div>
          </div>
          <div className="rounded-md border p-3">
            <div className="text-sm text-muted-foreground">Warden Access</div>
            <div className="text-2xl font-semibold">{stats.wardenCount}</div>
          </div>
          <div className="rounded-md border p-3">
            <div className="text-sm text-muted-foreground">Total People</div>
            <div className="text-2xl font-semibold">{people.length}</div>
          </div>
          <div className="rounded-md border p-3 flex items-end">
            <Button variant="outline" onClick={resetDemo} className="w-full bg-transparent">
              Reset demo
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <div className="grid grid-cols-5 gap-2 p-3 text-sm font-medium bg-muted/30">
            <div>Name</div>
            <div>Email</div>
            <div className="col-span-3">Roles</div>
          </div>
          {people.map((p) => (
            <div key={p.id} className="grid grid-cols-5 gap-2 items-center p-3 text-sm border-t">
              <div className="font-medium">{p.name}</div>
              <div className="text-muted-foreground">{p.email}</div>
              <div className="col-span-3 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Switch
                    id={`finance-${p.id}`}
                    checked={p.finance}
                    onCheckedChange={() => toggleRole(p.id, "finance")}
                  />
                  <Label htmlFor={`finance-${p.id}`}>Finance</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id={`warden-${p.id}`} checked={p.warden} onCheckedChange={() => toggleRole(p.id, "warden")} />
                  <Label htmlFor={`warden-${p.id}`}>Warden</Label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
