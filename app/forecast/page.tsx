"use client"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, AlertCircle } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const forecastData = [
  { month: "Jan 2024", value: 2300000 },
  { month: "Feb 2024", value: 2450000 },
  { month: "Mar 2024", value: 2580000 },
  { month: "Apr 2024", value: 2720000 },
]

const scenarios = [
  {
    name: "Conservative",
    growth: "+15%",
    confidence: "70%",
    description: "Based on current trends with minimal market expansion",
    color: "#F59E0B",
  },
  {
    name: "Realistic",
    growth: "+23%",
    confidence: "85%",
    description: "Expected growth considering planned initiatives",
    color: "#5C6EFF",
    active: true,
  },
  {
    name: "Optimistic",
    growth: "+35%",
    confidence: "40%",
    description: "Best case scenario with successful market expansion",
    color: "#10B981",
  },
]

const keyProjections = [
  {
    title: "Next Month Revenue",
    value: "$2.58M",
    change: "+5.3% vs current",
  },
  {
    title: "Q2 Total Revenue",
    value: "$8.15M",
    change: "+12.7% vs Q1",
  },
  {
    title: "Annual Run Rate",
    value: "$34.2M",
    change: "+23% growth rate",
  },
]

export default function ForecastPage() {
  const [activeTab, setActiveTab] = useState("revenue")
  const [selectedScenario, setSelectedScenario] = useState("Realistic")

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Financial Forecast</h1>
            <p className="text-sm text-[#A1A1AA]">AI-powered predictions for revenue, cash flow, and key metrics</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
            >
              3 Months
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[rgba(255,255,255,0.08)] bg-[rgba(92,110,255,0.1)] text-[#5C6EFF] hover:bg-[rgba(92,110,255,0.15)]"
            >
              6 Months
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
            >
              12 Months
            </Button>
            <Button size="sm" className="ml-2 bg-[#5C6EFF] hover:bg-[#4C5EEF]">
              <Target className="mr-2 h-4 w-4" />
              Update Forecast
            </Button>
          </div>
        </div>

        {/* Scenario Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={() => setSelectedScenario(scenario.name)}
              className="cursor-pointer"
            >
              <Card
                className={`border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl transition-all ${
                  selectedScenario === scenario.name ? "ring-2 ring-[#5C6EFF]" : ""
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <Badge style={{ backgroundColor: scenario.color }} className="hover:opacity-90">
                    {scenario.confidence}
                  </Badge>
                  {scenario.active && (
                    <Badge className="bg-[rgba(92,110,255,0.1)] text-[#5C6EFF] hover:bg-[rgba(92,110,255,0.15)]">
                      Active
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold">{scenario.name}</h3>
                <p className="mt-1 text-3xl font-bold" style={{ color: scenario.color }}>
                  {scenario.growth}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">{scenario.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="border-b border-[rgba(255,255,255,0.08)] bg-transparent">
            <TabsTrigger
              value="revenue"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#5C6EFF] data-[state=active]:text-[#5C6EFF]"
            >
              Revenue Forecast
            </TabsTrigger>
            <TabsTrigger
              value="cashflow"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#5C6EFF] data-[state=active]:text-[#5C6EFF]"
            >
              Cash Flow
            </TabsTrigger>
            <TabsTrigger
              value="metrics"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#5C6EFF] data-[state=active]:text-[#5C6EFF]"
            >
              Key Metrics
            </TabsTrigger>
            <TabsTrigger
              value="risk"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#5C6EFF] data-[state=active]:text-[#5C6EFF]"
            >
              Risk Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="mt-6 space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Chart */}
              <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold">Revenue Forecast - 6 Months</h2>
                  <p className="text-sm text-[#71717A]">Realistic scenario projection</p>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={forecastData}>
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

              {/* Key Projections */}
              <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                <h3 className="mb-4 font-semibold">Key Projections</h3>
                <div className="space-y-4">
                  {keyProjections.map((projection, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4"
                    >
                      <p className="text-sm text-[#A1A1AA]">{projection.title}</p>
                      <p className="mt-1 text-2xl font-bold">{projection.value}</p>
                      <p className="mt-1 text-xs text-[#10B981]">{projection.change}</p>
                    </div>
                  ))}
                  <div className="mt-6 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(92,110,255,0.05)] p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="mt-0.5 h-4 w-4 text-[#5C6EFF]" />
                      <div>
                        <p className="text-sm font-medium text-[#5C6EFF]">Confidence Level</p>
                        <p className="mt-1 text-xs text-[#A1A1AA]">85% confidence in achieving projected targets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cashflow" className="mt-6">
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Cash Flow Forecast</h2>
                <p className="text-sm text-[#71717A]">Projected cash inflows and outflows</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4">
                  <p className="text-sm text-[#71717A]">Cash flow forecast content would be displayed here</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="metrics" className="mt-6">
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Key Metrics Forecast</h2>
                <p className="text-sm text-[#71717A]">Projected performance indicators</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4">
                  <p className="text-sm text-[#71717A]">Key metrics forecast content would be displayed here</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="risk" className="mt-6">
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Risk Analysis</h2>
                <p className="text-sm text-[#71717A]">Potential risks and mitigation strategies</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4">
                  <p className="text-sm text-[#71717A]">Risk analysis content would be displayed here</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
