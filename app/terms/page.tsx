import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-xl">Acadion</span>
        </Link>
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          ← Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl">Terms of Service</CardTitle>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Acadion ERP, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily use Acadion ERP for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for safeguarding the password and for maintaining the confidentiality of your account information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at support@acadion.com
                </p>
              </section>

              <div className="pt-6 border-t">
                <Button asChild>
                  <Link href="/signup">Accept and Continue</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}