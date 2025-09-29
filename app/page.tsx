import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-xl">Acadion</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-primary text-primary-foreground hover:opacity-90">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center flex-1">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary">
              ✨ New • Acadion ERP Platform
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Modern ERP for Education
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-lg">
              Transform your educational institution with our comprehensive ERP solution. Streamline admissions, manage finances, and enhance student experience.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/login">
              <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Journey
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5">
                Explore Features
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
          <div className="relative border-2 shadow-2xl bg-background/80 backdrop-blur-sm rounded-2xl aspect-video"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold text-balance">
            All-in-one campus operations
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Acadion centralizes your critical workflows in an intuitive interface that your teams will love.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎓</span>
              </div>
              <CardTitle className="text-xl">Admissions</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              Streamline applications, reviews, and offers with transparent tracking and seamless communication workflows.
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-accent/5">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💰</span>
              </div>
              <CardTitle className="text-xl">Finance & Fees</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              Centralized fee management, automated receipts, and comprehensive reconciliation to reduce manual work.
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏠</span>
              </div>
              <CardTitle className="text-xl">Hostel Management</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              Allocate rooms, track occupancy, manage maintenance requests—all from one centralized platform.
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-accent/5">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <CardTitle className="text-xl">Analytics & Reports</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              Monitor trends and performance with accessible dashboards, automated reports, and actionable insights.
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-16">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">99.9%</div>
            <div className="text-lg font-medium">Uptime Guarantee</div>
            <div className="text-muted-foreground">Reliable service you can count on</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10k+</div>
            <div className="text-lg font-medium">Students Managed</div>
            <div className="text-muted-foreground">Across 500+ institutions</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2×</div>
            <div className="text-lg font-medium">Faster Operations</div>
            <div className="text-muted-foreground">Streamlined workflows</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl"></div>
          <Card className="relative border-2 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
            <CardContent className="p-12 text-center space-y-6">
              <h3 className="text-3xl font-bold text-balance">Ready to modernize your campus?</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of institutions already using Acadion to streamline their operations and enhance student experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/login">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-xl">Acadion</span>
            </div>
            <p className="text-muted-foreground">
              Modern ERP solution for educational institutions worldwide.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Features</div>
              <div>Pricing</div>
              <div>Security</div>
              <div>Updates</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>About</div>
              <div>Blog</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Help Center</div>
              <div>Documentation</div>
              <div>Community</div>
              <div>Status</div>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          © 2024 Acadion. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
