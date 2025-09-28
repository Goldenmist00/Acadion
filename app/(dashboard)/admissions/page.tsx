"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useRole } from "@/components/providers/role-provider"

export default function AdmissionsPage() {
  const { role } = useRole()
  // Role-specific data
  const getDataForRole = () => {
    switch (role) {
      case "student":
        return {
          title: "My Application Status",
          description: "Track your admission application and requirements",
          stats: [
            { title: "Application Status", value: "Approved", subtext: "Congratulations!", color: "text-green-600" },
            { title: "Entrance Score", value: "92%", subtext: "Excellent performance", color: "text-blue-600" },
            { title: "Documents", value: "Complete", subtext: "All submitted", color: "text-green-600" },
            { title: "Fee Payment", value: "Pending", subtext: "Due by Feb 15", color: "text-orange-600" },
          ],
          applications: [
            { id: "ADM-2024-001", course: "Computer Science Engineering", status: "Approved", date: "2024-01-15", score: 92, requirements: "Fee Payment Pending" },
          ]
        }
      case "finance":
        return {
          title: "Admission Fee Management",
          description: "Track admission fees and payment status",
          stats: [
            { title: "Admission Fees", value: "₹1.2 Cr", subtext: "Collected", color: "text-green-600" },
            { title: "Pending Payments", value: "₹15 L", subtext: "Outstanding", color: "text-orange-600" },
            { title: "Approved Students", value: "892", subtext: "Fee required", color: "text-blue-600" },
            { title: "Collection Rate", value: "89%", subtext: "Admission fees", color: "text-green-600" },
          ],
          applications: [
            { id: "ADM-2024-001", name: "Arjun Sharma", course: "Computer Science", feeStatus: "Paid", amount: "₹1,50,000", date: "2024-01-15" },
            { id: "ADM-2024-002", name: "Priya Patel", course: "Electronics", feeStatus: "Pending", amount: "₹1,25,000", date: "2024-01-14" },
            { id: "ADM-2024-003", name: "Rahul Kumar", course: "Mechanical", feeStatus: "Overdue", amount: "₹1,30,000", date: "2024-01-10" },
          ]
        }
      case "staff":
        return {
          title: "Department Admissions",
          description: "Review applications for your department",
          stats: [
            { title: "Applications", value: "156", subtext: "Computer Science", color: "text-blue-600" },
            { title: "Pending Review", value: "23", subtext: "Awaiting evaluation", color: "text-orange-600" },
            { title: "Approved", value: "98", subtext: "This semester", color: "text-green-600" },
            { title: "Interview Scheduled", value: "12", subtext: "This week", color: "text-purple-600" },
          ],
          applications: [
            { id: "ADM-2024-001", name: "Arjun Sharma", course: "Computer Science", status: "Pending Review", score: 85, interview: "Scheduled" },
            { id: "ADM-2024-002", name: "Priya Patel", course: "Computer Science", status: "Approved", score: 92, interview: "Completed" },
            { id: "ADM-2024-003", name: "Rahul Kumar", course: "Computer Science", status: "Under Review", score: 78, interview: "Pending" },
          ]
        }
      default:
        return {
          title: "Admissions Management",
          description: "Review and manage student applications",
          stats: [
            { title: "Total Applications", value: "1,247", subtext: "This academic year", color: "text-blue-600" },
            { title: "Pending Review", value: "89", subtext: "Awaiting decision", color: "text-orange-600" },
            { title: "Approved", value: "892", subtext: "71% acceptance rate", color: "text-green-600" },
            { title: "Rejected", value: "266", subtext: "21% rejection rate", color: "text-red-600" },
          ],
          applications: [
            { id: "ADM-2024-001", name: "Arjun Sharma", course: "Computer Science", status: "Pending", date: "2024-01-15", score: 85 },
            { id: "ADM-2024-002", name: "Priya Patel", course: "Electronics", status: "Approved", date: "2024-01-14", score: 92 },
            { id: "ADM-2024-003", name: "Rahul Kumar", course: "Mechanical", status: "Under Review", date: "2024-01-13", score: 78 },
            { id: "ADM-2024-004", name: "Sneha Singh", course: "Civil", status: "Pending", date: "2024-01-12", score: 88 },
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
        {role === "student" ? (
          <Button className="bg-primary text-primary-foreground">Update Documents</Button>
        ) : role === "finance" ? (
          <Button className="bg-primary text-primary-foreground">Send Fee Notice</Button>
        ) : role === "staff" ? (
          <Button className="bg-primary text-primary-foreground">Schedule Interview</Button>
        ) : (
          <Button className="bg-primary text-primary-foreground">New Application</Button>
        )}
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

      <div className="flex gap-4 items-center">
        <Input placeholder="Search applications..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="cs">Computer Science</SelectItem>
            <SelectItem value="ec">Electronics</SelectItem>
            <SelectItem value="me">Mechanical</SelectItem>
            <SelectItem value="ce">Civil</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {role === "student" ? "My Application Details" : 
             role === "finance" ? "Fee Payment Status" : 
             role === "staff" ? "Department Applications" : 
             "Recent Applications"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            {role === "student" ? (
              <>
                <div className="grid grid-cols-4 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Application ID</div>
                  <div>Course</div>
                  <div>Status</div>
                  <div>Requirements</div>
                </div>
                {data.applications.map((app, idx) => (
                  <div key={idx} className="grid grid-cols-4 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{app.id}</div>
                    <div className="font-medium">{app.course}</div>
                    <div className={
                      app.status === "Approved" ? "text-green-600 font-medium" :
                      "text-orange-600 font-medium"
                    }>
                      {app.status}
                    </div>
                    <div className="text-xs">{app.requirements}</div>
                  </div>
                ))}
              </>
            ) : role === "finance" ? (
              <>
                <div className="grid grid-cols-5 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Application ID</div>
                  <div>Student Name</div>
                  <div>Course</div>
                  <div>Fee Amount</div>
                  <div>Payment Status</div>
                </div>
                {data.applications.map((app, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{app.id}</div>
                    <div className="font-medium">{app.name}</div>
                    <div>{app.course}</div>
                    <div className="font-semibold">{app.amount}</div>
                    <div className={
                      app.feeStatus === "Paid" ? "text-green-600 font-medium" :
                      app.feeStatus === "Overdue" ? "text-red-600 font-medium" :
                      "text-orange-600 font-medium"
                    }>
                      {app.feeStatus}
                    </div>
                  </div>
                ))}
              </>
            ) : role === "staff" ? (
              <>
                <div className="grid grid-cols-5 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Application ID</div>
                  <div>Student Name</div>
                  <div>Score</div>
                  <div>Status</div>
                  <div>Interview</div>
                </div>
                {data.applications.map((app, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{app.id}</div>
                    <div className="font-medium">{app.name}</div>
                    <div className="font-semibold">{app.score}%</div>
                    <div className={
                      app.status === "Approved" ? "text-green-600 font-medium" :
                      app.status === "Pending Review" ? "text-orange-600 font-medium" :
                      "text-blue-600 font-medium"
                    }>
                      {app.status}
                    </div>
                    <div className="text-xs">{app.interview}</div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="grid grid-cols-6 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Application ID</div>
                  <div>Student Name</div>
                  <div>Course</div>
                  <div>Score</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                {data.applications.map((app, idx) => (
                  <div key={idx} className="grid grid-cols-6 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{app.id}</div>
                    <div className="font-medium">{app.name}</div>
                    <div>{app.course}</div>
                    <div className="font-semibold">{app.score}%</div>
                    <div className={
                      app.status === "Approved" ? "text-green-600 font-medium" :
                      app.status === "Rejected" ? "text-red-600 font-medium" :
                      "text-orange-600 font-medium"
                    }>
                      {app.status}
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">View</Button>
                      {app.status === "Pending" && (
                        <>
                          <Button size="sm" className="h-7 px-2 text-xs bg-green-600 text-white">Approve</Button>
                          <Button size="sm" variant="outline" className="h-7 px-2 text-xs text-red-600">Reject</Button>
                        </>
                      )}
                    </div>
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
