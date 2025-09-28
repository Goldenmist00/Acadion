import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
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
              <CardTitle className="text-3xl">Privacy Policy</CardTitle>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@acadion.com
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