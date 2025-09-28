// Finance Dashboard - public view
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FinanceDashboardPage() {
  return (
    <main className="p-4 md:p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Finance Dashboard</h1>
          <p className="text-muted-foreground">Financial overview and management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Generate Report</Button>
          <Button className="bg-primary text-primary-foreground">New Invoice</Button>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Today's Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-green-600">₹2,14,250</p>
            <p className="text-muted-foreground">+12% vs yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Outstanding</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-orange-600">₹8,24,300</p>
            <p className="text-muted-foreground">Due this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Refunds Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-blue-600">₹11,200</p>
            <p className="text-muted-foreground">Last 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Monthly Target</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">78%</p>
            <p className="text-muted-foreground">₹45L achieved</p>
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <div className="rounded-md border">
            <div className="grid grid-cols-4 gap-2 p-3 text-sm font-medium bg-muted/30">
              <div>Invoice ID</div>
              <div>Student</div>
              <div>Amount</div>
              <div>Status</div>
            </div>
            {[
              { id: "INV-4021", student: "Arjun Kumar", amount: "₹45,000", status: "Paid" },
              { id: "INV-4022", student: "Meera Singh", amount: "₹32,500", status: "Pending" },
              { id: "INV-4023", student: "Rahul Sharma", amount: "₹28,000", status: "Overdue" },
              { id: "INV-4024", student: "Priya Patel", amount: "₹41,200", status: "Paid" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-2 p-3 text-sm border-t">
                <div className="font-mono">{row.id}</div>
                <div>{row.student}</div>
                <div className="font-semibold">{row.amount}</div>
                <div className={
                  row.status === "Paid" ? "text-green-600 font-medium" : 
                  row.status === "Overdue" ? "text-red-600 font-medium" : 
                  "text-orange-600 font-medium"
                }>
                  {row.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Fee Categories</h2>
          <div className="space-y-2">
            {[
              { category: "Tuition Fees", collected: "₹18,45,000", pending: "₹2,15,000", percentage: 89 },
              { category: "Hostel Fees", collected: "₹8,90,000", pending: "₹1,10,000", percentage: 89 },
              { category: "Lab Fees", collected: "₹3,20,000", pending: "₹45,000", percentage: 88 },
              { category: "Library Fees", collected: "₹1,80,000", pending: "₹20,000", percentage: 90 },
            ].map((fee, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{fee.category}</h3>
                    <span className="text-sm font-semibold text-green-600">{fee.percentage}%</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Collected: {fee.collected}</span>
                    <span>Pending: {fee.pending}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${fee.percentage}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
            <span className="font-medium">Send Reminders</span>
            <span className="text-sm text-muted-foreground">23 overdue payments</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
            <span className="font-medium">Bulk Invoice</span>
            <span className="text-sm text-muted-foreground">Generate for semester</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
            <span className="font-medium">Fee Structure</span>
            <span className="text-sm text-muted-foreground">Update rates</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
            <span className="font-medium">Reports</span>
            <span className="text-sm text-muted-foreground">Monthly summary</span>
          </Button>
        </div>
      </section>
    </main>
  )
}
