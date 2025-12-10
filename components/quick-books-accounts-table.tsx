import { useState, useEffect } from 'react'

export default function QuickBooksAccountsTable() {
  const [accounts, setAccounts] = useState([])
  const [loadingAccounts, setLoadingAccounts] = useState(false)
  const [errorAccounts, setErrorAccounts] = useState(null)

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
  
  const fetchAccounts = async () => {
    setLoadingAccounts(true)
    setErrorAccounts(null)
    try {
      const token = localStorage.getItem('access_token')
      const res = await fetch(`${API_BASE_URL}/api/quickbooks/accounts/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      console.log('Fetched accounts:', data)
      if (!res.ok) throw new Error(data.error || 'Failed to fetch accounts')
      setAccounts(data.accounts)
    } catch (err) {
      setErrorAccounts(err.message)
    } finally {
      setLoadingAccounts(false)
    }
  }

  useEffect(() => {
    fetchAccounts()
  }, [])

  if (loadingAccounts) return <p>Loading accounts...</p>
  if (errorAccounts) return <p className="text-red-500">{errorAccounts}</p>

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Synced Accounts</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Sub-Type</th>
              <th className="px-4 py-2 text-right">Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                <td className="px-4 py-2">{acc.name}</td>
                <td className="px-4 py-2">{acc.type}</td>
                <td className="px-4 py-2">{acc.sub_type}</td>
                <td className="px-4 py-2 text-right">{acc.balance?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
