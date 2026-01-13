"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  FileText, 
  Shield, 
  AlertCircle, 
  CheckCircle2,
  Clock,
  Mail,
  ExternalLink,
  ChevronRight,
  Home
} from "lucide-react"
import { XCircle } from "lucide-react";


export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("acceptance")

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: CheckCircle2 },
    { id: "services", title: "Description of Services", icon: FileText },
    { id: "user-obligations", title: "User Obligations", icon: Shield },
    { id: "account", title: "Account Registration", icon: LayoutDashboard },
    { id: "quickbooks", title: "QuickBooks Integration", icon: ExternalLink },
    { id: "data", title: "Data & Privacy", icon: Shield },
    { id: "fees", title: "Fees & Payment", icon: Mail },
    { id: "termination", title: "Termination", icon: AlertCircle },
    { id: "liability", title: "Limitation of Liability", icon: Shield },
    { id: "changes", title: "Changes to Terms", icon: Clock },
    { id: "contact", title: "Contact Information", icon: Mail },
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
                href="/privacy-policy" 
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
              >
                Privacy Policy
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
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#5C6EFF] blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(92,110,255,0.1)]">
              <FileText className="h-8 w-8 text-[#5C6EFF]" />
            </div>
            <h1 className="mb-4 text-5xl font-bold tracking-tight">Terms and Conditions</h1>
            <p className="mx-auto max-w-2xl text-lg text-[#A1A1AA]">
              Last Updated: January 13, 2026
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#71717A]">
              <Clock className="h-4 w-4" />
              <span>Estimated reading time: 15 minutes</span>
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
                        ? "bg-[rgba(92,110,255,0.1)] text-[#5C6EFF]"
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

              {/* Introduction */}
              <div className="mb-12 rounded-lg border border-[rgba(92,110,255,0.3)] bg-[rgba(92,110,255,0.05)] p-6">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-[#5C6EFF]" />
                  <div>
                    <p className="text-sm font-medium text-[#5C6EFF]">Important Notice</p>
                    <p className="mt-2 text-sm text-[#A1A1AA]">
                      Please read these Terms and Conditions carefully before using our CFO Platform service. 
                      By accessing or using our service, you agree to be bound by these terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1: Acceptance */}
              <section id="acceptance" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <CheckCircle2 className="h-6 w-6 text-[#5C6EFF]" />
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    By creating an account, accessing, or using the CFO Platform ("Service"), you agree to be bound 
                    by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you may not use our Service.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you ("User", "you", or "your") and 
                    CFO Platform ("Company", "we", "us", or "our").
                  </p>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">Key Points:</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm">
                      <li>You must be at least 18 years old to use this Service</li>
                      <li>You must have the authority to bind your company to these Terms</li>
                      <li>You agree to comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2: Services */}
              <section id="services" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <FileText className="h-6 w-6 text-[#5C6EFF]" />
                  2. Description of Services
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    CFO Platform provides AI-powered financial management and analytics services, including but not limited to:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      "Financial data aggregation and analysis",
                      "QuickBooks integration and synchronization",
                      "Real-time financial reporting",
                      "AI-powered forecasting and insights",
                      "Industry benchmarking",
                      "Custom financial dashboards"
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#10B981]" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, 
                    with or without notice, and without liability to you.
                  </p>
                </div>
              </section>

              {/* Section 3: User Obligations */}
              <section id="user-obligations" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Shield className="h-6 w-6 text-[#5C6EFF]" />
                  3. User Obligations
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>As a user of our Service, you agree to:</p>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Provide Accurate Information",
                        desc: "Provide accurate, current, and complete information during registration and keep it updated"
                      },
                      {
                        title: "Maintain Security",
                        desc: "Maintain the security and confidentiality of your account credentials and notify us immediately of any unauthorized access"
                      },
                      {
                        title: "Lawful Use",
                        desc: "Use the Service only for lawful purposes and in accordance with these Terms"
                      },
                      {
                        title: "No Unauthorized Access",
                        desc: "Not attempt to gain unauthorized access to any part of the Service, other accounts, or computer systems"
                      },
                      {
                        title: "No Harmful Activities",
                        desc: "Not transmit any viruses, malware, or other harmful code through the Service"
                      },
                      {
                        title: "Respect Intellectual Property",
                        desc: "Respect all intellectual property rights and not copy, modify, or distribute our content without permission"
                      }
                    ].map((obligation, idx) => (
                      <div key={idx} className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                        <h4 className="mb-1 font-semibold text-white">{obligation.title}</h4>
                        <p className="text-sm">{obligation.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 4: Account Registration */}
              <section id="account" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <LayoutDashboard className="h-6 w-6 text-[#5C6EFF]" />
                  4. Account Registration
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    To access certain features of the Service, you must register for an account by providing:
                  </p>
                  <ul className="list-inside list-disc space-y-2 ml-4">
                    <li>Valid company information (name, email, phone, address)</li>
                    <li>Industry and company size details</li>
                    <li>A secure password meeting our requirements</li>
                    <li>Acceptance of these Terms and our Privacy Policy</li>
                  </ul>
                  <div className="rounded-lg border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)] p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-[#EF4444]" />
                      <div>
                        <p className="text-sm font-medium text-[#EF4444]">Account Responsibility</p>
                        <p className="mt-1 text-sm">
                          You are solely responsible for all activities that occur under your account. 
                          We are not liable for any loss or damage arising from your failure to maintain account security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: QuickBooks Integration */}
              <section id="quickbooks" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <ExternalLink className="h-6 w-6 text-[#5C6EFF]" />
                  5. QuickBooks Integration
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    Our Service integrates with QuickBooks to sync your financial data. By connecting your QuickBooks account:
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                      <h4 className="mb-2 font-semibold text-white">You Grant Us Permission To:</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm">
                        <li>Access your QuickBooks financial data (accounts, transactions, customers, vendors)</li>
                        <li>Store and process this data to provide our Service</li>
                        <li>Periodically sync data to keep information up-to-date</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                      <h4 className="mb-2 font-semibold text-white">You Acknowledge That:</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm">
                        <li>QuickBooks integration is subject to Intuit's terms of service</li>
                        <li>We are not responsible for QuickBooks service availability or data accuracy</li>
                        <li>You can disconnect QuickBooks integration at any time</li>
                        <li>Disconnecting will remove synced data from our Service</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Data & Privacy */}
              <section id="data" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Shield className="h-6 w-6 text-[#5C6EFF]" />
                  6. Data & Privacy
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    Your privacy is important to us. Our collection, use, and protection of your personal and financial data 
                    is governed by our <Link href="/privacy-policy" className="text-[#5C6EFF] hover:underline">Privacy Policy</Link>, 
                    which is incorporated into these Terms by reference.
                  </p>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">Data Security Measures:</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm">
                      <li>End-to-end encryption for data transmission</li>
                      <li>Encrypted storage of sensitive financial information</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Strict access controls and authentication protocols</li>
                      <li>Compliance with industry-standard security practices</li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    While we implement robust security measures, no system is 100% secure. You acknowledge that you provide 
                    data at your own risk.
                  </p>
                </div>
              </section>

              {/* Section 7: Fees & Payment */}
              <section id="fees" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Mail className="h-6 w-6 text-[#5C6EFF]" />
                  7. Fees & Payment
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    The Service is offered on a subscription basis. Pricing details are available on our website and may be updated from time to time.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                      <h4 className="mb-2 font-semibold text-white">Billing Terms:</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm">
                        <li>Subscriptions are billed monthly or annually</li>
                        <li>Payment is due at the start of each billing period</li>
                        <li>We accept major credit cards and bank transfers</li>
                        <li>All fees are non-refundable unless required by law</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                      <h4 className="mb-2 font-semibold text-white">Price Changes:</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm">
                        <li>We may change subscription fees with 30 days notice</li>
                        <li>Price changes apply to subsequent billing periods</li>
                        <li>You can cancel before the new price takes effect</li>
                        <li>Continued use after notice constitutes acceptance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Termination */}
              <section id="termination" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <AlertCircle className="h-6 w-6 text-[#5C6EFF]" />
                  8. Termination
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">Your Right to Terminate:</h4>
                    <p className="text-sm">
                      You may cancel your subscription at any time through your account settings. 
                      Cancellation will take effect at the end of your current billing period.
                    </p>
                  </div>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">Our Right to Terminate:</h4>
                    <p className="text-sm mb-2">We may suspend or terminate your access to the Service immediately if:</p>
                    <ul className="list-inside list-disc space-y-1 text-sm">
                      <li>You violate these Terms or our policies</li>
                      <li>Your account has been inactive for an extended period</li>
                      <li>You fail to pay fees when due</li>
                      <li>We are required to do so by law</li>
                      <li>Continuing service could harm us or other users</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)] p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-[#EF4444]" />
                      <div>
                        <p className="text-sm font-medium text-[#EF4444]">Effect of Termination</p>
                        <p className="mt-1 text-sm">
                          Upon termination, your right to use the Service will immediately cease. 
                          We may delete your data after a reasonable grace period unless required to retain it by law.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Limitation of Liability */}
              <section id="liability" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Shield className="h-6 w-6 text-[#5C6EFF]" />
                  9. Limitation of Liability
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <div className="rounded-lg border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)] p-4">
                    <p className="text-sm font-medium text-[#EF4444] mb-2">IMPORTANT DISCLAIMER:</p>
                    <p className="text-sm">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                      SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
                      DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                    </p>
                  </div>
                  <p>
                    Our total liability for all claims arising from or related to the Service shall not exceed the amount 
                    you paid us in the 12 months preceding the claim.
                  </p>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <h4 className="mb-2 font-semibold text-white">Service Provided "AS IS":</h4>
                    <p className="text-sm">
                      The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, 
                      either express or implied, including but not limited to warranties of merchantability, fitness for 
                      a particular purpose, or non-infringement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Changes to Terms */}
              <section id="changes" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Clock className="h-6 w-6 text-[#5C6EFF]" />
                  10. Changes to Terms
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    We reserve the right to modify these Terms at any time. When we make changes, we will:
                  </p>
                  <ul className="list-inside list-disc space-y-2 ml-4">
                    <li>Update the "Last Updated" date at the top of this page</li>
                    <li>Notify you via email if the changes are material</li>
                    <li>Provide notice within the Service</li>
                    <li>Give you at least 30 days notice before changes take effect</li>
                  </ul>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-4 border border-[rgba(255,255,255,0.08)]">
                    <p className="text-sm">
                      Your continued use of the Service after changes take effect constitutes acceptance of the modified Terms. 
                      If you do not agree to the changes, you must stop using the Service and cancel your subscription.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Contact */}
              <section id="contact" className="mb-12 scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Mail className="h-6 w-6 text-[#5C6EFF]" />
                  11. Contact Information
                </h2>
                <div className="space-y-4 text-[#A1A1AA]">
                  <p>
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-6 border border-[rgba(255,255,255,0.08)]">
                      <h4 className="mb-3 font-semibold text-white">Email Support</h4>
                      <a href="mailto:legal@cfoplatform.com" className="flex items-center gap-2 text-[#5C6EFF] hover:underline">
                        <Mail className="h-4 w-4" />
                        legal@cfoplatform.com
                      </a>
                    </div>
                    <div className="rounded-lg bg-[rgba(255,255,255,0.02)] p-6 border border-[rgba(255,255,255,0.08)]">
                      <h4 className="mb-3 font-semibold text-white">Mailing Address</h4>
                      <p className="text-sm">
                        CFO Platform<br />
                        123 Financial District<br />
                        New York, NY 10004<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Legal Sections */}
              <div className="space-y-8 border-t border-[rgba(255,255,255,0.08)] pt-8">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Governing Law</h3>
                  <p className="text-sm text-[#A1A1AA]">
                    These Terms shall be governed by and construed in accordance with the laws of the State of New York, 
                    without regard to its conflict of law provisions.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Dispute Resolution</h3>
                  <p className="text-sm text-[#A1A1AA]">
                    Any dispute arising from these Terms or the Service shall be resolved through binding arbitration 
                    in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Severability</h3>
                  <p className="text-sm text-[#A1A1AA]">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be 
                    limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full effect.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Entire Agreement</h3>
                  <p className="text-sm text-[#A1A1AA]">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and CFO Platform 
                    regarding the use of the Service, superseding any prior agreements.
                  </p>
                </div>
              </div>

            </div>

            {/* Footer CTA */}
            <div className="mt-8 rounded-lg border border-[rgba(92,110,255,0.3)] bg-[rgba(92,110,255,0.05)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-1 font-semibold">Have Questions?</h3>
                  <p className="text-sm text-[#A1A1AA]">
                    Our legal team is here to help clarify any concerns
                  </p>
                </div>
                <a
                  href="mailto:legal@cfoplatform.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#5C6EFF] px-6 py-3 font-medium transition-colors hover:bg-[#4C5EEF]"
                >
                  <Mail className="h-4 w-4" />
                  Contact Legal Team
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