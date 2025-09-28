"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useRole } from "@/components/providers/role-provider"

export default function UsersPage() {
  const { role } = useRole()
  // Role-specific data
  const getDataForRole = () => {
    switch (role) {
      case "student":
        return {
          title: "My Profile & Classmates",
          description: "View your profile and connect with classmates",
          stats: [
            { title: "My Batch", value: "2024", subtext: "Computer Science", color: "text-blue-600" },
            { title: "Classmates", value: "45", subtext: "In your section", color: "text-green-600" },
            { title: "Study Groups", value: "3", subtext: "Active groups", color: "text-purple-600" },
            { title: "Friends", value: "12", subtext: "Connected", color: "text-pink-600" },
          ],
          users: [
            { id: "STU-001", name: "Rahul Kumar", course: "Computer Science", year: "3rd Year", section: "A", status: "Active" },
            { id: "STU-002", name: "Priya Patel", course: "Computer Science", year: "3rd Year", section: "A", status: "Active" },
            { id: "STU-003", name: "Sneha Singh", course: "Computer Science", year: "3rd Year", section: "A", status: "Active" },
          ]
        }
      case "staff":
        return {
          title: "My Students & Classes",
          description: "Manage your students and class information",
          stats: [
            { title: "My Students", value: "142", subtext: "Across all classes", color: "text-blue-600" },
            { title: "Active Classes", value: "6", subtext: "This semester", color: "text-green-600" },
            { title: "Pending Grades", value: "23", subtext: "To be submitted", color: "text-orange-600" },
            { title: "Office Hours", value: "8", subtext: "Hours per week", color: "text-purple-600" },
          ],
          users: [
            { id: "STU-001", name: "Arjun Sharma", course: "Data Structures", grade: "A", attendance: "92%" },
            { id: "STU-002", name: "Priya Patel", course: "Algorithms", grade: "A-", attendance: "88%" },
            { id: "STU-003", name: "Rahul Kumar", course: "Database Systems", grade: "B+", attendance: "85%" },
          ]
        }
      case "warden":
        return {
          title: "Hostel Residents",
          description: "Manage hostel residents and their information",
          stats: [
            { title: "Total Residents", value: "542", subtext: "Across all blocks", color: "text-blue-600" },
            { title: "Boys Hostel", value: "298", subtext: "Block A & B", color: "text-green-600" },
            { title: "Girls Hostel", value: "244", subtext: "Block C & D", color: "text-pink-600" },
            { title: "New Admissions", value: "23", subtext: "This month", color: "text-purple-600" },
          ],
          users: [
            { id: "RES-001", name: "Rajesh Singh", room: "A-204", block: "Block A", year: "2nd Year", status: "Active" },
            { id: "RES-002", name: "Priya Das", room: "C-101", block: "Block C", year: "3rd Year", status: "Active" },
            { id: "RES-003", name: "Harsh Patel", room: "B-305", block: "Block B", year: "1st Year", status: "Active" },
          ]
        }
      case "finance":
        return {
          title: "Student Financial Records",
          description: "Track student fee payments and financial status",
          stats: [
            { title: "Total Students", value: "1,247", subtext: "Fee paying", color: "text-blue-600" },
            { title: "Paid in Full", value: "1,058", subtext: "85% students", color: "text-green-600" },
            { title: "Partial Payment", value: "156", subtext: "12% students", color: "text-orange-600" },
            { title: "Defaulters", value: "33", subtext: "3% students", color: "text-red-600" },
          ],
          users: [
            { id: "FIN-001", name: "Arjun Sharma", totalFee: "₹62,000", paid: "₹62,000", status: "Paid", lastPayment: "2024-01-15" },
            { id: "FIN-002", name: "Priya Patel", totalFee: "₹62,000", paid: "₹45,000", status: "Partial", lastPayment: "2024-01-10" },
            { id: "FIN-003", name: "Rahul Kumar", totalFee: "₹62,000", paid: "₹30,000", status: "Overdue", lastPayment: "2023-12-15" },
          ]
        }
      default:
        return {
          title: "User Management",
          description: "Manage users, roles, and permissions across the system",
          stats: [
            { title: "Students", value: "1,247", color: "text-blue-600" },
            { title: "Staff", value: "89", color: "text-green-600" },
            { title: "Admin", value: "12", color: "text-purple-600" },
            { title: "Finance", value: "5", color: "text-orange-600" },
          ],
          users: [
            { id: "USR-001", name: "Dr. Rajesh Kumar", email: "rajesh.kumar@acadion.edu", role: "Admin", department: "Computer Science", status: "Active" },
            { id: "USR-002", name: "Arjun Sharma", email: "arjun.sharma@student.acadion.edu", role: "Student", department: "Computer Science", status: "Active" },
            { id: "USR-003", name: "Prof. Meera Singh", email: "meera.singh@acadion.edu", role: "Staff", department: "Electronics", status: "Active" },
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
              <Button variant="outline">Update Profile</Button>
              <Button className="bg-primary text-primary-foreground">Join Study Group</Button>
            </>
          ) : role === "staff" ? (
            <>
              <Button variant="outline">Export Grades</Button>
              <Button className="bg-primary text-primary-foreground">Add Student</Button>
            </>
          ) : role === "warden" ? (
            <>
              <Button variant="outline">Room Report</Button>
              <Button className="bg-primary text-primary-foreground">Allocate Room</Button>
            </>
          ) : role === "finance" ? (
            <>
              <Button variant="outline">Payment Report</Button>
              <Button className="bg-primary text-primary-foreground">Send Notice</Button>
            </>
          ) : (
            <>
              <Button variant="outline">Bulk Import</Button>
              <Button className="bg-primary text-primary-foreground">Add User</Button>
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
              <p className={`text-2xl font-semibold ${stat.color || "text-gray-600"}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.subtext || "Active users"}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { role: "Admin", permissions: ["Full System Access", "User Management", "System Configuration", "Reports & Analytics"] },
                { role: "Staff", permissions: ["Course Management", "Grade Entry", "Student Records", "Exam Scheduling"] },
                { role: "Finance", permissions: ["Fee Management", "Payment Processing", "Financial Reports", "Invoice Generation"] },
                { role: "Warden", permissions: ["Hostel Management", "Room Allocation", "Complaint Handling", "Resident Records"] },
                { role: "Student", permissions: ["View Grades", "Fee Payment", "Course Registration", "Profile Management"] },
              ].map((roleData, idx) => (
                <div key={idx} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{roleData.role}</h4>
                    <Button size="sm" variant="outline" className="h-6 px-2 text-xs">Edit</Button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {roleData.permissions.map((permission, permIdx) => (
                      <span key={permIdx} className="text-xs bg-muted px-2 py-1 rounded">
                        {permission}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              Bulk User Registration
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Password Reset
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Export User List
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Role Assignment
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Access Logs
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Deactivate Users
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 items-center">
        <Input placeholder="Search users..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="staff">Staff</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="warden">Warden</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="cs">Computer Science</SelectItem>
            <SelectItem value="ec">Electronics</SelectItem>
            <SelectItem value="me">Mechanical</SelectItem>
            <SelectItem value="admin">Administration</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {role === "student" ? "My Classmates" : 
             role === "staff" ? "My Students" : 
             role === "warden" ? "Hostel Residents" : 
             role === "finance" ? "Student Financial Records" : 
             "User Directory"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            {role === "student" ? (
              <>
                <div className="grid grid-cols-5 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Student ID</div>
                  <div>Name</div>
                  <div>Course</div>
                  <div>Year</div>
                  <div>Status</div>
                </div>
                {data.users.map((user, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{user.id}</div>
                    <div className="font-medium">{user.name}</div>
                    <div>{user.course}</div>
                    <div>{user.year}</div>
                    <div className="text-green-600 font-medium">{user.status}</div>
                  </div>
                ))}
              </>
            ) : role === "staff" ? (
              <>
                <div className="grid grid-cols-5 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Student ID</div>
                  <div>Name</div>
                  <div>Course</div>
                  <div>Grade</div>
                  <div>Attendance</div>
                </div>
                {data.users.map((user, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{user.id}</div>
                    <div className="font-medium">{user.name}</div>
                    <div>{user.course}</div>
                    <div className="font-semibold text-green-600">{user.grade}</div>
                    <div>{user.attendance}</div>
                  </div>
                ))}
              </>
            ) : role === "warden" ? (
              <>
                <div className="grid grid-cols-5 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Resident ID</div>
                  <div>Name</div>
                  <div>Room</div>
                  <div>Block</div>
                  <div>Status</div>
                </div>
                {data.users.map((user, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{user.id}</div>
                    <div className="font-medium">{user.name}</div>
                    <div className="font-mono">{user.room}</div>
                    <div>{user.block}</div>
                    <div className="text-green-600 font-medium">{user.status}</div>
                  </div>
                ))}
              </>
            ) : role === "finance" ? (
              <>
                <div className="grid grid-cols-5 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>Student ID</div>
                  <div>Name</div>
                  <div>Total Fee</div>
                  <div>Paid</div>
                  <div>Status</div>
                </div>
                {data.users.map((user, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{user.id}</div>
                    <div className="font-medium">{user.name}</div>
                    <div className="font-semibold">{user.totalFee}</div>
                    <div className="font-semibold">{user.paid}</div>
                    <div className={
                      user.status === "Paid" ? "text-green-600 font-medium" :
                      user.status === "Partial" ? "text-orange-600 font-medium" :
                      "text-red-600 font-medium"
                    }>
                      {user.status}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="grid grid-cols-6 gap-4 p-3 text-sm font-medium bg-muted/30">
                  <div>User ID</div>
                  <div>Name</div>
                  <div>Email</div>
                  <div>Role</div>
                  <div>Department</div>
                  <div>Status</div>
                </div>
                {data.users.map((user, idx) => (
                  <div key={idx} className="grid grid-cols-6 gap-4 p-3 text-sm border-t items-center">
                    <div className="font-mono text-xs">{user.id}</div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-muted-foreground">{user.email}</div>
                    <div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        user.role === "Admin" ? "bg-purple-100 text-purple-700" :
                        user.role === "Student" ? "bg-blue-100 text-blue-700" :
                        user.role === "Staff" ? "bg-green-100 text-green-700" :
                        user.role === "Finance" ? "bg-orange-100 text-orange-700" :
                        "bg-pink-100 text-pink-700"
                      }`}>
                        {user.role}
                      </span>
                    </div>
                    <div>{user.department}</div>
                    <div className={
                      user.status === "Active" ? "text-green-600 font-medium" :
                      "text-red-600 font-medium"
                    }>
                      {user.status}
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
