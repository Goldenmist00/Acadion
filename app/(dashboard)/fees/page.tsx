"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useRole } from "@/components/providers/role-provider"

export default function FeesPage() {
  const { role } = useRole()
  // Role-specific data
  const getDataForRole = () => {
    switch (role) {
      case "student":
        return {
          title: "My Fee Details",
          description: "View your fee structure and payment history",
          stats: [
            { title: "Total Fee", value: "₹62,000", subtext: "This semester", color: "text-blue-600" },
            { title: "Amount Paid", value: "₹45,000", subtext: "Completed", color: "text-green-600" },
            { title: "Balance Due", value: "₹17,000", subtext: "Due by Feb 15", color: "text-orange-600" },
            { title: "Late Fee", value: "₹0", subtext: "No penalty", color: "text-green-600" },
          ],
          transactions: [
            { id: "TXN-001", description: "Tuition Fee - Semester 6", amount: "₹45,000", status: "Paid", date: "2024-01-15" },
            { id: "TXN-002", description: "Hostel Fee - Semester 6", amount: "₹15,000", status: "Pending", date: "2024-01-14" },
            { id: "TXN-003", description: "Lab Fee - Advanced Programming", amount: "₹2,000", status: "Pending", date: "2024-01-10" },
          ]
        }
      case "finance":
        return {
          title: "Fee Management Dashboard",
          description: "Track payments, generate invoices, and manage fee structure",
          stats: [
            { title: "Total Collected", value: "₹2.4 Cr", subtext: "This semester", color: "text-green-600" },
            { title: "Pending Payments", value: "₹45.2 L", subtext: "Due this month", color: "text-orange-600" },
            { title: "Overdue Amount", value: "₹8.7 L", subtext: "Requires follow-up", color: "text-red-600" },
            { title: "Collection Rate", value: "84%", subtext: "On-time payments", color: "text-blue-600" },
          ],
          transactions: [
            { id: "TXN-001", student: "Arjun Sharma", amount: "₹45,000", type: "Tuition Fee", status: "Paid", date: "2024-01-15" },
            { id: "TXN-002", student: "Priya Patel", amount: "₹15,000", type: "Hostel Fee", status: "Pending", date: "2024-01-14" },
            { id: "TXN-003", student: "Rahul Kumar", amount: "₹5,000", type: "Lab Fee", status: "Overdue", date: "2024-01-10" },
            { id: "TXN-004", student: "Sneha Singh", amount: "₹45,000", type: "Tuition Fee", status: "Paid", date: "2024-01-12" },
          ]
        }
      case "warden":
        return {
          title: "Hostel Fee Management",
          description: "Monitor hostel fee payments and occupancy charges",
          stats: [
            { title: "Hostel Revenue", value: "₹8.9 L", subtext: "This month", color: "text-green-600" },
            { title: "Pending Hostel Fees", value: "₹1.2 L", subtext: "Outstanding", color: "text-orange-600" },
            { title: "Occupancy Rate", value: "88%", subtext: "Fee collection", color: "text-blue-600" },
            { title: "Defaulters", value: "23", subtext: "Students", color: "text-red-600" },
          ],
          transactions: [
            { id: "HST-001", student: "Rajesh Singh", amount: "₹15,000", type: "Hostel Fee", status: "Paid", date: "2024-01-15" },
            { id: "HST-002", student: "Priya Das", amount: "₹15,000", type: "Hostel Fee", status: "Overdue", date: "2024-01-10" },
            { id: "HST-003", student: "Harsh Patel", amount: "₹2,000", type: "Mess Fee", status: "Paid", date: "2024-01-12" },
          ]
        }
      default:
        return {
          title: "Fee Overview",
          description: "General fee information and statistics",
          stats: [
            { title: "Total Revenue", value: "₹3.2 Cr", subtext: "This year", color: "text-green-600" },
            { title: "Active Students", value: "1,247", subtext: "Fee paying", color: "text-blue-600" },
            { title: "Collection Rate", value: "92%", subtext: "Overall", color: "text-green-600" },
            { title: "Pending Amount", value: "₹25 L", subtext: "Outstanding", color: "text-orange-600" },
          ],
          transactions: [
            { id: "SUM-001", description: "Total Collections", amount: "₹2.4 Cr", status: "Collected", date: "2024-01-15" },
            { id: "SUM-002", description: "Pending Payments", amount: "₹45 L", status: "Pending", date: "2024-01-15" },
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
              <Button variant="outline">Download Receipt</Button>
              <Button className="bg-primary text-primary-foreground">Pay Now</Button>
            </>
          ) : role === "finance" ? (
            <>
              <Button variant="outline">Export Report</Button>
              <Button className="bg-primary text-primary-foreground">Generate Invoice</Button>
            </>
          ) : role === "warden" ? (
            <>
              <Button variant="outline">Hostel Report</Button>
              <Button className="bg-primary text-primary-foreground">Send Reminder</Button>
            </>
          ) : (
            <>
              <Button variant="outline">View Report</Button>
              <Button className="bg-primary text-primary-foreground">Manage Fees</Button>
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

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Fee Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { category: "Tuition Fee", amount: "₹45,000", collected: "₹1.8 Cr", pending: "₹20 L", rate: 90 },
              { category: "Hostel Fee", amount: "₹15,000", collected: "₹35 L", pending: "₹8 L", rate: 81 },
              { category: "Lab Fee", amount: "₹5,000", collected: "₹12 L", pending: "₹3 L", rate: 80 },
              { category: "Library Fee", amount: "₹2,000", collected: "₹4.5 L", pending: "₹1 L", rate: 82 },
            ].map((fee, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{fee.category}</h4>
                    <p className="text-sm text-muted-foreground">Per semester: {fee.amount}</p>
                  </div>
                  <span className="text-sm font-semibold text-green-600">{fee.rate}%</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Collected: {fee.collected}</span>
                  <span>Pending: {fee.pending}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${fee.rate}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              Send Payment Reminders
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Update Fee Structure
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Generate Bulk Invoices
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Export Payment Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Scholarship Management
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 items-center">
        <Input placeholder="Search transactions..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Fee Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="tuition">Tuition Fee</SelectItem>
            <SelectItem value="hostel">Hostel Fee</SelectItem>
            <SelectItem value="lab">Lab Fee</SelectItem>
            <SelectItem value="library">Library Fee</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {role === "student" ? "My Payment History" : 
             role === "warden" ? "Hostel Fee Transactions" : 
             "Recent Transactions"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            {role === "student" ? (
              <>
                <div className="grid grid-cols-4 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Transaction ID</div>
                  <div>Description</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                {data.transactions.map((txn, idx) => (
                  <div key={idx} className="grid grid-cols-4 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{txn.id}</div>
                    <div className="font-medium">{txn.description}</div>
                    <div className="font-semibold">{txn.amount}</div>
                    <div className={
                      txn.status === "Paid" ? "text-green-600 font-medium" :
                      "text-orange-600 font-medium"
                    }>
                      {txn.status}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="grid grid-cols-6 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Transaction ID</div>
                  <div>Student</div>
                  <div>Fee Type</div>
                  <div>Amount</div>
                  <div>Status</div>
                  <div>Date</div>
                </div>
                {data.transactions.map((txn, idx) => (
                  <div key={idx} className="grid grid-cols-6 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{txn.id}</div>
                    <div className="font-medium">{txn.student || txn.description}</div>
                    <div>{txn.type || "General"}</div>
                    <div className="font-semibold">{txn.amount}</div>
                    <div className={
                      txn.status === "Paid" || txn.status === "Collected" ? "text-green-600 font-medium" :
                      txn.status === "Overdue" ? "text-red-600 font-medium" :
                      "text-orange-600 font-medium"
                    }>
                      {txn.status}
                    </div>
                    <div className="text-muted-foreground">{txn.date}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
