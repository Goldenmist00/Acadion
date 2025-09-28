"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function LoginForm() {
  const [role, setRole] = useState<string>("admin")
  const router = useRouter()

  const handleLogin = () => {
    // Redirect based on role without any authentication
    switch (role) {
      case "admin":
        router.push("/admin")
        break
      case "student":
        router.push("/student")
        break
      case "staff":
        router.push("/staff")
        break
      case "finance":
        router.push("/finance")
        break
      case "warden":
        router.push("/warden")
        break
      default:
        router.push("/admin")
    }
  }
  return (
    <Card className="border-2 shadow-xl bg-background/80 backdrop-blur-sm">
      <CardHeader className="space-y-4 text-center">
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Choose your role and access your dashboard</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-sm font-medium">Select Your Role</Label>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="h-12 border-2" aria-label="Select role">
              <SelectValue placeholder="Choose your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">
                <div className="flex items-center gap-3">
                  <span className="text-lg">👨‍💼</span>
                  <div>
                    <div className="font-medium">Administrator</div>
                    <div className="text-xs text-muted-foreground">Full system access</div>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="student">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🎓</span>
                  <div>
                    <div className="font-medium">Student</div>
                    <div className="text-xs text-muted-foreground">Academic dashboard</div>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="staff">
                <div className="flex items-center gap-3">
                  <span className="text-lg">👨‍🏫</span>
                  <div>
                    <div className="font-medium">Staff</div>
                    <div className="text-xs text-muted-foreground">Teaching & management</div>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="finance">
                <div className="flex items-center gap-3">
                  <span className="text-lg">💰</span>
                  <div>
                    <div className="font-medium">Finance</div>
                    <div className="text-xs text-muted-foreground">Financial management</div>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="warden">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🏠</span>
                  <div>
                    <div className="font-medium">Warden</div>
                    <div className="text-xs text-muted-foreground">Hostel management</div>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-12 border-2"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="h-12 border-2"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm">
              Remember me
            </Label>
          </div>
          <Link href="/forgot-password" className="text-sm text-primary hover:underline">
            Forgot password?
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button
          onClick={handleLogin}
          className="w-full h-12 bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          Sign In to Dashboard
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          New to Acadion?{" "}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            Create an account
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
