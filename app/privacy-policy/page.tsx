"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  Shield, 
  Lock, 
  Eye, 
  Database,
  UserCheck,
  Share2,
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  ChevronRight,
  Home,
  Cookie,
  Globe,
  FileText
} from "lucide-react"
import { XCircle } from "lucide-react";


export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "information-we-collect", title: "Information We Collect", icon: Database },
    { id: "how-we-use", title: "How We Use Your Information", icon: Eye },
    { id: "data-sharing", title: "Data Sharing & Disclosure", icon: Share2 },
    { id: "data-security", title: "Data Security", icon: Lock },
    { id: "quickbooks", title: "QuickBooks Data", icon: Database },
    { id: "cookies", title: "Cookies & Tracking", icon: Cookie },
    { id: "your-rights", title: "Your Rights", icon: UserCheck },
    { id: "retention", title: "Data Retention", icon: Clock },
    { id: "international", title: "International Transfers", icon: Globe },
    { id: "children", title: "Children's Privacy", icon: UserCheck },
    { id: "changes", title: "Policy Changes", icon: FileText },
    { id: "contact", title: "Contact Us", icon: Mail },
  ]

  const scrollToSection = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[#0E0E10]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5C6EFF]">
                <LayoutDashboard className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">CFO Platform</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="/terms" 
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 rounded-lg bg-[#5C6EFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#4C5EEF]"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[rgba(255,255,255,0.08)] bg-gradient-to-br from-[#0E0E10] via-[#1A1A1C] to-[#0E0E10] pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-[#10B981] blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(16,185,129,0.1)]">
              <Shield className="h-8 w-8 text-[#10B981]" />
            </div>
            <h1 className="mb-4 text-5xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mx-auto max-w-2xl text-lg text-[#A1A1AA]">
              Your privacy and data security are our top priorities
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-[#71717A]">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Last Updated: January 13, 2026</span>
              </div>
              <span>•</span>
              <span>Effective: January 13, 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="sticky top-24 hidden h-fit w-64 lg:block">
            <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-4">
              <h3 className="mb-4 text-sm font-semibold text-[#71717A]">TABLE OF CONTENTS</h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all ${
                      activeSection === section.id
                        ? "bg-[rgba(16,185,129,0.1)] text-[#10B981]"
                        : "text-[#A1A1AA] hover:bg-[rgba(255,255,255,0.05)]"
                    }`}
                  >
                    <section.icon className="h-4 w-4" />
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)] p-8 backdrop-blur-xl">

              {/* Trust Badge */}
              <div className="mb-12 grid gap-4 md:grid-cols-3">
                {[
                  { icon: Lock, title: "256-bit Encryption", desc: "Bank-level security" },
                  { icon: Shield, title: "GDPR Compliant", desc: "EU data protection" },
                  { icon: UserCheck, title: "Your Data, Your Control", desc: "Full transparency" }
                ].map((badge, idx) => (
                  <div key={idx} className="rounded-lg border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.05)] p-4">
                    <badge.icon className="mb-2 h-6 w-6 text-[#10B981]" />
                    <h4 className="mb-1 font-semibold text-white">{badge.title}</h4>
                    <p className="text-xs text-[#A1A1AA]">{badge.desc}</p>
                  </div>
                ))}
              </div>

              {/* Section 1: Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Shield className="h-6 w-6 text-[#10B981]" />
                  1. Introduction
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    CFO Platform ("we", "us", or "our") is committed to protecting your privacy and ensuring the security 
                    of your personal and financial information. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your data when you use our Service.
                  </p>
                  <p>
                    By using CFO Platform, you consent to the data practices described in this policy. If you do not agree 
                    with this policy, please do not use our Service.
                  </p>
                  <div className="rounded-lg border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.05)] p-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#10B981]" />
                      <div>
                        <p className="text-sm font-medium text-[#10B981]">Our Commitment</p>
                        <p className="mt-1 text-sm">
                          We will never sell your personal information to third parties. Your financial data is encrypted 
                          and stored securely using industry-leading security measures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Information We Collect */}
              <section id="information-we-collect" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Database className="h-6 w-6 text-[#10B981]" />
                  2. Information We Collect
                </h2>
                <div className="space-y-6 text-[#A1A1AA]">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">2.1 Information You Provide</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        {
                          title: "Account Information",
                          items: ["Username", "Email address", "Password (encrypted)", "Company name", "Phone number"]
                        },
                        {
                          title: "Company Details",
                          items: ["Industry", "Company size", "Address", "Website", "Company logo"]
                        },
                        {
                          title: "Financial Data",
                          items: ["QuickBooks account data", "Transactions", "Invoices and bills", "Customer/vendor info"]
                        },
                        {
                          title: "Communication Data",
                          items: ["Support tickets", "Email correspondence", "Feedback and surveys"]
                        }
                      ].map((category, idx) => (
                        <div key={idx} className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                          <h4 className="mb-2 font-semibold text-white">{category.title}</h4>
                          <ul className="space-y-1 text-sm">
                            {category.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">2.2 Information We Collect Automatically</h3>
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5" />
                          <span><strong>Usage Data:</strong> Pages viewed, features used, time spent, click patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5" />
                          <span><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5" />
                          <span><strong>Cookies & Similar Technologies:</strong> Session cookies, preference cookies, analytics cookies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5" />
                          <span><strong>Log Data:</strong> Server logs, error reports, access times</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: How We Use Your Information */}
              <section id="how-we-use" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Eye className="h-6 w-6 text-[#10B981]" />
                  3. How We Use Your Information
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>We use your information for the following purposes:</p>
                  <div className="grid gap-4">
                    {[
                      {
                        title: "Provide and Maintain Services",
                        desc: "Process transactions, sync financial data, generate reports and analytics, provide customer support"
                      },
                      {
                        title: "Improve User Experience",
                        desc: "Analyze usage patterns, develop new features, personalize content, optimize performance"
                      },
                      {
                        title: "Security and Fraud Prevention",
                        desc: "Monitor for suspicious activity, protect against unauthorized access, enforce our terms of service"
                      },
                      {
                        title: "Communication",
                        desc: "Send service updates, respond to inquiries, provide technical notices, share important announcements"
                      },
                      {
                        title: "Legal Compliance",
                        desc: "Comply with legal obligations, respond to legal requests, protect our rights and property"
                      },
                      {
                        title: "Analytics and Research",
                        desc: "Understand usage trends, improve AI algorithms, conduct market research (with anonymized data)"
                      }
                    ].map((purpose, idx) => (
                      <div key={idx} className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                        <h4 className="mb-1 font-semibold text-white">{purpose.title}</h4>
                        <p className="text-sm">{purpose.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 4: Data Sharing */}
              <section id="data-sharing" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Share2 className="h-6 w-6 text-[#10B981]" />
                  4. Data Sharing & Disclosure
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <div className="rounded-lg border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.05)] p-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#10B981]" />
                      <div>
                        <p className="text-sm font-medium text-[#10B981]">We Do Not Sell Your Data</p>
                        <p className="mt-1 text-sm">
                          We will never sell, rent, or trade your personal information to third parties for marketing purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>We may share your information only in the following limited circumstances:</p>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Service Providers",
                        desc: "We work with trusted third-party companies (hosting providers, payment processors, analytics services) who help us operate our Service. They have access only to information necessary to perform their functions and are obligated to protect your data."
                      },
                      {
                        title: "QuickBooks/Intuit",
                        desc: "When you connect your QuickBooks account, we access your financial data through Intuit's API. This data sharing is necessary to provide our Service and is governed by Intuit's privacy policy."
                      },
                      {
                        title: "Legal Requirements",
                        desc: "We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety."
                      },
                      {
                        title: "Business Transfers",
                        desc: "If we are involved in a merger, acquisition, or sale of assets, your information may be transferred. You will be notified of any such change."
                      },
                      {
                        title: "With Your Consent",
                        desc: "We may share your information for purposes not described in this policy with your explicit consent."
                      }
                    ].map((sharing, idx) => (
                      <div key={idx} className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                        <h4 className="mb-1 font-semibold text-white">{sharing.title}</h4>
                        <p className="text-sm">{sharing.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 5: Data Security */}
              <section id="data-security" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Lock className="h-6 w-6 text-[#10B981]" />
                  5. Data Security
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    We implement industry-leading security measures to protect your data from unauthorized access, 
                    alteration, disclosure, or destruction:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        icon: Lock,
                        title: "Encryption",
                        desc: "All data transmitted between your device and our servers is encrypted using TLS 1.3. Sensitive data at rest is encrypted using AES-256."
                      },
                      {
                        icon: Shield,
                        title: "Access Controls",
                        desc: "Strict role-based access controls ensure only authorized personnel can access your data. Multi-factor authentication required for all access."
                      },
                      {
                        icon: Eye,
                        title: "Monitoring",
                        desc: "24/7 security monitoring, intrusion detection systems, and regular security audits to identify and address vulnerabilities."
                      },
                      {
                        icon: Database,
                        title: "Secure Infrastructure",
                        desc: "Data hosted on secure, certified cloud infrastructure with automatic backups and disaster recovery procedures."
                      }
                    ].map((measure, idx) => (
                      <div key={idx} className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                        <measure.icon className="mb-2 h-5 w-5 text-[#10B981]" />
                        <h4 className="mb-1 font-semibold text-white">{measure.title}</h4>
                        <p className="text-sm">{measure.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)] p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-[#EF4444]" />
                      <div>
                        <p className="text-sm font-medium text-[#EF4444]">Important Notice</p>
                        <p className="mt-1 text-sm">
                          While we use best-in-class security measures, no method of transmission or storage is 100% secure. 
                          You acknowledge that you provide information at your own risk.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: QuickBooks Data */}
              <section id="quickbooks" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Database className="h-6 w-6 text-[#10B981]" />
                  6. QuickBooks Data
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    When you connect your QuickBooks account to CFO Platform, we access and store certain financial data 
                    to provide our Service:
                  </p>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">Data We Access:</h4>
                    <ul className="space-y-1 text-sm">
                      {[
                        "Chart of accounts and account balances",
                        "Transactions (invoices, bills, payments, expenses)",
                        "Customer and vendor information",
                        "Financial reports and statements"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">How We Use QuickBooks Data:</h4>
                    <ul className="space-y-1 text-sm">
                      {[
                        "Generate financial analytics and insights",
                        "Create visualizations and reports",
                        "Provide AI-powered forecasting",
                        "Identify trends and anomalies"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.05)] p-4">
                    <div className="flex gap-3">
                      <Shield className="h-5 w-5 flex-shrink-0 text-[#10B981]" />
                      <div>
                        <p className="text-sm font-medium text-[#10B981]">Your Control</p>
                        <p className="mt-1 text-sm">
                          You can disconnect QuickBooks integration at any time. When you disconnect, we will delete 
                          all synced financial data from our servers within 30 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Cookies */}
              <section id="cookies" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Cookie className="h-6 w-6 text-[#10B981]" />
                  7. Cookies & Tracking Technologies
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience and understand how you use our Service:
                  </p>
                  <div className="grid gap-4">
                    {[
                      {
                        type: "Essential Cookies",
                        purpose: "Required for basic functionality (authentication, security, preferences)",
                        control: "Cannot be disabled"
                      },
                      {
                        type: "Analytics Cookies",
                        purpose: "Help us understand usage patterns and improve our Service",
                        control: "Can be disabled"
                      },
                      {
                        type: "Performance Cookies",
                        purpose: "Measure site performance and optimize user experience",
                        control: "Can be disabled"
                      }
                    ].map((cookie, idx) => (
                      <div key={idx} className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="mb-1 font-semibold text-white">{cookie.type}</h4>
                            <p className="text-sm mb-2">{cookie.purpose}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            cookie.control === "Cannot be disabled" 
                              ? "bg-[rgba(239,68,68,0.1)] text-[#EF4444]" 
                              : "bg-[rgba(16,185,129,0.1)] text-[#10B981]"
                          }`}>
                            {cookie.control}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm">
                    You can control cookies through your browser settings. Note that disabling certain cookies may affect 
                    the functionality of our Service.
                  </p>
                </div>
              </section>

              {/* Section 8: Your Rights */}
              <section id="your-rights" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <UserCheck className="h-6 w-6 text-[#10B981]" />
                  8. Your Rights
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>You have the following rights regarding your personal data:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        icon: Eye,
                        title: "Right to Access",
                        desc: "Request a copy of all personal data we hold about you"
                      },
                      {
                        icon: FileText,
                        title: "Right to Rectification",
                        desc: "Correct inaccurate or incomplete information"
                      },
                      {
                        icon: AlertCircle,
                        title: "Right to Erasure",
                        desc: "Request deletion of your personal data ('right to be forgotten')"
                      },
                      {
                        icon: Lock,
                        title: "Right to Restriction",
                        desc: "Limit how we process your data in certain circumstances"
                      },
                      {
                        icon: Share2,
                        title: "Right to Data Portability",
                        desc: "Receive your data in a structured, machine-readable format"
                      },
                      {
                        icon: XCircle,
                        title: "Right to Object",
                        desc: "Object to processing of your data for specific purposes"
                      }
                    ].map((right, idx) => (
                      <div key={idx} className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                        <right.icon className="mb-2 h-5 w-5 text-[#10B981]" />
                        <h4 className="mb-1 font-semibold text-white">{right.title}</h4>
                        <p className="text-sm">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">How to Exercise Your Rights:</h4>
                    <p className="text-sm mb-2">
                      To exercise any of these rights, contact us at{" "}
                      <a href="mailto:privacy@cfoplatform.com" className="text-[#10B981] hover:underline">
                        privacy@cfoplatform.com
                      </a>
                      . We will respond within 30 days of receiving your request.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Data Retention */}
              <section id="retention" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Clock className="h-6 w-6 text-[#10B981]" />
                  9. Data Retention
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:</p>
                  <div className="space-y-3">
                    {[
                      {
                        category: "Account Data",
                        retention: "For the duration of your account plus 30 days after deletion"
                      },
                      {
                        category: "Financial Data",
                        retention: "7 years for tax and legal compliance purposes"
                      },
                      {
                        category: "Usage Analytics",
                        retention: "Anonymized and aggregated data retained indefinitely"
                      },
                      {
                        category: "Communication Records",
                        retention: "3 years for customer support and legal purposes"
                      },
                      {
                        category: "Marketing Data",
                        retention: "Until you unsubscribe or request deletion"
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                        <Clock className="h-5 w-5 flex-shrink-0 text-[#10B981]" />
                        <div>
                          <h4 className="font-semibold text-white">{item.category}</h4>
                          <p className="text-sm">{item.retention}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 10: International Transfers */}
              <section id="international" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Globe className="h-6 w-6 text-[#10B981]" />
                  10. International Data Transfers
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. 
                    These countries may have different data protection laws.
                  </p>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">Our Safeguards:</h4>
                    <ul className="space-y-1 text-sm">
                      {[
                        "Standard Contractual Clauses (SCCs) approved by the European Commission",
                        "Adequacy decisions recognizing equivalent data protection",
                        "Binding Corporate Rules for intra-group transfers",
                        "Certification under Privacy Shield (where applicable)"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 11: Children's Privacy */}
              <section id="children" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <UserCheck className="h-6 w-6 text-[#10B981]" />
                  11. Children's Privacy
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <div className="rounded-lg border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)] p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-[#EF4444]" />
                      <div>
                        <p className="text-sm font-medium text-[#EF4444]">Age Restriction</p>
                        <p className="mt-1 text-sm">
                          Our Service is not intended for children under 18 years of age. We do not knowingly collect 
                          personal information from children. If you are a parent or guardian and believe your child has 
                          provided us with personal information, please contact us immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Policy Changes */}
              <section id="changes" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <FileText className="h-6 w-6 text-[#10B981]" />
                  12. Changes to This Privacy Policy
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, 
                    operational, or regulatory reasons.
                  </p>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">When We Make Changes:</h4>
                    <ul className="space-y-1 text-sm">
                      {[
                        "We will update the 'Last Updated' date at the top of this page",
                        "For material changes, we will notify you via email",
                        "We will provide prominent notice within our Service",
                        "You will have 30 days to review changes before they take effect"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm">
                    Your continued use of the Service after changes take effect constitutes acceptance of the updated policy.
                  </p>
                </div>
              </section>

              {/* Section 13: Contact */}
              <section id="contact" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Mail className="h-6 w-6 text-[#10B981]" />
                  13. Contact Us
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:</p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-6 border border-[rgba(255,255,255,0.08)]">
                      <Mail className="mb-3 h-6 w-6 text-[#10B981]" />
                      <h4 className="mb-2 font-semibold text-white">Email</h4>
                      <a href="mailto:privacy@cfoplatform.com" className="text-sm text-[#10B981] hover:underline">
                        privacy@cfoplatform.com
                      </a>
                    </div>
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-6 border border-[rgba(255,255,255,0.08)]">
                      <Shield className="mb-3 h-6 w-6 text-[#10B981]" />
                      <h4 className="mb-2 font-semibold text-white">Data Protection Officer</h4>
                      <a href="mailto:dpo@cfoplatform.com" className="text-sm text-[#10B981] hover:underline">
                        dpo@cfoplatform.com
                      </a>
                    </div>
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-6 border border-[rgba(255,255,255,0.08)]">
                      <Home className="mb-3 h-6 w-6 text-[#10B981]" />
                      <h4 className="mb-2 font-semibold text-white">Mailing Address</h4>
                      <p className="text-sm">
                        CFO Platform<br />
                        Privacy Department<br />
                        123 Financial District<br />
                        New York, NY 10004
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Footer CTA */}
            <div className="mt-8 rounded-lg border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.05)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-1 font-semibold">Questions About Your Privacy?</h3>
                  <p className="text-sm text-[#A1A1AA]">
                    Our privacy team is here to help answer your questions
                  </p>
                </div>
                <a
                  href="mailto:privacy@cfoplatform.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#10B981] px-6 py-3 font-medium transition-colors hover:bg-[#059669]"
                >
                  <Mail className="h-4 w-4" />
                  Contact Privacy Team
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,28,0.6)]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#71717A]">
              © 2026 CFO Platform. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}