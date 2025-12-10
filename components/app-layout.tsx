import type React from "react"
import { AppSidebar } from "./app-sidebar"
import { AppHeader } from "./app-header"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <AppSidebar />
      <AppHeader />
      <main className="ml-[210px] mt-16 p-6">{children}</main>
    </div>
  )
}
