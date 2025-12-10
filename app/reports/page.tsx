"use client"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, FileText, TrendingUp } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Pie, PieChart } from "recharts"

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

const recentReports = [
  {
    title: "P&L Statement - December 2024",
    type: "Profit & Loss",
    date: "1/15/2024",
    size: "2.4 MB",
    status: "ready",
  },
  {
    title: "Balance Sheet - Q4 2024",
    type: "Balance Sheet",
    date: "1/14/2024",
    size: "1.8 MB",
    status: "ready",
  },
  {
    title: "Cash Flow Statement - December 2024",
    type: "Cash Flow",
    date: "1/13/2024",
    size: "1.2 MB",
    status: "ready",
  },
  {
    title: "Annual Report - 2024",
    type: "Annual Report",
    date: "1/10/2024",
    size: "5.6 MB",
    status: "ready",
  },
]

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Financial Reports</h1>
            <p className="text-sm text-[#A1A1AA]">Generate and download comprehensive financial statements</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Report
            </Button>
            <Button size="sm" className="bg-[#5C6EFF] hover:bg-[#4C5EEF]">
              <FileText className="mr-2 h-4 w-4" />
              Generate New Report
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="border-b border-[rgba(255,255,255,0.08)] bg-transparent">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#5C6EFF] data-[state=active]:text-[#5C6EFF]"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="pl"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#5C6EFF] data-[state=active]:text-[#5C6EFF]"
            >
              P&L Statement
            </TabsTrigger>
            <TabsTrigger
              value="balance"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#5C6EFF] data-[state=active]:text-[#5C6EFF]"
            >
              Balance Sheet
            </TabsTrigger>
            <TabsTrigger
              value="cashflow"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#5C6EFF] data-[state=active]:text-[#5C6EFF]"
            >
              Cash Flow
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            {/* Top Metrics */}
            <div className="grid gap-4 md:grid-cols-3">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#A1A1AA]">Total Revenue</p>
                      <p className="mt-1 text-3xl font-bold">$2.45M</p>
                      <p className="mt-1 text-xs text-[#10B981]">+12.3% vs last month</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(92,110,255,0.1)]">
                      <TrendingUp className="h-6 w-6 text-[#5C6EFF]" />
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#A1A1AA]">Total Expenses</p>
                      <p className="mt-1 text-3xl font-bold">$1.85M</p>
                      <p className="mt-1 text-xs text-[#F59E0B]">+3.1% vs last month</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(245,158,11,0.1)]">
                      <TrendingUp className="h-6 w-6 text-[#F59E0B]" />
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#A1A1AA]">Net Income</p>
                      <p className="mt-1 text-3xl font-bold">$598K</p>
                      <p className="mt-1 text-xs text-[#10B981]">+18.7% vs last month</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(16,185,129,0.1)]">
                      <TrendingUp className="h-6 w-6 text-[#10B981]" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Charts */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                <div className="mb-4">
                  <h3 className="font-semibold">Revenue Trend</h3>
                  <p className="text-sm text-[#71717A]">Monthly revenue over the last 6 months</p>
                </div>
                <ResponsiveContainer width="100%" height={250}>
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

              <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                <div className="mb-4">
                  <h3 className="font-semibold">Expense Breakdown</h3>
                  <p className="text-sm text-[#71717A]">Current month expense categories</p>
                </div>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
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

            {/* Recent Reports */}
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Recent Reports</h2>
                <p className="text-sm text-[#71717A]">Your generated financial reports</p>
              </div>
              <div className="space-y-3">
                {recentReports.map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4 transition-colors hover:bg-[rgba(255,255,255,0.05)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.05)]">
                        <FileText className="h-5 w-5 text-[#A1A1AA]" />
                      </div>
                      <div>
                        <p className="font-medium">{report.title}</p>
                        <p className="text-sm text-[#71717A]">
                          {report.type} • Generated on {report.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-[#10B981] hover:bg-[#10B981]">{report.status}</Badge>
                      <span className="text-sm text-[#71717A]">{report.size}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="pl" className="mt-6">
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Profit & Loss Statement</h2>
                <p className="text-sm text-[#71717A]">Detailed income and expense breakdown</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4">
                  <p className="text-sm text-[#71717A]">P&L statement content would be displayed here</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="balance" className="mt-6">
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Balance Sheet</h2>
                <p className="text-sm text-[#71717A]">Assets, liabilities, and equity overview</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4">
                  <p className="text-sm text-[#71717A]">Balance sheet content would be displayed here</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="cashflow" className="mt-6">
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Cash Flow Statement</h2>
                <p className="text-sm text-[#71717A]">Operating, investing, and financing activities</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4">
                  <p className="text-sm text-[#71717A]">Cash flow statement content would be displayed here</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
