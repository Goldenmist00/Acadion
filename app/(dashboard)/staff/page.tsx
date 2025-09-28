// Staff Dashboard - public view
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffDashboardPage() {
  return (
    <main className="p-4 md:p-6 space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">My Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">6</p>
            <p className="text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">142</p>
            <p className="text-muted-foreground">Total enrolled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-balance">Pending Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">23</p>
            <p className="text-muted-foreground">To be submitted</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Today's Schedule</h2>
        <div className="rounded-md border">
          <div className="grid grid-cols-4 gap-2 p-3 text-sm font-medium bg-muted/30">
            <div>Time</div>
            <div>Subject</div>
            <div>Class</div>
            <div>Room</div>
          </div>
          {[
            { time: "9:00 AM", subject: "Mathematics", class: "CS-2A", room: "A-201" },
            { time: "11:00 AM", subject: "Data Structures", class: "CS-2B", room: "Lab-3" },
            { time: "2:00 PM", subject: "Algorithms", class: "CS-3A", room: "A-205" },
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-2 p-3 text-sm border-t">
              <div>{row.time}</div>
              <div>{row.subject}</div>
              <div>{row.class}</div>
              <div>{row.room}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Recent Announcements</h2>
        <div className="space-y-2">
          {[
            { title: "Faculty Meeting", date: "Oct 15", content: "Monthly faculty meeting scheduled for 3 PM in Conference Room A" },
            { title: "Exam Schedule", date: "Oct 12", content: "Mid-semester exam schedule has been published" },
            { title: "Holiday Notice", date: "Oct 10", content: "Campus will be closed on Oct 20 for Diwali celebrations" },
          ].map((announcement, idx) => (
            <Card key={idx}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-sm">{announcement.title}</CardTitle>
                  <span className="text-xs text-muted-foreground">{announcement.date}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}