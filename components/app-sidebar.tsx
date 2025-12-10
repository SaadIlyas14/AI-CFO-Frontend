"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FileText,
  TrendingUp,
  Calendar,
  MessageSquare,
  Database,
  BookOpen,
  Settings,
  Users,
} from "lucide-react"

const navigation = [
  {
    title: "OVERVIEW",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Reports", href: "/reports", icon: FileText },
      { name: "Benchmarks", href: "/benchmarks", icon: TrendingUp },
      { name: "Forecast", href: "/forecast", icon: Calendar },
    ],
  },
  {
    title: "AI & INSIGHTS",
    items: [
      { name: "Conversational CFO", href: "/conversational-cfo", icon: MessageSquare },
      { name: "Data Collection", href: "/data-collection", icon: Database },
    ],
  },
  {
    title: "INTEGRATIONS",
    items: [
      { name: "QuickBooks", href: "/integrations/quickbooks", icon: BookOpen },
      { name: "Banking", href: "/integrations/banking", icon: BookOpen },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      { name: "Admin", href: "/admin", icon: Users },
      { name: "Settings", href: "/settings", icon: Settings },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[210px] border-r border-[rgba(255,255,255,0.08)] bg-[#0E0E10]">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-[rgba(255,255,255,0.08)] px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5C6EFF]">
          <LayoutDashboard className="h-5 w-5 text-white" />
        </div>
        <span className="text-sm font-semibold tracking-tight">CFO Platform</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-6 p-4">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="mb-2 px-2 text-xs font-medium tracking-wider text-[#71717A]">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-200",
                        isActive
                          ? "bg-[rgba(92,110,255,0.1)] text-[#5C6EFF]"
                          : "text-[#A1A1AA] hover:bg-[rgba(255,255,255,0.05)] hover:text-[#E4E4E7]",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Collapse button at bottom */}
      <div className="absolute bottom-4 left-4 right-4">
        <button className="flex w-full items-center justify-center rounded-lg border border-[rgba(255,255,255,0.08)] py-2 text-xs text-[#A1A1AA] transition-colors hover:bg-[rgba(255,255,255,0.05)]">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </aside>
  )
}
