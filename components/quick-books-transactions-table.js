"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export default function QuickBooksTransactionsTable() {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getAuthToken = () => localStorage.getItem("access_token")

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    setLoading(true)
    setError(null)
    try {
      const token = getAuthToken()
      if (!token) throw new Error("Not authenticated")

      const res = await fetch(`${API_BASE_URL}/api/quickbooks/transactions/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to fetch transactions")

      setTransactions(data)
    } catch (err) {
      console.error(err)
      setError(err.message || "Error loading transactions")
    } finally {
      setLoading(false)
    }
  }

  if (loading)
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="h-6 w-6 animate-spin text-[#5C6EFF]" />
      </div>
    )

  if (error)
    return (
      <p className="text-sm text-[#EF4444] py-4">
        Error: {error}
      </p>
    )

  if (!transactions.length)
    return <p className="text-sm text-[#A1A1AA] py-4">No transactions found</p>

  return (
    <div className="overflow-x-auto rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] backdrop-blur-xl">
      <table className="w-full table-auto border-collapse text-left text-sm">
        <thead className="bg-[rgba(92,110,255,0.05)] text-[#A1A1AA]">
          <tr>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Transaction Type</th>
            <th className="px-4 py-3">Account</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Reference</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="border-t border-[rgba(255,255,255,0.08)] hover:bg-[rgba(92,110,255,0.05)]"
            >
              <td className="px-4 py-2">{new Date(tx.date).toLocaleDateString()}</td>
              <td className="px-4 py-2">{tx.tx_type}</td>
              <td className="px-4 py-2">{tx.account_name}</td>
              <td className="px-4 py-2">{tx.amount.toFixed(2)}</td>
              <td className="px-4 py-2">{tx.reference || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
