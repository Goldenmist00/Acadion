import { MetricCard } from "@/components/dashboard/metric-card"
import { FeeTrendChart, PassPercentChart, HostelCapacityChart } from "@/components/dashboard/charts"
import { RecentAdmissionsTable, FeeTransactionsTable, HostelAllocationsTable } from "@/components/dashboard/tables"
import { AIPredictorCard } from "@/components/ai/ai-predictor-card"
import { CareerHubCard } from "@/components/ai/career-hub"
import { AccessManager } from "@/components/admin/access-manager"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Total Students" value="3,245" subtext="+120 this month" />
        <MetricCard title="Fees Collected" value="₹ 4.2M" subtext="FYTD" />
        <MetricCard title="Hostel Occupancy" value="78%" subtext="Across blocks" />
        <MetricCard title="Upcoming Exams" value="6" subtext="Next 30 days" />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-4">
          <FeeTrendChart />
          <PassPercentChart />
        </div>
        <HostelCapacityChart />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <RecentAdmissionsTable />
        <FeeTransactionsTable />
        <HostelAllocationsTable />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <AIPredictorCard />
        <CareerHubCard />
      </section>

      <section className="grid gap-4">
        <AccessManager />
      </section>
    </div>
  )
}
