"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useRole } from "@/components/providers/role-provider"

export default function HostelPage() {
  const { role } = useRole()
  // Role-specific data
  const getDataForRole = () => {
    switch (role) {
      case "student":
        return {
          title: "My Hostel Information",
          description: "View your room details and hostel services",
          stats: [
            { title: "Room Number", value: "A-204", subtext: "Block A, Floor 2", color: "text-blue-600" },
            { title: "Roommate", value: "Rahul Kumar", subtext: "CS Engineering", color: "text-green-600" },
            { title: "Mess Plan", value: "Premium", subtext: "₹4,500/month", color: "text-purple-600" },
            { title: "Complaints", value: "0", subtext: "No active issues", color: "text-green-600" },
          ],
          data: [
            { type: "Room Details", info: "Double occupancy room with attached bathroom", status: "Active" },
            { type: "Mess Subscription", info: "Premium plan - All meals included", status: "Active" },
            { type: "Laundry Service", info: "Weekly pickup and delivery", status: "Active" },
            { type: "WiFi Access", info: "High-speed internet - 100 Mbps", status: "Active" },
          ]
        }
      case "warden":
        return {
          title: "Hostel Management Dashboard",
          description: "Monitor occupancy, manage room allocations, and track maintenance",
          stats: [
            { title: "Total Capacity", value: "615", subtext: "Across all blocks", color: "text-blue-600" },
            { title: "Current Occupancy", value: "542", subtext: "88% occupied", color: "text-blue-600" },
            { title: "Vacant Rooms", value: "66", subtext: "Available for allocation", color: "text-green-600" },
            { title: "Under Maintenance", value: "7", subtext: "Temporarily unavailable", color: "text-orange-600" },
          ],
          data: [
            { name: "Block A (Boys)", total: 160, occupied: 145, vacant: 15, maintenance: 0 },
            { name: "Block B (Boys)", total: 150, occupied: 138, vacant: 10, maintenance: 2 },
            { name: "Block C (Girls)", total: 155, occupied: 142, vacant: 11, maintenance: 2 },
            { name: "Block D (Girls)", total: 150, occupied: 117, vacant: 30, maintenance: 3 },
          ]
        }
      case "finance":
        return {
          title: "Hostel Revenue Management",
          description: "Track hostel fees, occupancy charges, and financial performance",
          stats: [
            { title: "Monthly Revenue", value: "₹8.9 L", subtext: "Hostel fees", color: "text-green-600" },
            { title: "Occupancy Revenue", value: "₹7.2 L", subtext: "Room charges", color: "text-blue-600" },
            { title: "Mess Revenue", value: "₹1.7 L", subtext: "Food services", color: "text-purple-600" },
            { title: "Outstanding", value: "₹1.2 L", subtext: "Pending payments", color: "text-orange-600" },
          ],
          data: [
            { block: "Block A", revenue: "₹2.4 L", occupancy: "90%", outstanding: "₹15,000" },
            { block: "Block B", revenue: "₹2.1 L", occupancy: "92%", outstanding: "₹8,000" },
            { block: "Block C", revenue: "₹2.2 L", occupancy: "91%", outstanding: "₹12,000" },
            { block: "Block D", revenue: "₹2.2 L", occupancy: "78%", outstanding: "₹25,000" },
          ]
        }
      default:
        return {
          title: "Hostel Overview",
          description: "General hostel statistics and information",
          stats: [
            { title: "Total Students", value: "542", subtext: "In hostels", color: "text-blue-600" },
            { title: "Occupancy Rate", value: "88%", subtext: "Overall", color: "text-green-600" },
            { title: "Satisfaction Rate", value: "92%", subtext: "Student feedback", color: "text-green-600" },
            { title: "Active Complaints", value: "19", subtext: "Being resolved", color: "text-orange-600" },
          ],
          data: [
            { metric: "Total Capacity", value: "615 beds", trend: "Stable" },
            { metric: "Average Occupancy", value: "88%", trend: "Increasing" },
            { metric: "Monthly Revenue", value: "₹8.9 L", trend: "Growing" },
            { metric: "Maintenance Cost", value: "₹45,000", trend: "Decreasing" },
          ]
        }
    }
  }

  const data = getDataForRole()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <p className="text-muted-foreground">{data.description}</p>
        </div>
        <div className="flex gap-2">
          {role === "student" ? (
            <>
              <Button variant="outline">Raise Complaint</Button>
              <Button className="bg-primary text-primary-foreground">Request Service</Button>
            </>
          ) : role === "warden" ? (
            <>
              <Button variant="outline">Room Allocation</Button>
              <Button className="bg-primary text-primary-foreground">Add Student</Button>
            </>
          ) : role === "finance" ? (
            <>
              <Button variant="outline">Revenue Report</Button>
              <Button className="bg-primary text-primary-foreground">Send Invoice</Button>
            </>
          ) : (
            <>
              <Button variant="outline">View Report</Button>
              <Button className="bg-primary text-primary-foreground">Manage Hostel</Button>
            </>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {data.stats.map((stat, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-sm">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.subtext}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Block-wise Occupancy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {blocks.map((block, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{block.name}</h4>
                  <span className="text-sm font-semibold text-blue-600">
                    {Math.round((block.occupied / block.total) * 100)}%
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <span>Occupied: {block.occupied}</span>
                  <span>Vacant: {block.vacant}</span>
                  <span>Maintenance: {block.maintenance}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(block.occupied / block.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-semibold text-blue-600">298</p>
                <p className="text-xs text-muted-foreground">Boys Hostel</p>
              </div>
              <div className="text-center p-3 bg-pink-50 rounded-lg">
                <p className="text-2xl font-semibold text-pink-600">244</p>
                <p className="text-xs text-muted-foreground">Girls Hostel</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Monthly Revenue</span>
                <span className="font-semibold">₹8.9 Lakhs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Pending Fees</span>
                <span className="font-semibold text-orange-600">₹1.2 Lakhs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Active Complaints</span>
                <span className="font-semibold text-red-600">19</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 items-center">
        <Input placeholder="Search rooms or students..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Block" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Blocks</SelectItem>
            <SelectItem value="a">Block A</SelectItem>
            <SelectItem value="b">Block B</SelectItem>
            <SelectItem value="c">Block C</SelectItem>
            <SelectItem value="d">Block D</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="occupied">Occupied</SelectItem>
            <SelectItem value="vacant">Vacant</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Room Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-5 gap-4 p-3 text-sm font-medium bg-muted/30">
              <div>Room Number</div>
              <div>Block</div>
              <div>Type</div>
              <div>Occupant(s)</div>
              <div>Status</div>
            </div>
            {rooms.map((room, idx) => (
              <div key={idx} className="grid grid-cols-5 gap-4 p-3 text-sm border-t items-center">
                <div className="font-mono font-medium">{room.number}</div>
                <div>{room.block}</div>
                <div>{room.type}</div>
                <div className={room.occupant === "-" ? "text-muted-foreground" : ""}>
                  {room.occupant}
                </div>
                <div className={
                  room.status === "Occupied" ? "text-green-600 font-medium" :
                  room.status === "Vacant" ? "text-blue-600 font-medium" :
                  room.status === "Maintenance" ? "text-red-600 font-medium" :
                  "text-orange-600 font-medium"
                }>
                  {room.status}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
