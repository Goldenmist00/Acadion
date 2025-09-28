"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useRole } from "@/components/providers/role-provider"

export default function ExamsPage() {
  const { role } = useRole()
  // Role-specific data
  const getDataForRole = () => {
    switch (role) {
      case "student":
        return {
          title: "My Examinations",
          description: "View your exam schedule, results, and performance",
          stats: [
            { title: "Upcoming Exams", value: "4", subtext: "Next 30 days", color: "text-blue-600" },
            { title: "Current CGPA", value: "8.6", subtext: "Out of 10", color: "text-green-600" },
            { title: "Semester GPA", value: "8.8", subtext: "Current semester", color: "text-green-600" },
            { title: "Attendance", value: "92%", subtext: "Required: 75%", color: "text-green-600" },
          ],
          exams: [
            { subject: "Data Structures", date: "2024-02-15", time: "10:00 AM", room: "Lab-3", syllabus: "80% complete" },
            { subject: "Mathematics III", date: "2024-02-18", time: "2:00 PM", room: "A-204", syllabus: "95% complete" },
            { subject: "Computer Networks", date: "2024-02-22", time: "9:00 AM", room: "B-112", syllabus: "75% complete" },
          ],
          results: [
            { subject: "Operating Systems", score: 85, grade: "A", credits: 4, date: "2024-01-20" },
            { subject: "Software Engineering", score: 78, grade: "B+", credits: 3, date: "2024-01-18" },
            { subject: "Algorithms", score: 92, grade: "A+", credits: 4, date: "2024-01-15" },
          ]
        }
      case "staff":
        return {
          title: "My Course Examinations",
          description: "Manage exams for your courses and evaluate students",
          stats: [
            { title: "My Courses", value: "3", subtext: "This semester", color: "text-blue-600" },
            { title: "Students to Evaluate", value: "142", subtext: "Across courses", color: "text-orange-600" },
            { title: "Pending Evaluations", value: "23", subtext: "To be graded", color: "text-red-600" },
            { title: "Average Class Score", value: "78%", subtext: "Last exam", color: "text-green-600" },
          ],
          exams: [
            { subject: "Data Structures", date: "2024-02-15", students: 45, status: "Scheduled", papers: "Not Set" },
            { subject: "Algorithms", date: "2024-02-20", students: 42, status: "Paper Ready", papers: "Set" },
            { subject: "Database Systems", date: "2024-02-25", students: 38, status: "Scheduled", papers: "In Progress" },
          ],
          results: [
            { subject: "Operating Systems", students: 48, avgScore: 78, graded: 48, pending: 0 },
            { subject: "Software Engineering", students: 45, avgScore: 82, graded: 22, pending: 23 },
            { subject: "Web Development", students: 42, avgScore: 85, graded: 42, pending: 0 },
          ]
        }
      case "finance":
        return {
          title: "Examination Finances",
          description: "Track exam-related expenses and fee collections",
          stats: [
            { title: "Exam Fees Collected", value: "₹12.4 L", subtext: "This semester", color: "text-green-600" },
            { title: "Pending Exam Fees", value: "₹2.1 L", subtext: "Outstanding", color: "text-orange-600" },
            { title: "Exam Expenses", value: "₹3.8 L", subtext: "Operational costs", color: "text-blue-600" },
            { title: "Net Revenue", value: "₹8.6 L", subtext: "Profit margin", color: "text-green-600" },
          ],
          exams: [
            { type: "Mid-Semester", feeCollected: "₹6.2 L", pending: "₹0.8 L", students: 1247 },
            { type: "End-Semester", feeCollected: "₹6.2 L", pending: "₹1.3 L", students: 1247 },
            { type: "Supplementary", feeCollected: "₹0.8 L", pending: "₹0.2 L", students: 89 },
          ]
        }
      default:
        return {
          title: "Examination Management",
          description: "Schedule exams, manage results, and track performance",
          stats: [
            { title: "Upcoming Exams", value: "12", subtext: "Next 30 days", color: "text-blue-600" },
            { title: "Results Pending", value: "8", subtext: "Awaiting evaluation", color: "text-orange-600" },
            { title: "Average Pass Rate", value: "94%", subtext: "This semester", color: "text-green-600" },
            { title: "Total Students", value: "1,247", subtext: "Enrolled for exams", color: "text-blue-600" },
          ],
          exams: [
            { subject: "Data Structures", date: "2024-02-15", time: "10:00 AM", duration: "3 hours", room: "Lab-3", students: 45 },
            { subject: "Mathematics III", date: "2024-02-18", time: "2:00 PM", duration: "3 hours", room: "A-204", students: 52 },
            { subject: "Computer Networks", date: "2024-02-22", time: "9:00 AM", duration: "3 hours", room: "B-112", students: 38 },
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
              <Button variant="outline">Download Admit Card</Button>
              <Button className="bg-primary text-primary-foreground">View Results</Button>
            </>
          ) : role === "staff" ? (
            <>
              <Button variant="outline">Set Question Paper</Button>
              <Button className="bg-primary text-primary-foreground">Grade Papers</Button>
            </>
          ) : role === "finance" ? (
            <>
              <Button variant="outline">Fee Report</Button>
              <Button className="bg-primary text-primary-foreground">Send Notice</Button>
            </>
          ) : (
            <>
              <Button variant="outline">Upload Schedule</Button>
              <Button className="bg-primary text-primary-foreground">Create Exam</Button>
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
            <div className="flex justify-between items-center">
              <CardTitle>Upcoming Examinations</CardTitle>
              <Button size="sm" variant="outline">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.exams.map((exam, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{exam.subject}</h4>
                    <p className="text-sm text-muted-foreground">
                      {exam.date} • {exam.time} • {exam.room}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {exam.students} students • {exam.duration}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs">Edit</Button>
                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs">View</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Results</CardTitle>
              <Button size="sm" variant="outline">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.results ? data.results.map((result, idx) => (
                <div key={idx} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{result.subject}</h4>
                    <span className="text-xs text-muted-foreground">{result.date}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Students</p>
                      <p className="font-semibold">{result.students}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Avg Score</p>
                      <p className="font-semibold">{result.avgScore}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Pass Rate</p>
                      <p className="font-semibold text-green-600">{result.passRate}%</p>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center text-muted-foreground py-4">
                  No results available
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 items-center">
        <Input placeholder="Search exams or subjects..." className="max-w-sm" />
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
            <SelectValue placeholder="Semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Semesters</SelectItem>
            <SelectItem value="1">Semester 1</SelectItem>
            <SelectItem value="2">Semester 2</SelectItem>
            <SelectItem value="3">Semester 3</SelectItem>
            <SelectItem value="4">Semester 4</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Exam Schedule Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                <span className="font-medium">Upload Timetable</span>
                <span className="text-sm text-muted-foreground">Bulk upload exam schedule</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                <span className="font-medium">Room Allocation</span>
                <span className="text-sm text-muted-foreground">Assign exam halls</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                <span className="font-medium">Invigilator Assignment</span>
                <span className="text-sm text-muted-foreground">Manage exam supervision</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                <span className="font-medium">Admit Cards</span>
                <span className="text-sm text-muted-foreground">Generate hall tickets</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Analytics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-2xl font-semibold text-green-600">94%</p>
              <p className="text-xs text-muted-foreground">Overall Pass Rate</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-2xl font-semibold text-blue-600">78.5</p>
              <p className="text-xs text-muted-foreground">Average Score</p>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full text-xs">
                Department-wise Report
              </Button>
              <Button variant="outline" className="w-full text-xs">
                Subject-wise Analysis
              </Button>
              <Button variant="outline" className="w-full text-xs">
                Student Performance
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
