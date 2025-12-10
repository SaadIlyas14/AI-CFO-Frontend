"use client"

import { AppLayout } from "@/components/app-layout"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Activity, Lightbulb } from "lucide-react"

const categoryScores = [
  { name: "Profitability", score: 78, rating: "Good", icon: TrendingUp, color: "#5C6EFF" },
  { name: "Efficiency", score: 65, rating: "Good", icon: Activity, color: "#10B981" },
  { name: "Growth", score: 82, rating: "Excellent", icon: DollarSign, color: "#10B981" },
  { name: "Financial Health", score: 88, rating: "Excellent", icon: Users, color: "#10B981" },
]

const detailedMetrics = [
  {
    name: "Gross Margin",
    yourCompany: "68.5%",
    industryAvg: "72.3%",
    difference: "-5.3%",
    percentile: "35th percentile",
    status: "below",
  },
  {
    name: "Net Margin",
    yourCompany: "12.8%",
    industryAvg: "8.4%",
    difference: "+52.4%",
    percentile: "75th percentile",
    status: "above",
  },
  {
    name: "Customer Acquisition Cost",
    yourCompany: "125.0$",
    industryAvg: "168.0$",
    difference: "+25.6%",
    percentile: "80th percentile",
    status: "above",
  },
  {
    name: "Cash Runway",
    yourCompany: "14.5months",
    industryAvg: "11.2months",
    difference: "+29.5%",
    percentile: "85th percentile",
    status: "above",
  },
]

const recommendations = [
  {
    title: "Gross Margin Optimization",
    description:
      "Your gross margin (68.5%) is below industry average (72.3%). Consider: Negotiate better supplier terms to reduce COGS, Implement pricing optimization strategies, Focus on higher-margin product lines",
    priority: "high",
  },
  {
    title: "Revenue Growth Acceleration",
    description:
      "Revenue growth (23.7%) trails industry average (31.2%). Recommendations: Expand marketing spend in high-performing channels, Develop new customer acquisition strategies, Consider strategic partnerships or acquisitions",
    priority: "medium",
  },
  {
    title: "Strengths to Maintain",
    description:
      "Your company excels in these areas: Net profit margin significantly above industry average, Customer acquisition cost well below industry benchmark, Strong cash runway providing financial stability",
    priority: "low",
  },
]

export default function BenchmarksPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Industry Benchmarks</h1>
            <p className="text-sm text-[#A1A1AA]">Compare your performance against industry standards</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Industry</p>
            <p className="text-lg font-bold text-[#5C6EFF]">SaaS Technology</p>
            <p className="text-xs text-[#71717A]">51-200 employees</p>
          </div>
        </div>

        {/* Category Scores */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categoryScores.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.05)]">
                    <category.icon className="h-5 w-5" style={{ color: category.color }} />
                  </div>
                  <Badge
                    className={`${
                      category.rating === "Excellent"
                        ? "bg-[#10B981] hover:bg-[#10B981]"
                        : "bg-[#5C6EFF] hover:bg-[#5C6EFF]"
                    }`}
                  >
                    {category.score}/100
                  </Badge>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-[#A1A1AA]">{category.name}</p>
                  <p className="mt-1 text-2xl font-bold">{category.rating}</p>
                  {/* Progress bar */}
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${category.score}%`,
                        backgroundColor: category.color,
                      }}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed Metrics Comparison */}
        <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Detailed Metrics Comparison</h2>
            <p className="text-sm text-[#71717A]">How your key metrics compare to industry averages</p>
          </div>
          <div className="space-y-6">
            {detailedMetrics.map((metric, index) => (
              <div key={metric.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{metric.name}</p>
                    <Badge
                      variant="outline"
                      className={`mt-1 ${
                        metric.status === "above"
                          ? "border-[#10B981] bg-[rgba(16,185,129,0.1)] text-[#10B981]"
                          : "border-[#EF4444] bg-[rgba(239,68,68,0.1)] text-[#EF4444]"
                      }`}
                    >
                      {metric.percentile}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#71717A]">Difference</p>
                    <p
                      className={`text-lg font-bold ${metric.status === "above" ? "text-[#10B981]" : "text-[#EF4444]"}`}
                    >
                      {metric.difference}
                    </p>
                  </div>
                </div>

                {/* Comparison bars */}
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="w-32 text-sm text-[#A1A1AA]">Your Company</span>
                    <div className="relative h-8 flex-1 overflow-hidden rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                      <div
                        className="absolute inset-y-0 left-0 rounded-lg bg-[#5C6EFF]"
                        style={{
                          width: metric.status === "above" ? "65%" : "45%",
                        }}
                      />
                      <span className="absolute inset-0 flex items-center px-3 text-sm font-medium">
                        {metric.yourCompany}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-32 text-sm text-[#A1A1AA]">Industry Average</span>
                    <div className="relative h-8 flex-1 overflow-hidden rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                      <div
                        className="absolute inset-y-0 left-0 rounded-lg bg-[rgba(255,255,255,0.2)]"
                        style={{
                          width: "50%",
                        }}
                      />
                      <span className="absolute inset-0 flex items-center px-3 text-sm font-medium">
                        {metric.industryAvg}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Percentile indicator */}
                <div className="relative">
                  <div className="flex items-center justify-between text-xs text-[#71717A]">
                    <span>Bottom 25%</span>
                    <span>50th</span>
                    <span>Top 25%</span>
                    <span>100th</span>
                  </div>
                  <div className="mt-1 h-1 w-full rounded-full bg-[rgba(255,255,255,0.08)]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#EF4444] via-[#F59E0B] to-[#10B981]"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Improvement Recommendations */}
        <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-[#F59E0B]" />
            <h2 className="text-lg font-semibold">Improvement Recommendations</h2>
          </div>
          <p className="mb-6 text-sm text-[#71717A]">AI-powered suggestions to improve your metrics</p>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4"
              >
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-medium">{rec.title}</h3>
                  <Badge
                    variant="outline"
                    className={`${
                      rec.priority === "high"
                        ? "border-[#EF4444] bg-[rgba(239,68,68,0.1)] text-[#EF4444]"
                        : rec.priority === "medium"
                          ? "border-[#F59E0B] bg-[rgba(245,158,11,0.1)] text-[#F59E0B]"
                          : "border-[#10B981] bg-[rgba(16,185,129,0.1)] text-[#10B981]"
                    }`}
                  >
                    {rec.priority === "high" ? "High Priority" : rec.priority === "medium" ? "Medium" : "Info"}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-[#A1A1AA]">{rec.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
