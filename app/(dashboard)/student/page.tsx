// Student Dashboard - public view
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function StudentDashboardPage() {
  return (
    <main className="p-4 md:p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Alex Johnson</p>
        </div>
        <Button className="bg-primary text-primary-foreground">Quick Actions</Button>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-green-600">92%</p>
            <p className="text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">CGPA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-blue-600">8.6</p>
            <p className="text-muted-foreground">Out of 10</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Pending Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-green-600">₹0</p>
            <p className="text-muted-foreground">All clear</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">156</p>
            <p className="text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Upcoming Exams</h2>
          <div className="rounded-md border">
            <div className="grid grid-cols-3 gap-2 p-3 text-sm font-medium bg-muted/30">
              <div>Course</div>
              <div>Date & Time</div>
              <div>Room</div>
            </div>
            {[
              { course: "Data Structures", date: "Oct 15, 10:00 AM", room: "Lab-3" },
              { course: "Mathematics III", date: "Oct 18, 2:00 PM", room: "A-204" },
              { course: "Computer Networks", date: "Oct 22, 9:00 AM", room: "B-112" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-2 p-3 text-sm border-t">
                <div className="font-medium">{row.course}</div>
                <div>{row.date}</div>
                <div>{row.room}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Recent Grades</h2>
          <div className="rounded-md border">
            <div className="grid grid-cols-3 gap-2 p-3 text-sm font-medium bg-muted/30">
              <div>Subject</div>
              <div>Grade</div>
              <div>Credits</div>
            </div>
            {[
              { subject: "Algorithms", grade: "A", credits: "4" },
              { subject: "Database Systems", grade: "A-", credits: "3" },
              { subject: "Software Engineering", grade: "B+", credits: "4" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-2 p-3 text-sm border-t">
                <div>{row.subject}</div>
                <div className="font-semibold text-green-600">{row.grade}</div>
                <div>{row.credits}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Today's Schedule</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { time: "9:00 AM", subject: "Operating Systems", room: "A-301", type: "Lecture" },
            { time: "11:00 AM", subject: "Machine Learning", room: "Lab-2", type: "Lab" },
            { time: "2:00 PM", subject: "Compiler Design", room: "B-205", type: "Tutorial" },
          ].map((class_, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{class_.subject}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{class_.type}</span>
                </div>
                <p className="text-sm text-muted-foreground">{class_.time} • {class_.room}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
