"use client"

import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default function DataCollectionPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data Collection</h1>
          <p className="text-sm text-[#A1A1AA]">Upload and manage financial data sources</p>
        </div>

        {/* Upload Area */}
        <Card className="border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-8 backdrop-blur-xl">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Upload Financial Data</h2>
            <p className="text-sm text-[#71717A]">CSV files, bank statements, or manual data entry</p>
          </div>

          {/* Dropzone */}
          <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] transition-colors hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.03)]">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(92,110,255,0.1)]">
                <Upload className="h-8 w-8 text-[#5C6EFF]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Drag and drop files here</h3>
              <p className="mb-4 text-sm text-[#71717A]">Supports CSV, Excel, PDF statements</p>
              <Button className="bg-[#5C6EFF] hover:bg-[#4C5EEF]">Choose Files</Button>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
