"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const feeData = [
  { month: "Jan", amt: 120 },
  { month: "Feb", amt: 180 },
  { month: "Mar", amt: 150 },
  { month: "Apr", amt: 220 },
  { month: "May", amt: 200 },
  { month: "Jun", amt: 260 },
]

const passData = [
  { sem: "S1", pct: 78 },
  { sem: "S2", pct: 82 },
  { sem: "S3", pct: 80 },
  { sem: "S4", pct: 85 },
  { sem: "S5", pct: 83 },
  { sem: "S6", pct: 88 },
]

const hostelData = [
  { block: "A", used: 80 },
  { block: "B", used: 65 },
  { block: "C", used: 92 },
  { block: "D", used: 74 },
]

export function FeeTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Fee Collection Trend</CardTitle>
      </CardHeader>
      <CardContent className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={feeData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="amt" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function PassPercentChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Pass % by Semester</CardTitle>
      </CardHeader>
      <CardContent className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={passData}>
            <XAxis dataKey="sem" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pct" stroke="var(--chart-2)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function HostelCapacityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Hostel Capacity Utilization</CardTitle>
      </CardHeader>
      <CardContent className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={hostelData}>
            <XAxis dataKey="block" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="used" fill="var(--chart-3)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
