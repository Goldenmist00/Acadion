import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function AIPredictorCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">AI Student Success Predictor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Risk Level</span>
          <Badge variant="outline" className="border-primary text-primary">
            Medium
          </Badge>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Next semester performance prediction</p>
          <Progress value={62} className="h-2" />
        </div>
        <p className="text-xs text-muted-foreground">Placeholder only. Integrate with AI SDK later.</p>
      </CardContent>
    </Card>
  )
}
