import { AIPredictorCard } from "@/components/ai/ai-predictor-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AIPage() {
  const predictions = [
    { student: "Arjun Sharma", riskLevel: "Low", score: 92, factors: ["High Attendance", "Good Grades", "Active Participation"] },
    { student: "Priya Patel", riskLevel: "Medium", score: 68, factors: ["Declining Grades", "Missed Assignments", "Low Engagement"] },
    { student: "Rahul Kumar", riskLevel: "High", score: 45, factors: ["Poor Attendance", "Failed Exams", "No Submissions"] },
    { student: "Sneha Singh", riskLevel: "Low", score: 88, factors: ["Consistent Performance", "Regular Attendance", "Good Participation"] },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">AI Student Success Predictor</h1>
          <p className="text-muted-foreground">Leverage AI to identify at-risk students and improve outcomes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Generate Report</Button>
          <Button className="bg-primary text-primary-foreground">Run Analysis</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Students Analyzed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">1,247</p>
            <p className="text-xs text-muted-foreground">Total active students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">High Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-red-600">89</p>
            <p className="text-xs text-muted-foreground">Require immediate attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Medium Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-orange-600">234</p>
            <p className="text-xs text-muted-foreground">Need monitoring</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Low Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-green-600">924</p>
            <p className="text-xs text-muted-foreground">On track for success</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AIPredictorCard />
        
        <Card>
          <CardHeader>
            <CardTitle>AI Insights & Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-medium text-red-800">Critical Alert</h4>
              <p className="text-sm text-red-700">89 students showing high dropout risk. Immediate intervention recommended.</p>
            </div>
            <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <h4 className="font-medium text-orange-800">Attention Needed</h4>
              <p className="text-sm text-orange-700">234 students with declining performance patterns detected.</p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800">Success Indicators</h4>
              <p className="text-sm text-green-700">924 students showing positive learning trajectories.</p>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-sm">
                📊 View Detailed Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                📧 Send Intervention Alerts
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                📈 Performance Trends
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-4 gap-4 p-3 text-sm font-medium bg-muted/30">
              <div>Student Name</div>
              <div>Risk Level</div>
              <div>Success Score</div>
              <div>Key Factors</div>
            </div>
            {predictions.map((pred, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-4 p-3 text-sm border-t items-center">
                <div className="font-medium">{pred.student}</div>
                <div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    pred.riskLevel === "High" ? "bg-red-100 text-red-700" :
                    pred.riskLevel === "Medium" ? "bg-orange-100 text-orange-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {pred.riskLevel} Risk
                  </span>
                </div>
                <div className={`font-semibold ${
                  pred.score >= 80 ? "text-green-600" :
                  pred.score >= 60 ? "text-orange-600" :
                  "text-red-600"
                }`}>
                  {pred.score}%
                </div>
                <div className="text-xs">
                  {pred.factors.slice(0, 2).map((factor, factorIdx) => (
                    <span key={factorIdx} className="inline-block bg-muted px-1 py-0.5 rounded mr-1 mb-1">
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
