// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Progress } from "@/components/ui/progress"
// import {
//   LayoutDashboard,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   ArrowLeft,
//   Building2,
//   Mail,
//   Phone,
//   Globe,
//   MapPin,
//   Upload,
//   Check,
//   Sparkles,
// } from "lucide-react"

// const INDUSTRIES = [
//   "Technology",
//   "Finance",
//   "Healthcare",
//   "Retail",
//   "Manufacturing",
//   "Education",
//   "Real Estate",
//   "Consulting",
//   "E-commerce",
//   "Other",
// ]

// const COMPANY_SIZES = [
//   "1-10 employees",
//   "11-50 employees",
//   "51-200 employees",
//   "201-500 employees",
//   "501-1000 employees",
//   "1000+ employees",
// ]

// const PLANS = [
//   {
//     name: "Starter",
//     price: "Free",
//     description: "Perfect for small businesses getting started",
//     features: ["Basic analytics", "Up to 100 transactions", "Email support"],
//   },
//   {
//     name: "Professional",
//     price: "$49/mo",
//     description: "For growing businesses with advanced needs",
//     features: ["Advanced analytics", "Unlimited transactions", "Priority support", "AI insights"],
//     popular: true,
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     description: "For large organizations with custom requirements",
//     features: ["Everything in Pro", "Custom integrations", "Dedicated support", "SLA guarantee"],
//   },
// ]

// export default function RegisterPage() {
//   const [step, setStep] = useState(1)
//   const [showPassword, setShowPassword] = useState(false)
//   const [logoPreview, setLogoPreview] = useState<string | null>(null)
//   const [formData, setFormData] = useState({
//     // Step 1: Basic Info
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     // Step 2: Company Details
//     industry: "",
//     company_size: "",
//     address: "",
//     website: "",
//     // Step 3: Additional Info
//     description: "",
//     company_logo: null as File | null,
//     company_since: "",
//     plan: "Professional",
//   })

//   const progress = (step / 3) * 100

//   const handleNext = () => {
//     if (step < 3) setStep(step + 1)
//   }

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1)
//   }

//   const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       setFormData({ ...formData, company_logo: file })
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setLogoPreview(reader.result as string)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("[v0] Form submitted:", formData)
//     // Handle form submission
//   }

//   return (
//     <div className="flex min-h-screen">
//       {/* Left side - Hero */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-[#0E0E10] via-[#1A1A1C] to-[#0E0E10] lg:flex lg:flex-col lg:justify-center lg:p-12"
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={step}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 0.2, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.8 }}
//             className={`absolute left-1/4 top-1/4 h-96 w-96 rounded-full blur-[120px] ${
//               step === 1 ? "bg-[#5C6EFF]" : step === 2 ? "bg-[#10B981]" : "bg-[#F59E0B]"
//             }`}
//           />
//         </AnimatePresence>

//         <div className="relative z-10 space-y-8">
//           <div className="flex items-center gap-2">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5C6EFF]">
//               <LayoutDashboard className="h-6 w-6 text-white" />
//             </div>
//             <span className="text-xl font-bold tracking-tight">CFO Platform</span>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={step}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="space-y-6"
//             >
//               {step === 1 && (
//                 <>
//                   <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-balance">
//                     Welcome to the Future of Finance
//                   </h1>
//                   <p className="max-w-lg text-lg leading-relaxed text-[#A1A1AA] text-pretty">
//                     Join thousands of companies using AI-powered insights to transform their financial operations.
//                   </p>
//                 </>
//               )}
//               {step === 2 && (
//                 <>
//                   <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-balance">
//                     Tell Us About Your Company
//                   </h1>
//                   <p className="max-w-lg text-lg leading-relaxed text-[#A1A1AA] text-pretty">
//                     Help us personalize your experience with industry-specific insights and benchmarks.
//                   </p>
//                 </>
//               )}
//               {step === 3 && (
//                 <>
//                   <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-balance">
//                     Choose Your Perfect Plan
//                   </h1>
//                   <p className="max-w-lg text-lg leading-relaxed text-[#A1A1AA] text-pretty">
//                     Start with a 14-day free trial. No credit card required. Cancel anytime.
//                   </p>
//                 </>
//               )}
//             </motion.div>
//           </AnimatePresence>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="space-y-3"
//           >
//             {["Real-time financial analytics", "AI-powered forecasting", "Industry benchmarking"].map((item, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]">
//                   <Check className="h-3 w-3 text-white" />
//                 </div>
//                 <span className="text-sm">{item}</span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Right side - Multi-step form */}
//       <div className="flex w-full items-center justify-center bg-[#0E0E10] p-8 lg:w-1/2">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-md space-y-8"
//         >
//           <div className="space-y-4">
//             <div className="flex items-center justify-between text-sm">
//               <span className="text-[#A1A1AA]">Step {step} of 3</span>
//               <span className="text-[#A1A1AA]">{Math.round(progress)}% Complete</span>
//             </div>
//             <Progress value={progress} className="h-1.5" />
//           </div>

//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold tracking-tight">
//               {step === 1 && "Create Account"}
//               {step === 2 && "Company Details"}
//               {step === 3 && "Final Steps"}
//             </h2>
//             <p className="text-sm text-[#A1A1AA]">
//               {step === 1 && "Let's start with your basic information"}
//               {step === 2 && "Tell us more about your business"}
//               {step === 3 && "Customize your experience"}
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <AnimatePresence mode="wait">
//               {step === 1 && (
//                 <motion.div
//                   key="step1"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="space-y-4"
//                 >
//                   <div className="space-y-2">
//                     <Label htmlFor="name" className="text-sm font-medium">
//                       Company Name *
//                     </Label>
//                     <div className="relative">
//                       <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
//                       <Input
//                         id="name"
//                         type="text"
//                         placeholder="Acme Corporation"
//                         value={formData.name}
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10 placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="email" className="text-sm font-medium">
//                       Work Email *
//                     </Label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="john@acme.com"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10 placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="phone" className="text-sm font-medium">
//                       Phone Number *
//                     </Label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
//                       <Input
//                         id="phone"
//                         type="tel"
//                         placeholder="+1 (555) 000-0000"
//                         value={formData.phone}
//                         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                         className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10 placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="password" className="text-sm font-medium">
//                       Password *
//                     </Label>
//                     <div className="relative">
//                       <Input
//                         id="password"
//                         type={showPassword ? "text" : "password"}
//                         placeholder="••••••••"
//                         value={formData.password}
//                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                         className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pr-10 placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
//                         required
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717A] hover:text-[#A1A1AA]"
//                       >
//                         {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                       </button>
//                     </div>
//                     <p className="text-xs text-[#71717A]">Must be at least 8 characters</p>
//                   </div>
//                 </motion.div>
//               )}

//               {step === 2 && (
//                 <motion.div
//                   key="step2"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="space-y-4"
//                 >
//                   <div className="space-y-2">
//                     <Label htmlFor="industry" className="text-sm font-medium">
//                       Industry *
//                     </Label>
//                     <Select
//                       value={formData.industry}
//                       onValueChange={(value) => setFormData({ ...formData, industry: value })}
//                     >
//                       <SelectTrigger className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] focus:ring-[#5C6EFF]">
//                         <SelectValue placeholder="Select your industry" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {INDUSTRIES.map((industry) => (
//                           <SelectItem key={industry} value={industry}>
//                             {industry}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="company_size" className="text-sm font-medium">
//                       Company Size *
//                     </Label>
//                     <Select
//                       value={formData.company_size}
//                       onValueChange={(value) => setFormData({ ...formData, company_size: value })}
//                     >
//                       <SelectTrigger className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] focus:ring-[#5C6EFF]">
//                         <SelectValue placeholder="Select company size" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {COMPANY_SIZES.map((size) => (
//                           <SelectItem key={size} value={size}>
//                             {size}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="address" className="text-sm font-medium">
//                       Address *
//                     </Label>
//                     <div className="relative">
//                       <MapPin className="absolute left-3 top-3 h-4 w-4 text-[#71717A]" />
//                       <Textarea
//                         id="address"
//                         placeholder="123 Main St, City, State, ZIP"
//                         value={formData.address}
//                         onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                         className="min-h-[80px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10 placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="website" className="text-sm font-medium">
//                       Website
//                     </Label>
//                     <div className="relative">
//                       <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
//                       <Input
//                         id="website"
//                         type="url"
//                         placeholder="https://acme.com"
//                         value={formData.website}
//                         onChange={(e) => setFormData({ ...formData, website: e.target.value })}
//                         className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10 placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="company_since" className="text-sm font-medium">
//                       Company Founded
//                     </Label>
//                     <Input
//                       id="company_since"
//                       type="text"
//                       placeholder="2020"
//                       value={formData.company_since}
//                       onChange={(e) => setFormData({ ...formData, company_since: e.target.value })}
//                       className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
//                     />
//                   </div>
//                 </motion.div>
//               )}

//               {step === 3 && (
//                 <motion.div
//                   key="step3"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="space-y-6"
//                 >
//                   <div className="space-y-2">
//                     <Label htmlFor="description" className="text-sm font-medium">
//                       Company Description
//                     </Label>
//                     <Textarea
//                       id="description"
//                       placeholder="Tell us about your company..."
//                       value={formData.description}
//                       onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                       className="min-h-[100px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] placeholder:text-[#71717A] focus-visible:ring-[#5C6EFF]"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="logo" className="text-sm font-medium">
//                       Company Logo
//                     </Label>
//                     <div className="flex items-center gap-4">
//                       {logoPreview ? (
//                         <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
//                           <img
//                             src={logoPreview || "/placeholder.svg"}
//                             alt="Logo preview"
//                             className="h-full w-full object-cover"
//                           />
//                         </div>
//                       ) : (
//                         <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
//                           <Upload className="h-6 w-6 text-[#71717A]" />
//                         </div>
//                       )}
//                       <div className="flex-1">
//                         <Input
//                           id="logo"
//                           type="file"
//                           accept="image/*"
//                           onChange={handleLogoUpload}
//                           className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] file:mr-4 file:rounded-md file:border-0 file:bg-[#5C6EFF] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-[#4C5EEF]"
//                         />
//                         <p className="mt-1 text-xs text-[#71717A]">PNG, JPG up to 5MB</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <Label className="text-sm font-medium">Choose Your Plan</Label>
//                     <div className="space-y-3">
//                       {PLANS.map((plan) => (
//                         <motion.div
//                           key={plan.name}
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           onClick={() => setFormData({ ...formData, plan: plan.name })}
//                           className={`relative cursor-pointer rounded-lg border p-4 transition-all ${
//                             formData.plan === plan.name
//                               ? "border-[#5C6EFF] bg-[rgba(92,110,255,0.1)]"
//                               : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,255,255,0.15)]"
//                           }`}
//                         >
//                           {plan.popular && (
//                             <div className="absolute -top-2 right-4 flex items-center gap-1 rounded-full bg-[#5C6EFF] px-2 py-0.5 text-xs font-medium">
//                               <Sparkles className="h-3 w-3" />
//                               Popular
//                             </div>
//                           )}
//                           <div className="flex items-start justify-between">
//                             <div className="space-y-1">
//                               <div className="flex items-center gap-2">
//                                 <h4 className="font-semibold">{plan.name}</h4>
//                                 <span className="text-sm font-bold text-[#5C6EFF]">{plan.price}</span>
//                               </div>
//                               <p className="text-xs text-[#A1A1AA]">{plan.description}</p>
//                             </div>
//                             <div
//                               className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
//                                 formData.plan === plan.name
//                                   ? "border-[#5C6EFF] bg-[#5C6EFF]"
//                                   : "border-[rgba(255,255,255,0.2)]"
//                               }`}
//                             >
//                               {formData.plan === plan.name && <Check className="h-3 w-3 text-white" />}
//                             </div>
//                           </div>
//                           <ul className="mt-3 space-y-1">
//                             {plan.features.map((feature, idx) => (
//                               <li key={idx} className="flex items-center gap-2 text-xs text-[#A1A1AA]">
//                                 <Check className="h-3 w-3 text-[#10B981]" />
//                                 {feature}
//                               </li>
//                             ))}
//                           </ul>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <div className="flex gap-3">
//               {step > 1 && (
//                 <Button
//                   type="button"
//                   onClick={handleBack}
//                   variant="outline"
//                   className="h-11 flex-1 border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
//                 >
//                   <ArrowLeft className="mr-2 h-4 w-4" />
//                   Back
//                 </Button>
//               )}
//               {step < 3 ? (
//                 <Button
//                   type="button"
//                   onClick={handleNext}
//                   className="h-11 flex-1 bg-[#5C6EFF] font-medium text-white hover:bg-[#4C5EEF] focus-visible:ring-[#5C6EFF]"
//                 >
//                   Continue
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               ) : (
//                 <Button
//                   type="submit"
//                   className="h-11 flex-1 bg-[#5C6EFF] font-medium text-white hover:bg-[#4C5EEF] focus-visible:ring-[#5C6EFF]"
//                 >
//                   Create Account
//                   <Check className="ml-2 h-4 w-4" />
//                 </Button>
//               )}
//             </div>
//           </form>

//           {step === 1 && (
//             <>
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-[rgba(255,255,255,0.08)]" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-[#0E0E10] px-2 text-[#71717A]">OR CONTINUE WITH</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <Button
//                   variant="outline"
//                   className="h-11 border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
//                 >
//                   <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
//                     <path
//                       fill="currentColor"
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                     />
//                   </svg>
//                   Google
//                 </Button>
//                 <Button
//                   variant="outline"
//                   className="h-11 border-[rgba(255,255,255,0.08)] bg-transparent hover:bg-[rgba(255,255,255,0.05)]"
//                 >
//                   <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                   </svg>
//                   GitHub
//                 </Button>
//               </div>
//             </>
//           )}

//           <p className="text-center text-xs text-[#71717A]">
//             {step === 1 ? (
//               <>
//                 By creating an account, you agree to our{" "}
//                 <Link href="/terms" className="text-[#5C6EFF] hover:underline">
//                   Terms of Service
//                 </Link>{" "}
//                 and{" "}
//                 <Link href="/privacy" className="text-[#5C6EFF] hover:underline">
//                   Privacy Policy
//                 </Link>
//               </>
//             ) : (
//               <>
//                 Already have an account?{" "}
//                 <Link href="/auth/login" className="font-medium text-[#5C6EFF] hover:underline">
//                   Sign in
//                 </Link>
//               </>
//             )}
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LayoutDashboard,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  Globe,
  Upload,
  Check,
  Loader2,
} from "lucide-react"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

const INDUSTRIES = ["Technology", "Finance", "Healthcare", "Retail", "Manufacturing", "Education", "Real Estate", "Consulting", "E-commerce", "Other"]
const COMPANY_SIZES = ["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "501-1000 employees", "1000+ employees"]

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [logoPreview, setLogoPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    company_name: "",
    company_email: "",
    phone: "",
    website: "",
    description: "",
    country: "",
    city: "",
    postal_code: "",
    street_address: "",
    industry: "",
    company_size: "",
    company_since: "",
    company_logo: null,
  })

  const progress = (step / 3) * 100

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, company_logo: file })
      const reader = new FileReader()
      reader.onloadend = () => setLogoPreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async () => {
    setError("")
    setLoading(true)

    try {
      const submitData = new FormData()
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== "") {
          if (key === "company_logo" && formData[key] instanceof File) {
            submitData.append(key, formData[key])
          } else if (key !== "company_logo") {
            submitData.append(key, formData[key])
          }
        }
      })

      const response = await fetch(`${API_BASE_URL}/api/auth/signup/`, {
        method: "POST",
        body: submitData,
      })

      const data = await response.json()

      if (!response.ok) {
        const errorMsg = data.password?.[0] || data.error || "Registration failed"
        throw new Error(errorMsg)
      }

      localStorage.setItem("access_token", data.tokens.access)
      localStorage.setItem("refresh_token", data.tokens.refresh)
      localStorage.setItem("user", JSON.stringify(data.user))

      router.push("/dashboard")
    } catch (err) {
      setError(err.message || "An error occurred during registration")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-[#0E0E10] via-[#1A1A1C] to-[#0E0E10] lg:flex lg:flex-col lg:justify-center lg:p-12"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className={`absolute left-1/4 top-1/4 h-96 w-96 rounded-full blur-[120px] ${
              step === 1 ? "bg-[#5C6EFF]" : step === 2 ? "bg-[#10B981]" : "bg-[#F59E0B]"
            }`}
          />
        </AnimatePresence>

        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5C6EFF]">
              <LayoutDashboard className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">CFO Platform</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {step === 1 && (
                <>
                  <h1 className="max-w-xl text-5xl font-bold leading-tight">Welcome to the Future of Finance</h1>
                  <p className="max-w-lg text-lg text-[#A1A1AA]">Join thousands of companies using AI-powered insights to transform their financial operations.</p>
                </>
              )}
              {step === 2 && (
                <>
                  <h1 className="max-w-xl text-5xl font-bold leading-tight">Tell Us About Your Company</h1>
                  <p className="max-w-lg text-lg text-[#A1A1AA]">Help us personalize your experience with industry-specific insights and benchmarks.</p>
                </>
              )}
              {step === 3 && (
                <>
                  <h1 className="max-w-xl text-5xl font-bold leading-tight">Almost There!</h1>
                  <p className="max-w-lg text-lg text-[#A1A1AA]">Add some final details to complete your profile and get started.</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="space-y-3">
            {["Real-time financial analytics", "AI-powered forecasting", "Industry benchmarking"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="flex w-full items-center justify-center bg-[#0E0E10] p-8 lg:w-1/2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-md space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#A1A1AA]">Step {step} of 3</span>
              <span className="text-[#A1A1AA]">{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.1)]">
              <div className="h-full bg-[#5C6EFF] transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{step === 1 ? "Create Account" : step === 2 ? "Company Details" : "Final Steps"}</h2>
            <p className="text-sm text-[#A1A1AA]">{step === 1 ? "Let's start with your basic information" : step === 2 ? "Tell us more about your business" : "Customize your experience"}</p>
          </div>

          {error && <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">{error}</div>}

          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Username *</Label>
                    <Input value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} placeholder="johndoe" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Company Name *</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
                      <Input value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} placeholder="Acme Corp" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Company Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
                      <Input type="email" value={formData.company_email} onChange={(e) => setFormData({ ...formData, company_email: e.target.value })} placeholder="contact@acme.com" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Phone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
                      <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1234567890" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Password *</Label>
                    <div className="relative">
                      <Input type={showPassword ? "text" : "password"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="••••••••" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pr-10" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717A]">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Confirm Password *</Label>
                    <div className="relative">
                      <Input type={showConfirmPassword ? "text" : "password"} value={formData.confirm_password} onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })} placeholder="••••••••" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pr-10" />
                      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717A]">
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Website *</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
                      <Input value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} placeholder="www.acme.com" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Industry *</Label>
                    <Select value={formData.industry} onValueChange={(v) => setFormData({ ...formData, industry: v })}>
                      <SelectTrigger className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {INDUSTRIES.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Company Size *</Label>
                    <Select value={formData.company_size} onValueChange={(v) => setFormData({ ...formData, company_size: v })}>
                      <SelectTrigger className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {COMPANY_SIZES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Street Address *</Label>
                    <Input value={formData.street_address} onChange={(e) => setFormData({ ...formData, street_address: e.target.value })} placeholder="123 Main St" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>City *</Label>
                      <Input value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} placeholder="New York" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]" />
                    </div>
                    <div className="space-y-2">
                      <Label>Postal Code *</Label>
                      <Input value={formData.postal_code} onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })} placeholder="10001" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Country *</Label>
                    <Input value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} placeholder="United States" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]" />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <div className="space-y-2">
                    <Label>Description *</Label>
                    <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Tell us about your company..." className="min-h-[100px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Founded *</Label>
                    <Input value={formData.company_since} onChange={(e) => setFormData({ ...formData, company_since: e.target.value })} placeholder="2020" className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Company Logo</Label>
                    <div className="flex items-center gap-4">
                      {logoPreview ? (
                        <div className="h-20 w-20 rounded-lg border border-[rgba(255,255,255,0.08)] overflow-hidden">
                          <img src={logoPreview} alt="Logo" className="h-full w-full object-cover" />
                        </div>
                      ) : (
                        <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-[rgba(255,255,255,0.08)]">
                          <Upload className="h-6 w-6 text-[#71717A]" />
                        </div>
                      )}
                      <Input type="file" accept="image/*" onChange={handleLogoUpload} className="h-11 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-3">
              {step > 1 && <Button onClick={() => setStep(step - 1)} variant="outline" className="h-11 flex-1" disabled={loading}><ArrowLeft className="mr-2 h-4 w-4" />Back</Button>}
              {step < 3 ? (
                <Button onClick={() => setStep(step + 1)} className="h-11 flex-1 bg-[#5C6EFF]">Continue<ArrowRight className="ml-2 h-4 w-4" /></Button>
              ) : (
                <Button onClick={handleSubmit} className="h-11 flex-1 bg-[#5C6EFF]" disabled={loading}>
                  {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Creating...</> : <><Check className="mr-2 h-4 w-4" />Create Account</>}
                </Button>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-[#71717A]">
            Already have an account? <Link href="/auth/login" className="text-[#5C6EFF] hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}