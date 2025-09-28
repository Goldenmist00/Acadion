"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export function CareerHubCard() {
  const [goal, setGoal] = useState("")
  const [interests, setInterests] = useState("")
  const [recommendations, setRecommendations] = useState<string[]>([])

  function recommend() {
    const hasDs = /data|ai|ml|analytics|science/i.test(interests + " " + goal)
    const hasFin = /fin|account|econom/i.test(interests + " " + goal)
    const hasDesign = /design|ui|ux|product/i.test(interests + " " + goal)

    const recs: string[] = []
    if (hasDs) {
      recs.push(
        "Coursera: Machine Learning Specialization",
        "Kaggle: Intro to Data Science",
        "AWS: Cloud Practitioner (for data tooling exposure)",
      )
    }
    if (hasFin) {
      recs.push(
        "NSE: Financial Modeling Basics",
        "CFA Institute: Investment Foundations",
        "Excel for Finance (Intermediate)",
      )
    }
    if (hasDesign) {
      recs.push(
        "Figma: Fundamentals",
        "Google UX Design Certificate (Foundations)",
        "Human-Computer Interaction (Intro)",
      )
    }
    if (recs.length === 0) {
      recs.push(
        "LinkedIn Learning: Career Exploration",
        "Foundations of Problem Solving & Communication",
        "Intro to SQL (universal skill)",
      )
    }
    setRecommendations(recs)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Career & Skill Development</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overview badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Skill Mapping</Badge>
          <Badge variant="outline">Jobs & Internships</Badge>
          <Badge variant="outline">AI Recommendations</Badge>
          <Badge variant="outline">Placement Prep</Badge>
        </div>

        {/* Skill Mapping quick inputs */}
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="goal">Career goal</Label>
            <Input
              id="goal"
              placeholder="e.g., Data Scientist, Financial Analyst, Product Designer"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interests">Interests & extracurriculars</Label>
            <Textarea
              id="interests"
              placeholder="Clubs, tech stacks, competitions, volunteering, certifications..."
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>
          <div>
            <Button onClick={recommend} className="bg-primary text-primary-foreground hover:opacity-90">
              Get AI Recommendations
            </Button>
          </div>
        </div>

        {/* AI-Powered Recommendations (demo) */}
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Suggested courses & certifications</h3>
          {recommendations.length === 0 ? (
            <p className="text-sm text-muted-foreground">Enter your goals and interests to see tailored suggestions.</p>
          ) : (
            <ul className="list-disc pl-5 text-sm">
              {recommendations.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Integrated Job & Internship Portal (placeholder) */}
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Jobs & Internships</h3>
          <p className="text-sm text-muted-foreground">
            Connects with partner companies so students can apply directly within the ERP.
          </p>
          <div className="flex gap-2">
            <Button variant="outline">Open Portal</Button>
            <Button variant="outline">Saved Positions</Button>
          </div>
        </div>

        {/* Placement Preparation Tools */}
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Placement Preparation</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary">Mock Interview</Button>
            <Button variant="secondary">Aptitude Tests</Button>
            <Button variant="secondary">Resume Builder</Button>
            <Button variant="secondary">Track Progress</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        This demo is local-only. In production, wire to AI routes and recruiter integrations.
      </CardFooter>
    </Card>
  )
}
