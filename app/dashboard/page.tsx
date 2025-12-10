"use client"

import { AppLayout } from "@/components/app-layout"
import { motion } from "framer-motion"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Calculator,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Pie, PieChart } from "recharts"

// Mock data
const revenueData = [
  { month: "Jan", value: 1900000 },
  { month: "Feb", value: 2100000 },
  { month: "Mar", value: 1950000 },
  { month: "Apr", value: 2300000 },
  { month: "May", value: 2450000 },
  { month: "Jun", value: 2500000 },
]

const expenseData = [
  { name: "Payroll", value: 45, color: "#E4E4E7" },
  { name: "Office & Facilities", value: 15, color: "#F59E0B" },
  { name: "Professional Services", value: 12, color: "#71717A" },
  { name: "Marketing", value: 18, color: "#10B981" },
  { name: "Software & Tools", value: 8, color: "#EF4444" },
  { name: "Other", value: 2, color: "#1A1A1C" },
]

const transactions = [
  {
    id: 1,
    title: "Software License Payment - Microsoft 365",
    subtitle: "Operating Expenses",
    category: "Software & Subscriptions",
    amount: "-$3K",
    status: "Completed",
    date: "Jan 15, 2024",
    icon: ArrowDownRight,
    iconColor: "text-[#EF4444]",
  },
  {
    id: 2,
    title: "Customer Payment - Acme Corp Invoice #1234",
    subtitle: "Accounts Receivable",
    category: "Customer Payments",
    amount: "+$45K",
    status: "Completed",
    date: "Jan 15, 2024",
    icon: ArrowUpRight,
    iconColor: "text-[#10B981]",
  },
  {
    id: 3,
    title: "Office Rent - January 2024",
    subtitle: "Operating Expenses",
    category: "Facilities & Rent",
    amount: "-$9K",
    status: "Completed",
    date: "Jan 14, 2024",
    icon: ArrowDownRight,
    iconColor: "text-[#EF4444]",
  },
  {
    id: 4,
    title: "Payroll Processing - Biweekly",
    subtitle: "Payroll Expenses",
    category: "Payroll & Benefits",
    amount: "-$125K",
    status: "Pending",
    date: "Jan 14, 2024",
    icon: ArrowDownRight,
    iconColor: "text-[#F59E0B]",
  },
  {
    id: 5,
    title: "Marketing Campaign - Google Ads",
    subtitle: "Marketing Expenses",
    category: "Marketing & Advertising",
    amount: "-$3K",
    status: "Completed",
    date: "Jan 13, 2024",
    icon: ArrowDownRight,
    iconColor: "text-[#EF4444]",
  },
]

const kpiCards = [
  {
    title: "Monthly Revenue",
    value: "$2.5M",
    change: "+12.3%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Cash Runway",
    value: "15 months",
    change: "-2 months",
    trend: "down",
    icon: TrendingDown,
  },
  {
    title: "Profit Margin",
    value: "68.5%",
    change: "+2.1%",
    trend: "up",
    icon: Calculator,
  },
  {
    title: "Active Alerts",
    value: "2",
    change: "3 critical",
    trend: "warning",
    icon: AlertTriangle,
  },
]

const kpiMetrics = [
  { name: "Current Ratio", value: "2.3", change: "+9.5%", target: "Target Met", status: "success" },
  { name: "Quick Ratio", value: "1.8", change: "+12.5%", target: "Target Met", status: "success" },
  { name: "Cash Runway", value: "14.5months", change: "-10.5%", target: "Target Met", status: "warning" },
  { name: "Gross Profit Margin", value: "68.5%", change: "+5.1%", target: "Target: 70.0%", status: "success" },
  { name: "Net Profit Margin", value: "12.8%", change: "+12.3%", target: "Target: 15.0%", status: "success" },
  { name: "EBITDA Margin", value: "22.4%", change: "+11.4%", target: "Target: 25.0%", status: "success" },
  { name: "Return on Assets", value: "8.9%", change: "+14.1%", target: "Target: 10.0%", status: "success" },
  { name: "Return on Equity", value: "15.6%", change: "+9.9%", target: "Target: 18.0%", status: "success" },
]

const alerts = [
  {
    title: "Cash Flow Alert",
    description:
      "Cash runway has decreased to 14.5 months. Consider optimizing expenses or securing additional funding.",
    severity: "High",
    time: "638d ago",
    tag: "Cash Management",
  },
  {
    title: "Large Expense Detected",
    description: "Unusual expense of $125,000 detected in Payroll category. Please review for accuracy.",
    severity: "Medium",
    time: "639d ago",
    tag: "Expense Management",
  },
  {
    title: "Revenue Target Risk",
    description: "Current monthly revenue is 2% below target. Consider reviewing sales pipeline.",
    severity: "Medium",
    time: "640d ago",
    tag: "Revenue Management",
  },
  {
    title: "QuickBooks Sync Success",
    description: "Successfully synchronized 47 transactions from QuickBooks. Data is up to date.",
    severity: "Low",
    time: "641d ago",
    tag: "Integration",
  },
  {
    title: "AR Aging Report",
    description: "3 invoices over 60 days past due totaling $18,500. Follow up recommended.",
    severity: "High",
    time: "642d ago",
    tag: "Accounts Receivable",
  },
]

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Financial Dashboard</h1>
            <p className="text-sm text-[#A1A1AA]">Real-time insights into your company's financial health</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
            >
              7D
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
            >
              30D
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[rgba(255,255,255,0.08)] bg-[rgba(92,110,255,0.1)] text-[#5C6EFF] hover:bg-[rgba(92,110,255,0.15)]"
            >
              90D
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
            >
              1Y
            </Button>
            <Button size="sm" className="ml-2 bg-[#5C6EFF] hover:bg-[#4C5EEF]">
              Generate Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.05)]">
                    <kpi.icon className="h-5 w-5 text-[#A1A1AA]" />
                  </div>
                  {kpi.trend === "up" && <TrendingUp className="h-4 w-4 text-[#10B981]" />}
                  {kpi.trend === "down" && <TrendingDown className="h-4 w-4 text-[#EF4444]" />}
                  {kpi.trend === "warning" && <AlertTriangle className="h-4 w-4 text-[#F59E0B]" />}
                </div>
                <div className="mt-4">
                  <p className="text-sm text-[#A1A1AA]">{kpi.title}</p>
                  <p className="mt-1 text-2xl font-bold">{kpi.value}</p>
                  <p
                    className={`mt-1 text-xs ${
                      kpi.trend === "up" ? "text-[#10B981]" : kpi.trend === "down" ? "text-[#EF4444]" : "text-[#F59E0B]"
                    }`}
                  >
                    {kpi.change} vs last month
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Charts and Transactions */}
          <div className="space-y-6 lg:col-span-2">
            {/* KPI Metrics */}
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Key Performance Indicators</h2>
                <p className="text-sm text-[#71717A]">Track your most important financial metrics</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {kpiMetrics.map((metric, index) => (
                  <div
                    key={metric.name}
                    className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-[#A1A1AA]">{metric.name}</p>
                        <p className="mt-1 text-2xl font-bold">{metric.value}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs text-[#10B981]">{metric.change} vs prev</span>
                          <span className="text-xs text-[#71717A]">•</span>
                          <span className="text-xs text-[#10B981]">{metric.target}</span>
                        </div>
                      </div>
                      <TrendingUp className="h-4 w-4 text-[#10B981]" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Charts */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Revenue Trend */}
              <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                <div className="mb-4">
                  <h3 className="font-semibold">Revenue Trend</h3>
                  <p className="text-sm text-[#71717A]">Monthly revenue over time</p>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={revenueData}>
                    <XAxis dataKey="month" stroke="#71717A" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                      stroke="#71717A"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1A1A1C",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`$${(value / 1000000).toFixed(2)}M`, "Revenue"]}
                    />
                    <Line type="monotone" dataKey="value" stroke="#5C6EFF" strokeWidth={2} dot={{ fill: "#5C6EFF" }} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Expense Breakdown */}
              <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                <div className="mb-4">
                  <h3 className="font-semibold">Expense Breakdown</h3>
                  <p className="text-sm text-[#71717A]">Current month expenses</p>
                </div>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {expenseData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs text-[#A1A1AA]">{item.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recent Transactions */}
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Recent Transactions</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#5C6EFF] hover:bg-[rgba(92,110,255,0.1)] hover:text-[#5C6EFF]"
                >
                  View All
                </Button>
              </div>
              <div className="space-y-1">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 border-b border-[rgba(255,255,255,0.08)] pb-3 text-xs font-medium text-[#71717A]">
                  <div className="col-span-5">Transaction</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1">Date</div>
                </div>
                {/* Transactions */}
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="grid grid-cols-12 gap-4 border-b border-[rgba(255,255,255,0.05)] py-4 text-sm transition-colors hover:bg-[rgba(255,255,255,0.02)]"
                  >
                    <div className="col-span-5 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.05)]">
                        <transaction.icon className={`h-4 w-4 ${transaction.iconColor}`} />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.title}</p>
                        <p className="text-xs text-[#71717A]">{transaction.subtitle}</p>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <Badge
                        variant="outline"
                        className="border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-xs"
                      >
                        {transaction.category}
                      </Badge>
                    </div>
                    <div className="col-span-2 flex items-center font-medium">{transaction.amount}</div>
                    <div className="col-span-2 flex items-center">
                      <Badge
                        variant="outline"
                        className={`border-[rgba(255,255,255,0.08)] text-xs ${
                          transaction.status === "Completed"
                            ? "bg-[rgba(16,185,129,0.1)] text-[#10B981]"
                            : "bg-[rgba(245,158,11,0.1)] text-[#F59E0B]"
                        }`}
                      >
                        {transaction.status === "Completed" ? (
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                        ) : (
                          <Clock className="mr-1 h-3 w-3" />
                        )}
                        {transaction.status}
                      </Badge>
                    </div>
                    <div className="col-span-1 flex items-center text-xs text-[#71717A]">{transaction.date}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Alerts and Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <h3 className="mb-4 font-semibold">Quick Actions</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Record Transaction
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Sync QuickBooks
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Generate Payroll Report
                </Button>
              </div>
            </Card>

            {/* Financial Health Score */}
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <h3 className="mb-4 font-semibold">Financial Health Score</h3>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <svg className="h-32 w-32 -rotate-90 transform">
                    <circle cx="64" cy="64" r="56" stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#10B981"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(85 / 100) * 2 * Math.PI * 56} ${2 * Math.PI * 56}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#10B981]">85</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-[#A1A1AA]">Excellent financial health</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A1A1AA]">Liquidity</span>
                  <span className="font-medium">Strong</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A1A1AA]">Profitability</span>
                  <span className="font-medium">Good</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A1A1AA]">Cash Flow</span>
                  <Badge className="bg-[#10B981] hover:bg-[#10B981]">Positive</Badge>
                </div>
              </div>
            </Card>

            {/* Alerts & Notifications */}
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">Alerts & Notifications</h3>
                <Badge className="bg-[#EF4444] hover:bg-[#EF4444]">3</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#5C6EFF] hover:bg-[rgba(92,110,255,0.1)] hover:text-[#5C6EFF]"
                >
                  View All
                </Button>
              </div>
              <div className="space-y-3">
                {alerts.slice(0, 5).map((alert, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-3"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {alert.severity === "High" && <AlertTriangle className="h-4 w-4 text-[#EF4444]" />}
                        {alert.severity === "Medium" && <AlertTriangle className="h-4 w-4 text-[#F59E0B]" />}
                        {alert.severity === "Low" && <CheckCircle2 className="h-4 w-4 text-[#10B981]" />}
                        <span className="text-sm font-medium">{alert.title}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          alert.severity === "High"
                            ? "border-[#EF4444] bg-[rgba(239,68,68,0.1)] text-[#EF4444]"
                            : alert.severity === "Medium"
                              ? "border-[#F59E0B] bg-[rgba(245,158,11,0.1)] text-[#F59E0B]"
                              : "border-[#10B981] bg-[rgba(16,185,129,0.1)] text-[#10B981]"
                        }`}
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="mb-2 text-xs text-[#71717A]">{alert.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-[#71717A]" />
                        <span className="text-xs text-[#71717A]">{alert.time}</span>
                      </div>
                      <Badge variant="outline" className="border-[rgba(255,255,255,0.08)] text-xs">
                        {alert.tag}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
