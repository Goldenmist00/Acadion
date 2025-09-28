// Warden Dashboard - public view
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function WardenDashboardPage() {
  return (
    <main className="p-4 md:p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Hostel Management</h1>
          <p className="text-muted-foreground">Monitor and manage hostel operations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Room Allocation</Button>
          <Button className="bg-primary text-primary-foreground">New Complaint</Button>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Total Occupancy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-blue-600">88%</p>
            <p className="text-muted-foreground">542/615 beds</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Vacant Beds</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-green-600">73</p>
            <p className="text-muted-foreground">Available now</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Active Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-orange-600">19</p>
            <p className="text-muted-foreground">Pending resolution</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">₹8.9L</p>
            <p className="text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Hostel Block Status</h2>
          <div className="space-y-2">
            {[
              { block: "Block A (Boys)", occupied: 145, total: 160, complaints: 3 },
              { block: "Block B (Boys)", occupied: 138, total: 150, complaints: 1 },
              { block: "Block C (Girls)", occupied: 142, total: 155, complaints: 5 },
              { block: "Block D (Girls)", occupied: 117, total: 150, complaints: 2 },
            ].map((hostel, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{hostel.block}</h3>
                    <span className="text-sm font-semibold text-blue-600">
                      {Math.round((hostel.occupied / hostel.total) * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Occupied: {hostel.occupied}/{hostel.total}</span>
                    <span className={hostel.complaints > 3 ? "text-red-600" : "text-green-600"}>
                      {hostel.complaints} complaints
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(hostel.occupied / hostel.total) * 100}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Recent Complaints</h2>
          <div className="rounded-md border">
            <div className="grid grid-cols-4 gap-2 p-3 text-sm font-medium bg-muted/30">
              <div>Student</div>
              <div>Issue</div>
              <div>Block</div>
              <div>Status</div>
            </div>
            {[
              { student: "Rajesh Singh", issue: "AC not working", block: "A-204", status: "In Progress" },
              { student: "Priya Das", issue: "WiFi connectivity", block: "C-101", status: "New" },
              { student: "Harsh Patel", issue: "Water leakage", block: "B-305", status: "Resolved" },
              { student: "Anita Sharma", issue: "Electrical issue", block: "D-202", status: "Assigned" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-2 p-3 text-sm border-t">
                <div>{row.student}</div>
                <div>{row.issue}</div>
                <div className="font-mono">{row.block}</div>
                <div className={
                  row.status === "Resolved" ? "text-green-600 font-medium" : 
                  row.status === "In Progress" || row.status === "Assigned" ? "text-orange-600 font-medium" : 
                  "text-red-600 font-medium"
                }>
                  {row.status}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
            <span className="font-medium">Room Allocation</span>
            <span className="text-sm text-muted-foreground">Assign new students</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
            <span className="font-medium">Maintenance</span>
            <span className="text-sm text-muted-foreground">Schedule repairs</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
            <span className="font-medium">Visitor Log</span>
            <span className="text-sm text-muted-foreground">Track entries</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
            <span className="font-medium">Fee Collection</span>
            <span className="text-sm text-muted-foreground">Hostel payments</span>
          </Button>
        </div>
      </section>
    </main>
  )
}
