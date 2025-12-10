"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

interface User {
  username: string
  company_name: string
  company_email: string
}

export function AppHeader() {
  const [user, setUser] = useState<User | null>(null)
  const [initials, setInitials] = useState("JD")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fetch user from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return

    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser)
        setUser(parsedUser)

        if (parsedUser.username) {
          const nameParts = parsedUser.username.trim().split(" ")
          const computedInitials = nameParts.map((n) => n[0]).join("").toUpperCase()
          setInitials(computedInitials || "JD")
        }
      } catch {
        setUser(null)
        setInitials("JD")
      }
    }
  }, [])

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    // Clear cookies
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;"

    document.cookie =
      "refresh_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;"

    router.push("/")
  }

  return (
    <header className="fixed left-[210px] right-0 top-0 z-30 h-16 border-b border-[rgba(255,255,255,0.08)] bg-[#0E0E10]/80 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-6">
        {/* Search */}
        <div className="relative w-[400px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
          <Input
            placeholder="Search transactions, reports, insights..."
            className="h-9 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10 text-sm placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-1.5 py-0.5 text-xs text-[#71717A]">
            ⌘K
          </kbd>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-[rgba(255,255,255,0.08)] bg-transparent text-sm hover:bg-[rgba(255,255,255,0.05)]"
          >
            Generate Report
          </Button>

          {/* Notifications */}
          <button className="relative rounded-lg p-2 transition-colors hover:bg-[rgba(255,255,255,0.05)]">
            <Bell className="h-5 w-5 text-[#A1A1AA]" />
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF4444] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EF4444]"></span>
            </span>
          </button>

          {/* User menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 transition-colors hover:bg-[rgba(255,255,255,0.05)]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5C6EFF] text-xs font-semibold">
                {initials}
              </div>
              <div className="text-left">
                <div className="text-xs font-medium">{user?.username || "John Doe"}</div>
                <div className="text-[10px] text-[#71717A]">{user?.company_name || "CEO, Acme Corp"}</div>
              </div>
              <ChevronDown className="h-3 w-3 text-[#71717A]" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-1 w-32 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0E0E10] shadow-lg">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-[rgba(255,255,255,0.05)]"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
