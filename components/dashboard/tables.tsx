import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SimpleTable({
  title,
  columns,
  rows,
}: {
  title: string
  columns: string[]
  rows: (string | number)[][]
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                {columns.map((c) => (
                  <th key={c} className="text-left px-3 py-2 font-medium">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b">
                  {r.map((cell, j) => (
                    <td key={j} className="px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export function RecentAdmissionsTable() {
  return (
    <SimpleTable
      title="Recent Admissions"
      columns={["Name", "Department", "Status"]}
      rows={[
        ["Anita Sharma", "CSE", "Approved"],
        ["Ravi Kumar", "ECE", "Pending"],
        ["Priya Nair", "ME", "Approved"],
      ]}
    />
  )
}

export function FeeTransactionsTable() {
  return (
    <SimpleTable
      title="Fee Transactions"
      columns={["Student", "Amount", "Status"]}
      rows={[
        ["Anita Sharma", "₹ 50,000", "Paid"],
        ["Ravi Kumar", "₹ 25,000", "Pending"],
        ["Priya Nair", "₹ 10,000", "Paid"],
      ]}
    />
  )
}

export function HostelAllocationsTable() {
  return (
    <SimpleTable
      title="Hostel Allocations"
      columns={["Student", "Block", "Room"]}
      rows={[
        ["Anita Sharma", "A", "103"],
        ["Ravi Kumar", "C", "407"],
        ["Priya Nair", "B", "212"],
      ]}
    />
  )
}
