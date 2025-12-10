// "use client"

// import { AppLayout } from "@/components/app-layout"
// import { motion } from "framer-motion"
// import {
//   DollarSign,
//   TrendingUp,
//   TrendingDown,
//   AlertTriangle,
//   Calculator,
//   ArrowUpRight,
//   ArrowDownRight,
//   CheckCircle2,
//   Clock,
//   Users,
//   BookOpen,
// } from "lucide-react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Pie, PieChart } from "recharts"

// // Mock data
// const revenueData = [
//   { month: "Jan", value: 1900000 },
//   { month: "Feb", value: 2100000 },
//   { month: "Mar", value: 1950000 },
//   { month: "Apr", value: 2300000 },
//   { month: "May", value: 2450000 },
//   { month: "Jun", value: 2500000 },
// ]

// const expenseData = [
//   { name: "Payroll", value: 45, color: "#E4E4E7" },
//   { name: "Office & Facilities", value: 15, color: "#F59E0B" },
//   { name: "Professional Services", value: 12, color: "#71717A" },
//   { name: "Marketing", value: 18, color: "#10B981" },
//   { name: "Software & Tools", value: 8, color: "#EF4444" },
//   { name: "Other", value: 2, color: "#1A1A1C" },
// ]

// const transactions = [
//   {
//     id: 1,
//     title: "Software License Payment - Microsoft 365",
//     subtitle: "Operating Expenses",
//     category: "Software & Subscriptions",
//     amount: "-$3K",
//     status: "Completed",
//     date: "Jan 15, 2024",
//     icon: ArrowDownRight,
//     iconColor: "text-[#EF4444]",
//   },
//   {
//     id: 2,
//     title: "Customer Payment - Acme Corp Invoice #1234",
//     subtitle: "Accounts Receivable",
//     category: "Customer Payments",
//     amount: "+$45K",
//     status: "Completed",
//     date: "Jan 15, 2024",
//     icon: ArrowUpRight,
//     iconColor: "text-[#10B981]",
//   },
//   {
//     id: 3,
//     title: "Office Rent - January 2024",
//     subtitle: "Operating Expenses",
//     category: "Facilities & Rent",
//     amount: "-$9K",
//     status: "Completed",
//     date: "Jan 14, 2024",
//     icon: ArrowDownRight,
//     iconColor: "text-[#EF4444]",
//   },
//   {
//     id: 4,
//     title: "Payroll Processing - Biweekly",
//     subtitle: "Payroll Expenses",
//     category: "Payroll & Benefits",
//     amount: "-$125K",
//     status: "Pending",
//     date: "Jan 14, 2024",
//     icon: ArrowDownRight,
//     iconColor: "text-[#F59E0B]",
//   },
//   {
//     id: 5,
//     title: "Marketing Campaign - Google Ads",
//     subtitle: "Marketing Expenses",
//     category: "Marketing & Advertising",
//     amount: "-$3K",
//     status: "Completed",
//     date: "Jan 13, 2024",
//     icon: ArrowDownRight,
//     iconColor: "text-[#EF4444]",
//   },
// ]

// const kpiCards = [
//   {
//     title: "Monthly Revenue",
//     value: "$2.5M",
//     change: "+12.3%",
//     trend: "up",
//     icon: DollarSign,
//   },
//   {
//     title: "Cash Runway",
//     value: "15 months",
//     change: "-2 months",
//     trend: "down",
//     icon: TrendingDown,
//   },
//   {
//     title: "Profit Margin",
//     value: "68.5%",
//     change: "+2.1%",
//     trend: "up",
//     icon: Calculator,
//   },
//   {
//     title: "Active Alerts",
//     value: "2",
//     change: "3 critical",
//     trend: "warning",
//     icon: AlertTriangle,
//   },
// ]

// const kpiMetrics = [
//   { name: "Current Ratio", value: "2.3", change: "+9.5%", target: "Target Met", status: "success" },
//   { name: "Quick Ratio", value: "1.8", change: "+12.5%", target: "Target Met", status: "success" },
//   { name: "Cash Runway", value: "14.5months", change: "-10.5%", target: "Target Met", status: "warning" },
//   { name: "Gross Profit Margin", value: "68.5%", change: "+5.1%", target: "Target: 70.0%", status: "success" },
//   { name: "Net Profit Margin", value: "12.8%", change: "+12.3%", target: "Target: 15.0%", status: "success" },
//   { name: "EBITDA Margin", value: "22.4%", change: "+11.4%", target: "Target: 25.0%", status: "success" },
//   { name: "Return on Assets", value: "8.9%", change: "+14.1%", target: "Target: 10.0%", status: "success" },
//   { name: "Return on Equity", value: "15.6%", change: "+9.9%", target: "Target: 18.0%", status: "success" },
// ]

// const alerts = [
//   {
//     title: "Cash Flow Alert",
//     description:
//       "Cash runway has decreased to 14.5 months. Consider optimizing expenses or securing additional funding.",
//     severity: "High",
//     time: "638d ago",
//     tag: "Cash Management",
//   },
//   {
//     title: "Large Expense Detected",
//     description: "Unusual expense of $125,000 detected in Payroll category. Please review for accuracy.",
//     severity: "Medium",
//     time: "639d ago",
//     tag: "Expense Management",
//   },
//   {
//     title: "Revenue Target Risk",
//     description: "Current monthly revenue is 2% below target. Consider reviewing sales pipeline.",
//     severity: "Medium",
//     time: "640d ago",
//     tag: "Revenue Management",
//   },
//   {
//     title: "QuickBooks Sync Success",
//     description: "Successfully synchronized 47 transactions from QuickBooks. Data is up to date.",
//     severity: "Low",
//     time: "641d ago",
//     tag: "Integration",
//   },
//   {
//     title: "AR Aging Report",
//     description: "3 invoices over 60 days past due totaling $18,500. Follow up recommended.",
//     severity: "High",
//     time: "642d ago",
//     tag: "Accounts Receivable",
//   },
// ]

// export default function DashboardPage() {
//   return (
//     <AppLayout>
//       <div className="space-y-6">
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight">Financial Dashboard</h1>
//             <p className="text-sm text-[#A1A1AA]">Real-time insights into your company's financial health</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <Button
//               variant="outline"
//               size="sm"
//               className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
//             >
//               7D
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
//             >
//               30D
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               className="border-[rgba(255,255,255,0.08)] bg-[rgba(92,110,255,0.1)] text-[#5C6EFF] hover:bg-[rgba(92,110,255,0.15)]"
//             >
//               90D
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
//             >
//               1Y
//             </Button>
//             <Button size="sm" className="ml-2 bg-[#5C6EFF] hover:bg-[#4C5EEF]">
//               Generate Report
//             </Button>
//           </div>
//         </div>

//         {/* KPI Cards */}
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//           {kpiCards.map((kpi, index) => (
//             <motion.div
//               key={kpi.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.4 }}
//             >
//               <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
//                 <div className="flex items-center justify-between">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.05)]">
//                     <kpi.icon className="h-5 w-5 text-[#A1A1AA]" />
//                   </div>
//                   {kpi.trend === "up" && <TrendingUp className="h-4 w-4 text-[#10B981]" />}
//                   {kpi.trend === "down" && <TrendingDown className="h-4 w-4 text-[#EF4444]" />}
//                   {kpi.trend === "warning" && <AlertTriangle className="h-4 w-4 text-[#F59E0B]" />}
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-sm text-[#A1A1AA]">{kpi.title}</p>
//                   <p className="mt-1 text-2xl font-bold">{kpi.value}</p>
//                   <p
//                     className={`mt-1 text-xs ${
//                       kpi.trend === "up" ? "text-[#10B981]" : kpi.trend === "down" ? "text-[#EF4444]" : "text-[#F59E0B]"
//                     }`}
//                   >
//                     {kpi.change} vs last month
//                   </p>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid gap-6 lg:grid-cols-3">
//           {/* Left Column - Charts and Transactions */}
//           <div className="space-y-6 lg:col-span-2">
//             {/* KPI Metrics */}
//             <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
//               <div className="mb-6">
//                 <h2 className="text-lg font-semibold">Key Performance Indicators</h2>
//                 <p className="text-sm text-[#71717A]">Track your most important financial metrics</p>
//               </div>
//               <div className="grid gap-4 md:grid-cols-2">
//                 {kpiMetrics.map((metric, index) => (
//                   <div
//                     key={metric.name}
//                     className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <p className="text-sm text-[#A1A1AA]">{metric.name}</p>
//                         <p className="mt-1 text-2xl font-bold">{metric.value}</p>
//                         <div className="mt-2 flex items-center gap-2">
//                           <span className="text-xs text-[#10B981]">{metric.change} vs prev</span>
//                           <span className="text-xs text-[#71717A]">•</span>
//                           <span className="text-xs text-[#10B981]">{metric.target}</span>
//                         </div>
//                       </div>
//                       <TrendingUp className="h-4 w-4 text-[#10B981]" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Card>

//             {/* Charts */}
//             <div className="grid gap-6 md:grid-cols-2">
//               {/* Revenue Trend */}
//               <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
//                 <div className="mb-4">
//                   <h3 className="font-semibold">Revenue Trend</h3>
//                   <p className="text-sm text-[#71717A]">Monthly revenue over time</p>
//                 </div>
//                 <ResponsiveContainer width="100%" height={200}>
//                   <LineChart data={revenueData}>
//                     <XAxis dataKey="month" stroke="#71717A" fontSize={12} tickLine={false} axisLine={false} />
//                     <YAxis
//                       stroke="#71717A"
//                       fontSize={12}
//                       tickLine={false}
//                       axisLine={false}
//                       tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
//                     />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: "#1A1A1C",
//                         border: "1px solid rgba(255,255,255,0.08)",
//                         borderRadius: "8px",
//                       }}
//                       formatter={(value: number) => [`$${(value / 1000000).toFixed(2)}M`, "Revenue"]}
//                     />
//                     <Line type="monotone" dataKey="value" stroke="#5C6EFF" strokeWidth={2} dot={{ fill: "#5C6EFF" }} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </Card>

//               {/* Expense Breakdown */}
//               <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
//                 <div className="mb-4">
//                   <h3 className="font-semibold">Expense Breakdown</h3>
//                   <p className="text-sm text-[#71717A]">Current month expenses</p>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <ResponsiveContainer width="100%" height={200}>
//                     <PieChart>
//                       <Pie
//                         data={expenseData}
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={60}
//                         outerRadius={80}
//                         paddingAngle={2}
//                         dataKey="value"
//                       >
//                         {expenseData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.color} />
//                         ))}
//                       </Pie>
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//                 <div className="mt-4 grid grid-cols-2 gap-2">
//                   {expenseData.map((item) => (
//                     <div key={item.name} className="flex items-center gap-2">
//                       <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
//                       <span className="text-xs text-[#A1A1AA]">{item.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </Card>
//             </div>

//             {/* Recent Transactions */}
//             <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
//               <div className="mb-6 flex items-center justify-between">
//                 <div>
//                   <h2 className="text-lg font-semibold">Recent Transactions</h2>
//                 </div>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="text-[#5C6EFF] hover:bg-[rgba(92,110,255,0.1)] hover:text-[#5C6EFF]"
//                 >
//                   View All
//                 </Button>
//               </div>
//               <div className="space-y-1">
//                 {/* Table Header */}
//                 <div className="grid grid-cols-12 gap-4 border-b border-[rgba(255,255,255,0.08)] pb-3 text-xs font-medium text-[#71717A]">
//                   <div className="col-span-5">Transaction</div>
//                   <div className="col-span-2">Category</div>
//                   <div className="col-span-2">Amount</div>
//                   <div className="col-span-2">Status</div>
//                   <div className="col-span-1">Date</div>
//                 </div>
//                 {/* Transactions */}
//                 {transactions.map((transaction) => (
//                   <div
//                     key={transaction.id}
//                     className="grid grid-cols-12 gap-4 border-b border-[rgba(255,255,255,0.05)] py-4 text-sm transition-colors hover:bg-[rgba(255,255,255,0.02)]"
//                   >
//                     <div className="col-span-5 flex items-center gap-3">
//                       <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.05)]">
//                         <transaction.icon className={`h-4 w-4 ${transaction.iconColor}`} />
//                       </div>
//                       <div>
//                         <p className="font-medium">{transaction.title}</p>
//                         <p className="text-xs text-[#71717A]">{transaction.subtitle}</p>
//                       </div>
//                     </div>
//                     <div className="col-span-2 flex items-center">
//                       <Badge
//                         variant="outline"
//                         className="border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-xs"
//                       >
//                         {transaction.category}
//                       </Badge>
//                     </div>
//                     <div className="col-span-2 flex items-center font-medium">{transaction.amount}</div>
//                     <div className="col-span-2 flex items-center">
//                       <Badge
//                         variant="outline"
//                         className={`border-[rgba(255,255,255,0.08)] text-xs ${
//                           transaction.status === "Completed"
//                             ? "bg-[rgba(16,185,129,0.1)] text-[#10B981]"
//                             : "bg-[rgba(245,158,11,0.1)] text-[#F59E0B]"
//                         }`}
//                       >
//                         {transaction.status === "Completed" ? (
//                           <CheckCircle2 className="mr-1 h-3 w-3" />
//                         ) : (
//                           <Clock className="mr-1 h-3 w-3" />
//                         )}
//                         {transaction.status}
//                       </Badge>
//                     </div>
//                     <div className="col-span-1 flex items-center text-xs text-[#71717A]">{transaction.date}</div>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           </div>

//           {/* Right Column - Alerts and Quick Actions */}
//           <div className="space-y-6">
//             {/* Quick Actions */}
//             <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
//               <h3 className="mb-4 font-semibold">Quick Actions</h3>
//               <div className="space-y-2">
//                 <Button
//                   variant="outline"
//                   className="w-full justify-start border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
//                 >
//                   <DollarSign className="mr-2 h-4 w-4" />
//                   Record Transaction
//                 </Button>
//                 <Button
//                   variant="outline"
//                   className="w-full justify-start border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
//                 >
//                   <BookOpen className="mr-2 h-4 w-4" />
//                   Sync QuickBooks
//                 </Button>
//                 <Button
//                   variant="outline"
//                   className="w-full justify-start border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
//                 >
//                   <Users className="mr-2 h-4 w-4" />
//                   Generate Payroll Report
//                 </Button>
//               </div>
//             </Card>

//             {/* Financial Health Score */}
//             <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
//               <h3 className="mb-4 font-semibold">Financial Health Score</h3>
//               <div className="flex items-center justify-center">
//                 <div className="relative">
//                   <svg className="h-32 w-32 -rotate-90 transform">
//                     <circle cx="64" cy="64" r="56" stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
//                     <circle
//                       cx="64"
//                       cy="64"
//                       r="56"
//                       stroke="#10B981"
//                       strokeWidth="8"
//                       fill="none"
//                       strokeDasharray={`${(85 / 100) * 2 * Math.PI * 56} ${2 * Math.PI * 56}`}
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-4xl font-bold text-[#10B981]">85</span>
//                   </div>
//                 </div>
//               </div>
//               <p className="mt-4 text-center text-sm text-[#A1A1AA]">Excellent financial health</p>
//               <div className="mt-4 space-y-2">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-[#A1A1AA]">Liquidity</span>
//                   <span className="font-medium">Strong</span>
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-[#A1A1AA]">Profitability</span>
//                   <span className="font-medium">Good</span>
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-[#A1A1AA]">Cash Flow</span>
//                   <Badge className="bg-[#10B981] hover:bg-[#10B981]">Positive</Badge>
//                 </div>
//               </div>
//             </Card>

//             {/* Alerts & Notifications */}
//             <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
//               <div className="mb-4 flex items-center justify-between">
//                 <h3 className="font-semibold">Alerts & Notifications</h3>
//                 <Badge className="bg-[#EF4444] hover:bg-[#EF4444]">3</Badge>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="text-[#5C6EFF] hover:bg-[rgba(92,110,255,0.1)] hover:text-[#5C6EFF]"
//                 >
//                   View All
//                 </Button>
//               </div>
//               <div className="space-y-3">
//                 {alerts.slice(0, 5).map((alert, index) => (
//                   <div
//                     key={index}
//                     className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-3"
//                   >
//                     <div className="mb-2 flex items-start justify-between">
//                       <div className="flex items-center gap-2">
//                         {alert.severity === "High" && <AlertTriangle className="h-4 w-4 text-[#EF4444]" />}
//                         {alert.severity === "Medium" && <AlertTriangle className="h-4 w-4 text-[#F59E0B]" />}
//                         {alert.severity === "Low" && <CheckCircle2 className="h-4 w-4 text-[#10B981]" />}
//                         <span className="text-sm font-medium">{alert.title}</span>
//                       </div>
//                       <Badge
//                         variant="outline"
//                         className={`text-xs ${
//                           alert.severity === "High"
//                             ? "border-[#EF4444] bg-[rgba(239,68,68,0.1)] text-[#EF4444]"
//                             : alert.severity === "Medium"
//                               ? "border-[#F59E0B] bg-[rgba(245,158,11,0.1)] text-[#F59E0B]"
//                               : "border-[#10B981] bg-[rgba(16,185,129,0.1)] text-[#10B981]"
//                         }`}
//                       >
//                         {alert.severity}
//                       </Badge>
//                     </div>
//                     <p className="mb-2 text-xs text-[#71717A]">{alert.description}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Clock className="h-3 w-3 text-[#71717A]" />
//                         <span className="text-xs text-[#71717A]">{alert.time}</span>
//                       </div>
//                       <Badge variant="outline" className="border-[rgba(255,255,255,0.08)] text-xs">
//                         {alert.tag}
//                       </Badge>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </AppLayout>
//   )
// }



"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LayoutDashboard, TrendingUp, DollarSign, Eye, EyeOff, Loader2 } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"
import Cookies from "js-cookie"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [captchaToken, setCaptchaToken] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    
    if (!captchaToken) {
      setError("Please complete the CAPTCHA verification")
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          captcha_token: captchaToken,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Login failed")
      }

      // Store tokens in localStorage
      localStorage.setItem("access_token", data.tokens.access)
      localStorage.setItem("refresh_token", data.tokens.refresh)
      localStorage.setItem("user", JSON.stringify(data.user))

      // ACCESS TOKEN → cookie
      document.cookie = `access_token=${data.tokens.access}; path=/;`

      // REFRESH TOKEN → cookie
      document.cookie = `refresh_token=${data.tokens.refresh}; path=/;`


      // Redirect to dashboard
      router.push("/dashboard")
    } catch (err) {
      setError(err.message || "An error occurred during login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Hero */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-[#0E0E10] via-[#1A1A1C] to-[#0E0E10] lg:flex lg:flex-col lg:justify-between lg:p-12"
      >
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#5C6EFF] opacity-20 blur-[120px]" />

        <div className="relative z-10 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5C6EFF]">
            <LayoutDashboard className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">CFO Platform</span>
        </div>

        <div className="relative z-10 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-balance"
          >
            AI-Powered Financial Intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-lg text-lg leading-relaxed text-[#A1A1AA] text-pretty"
          >
            Transform your financial data into actionable insights. Make informed decisions with real-time analytics,
            predictive forecasting, and intelligent recommendations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            {[
              {
                icon: TrendingUp,
                title: "Real-time Analytics",
                description: "Monitor your financial health with live dashboards",
              },
              {
                icon: LayoutDashboard,
                title: "Predictive Forecasting",
                description: "AI-powered predictions for cash flow and revenue",
              },
              {
                icon: DollarSign,
                title: "Intelligent Insights",
                description: "Conversational AI CFO for instant answers",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(92,110,255,0.1)]">
                  <feature.icon className="h-4 w-4 text-[#5C6EFF]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                  <p className="text-sm text-[#71717A]">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative z-10 flex gap-12"
        >
          <div>
            <div className="text-3xl font-bold">99.9%</div>
            <div className="text-sm text-[#71717A]">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold">5s</div>
            <div className="text-sm text-[#71717A]">Report Generation</div>
          </div>
          <div>
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-sm text-[#71717A]">Companies Trust Us</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side - Login form */}
      <div className="flex w-full items-center justify-center bg-[#0E0E10] p-8 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="space-y-2">
            <div className="mb-4 inline-block rounded-lg bg-[rgba(92,110,255,0.1)] px-3 py-1 text-xs font-medium text-[#5C6EFF]">
              Enterprise
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Welcome Back</h2>
            <p className="text-sm text-[#A1A1AA]">Sign in to access your financial dashboard</p>
          </div>

          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pr-10 placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717A] hover:text-[#A1A1AA]"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-[#5C6EFF] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LeG2yQsAAAAACLk2aWyEl0dNZAOlS6yAQlu3KAf"
                onChange={handleCaptchaChange}
                theme="dark"
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="h-11 w-full bg-[#5C6EFF] font-medium text-white hover:bg-[#4C5EEF] focus-visible:ring-[#5C6EFF]"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[rgba(255,255,255,0.08)]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0E0E10] px-2 text-[#71717A]">OR CONTINUE WITH</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-11 border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button
              variant="outline"
              className="h-11 border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
            >
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Button>
          </div>

          <p className="text-center text-sm text-[#71717A]">
            Don't have an account?{" "}
            <Link href="/auth/register" className="font-medium text-[#5C6EFF] hover:underline">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}