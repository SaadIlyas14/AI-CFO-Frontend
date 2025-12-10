"use client"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, Mic, TrendingUp, DollarSign, Activity } from "lucide-react"

const quickQuestions = [
  "What's our current cash runway?",
  "How is our revenue trending this quarter?",
  "What are our biggest expense categories?",
  "Compare our metrics to last quarter",
  "What should I focus on to improve profitability?",
  "Show me our customer acquisition costs",
]

const currentMetrics = [
  {
    label: "Monthly Revenue",
    value: "$2.45M",
    icon: DollarSign,
    color: "#5C6EFF",
  },
  {
    label: "Growth Rate",
    value: "23.7%",
    icon: TrendingUp,
    color: "#10B981",
  },
  {
    label: "Cash Runway",
    value: "14.5 mo",
    icon: Activity,
    color: "#F59E0B",
  },
]

export default function ConversationalCFOPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI CFO assistant. I can help you analyze your financial data, answer questions about your company's performance, and provide strategic insights. What would you like to know?",
      timestamp: "5:33:20 PM",
      suggestions: ["Show me our financial health score", "What are our key risks?", "Analyze our cash flow trends"],
    },
  ])

  const handleSend = () => {
    if (!message.trim()) return
    setMessages([...messages, { role: "user", content: message, timestamp: new Date().toLocaleTimeString() }])
    setMessage("")
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm analyzing your financial data to provide insights...",
          timestamp: new Date().toLocaleTimeString(),
        },
      ])
    }, 1000)
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Conversational CFO</h1>
            <p className="text-sm text-[#A1A1AA]">
              Ask questions about your financial data and get AI-powered insights
            </p>
          </div>
          <Badge className="bg-[#10B981] hover:bg-[#10B981]">
            <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-white" />
            AI Ready
          </Badge>
        </div>

        {/* Main Chat Layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="flex h-[calc(100vh-16rem)] flex-col border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] backdrop-blur-xl">
              {/* Messages */}
              <div className="flex-1 space-y-4 overflow-y-auto p-6">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(92,110,255,0.1)]">
                        <Bot className="h-5 w-5 text-[#5C6EFF]" />
                      </div>
                    )}
                    <div className={`max-w-[80%] space-y-2 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                      <div
                        className={`rounded-lg p-4 ${
                          msg.role === "user"
                            ? "bg-[#5C6EFF] text-white"
                            : "border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                      {msg.suggestions && (
                        <div className="flex flex-wrap gap-2">
                          {msg.suggestions.map((suggestion, i) => (
                            <Button
                              key={i}
                              variant="outline"
                              size="sm"
                              className="border-[rgba(255,255,255,0.08)] bg-transparent text-xs hover:bg-[rgba(255,255,255,0.05)]"
                              onClick={() => setMessage(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-[#71717A]">{msg.timestamp}</p>
                    </div>
                    {msg.role === "user" && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.05)]">
                        <span className="text-xs font-semibold">JD</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-[rgba(255,255,255,0.08)] p-4">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Ask about your financial performance..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="flex-1 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button size="icon" className="bg-[#5C6EFF] hover:bg-[#4C5EEF]" onClick={handleSend}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <h3 className="mb-4 font-semibold">Quick Questions</h3>
              <p className="mb-4 text-sm text-[#71717A]">Common financial queries</p>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(question)}
                    className="w-full rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-3 text-left text-sm transition-colors hover:bg-[rgba(255,255,255,0.05)]"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </Card>

            {/* Current Metrics */}
            <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-6 backdrop-blur-xl">
              <h3 className="mb-4 font-semibold">Current Metrics</h3>
              <div className="space-y-4">
                {currentMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-3"
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${metric.color}20` }}
                    >
                      <metric.icon className="h-5 w-5" style={{ color: metric.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-[#71717A]">{metric.label}</p>
                      <p className="text-lg font-bold">{metric.value}</p>
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
