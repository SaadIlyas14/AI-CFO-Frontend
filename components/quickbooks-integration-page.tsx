// CODE A
// "use client"

// import { useState, useEffect } from 'react'
// import QuickBooksAccountsTable from '@/components/quick-books-accounts-table'
// import QuickBooksTransactionsTable from "@/components/quick-books-transactions-table"


// import {
//   BookOpen,
//   CheckCircle2,
//   XCircle,
//   RefreshCw,
//   AlertCircle,
//   Download,
//   Upload,
//   TrendingUp,
//   Loader2,
//   Database,
//   Activity,
//   LayoutDashboard,
//   ExternalLink,
// } from 'lucide-react'

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// // Simple UI Components
// const Button = ({ children, onClick, disabled, variant = 'default', className = '', ...props }) => {
//   const baseClass = 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
//   const variants = {
//     default: 'bg-[#5C6EFF] text-white hover:bg-[#4C5EEF]',
//     outline: 'border border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]',
//   }
  
//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`${baseClass} ${variants[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// const Card = ({ children, className = '' }) => (
//   <div className={`rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] backdrop-blur-xl ${className}`}>
//     {children}
//   </div>
// )

// const Badge = ({ children, className = '' }) => (
//   <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
//     {children}
//   </span>
// )

// const Alert = ({ type = 'error', message, onClose }) => {
//   const config = {
//     success: {
//       border: 'border-[#10B981]',
//       bg: 'bg-[rgba(16,185,129,0.1)]',
//       icon: CheckCircle2,
//       iconColor: 'text-[#10B981]',
//       textColor: 'text-[#10B981]',
//     },
//     error: {
//       border: 'border-[#EF4444]',
//       bg: 'bg-[rgba(239,68,68,0.1)]',
//       icon: XCircle,
//       iconColor: 'text-[#EF4444]',
//       textColor: 'text-[#EF4444]',
//     },
//   }

//   const { border, bg, icon: Icon, iconColor, textColor } = config[type]

//   return (
//     <div className={`rounded-lg border ${border} ${bg} p-4`}>
//       <div className="flex items-start gap-3">
//         <Icon className={`h-5 w-5 flex-shrink-0 ${iconColor}`} />
//         <div className="flex-1">
//           <h3 className={`font-semibold ${textColor}`}>{type === 'success' ? 'Success' : 'Error'}</h3>
//           <p className="text-sm text-[#A1A1AA]">{message}</p>
//         </div>
//         <button onClick={onClose} className="text-[#A1A1AA] hover:text-white text-xl leading-none">×</button>
//       </div>
//     </div>
//   )
// }

// // Sidebar Component
// const AppSidebar = () => {
//   const navigation = [
//     { name: 'Dashboard', href: '/', icon: LayoutDashboard },
//     { name: 'QuickBooks', href: '/integrations/quickbooks', icon: BookOpen, active: true },
//   ]

//   return (
//     <aside className="fixed left-0 top-0 z-40 h-screen w-[210px] border-r border-[rgba(255,255,255,0.08)] bg-[#0E0E10]">
//       <div className="flex h-16 items-center gap-2 border-b border-[rgba(255,255,255,0.08)] px-6">
//         <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5C6EFF]">
//           <LayoutDashboard className="h-5 w-5 text-white" />
//         </div>
//         <span className="text-sm font-semibold tracking-tight">CFO Platform</span>
//       </div>
//       <nav className="space-y-1 p-4">
//         {navigation.map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
//               item.active
//                 ? 'bg-[rgba(92,110,255,0.1)] text-[#5C6EFF]'
//                 : 'text-[#A1A1AA] hover:bg-[rgba(255,255,255,0.05)]'
//             }`}
//           >
//             <item.icon className="h-4 w-4" />
//             {item.name}
//           </a>
//         ))}
//       </nav>
//     </aside>
//   )
// }

// // Main Component
// export default function QuickBooksIntegrationPage() {
//   const [connectionStatus, setConnectionStatus] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [syncing, setSyncing] = useState(false)
//   const [disconnecting, setDisconnecting] = useState(false)
//   const [error, setError] = useState(null)
//   const [successMessage, setSuccessMessage] = useState(null)

//   useEffect(() => {
//     checkConnectionStatus()

//     const params = new URLSearchParams(window.location.search)
//     const qbConnected = params.get('qb_connected')
//     const qbError = params.get('qb_error')

//     if (qbConnected === 'true') {
//       setSuccessMessage('Successfully connected to QuickBooks!')
//       setError(null)
//       setTimeout(() => {
//         checkConnectionStatus()
//       }, 1000)
//       window.history.replaceState({}, '', window.location.pathname)
//     } else if (qbError) {
//       setError(`Connection failed: ${qbError}`)
//       window.history.replaceState({}, '', window.location.pathname)
//     }
//   }, [])

//   const getAuthToken = () => localStorage.getItem('access_token')

//   const checkConnectionStatus = async () => {
//     setLoading(true)
//     try {
//       const token = getAuthToken()
      
//       if (!token) {
//         setError('Not authenticated. Please log in.')
//         setLoading(false)
//         return
//       }

//       const response = await fetch(`${API_BASE_URL}/api/quickbooks/status/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       })

//       const data = await response.json()
      
//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to check status')
//       }
      
//       setConnectionStatus(data)
//       setError(null)
//     } catch (err) {
//       console.error('Status check error:', err)
//       setError(err.message || 'Failed to check connection status')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const initiateQuickBooksAuth = async () => {
//     try {
//       const token = getAuthToken()
      
//       if (!token) {
//         setError('Not authenticated. Please log in.')
//         return
//       }

//       const response = await fetch(`${API_BASE_URL}/api/quickbooks/auth/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to get authorization URL')
//       }

//       if (data.authorization_url) {
//         window.location.href = data.authorization_url
//       } else {
//         setError('No authorization URL received')
//       }
//     } catch (err) {
//       console.error('Auth initiation error:', err)
//       setError(err.message || 'Failed to initiate QuickBooks connection')
//     }
//   }

//   const disconnectQuickBooks = async () => {
//     if (!confirm('Are you sure you want to disconnect QuickBooks? This will remove all synced data.')) return
    
//     setDisconnecting(true)
//     setError(null)
    
//     try {
//       const token = getAuthToken()
      
//       if (!token) {
//         setError('Not authenticated. Please log in.')
//         setDisconnecting(false)
//         return
//       }

//       const response = await fetch(`${API_BASE_URL}/api/quickbooks/disconnect/`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to disconnect QuickBooks')
//       }

//       setSuccessMessage('Successfully disconnected from QuickBooks')
//       checkConnectionStatus()
//     } catch (err) {
//       console.error('Disconnect error:', err)
//       setError(err.message || 'Failed to disconnect QuickBooks')
//     } finally {
//       setDisconnecting(false)
//     }
//   }

//   const syncData = async (syncType) => {
//     setSyncing(true)
//     setError(null)
    
//     try {
//       const token = getAuthToken()
      
//       if (!token) {
//         setError('Not authenticated. Please log in.')
//         setSyncing(false)
//         return
//       }

//       const response = await fetch(`${API_BASE_URL}/api/quickbooks/sync/${syncType}/`, {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.error || `Failed to sync ${syncType}`)
//       }

//       setSuccessMessage(data.message || `Successfully synced ${syncType}`)
//       checkConnectionStatus()
//     } catch (err) {
//       console.error(`Sync error (${syncType}):`, err)
//       setError(err.message || `Failed to sync ${syncType}`)
//     } finally {
//       setSyncing(false)
//     }
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0E0E10] text-white">
//         <AppSidebar />
//         <div className="ml-[210px] p-8">
//           <div className="flex min-h-[60vh] items-center justify-center">
//             <div className="text-center">
//               <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-[#5C6EFF]" />
//               <p className="text-[#A1A1AA]">Loading QuickBooks integration...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-[#0E0E10] text-white">
//       <AppSidebar />
      
//       <div className="ml-[210px] p-8">
//         <div className="space-y-6">
//           {/* Header */}
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-bold tracking-tight">QuickBooks Integration</h1>
//               <p className="text-sm text-[#A1A1AA]">Connect and sync your financial data with QuickBooks</p>
//             </div>
//             <Button onClick={checkConnectionStatus} variant="outline">
//               <RefreshCw className="mr-2 h-4 w-4" />
//               Refresh Status
//             </Button>
//           </div>

//           {/* Alerts */}
//           {successMessage && <Alert type="success" message={successMessage} onClose={() => setSuccessMessage(null)} />}
//           {error && <Alert type="error" message={error} onClose={() => setError(null)} />}

//           {/* Connection Status Card */}
//           <Card className="p-6">
//             <div className="mb-6 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(92,110,255,0.1)]">
//                   <BookOpen className="h-6 w-6 text-[#5C6EFF]" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-semibold">QuickBooks Connection</h2>
//                   <p className="text-sm text-[#71717A]">Manage your QuickBooks integration</p>
//                 </div>
//               </div>
//               {connectionStatus?.connected && (
//                 <Badge className="bg-[#10B981]">
//                   <CheckCircle2 className="mr-1 h-3 w-3" />
//                   Connected
//                 </Badge>
//               )}
//             </div>

//             {connectionStatus?.connected ? (
//               <div className="space-y-6">
//                 {/* Connection Details */}
//                 <div className="grid gap-4 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4 md:grid-cols-2">
//                   <div>
//                     <p className="text-sm text-[#71717A]">Company Name</p>
//                     <p className="mt-1 font-semibold">{connectionStatus.company_name}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#71717A]">Realm ID</p>
//                     <p className="mt-1 font-mono text-sm">{connectionStatus.realm_id}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#71717A]">Last Synced</p>
//                     <p className="mt-1 text-sm">
//                       {connectionStatus.last_synced
//                         ? new Date(connectionStatus.last_synced).toLocaleString()
//                         : 'Never'}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#71717A]">Status</p>
//                     <Badge className={connectionStatus.is_active ? 'bg-[rgba(16,185,129,0.1)] text-[#10B981]' : 'bg-[rgba(239,68,68,0.1)] text-[#EF4444]'}>
//                       {connectionStatus.is_active ? 'Active' : 'Inactive'}
//                     </Badge>
//                   </div>
//                 </div>

//                 {/* Quick Actions */}
//                 <div className="grid gap-3 md:grid-cols-3">
//                   <Button onClick={() => syncData('accounts')} disabled={syncing || disconnecting}>
//                     {syncing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
//                     Sync Accounts
//                   </Button>
//                   <Button onClick={() => syncData('transactions')} disabled={syncing || disconnecting}>
//                     {syncing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
//                     Sync Transactions
//                   </Button>
//                   <Button onClick={() => syncData('all')} disabled={syncing || disconnecting}>
//                     {syncing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
//                     Sync All Data
//                   </Button>
//                 </div>
//                 {connectionStatus?.connected && <QuickBooksAccountsTable />}
//                 {connectionStatus?.connected && <QuickBooksTransactionsTable />}
//                 <Button 
//                   onClick={disconnectQuickBooks} 
//                   variant="outline" 
//                   disabled={disconnecting}
//                   className="w-full border-[#EF4444] text-[#EF4444] hover:bg-[rgba(239,68,68,0.1)]"
//                 >
//                   {disconnecting ? (
//                     <>
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       Disconnecting...
//                     </>
//                   ) : (
//                     <>
//                       <XCircle className="mr-2 h-4 w-4" />
//                       Disconnect QuickBooks
//                     </>
//                   )}
//                 </Button>
//               </div>
//             ) : (
//               <div className="py-12 text-center">
//                 <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)]">
//                   <AlertCircle className="h-10 w-10 text-[#71717A]" />
//                 </div>
//                 <h3 className="mb-2 text-lg font-semibold">QuickBooks Not Connected</h3>
//                 <p className="mb-6 text-sm text-[#71717A]">
//                   {connectionStatus?.message || 'Connect your QuickBooks account to sync financial data automatically'}
//                 </p>
//                 <Button onClick={initiateQuickBooksAuth}>
//                   <BookOpen className="mr-2 h-4 w-4" />
//                   Connect to QuickBooks
//                 </Button>
//               </div>
//             )}
//           </Card>

//           {/* Features Grid */}
//           <div className="grid gap-6 md:grid-cols-3">
//             <Card className="p-6">
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(92,110,255,0.1)]">
//                 <Database className="h-6 w-6 text-[#5C6EFF]" />
//               </div>
//               <h3 className="mb-2 font-semibold">Chart of Accounts</h3>
//               <p className="text-sm text-[#71717A]">Automatically sync your complete chart of accounts from QuickBooks</p>
//             </Card>

//             <Card className="p-6">
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(92,110,255,0.1)]">
//                 <TrendingUp className="h-6 w-6 text-[#5C6EFF]" />
//               </div>
//               <h3 className="mb-2 font-semibold">Transactions</h3>
//               <p className="text-sm text-[#71717A]">Import invoices, payments, expenses, and journal entries in real-time</p>
//             </Card>

//             <Card className="p-6">
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(92,110,255,0.1)]">
//                 <Activity className="h-6 w-6 text-[#5C6EFF]" />
//               </div>
//               <h3 className="mb-2 font-semibold">Real-time Sync</h3>
//               <p className="text-sm text-[#71717A]">Keep your financial data up-to-date with automatic synchronization</p>
//             </Card>
//           </div>

//           {/* Setup Instructions */}
//           <Card className="p-6">
//             <div className="mb-4 flex items-center gap-2">
//               <BookOpen className="h-5 w-5 text-[#5C6EFF]" />
//               <h3 className="font-semibold">How to Connect QuickBooks</h3>
//             </div>
//             <ol className="space-y-3 text-sm text-[#A1A1AA]">
//               {[
//                 'Click the "Connect to QuickBooks" button above',
//                 'Sign in to your QuickBooks account (use sandbox credentials for testing)',
//                 'Authorize the CFO Platform to access your QuickBooks data',
//                 "You'll be redirected back to this page with confirmation",
//                 'Click "Sync All Data" to import your financial information',
//               ].map((step, i) => (
//                 <li key={i} className="flex gap-3">
//                   <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(92,110,255,0.1)] text-xs font-semibold text-[#5C6EFF]">
//                     {i + 1}
//                   </span>
//                   <span>{step}</span>
//                 </li>
//               ))}
//             </ol>

//             <div className="mt-6 rounded-lg border border-[rgba(92,110,255,0.3)] bg-[rgba(92,110,255,0.05)] p-4">
//               <div className="flex gap-3">
//                 <AlertCircle className="h-5 w-5 flex-shrink-0 text-[#5C6EFF]" />
//                 <div>
//                   <p className="text-sm font-medium text-[#5C6EFF]">Testing with Sandbox</p>
//                   <p className="mt-1 text-xs text-[#A1A1AA]">
//                     Make sure you're using QuickBooks Sandbox credentials. The redirect URI must be: http://localhost:3000/integrations/quickbooks
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4 flex items-center gap-2 text-sm">
//               <ExternalLink className="h-4 w-4 text-[#5C6EFF]" />
//               <a href="https://developer.intuit.com/" target="_blank" rel="noopener noreferrer" className="text-[#5C6EFF] hover:underline">
//                 QuickBooks Developer Documentation
//               </a>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }


//CODE B

"use client"

import { useState, useEffect } from 'react'
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  RefreshCw,
  AlertCircle,
  Download,
  Upload,
  TrendingUp,
  Loader2,
  Database,
  Activity,
  LayoutDashboard,
  ExternalLink,
  Users,
  FileText,
  DollarSign,
  Package,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// Simple UI Components (from CODE A)
const Button = ({ children, onClick, disabled, variant = 'default', className = '', ...props }) => {
  const baseClass = 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    default: 'bg-[#5C6EFF] text-white hover:bg-[#4C5EEF]',
    outline: 'border border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]',
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Card = ({ children, className = '' }) => (
  <div className={`rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] backdrop-blur-xl ${className}`}>
    {children}
  </div>
)

const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
    {children}
  </span>
)

const Alert = ({ type = 'error', message, onClose }) => {
  const config = {
    success: {
      border: 'border-[#10B981]',
      bg: 'bg-[rgba(16,185,129,0.1)]',
      icon: CheckCircle2,
      iconColor: 'text-[#10B981]',
      textColor: 'text-[#10B981]',
    },
    error: {
      border: 'border-[#EF4444]',
      bg: 'bg-[rgba(239,68,68,0.1)]',
      icon: XCircle,
      iconColor: 'text-[#EF4444]',
      textColor: 'text-[#EF4444]',
    },
  }

  const { border, bg, icon: Icon, iconColor, textColor } = config[type]

  return (
    <div className={`rounded-lg border ${border} ${bg} p-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`h-5 w-5 flex-shrink-0 ${iconColor}`} />
        <div className="flex-1">
          <h3 className={`font-semibold ${textColor}`}>{type === 'success' ? 'Success' : 'Error'}</h3>
          <p className="text-sm text-[#A1A1AA]">{message}</p>
        </div>
        <button onClick={onClose} className="text-[#A1A1AA] hover:text-white text-xl leading-none">×</button>
      </div>
    </div>
  )
}

// Sidebar Component (from CODE A)
const AppSidebar = () => {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'QuickBooks', href: '/integrations/quickbooks', icon: BookOpen, active: true },
  ]

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[210px] border-r border-[rgba(255,255,255,0.08)] bg-[#0E0E10]">
      <div className="flex h-16 items-center gap-2 border-b border-[rgba(255,255,255,0.08)] px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5C6EFF]">
          <LayoutDashboard className="h-5 w-5 text-white" />
        </div>
        <span className="text-sm font-semibold tracking-tight">CFO Platform</span>
      </div>
      <nav className="space-y-1 p-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
              item.active
                ? 'bg-[rgba(92,110,255,0.1)] text-[#5C6EFF]'
                : 'text-[#A1A1AA] hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  )
}

// Sync Progress Component (from CODE B logic)
const SyncProgress = ({ syncData }) => {
  const entities = [
    { key: 'Account', label: 'Accounts', Icon: Database, color: 'blue' },
    { key: 'Customer', label: 'Customers', Icon: Users, color: 'green' },
    { key: 'Vendor', label: 'Vendors', Icon: Package, color: 'yellow' },
    { key: 'Invoice', label: 'Invoices', Icon: FileText, color: 'blue' },
    { key: 'Bill', label: 'Bills', Icon: FileText, color: 'red' },
    { key: 'Payment', label: 'Payments', Icon: DollarSign, color: 'purple' },
  ]

  const colorClasses = {
    blue: { bg: 'bg-[rgba(92,110,255,0.1)]', text: 'text-[#5C6EFF]' },
    green: { bg: 'bg-[rgba(16,185,129,0.1)]', text: 'text-[#10B981]' },
    yellow: { bg: 'bg-[rgba(251,191,36,0.1)]', text: 'text-[#FBBF24]' },
    red: { bg: 'bg-[rgba(239,68,68,0.1)]', text: 'text-[#EF4444]' },
    purple: { bg: 'bg-[rgba(168,85,247,0.1)]', text: 'text-[#A855F7]' },
  }

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Sync Progress</h3>
        {syncData.status === 'syncing' && (
          <Badge className="bg-[rgba(92,110,255,0.1)] text-[#5C6EFF]">
            <Loader2 className="mr-1 h-3 w-3 animate-spin" />
            Syncing...
          </Badge>
        )}
        {syncData.status === 'completed' && (
          <Badge className="bg-[rgba(16,185,129,0.1)] text-[#10B981]">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {entities.map((entity) => {
          const count = syncData.counts[entity.key] || 0
          const isLoading = syncData.status === 'syncing' && !syncData.counts[entity.key]
          const isCompleted = syncData.counts[entity.key] !== undefined
          const colors = colorClasses[entity.color]

          return (
            <div
              key={entity.key}
              className="relative overflow-hidden rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg}`}>
                    <entity.Icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <div>
                    <p className="text-sm text-[#71717A]">{entity.label}</p>
                    {isLoading ? (
                      <Loader2 className="mt-1 h-5 w-5 animate-spin text-[#5C6EFF]" />
                    ) : (
                      <p className={`text-2xl font-bold ${colors.text}`}>{count}</p>
                    )}
                  </div>
                </div>
                {isCompleted && <CheckCircle2 className="h-5 w-5 text-[#10B981]" />}
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

// Optimized Paginated Data Table with Virtual Scrolling
const DataTable = ({ title, data, columns, Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const itemsPerPage = 10

  if (!data || data.length === 0) return null

  // Filter data based on search
  const filteredData = searchTerm
    ? data.filter((row) =>
        columns.some((col) => {
          const value = row[col.key]
          return value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        })
      )
    : data

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredData.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <Card className="p-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-4 text-left group"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(92,110,255,0.1)]">
            <Icon className="h-5 w-5 text-[#5C6EFF]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-[#71717A]">{data.length} records</p>
          </div>
        </div>
        <div className={`transform transition-transform text-[#A1A1AA] group-hover:text-white ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>

      {isExpanded && (
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="flex-1 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-4 py-2 text-sm text-white placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#5C6EFF]"
            />
            <Badge className="bg-[rgba(92,110,255,0.1)] text-[#5C6EFF]">
              {filteredData.length} / {data.length}
            </Badge>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-[rgba(255,255,255,0.08)]">
            <table className="w-full text-sm">
              <thead className="border-b border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                <tr className="text-left text-[#71717A]">
                  {columns.map((col) => (
                    <th key={col.key} className="px-4 py-3 font-medium">{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.length > 0 ? (
                  currentData.map((row, i) => (
                    <tr key={i} className="border-b border-[rgba(255,255,255,0.05)] transition-colors hover:bg-[rgba(255,255,255,0.02)]">
                      {columns.map((col) => (
                        <td key={col.key} className="px-4 py-3 text-[#A1A1AA]">
                          {col.render ? col.render(row[col.key], row) : (row[col.key] || '-')}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="px-4 py-8 text-center text-[#71717A]">
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#71717A]">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length}
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1"
                >
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handlePageChange(pageNum)}
                        className={`h-8 w-8 rounded-lg text-sm transition-colors ${
                          currentPage === pageNum
                            ? 'bg-[#5C6EFF] text-white'
                            : 'text-[#A1A1AA] hover:bg-[rgba(255,255,255,0.05)]'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                </div>
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  )
}

// Main Component
export default function QuickBooksIntegrationPage() {
  const [connectionStatus, setConnectionStatus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [disconnecting, setDisconnecting] = useState(false)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [syncData, setSyncData] = useState({ status: 'idle', counts: {}, error: null })
  const [allData, setAllData] = useState(null)

  useEffect(() => {
    checkConnectionStatus()

    const params = new URLSearchParams(window.location.search)
    const qbConnected = params.get('qb_connected')
    const qbError = params.get('qb_error')

    if (qbConnected === 'true') {
      setSuccessMessage('Successfully connected to QuickBooks!')
      setError(null)
      setTimeout(() => {
        checkConnectionStatus()
      }, 1000)
      window.history.replaceState({}, '', window.location.pathname)
    } else if (qbError) {
      setError(`Connection failed: ${qbError}`)
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  const getAuthToken = () => localStorage.getItem('access_token')

  const checkConnectionStatus = async () => {
    setLoading(true)
    try {
      const token = getAuthToken()
      
      if (!token) {
        setError('Not authenticated. Please log in.')
        setLoading(false)
        return
      }

      const response = await fetch(`${API_BASE_URL}/api/quickbooks/status/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to check status')
      }
      
      setConnectionStatus(data)
      setError(null)

      if (data.connected) {
        fetchAllData()
      }
    } catch (err) {
      console.error('Status check error:', err)
      setError(err.message || 'Failed to check connection status')
    } finally {
      setLoading(false)
    }
  }

  const fetchAllData = async () => {
    try {
      const token = getAuthToken()
      const response = await fetch(`${API_BASE_URL}/api/quickbooks/data/all/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      if (response.ok) {
        setAllData(data)
      }
    } catch (err) {
      console.error('Error fetching data:', err)
    }
  }

  const initiateQuickBooksAuth = async () => {
    try {
      const token = getAuthToken()
      
      if (!token) {
        setError('Not authenticated. Please log in.')
        return
      }

      const response = await fetch(`${API_BASE_URL}/api/quickbooks/auth/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get authorization URL')
      }

      if (data.authorization_url) {
        window.location.href = data.authorization_url
      } else {
        setError('No authorization URL received')
      }
    } catch (err) {
      console.error('Auth initiation error:', err)
      setError(err.message || 'Failed to initiate QuickBooks connection')
    }
  }

  const disconnectQuickBooks = async () => {
    if (!confirm('Are you sure you want to disconnect QuickBooks? This will remove all synced data.')) return
    
    setDisconnecting(true)
    setError(null)
    
    try {
      const token = getAuthToken()
      
      if (!token) {
        setError('Not authenticated. Please log in.')
        setDisconnecting(false)
        return
      }

      const response = await fetch(`${API_BASE_URL}/api/quickbooks/disconnect/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to disconnect QuickBooks')
      }

      setSuccessMessage('Successfully disconnected from QuickBooks')
      setAllData(null)
      checkConnectionStatus()
    } catch (err) {
      console.error('Disconnect error:', err)
      setError(err.message || 'Failed to disconnect QuickBooks')
    } finally {
      setDisconnecting(false)
    }
  }

  const syncAllData = async () => {
    setSyncData({ status: 'syncing', counts: {}, error: null })
    setSyncing(true)
    setError(null)
    
    try {
      const token = getAuthToken()
      
      if (!token) {
        setError('Not authenticated. Please log in.')
        setSyncing(false)
        setSyncData({ status: 'error', counts: {}, error: 'Not authenticated' })
        return
      }

      const response = await fetch(`${API_BASE_URL}/api/quickbooks/sync/all`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to sync data')
      }

      setSyncData({ status: 'completed', counts: data.synced_counts || {}, error: null })
      setSuccessMessage('Successfully synced all QuickBooks data!')
      
      await checkConnectionStatus()
      await fetchAllData()
    } catch (err) {
      console.error('Sync error:', err)
      setSyncData({ status: 'error', counts: {}, error: err.message })
      setError(err.message || 'Failed to sync data')
    } finally {
      setSyncing(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0E0E10] text-white">
        <AppSidebar />
        <div className="ml-[210px] p-8">
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="text-center">
              <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-[#5C6EFF]" />
              <p className="text-[#A1A1AA]">Loading QuickBooks integration...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      <AppSidebar />
      
      <div className="ml-[210px] p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">QuickBooks Integration</h1>
              <p className="text-sm text-[#A1A1AA]">Connect and sync your financial data with QuickBooks</p>
            </div>
            <Button onClick={checkConnectionStatus} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Status
            </Button>
          </div>

          {/* Alerts */}
          {successMessage && <Alert type="success" message={successMessage} onClose={() => setSuccessMessage(null)} />}
          {error && <Alert type="error" message={error} onClose={() => setError(null)} />}

          {/* Connection Status Card */}
          <Card className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(92,110,255,0.1)]">
                  <BookOpen className="h-6 w-6 text-[#5C6EFF]" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">QuickBooks Connection</h2>
                  <p className="text-sm text-[#71717A]">Manage your QuickBooks integration</p>
                </div>
              </div>
              {connectionStatus?.connected && (
                <Badge className="bg-[#10B981]">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Connected
                </Badge>
              )}
            </div>

            {connectionStatus?.connected ? (
              <div className="space-y-6">
                {/* Connection Details */}
                <div className="grid gap-4 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-[#71717A]">Company Name</p>
                    <p className="mt-1 font-semibold">{connectionStatus.company_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#71717A]">Realm ID</p>
                    <p className="mt-1 font-mono text-sm">{connectionStatus.realm_id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#71717A]">Last Synced</p>
                    <p className="mt-1 text-sm">
                      {connectionStatus.last_synced
                        ? new Date(connectionStatus.last_synced).toLocaleString()
                        : 'Never'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#71717A]">Status</p>
                    <Badge className={connectionStatus.is_active ? 'bg-[rgba(16,185,129,0.1)] text-[#10B981]' : 'bg-[rgba(239,68,68,0.1)] text-[#EF4444]'}>
                      {connectionStatus.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                </div>

                {/* Sync Button */}
                <Button onClick={syncAllData} disabled={syncing || disconnecting} className="w-full">
                  {syncing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
                  {syncing ? 'Syncing All Data...' : 'Sync All Data'}
                </Button>

                {/* Sync Progress */}
                {(syncData.status === 'syncing' || syncData.status === 'completed') && (
                  <SyncProgress syncData={syncData} />
                )}

                {/* All Data Tables */}
                {allData && (
                  <div className="space-y-6">
                    <DataTable
                      title="Accounts"
                      data={allData.accounts}
                      Icon={Database}
                      columns={[
                        { key: 'name', label: 'Account Name' },
                        { key: 'type', label: 'Type' },
                        { key: 'sub_type', label: 'Sub Type' },
                        { key: 'balance', label: 'Balance', render: (val) => `$${val?.toFixed(2) || '0.00'}` },
                      ]}
                    />

                    <DataTable
                      title="Customers"
                      data={allData.customers}
                      Icon={Users}
                      columns={[
                        { key: 'name', label: 'Customer Name' },
                        { key: 'email', label: 'Email' },
                        { key: 'balance', label: 'Balance', render: (val) => `$${val?.toFixed(2) || '0.00'}` },
                      ]}
                    />

                    <DataTable
                      title="Vendors"
                      data={allData.vendors}
                      Icon={Package}
                      columns={[
                        { key: 'name', label: 'Vendor Name' },
                        { key: 'email', label: 'Email' },
                        { key: 'balance', label: 'Balance', render: (val) => `$${val?.toFixed(2) || '0.00'}` },
                      ]}
                    />

                    <DataTable
                      title="Invoices"
                      data={allData.invoices}
                      Icon={FileText}
                      columns={[
                        { key: 'customer', label: 'Customer' },
                        { key: 'total', label: 'Total', render: (val) => `$${val?.toFixed(2) || '0.00'}` },
                        { 
                          key: 'status', 
                          label: 'Status', 
                          render: (val) => (
                            <Badge className={val === 'Paid' ? 'bg-[rgba(16,185,129,0.1)] text-[#10B981]' : 'bg-[rgba(251,191,36,0.1)] text-[#FBBF24]'}>
                              {val}
                            </Badge>
                          )
                        },
                      ]}
                    />

                    <DataTable
                      title="Bills"
                      data={allData.bills}
                      Icon={FileText}
                      columns={[
                        { key: 'vendor', label: 'Vendor' },
                        { key: 'total', label: 'Total', render: (val) => `${val?.toFixed(2) || '0.00'}` },
                        { 
                          key: 'status', 
                          label: 'Status', 
                          render: (val) => (
                            <Badge className={val === 'Paid' ? 'bg-[rgba(16,185,129,0.1)] text-[#10B981]' : 'bg-[rgba(239,68,68,0.1)] text-[#EF4444]'}>
                              {val}
                            </Badge>
                          )
                        },
                      ]}
                    />

                    <DataTable
                      title="Payments"
                      data={allData.payments}
                      Icon={DollarSign}
                      columns={[
                        { key: 'customer', label: 'Customer' },
                        { key: 'vendor', label: 'Vendor' },
                        { key: 'amount', label: 'Amount', render: (val) => `${val?.toFixed(2) || '0.00'}` },
                        { key: 'date', label: 'Date' },
                      ]}
                    />
                  </div>
                )}

                {/* Disconnect Button */}
                <Button 
                  onClick={disconnectQuickBooks} 
                  variant="outline" 
                  disabled={disconnecting}
                  className="w-full border-[#EF4444] text-[#EF4444] hover:bg-[rgba(239,68,68,0.1)]"
                >
                  {disconnecting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Disconnecting...
                    </>
                  ) : (
                    <>
                      <XCircle className="mr-2 h-4 w-4" />
                      Disconnect QuickBooks
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)]">
                  <AlertCircle className="h-10 w-10 text-[#71717A]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">QuickBooks Not Connected</h3>
                <p className="mb-6 text-sm text-[#71717A]">
                  {connectionStatus?.message || 'Connect your QuickBooks account to sync financial data automatically'}
                </p>
                <Button onClick={initiateQuickBooksAuth}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Connect to QuickBooks
                </Button>
              </div>
            )}
          </Card>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(92,110,255,0.1)]">
                <Database className="h-6 w-6 text-[#5C6EFF]" />
              </div>
              <h3 className="mb-2 font-semibold">Chart of Accounts</h3>
              <p className="text-sm text-[#71717A]">Automatically sync your complete chart of accounts from QuickBooks</p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(92,110,255,0.1)]">
                <TrendingUp className="h-6 w-6 text-[#5C6EFF]" />
              </div>
              <h3 className="mb-2 font-semibold">Transactions</h3>
              <p className="text-sm text-[#71717A]">Import invoices, payments, expenses, and journal entries in real-time</p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(92,110,255,0.1)]">
                <Activity className="h-6 w-6 text-[#5C6EFF]" />
              </div>
              <h3 className="mb-2 font-semibold">Real-time Sync</h3>
              <p className="text-sm text-[#71717A]">Keep your financial data up-to-date with automatic synchronization</p>
            </Card>
          </div>

          {/* Setup Instructions */}
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#5C6EFF]" />
              <h3 className="font-semibold">How to Connect QuickBooks</h3>
            </div>
            <ol className="space-y-3 text-sm text-[#A1A1AA]">
              {[
                'Click the "Connect to QuickBooks" button above',
                'Sign in to your QuickBooks account (use sandbox credentials for testing)',
                'Authorize the CFO Platform to access your QuickBooks data',
                "You'll be redirected back to this page with confirmation",
                'Click "Sync All Data" to import your financial information',
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(92,110,255,0.1)] text-xs font-semibold text-[#5C6EFF]">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-lg border border-[rgba(92,110,255,0.3)] bg-[rgba(92,110,255,0.05)] p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-[#5C6EFF]" />
                <div>
                  <p className="text-sm font-medium text-[#5C6EFF]">Testing with Sandbox</p>
                  <p className="mt-1 text-xs text-[#A1A1AA]">
                    Make sure you're using QuickBooks Sandbox credentials. The redirect URI must be: http://localhost:3000/integrations/quickbooks
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <ExternalLink className="h-4 w-4 text-[#5C6EFF]" />
              <a href="https://developer.intuit.com/" target="_blank" rel="noopener noreferrer" className="text-[#5C6EFF] hover:underline">
                QuickBooks Developer Documentation
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}