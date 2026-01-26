"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building,
  Calendar,
  Globe,
  Users,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Award,
  Star,
  MapPin,
  Utensils,
  CreditCard,
  BarChart,
  Smartphone,
  X,
} from "lucide-react";

type BizId = "hotel" | "tour" | "restaurant" | "vacation" | "airline";

export default function HospitalityWelcomePage() {
  const [selectedBusiness, setSelectedBusiness] = useState<BizId>("hotel");
  const [demoActive, setDemoActive] = useState(false);

  const businessTypes = [
    { id: "hotel" as const, label: "Hotel/Resort", icon: Building },
    { id: "tour" as const, label: "Tour Operator", icon: Globe },
    { id: "restaurant" as const, label: "Restaurant Group", icon: Utensils },
    { id: "vacation" as const, label: "Vacation Rental", icon: MapPin },
    { id: "airline" as const, label: "Airline/Travel", icon: Users },
  ];

  const bookingFeatures = [
    {
      icon: Calendar,
      title: "Real-time availability",
      description:
        "One source of truth for inventory, blackout dates, and booking rules.",
    },
    {
      icon: CreditCard,
      title: "Secure payments",
      description:
        "Tokenization-ready checkout flows and fraud-aware validation patterns.",
    },
    {
      icon: Smartphone,
      title: "Mobile-first UX",
      description:
        "Fast booking paths that reduce drop-off on small screens and slow networks.",
    },
    {
      icon: BarChart,
      title: "Reporting & insights",
      description:
        "Track funnel performance, channel mix, and conversion opportunities.",
    },
    {
      icon: Shield,
      title: "Privacy & access control",
      description:
        "Role-based permissions and audit-friendly logs for staff operations.",
    },
    {
      icon: Users,
      title: "Guest CRM foundations",
      description:
        "Profiles, preferences, and communication history for better service.",
    },
  ];

  const tailoredFeatures = useMemo(() => {
    const common = [
      "Modern booking flow with clear pricing and policies",
      "Admin dashboard to manage inventory, rules, and content",
      "Automated confirmations and post-booking messages",
      "Analytics-ready tracking for marketing and funnel insights",
      "Integration-first architecture (payments, email/SMS, PMS/POS, etc.)",
      "Multi-currency and multi-language support (if needed)",
    ];

    if (selectedBusiness === "hotel") {
      return [
        "Room types, rate plans, and minimum-stay rules",
        "Upsells (breakfast, late checkout, transfers, packages)",
        "Channel strategy support (direct booking optimization)",
        "Calendar-based inventory and season pricing tools",
        ...common,
      ];
    }

    if (selectedBusiness === "tour") {
      return [
        "Time slots, capacity limits, and guide/equipment allocation",
        "Rescheduling rules and cancellation windows",
        "Waivers + participant details collection",
        "Group booking and tiered pricing",
        ...common,
      ];
    }

    if (selectedBusiness === "restaurant") {
      return [
        "Reservations with floor plan support (optional)",
        "Waitlist with SMS notifications (optional)",
        "Pre-order / deposits for peak hours (optional)",
        "Event & private dining bookings",
        ...common,
      ];
    }

    if (selectedBusiness === "vacation") {
      return [
        "Property calendars, cleaning buffers, and check-in rules",
        "Security deposit logic (optional)",
        "Owner and co-host access levels",
        "Add-ons (airport pickup, chef, tours, etc.)",
        ...common,
      ];
    }

    // airline/travel
    return [
      "Itinerary-based booking (multi-leg, add-ons, passenger data)",
      "Rules engine for changes/refunds/cancellations",
      "Voucher/coupon support (optional)",
      "Documents/confirmations workflow",
      ...common,
    ];
  }, [selectedBusiness]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ============================================================================
          HERO
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply blur-3xl opacity-10" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-8">
                <Star size={16} className="text-amber-500" />
                <span className="text-sm font-semibold text-blue-700">
                  Hospitality booking & operations software
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Custom booking experiences that feel premium — and convert.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                We build tailored booking systems and internal dashboards for
                hospitality businesses — designed to reduce friction, improve
                guest experience, and give your team better control.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="group px-8 py-4 rounded-xl text-base md:text-lg font-bold text-white bg-slate-900 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200/40 inline-flex items-center justify-center gap-3"
                >
                  <Calendar size={22} />
                  Book Strategy Session
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <button
                  onClick={() => setDemoActive(true)}
                  className="px-8 py-4 rounded-xl text-base md:text-lg font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-3"
                  type="button"
                >
                  <Smartphone size={22} />
                  View UI Preview
                </button>
              </div>

              {/* Honest trust row (no fake numbers) */}
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-emerald-600" />
                  <span className="text-sm text-slate-600">
                    Secure-by-design architecture
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-blue-600" />
                  <span className="text-sm text-slate-600">
                    Fast, mobile-first booking flows
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-amber-600" />
                  <span className="text-sm text-slate-600">
                    Built to match your brand & operations
                  </span>
                </div>
              </div>
            </div>

            {/* UI preview (kept, but removed fake names/dates/prices) */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-sm text-slate-300">UI PREVIEW</div>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-slate-400">
                        Booking experience preview
                      </div>
                      <div className="text-xl font-bold text-white">
                        Your Brand / Property
                      </div>
                    </div>
                    <div className="text-slate-200 text-sm font-semibold">
                      Price shown at checkout
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-xs text-slate-400">CHECK-IN</div>
                      <div className="text-white font-semibold">
                        Select date
                      </div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-xs text-slate-400">CHECK-OUT</div>
                      <div className="text-white font-semibold">
                        Select date
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {["Option A", "Option B", "Option C"].map((label, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <Building size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{label}</div>
                            <div className="text-xs text-slate-400">
                              Details + policy summary
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-bold">—</div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white font-bold hover:shadow-lg transition-all"
                    type="button"
                    onClick={() => setDemoActive(true)}
                  >
                    Continue to checkout
                  </button>
                </div>

                <div className="text-center text-slate-300 text-sm">
                  Preview only — the real build matches your brand and workflow.
                </div>
              </div>

              {/* floating cards WITHOUT fake metrics */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <BarChart size={20} className="text-emerald-600" />
                  <div>
                    <div className="text-xs text-slate-500">Funnel insights</div>
                    <div className="text-base font-bold text-slate-900">
                      Conversion tracking
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <CreditCard size={20} className="text-blue-600" />
                  <div>
                    <div className="text-xs text-slate-500">Checkout</div>
                    <div className="text-base font-bold text-slate-900">
                      Secure payments
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end preview */}
          </div>
        </div>
      </section>

      {/* ============================================================================
          BUSINESS TYPE SELECTOR
          ============================================================================ */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Tailored for your hospitality model
            </h2>
            <p className="text-slate-600">
              Pick your business type and see what we typically build.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {businessTypes.map((business) => {
              const Icon = business.icon;
              const isSelected = selectedBusiness === business.id;
              return (
                <button
                  key={business.id}
                  onClick={() => setSelectedBusiness(business.id)}
                  type="button"
                  className={[
                    "flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border-2 transition-all",
                    isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-slate-300",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "w-14 h-14 rounded-xl flex items-center justify-center",
                      isSelected ? "bg-blue-600" : "bg-slate-100",
                    ].join(" ")}
                  >
                    <Icon
                      size={28}
                      className={isSelected ? "text-white" : "text-slate-600"}
                    />
                  </div>
                  <span
                    className={[
                      "font-semibold",
                      isSelected ? "text-slate-900" : "text-slate-700",
                    ].join(" ")}
                  >
                    {business.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {businessTypes.find((b) => b.id === selectedBusiness)?.label}{" "}
                  features
                </h3>

                <ul className="space-y-4">
                  {tailoredFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-emerald-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Zap size={24} className="text-amber-600" />
                  <h4 className="text-xl font-bold text-slate-900">
                    What you get (deliverables)
                  </h4>
                </div>

                <div className="space-y-4">
                  {[
                    "A production-ready booking system (web) with clean UI and fast checkout",
                    "Admin dashboard for inventory, pricing rules, and content",
                    "Payment integration + email/SMS confirmations",
                    "Analytics events wired into your reporting tools",
                    "Documentation + handover so your team can operate confidently",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-b-0 last:pb-0"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={16} className="text-blue-700" />
                      </div>
                      <div className="text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-sm text-blue-800">
                    💡 Want “direct bookings” improvements? We’ll review your
                    current funnel and propose concrete UX + performance fixes
                    during the strategy session.
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
                  >
                    Start a project
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          PLATFORM CAPABILITIES
          ============================================================================ */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Platform capabilities
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              The building blocks we combine to match your operation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {bookingFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Integrations (done properly)
              </h3>
              <p className="text-slate-600">
                We integrate with what you already use — or recommend a clean
                stack if you’re starting fresh.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Payments", items: ["Stripe", "PayPal", "Local gateways"] },
                { title: "Messaging", items: ["Email", "SMS", "WhatsApp (optional)"] },
                { title: "Operations", items: ["PMS/POS", "Calendars", "Staff roles"] },
                { title: "Analytics", items: ["GA4", "Tag Manager", "Dashboards"] },
              ].map((block, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                >
                  <div className="font-bold text-slate-900 mb-3">
                    {block.title}
                  </div>
                  <ul className="space-y-2">
                    {block.items.map((it, i) => (
                      <li key={i} className="text-sm text-slate-600">
                        • {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          HOW WE WORK (replaces fake case studies/pricing/guarantees)
          ============================================================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How we deliver hospitality builds
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Clear process, clear outputs, no made-up numbers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "1) Discovery + plan",
                desc: "We map your booking flow, policies, and tools. You leave with a clear scope and delivery plan.",
              },
              {
                title: "2) Design + prototype",
                desc: "We create a clickable UI that matches your brand, then validate it against your real workflow.",
              },
              {
                title: "3) Build + launch",
                desc: "We ship in milestones: booking flow, admin dashboard, integrations, analytics, QA, and handover.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              What we’ll ask you for
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Your booking rules (cancellation, deposits, minimum stays, etc.)",
                "Your current tools (PMS/POS, payment provider, email/SMS, etc.)",
                "Brand assets (logo, colors, fonts) or reference pages you like",
                "A point person for weekly feedback (15–30 mins)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-600 mt-1" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
              >
                Book strategy session
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all"
              >
                See real work
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          FINAL CTA
          ============================================================================ */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <Calendar size={18} className="text-amber-300" />
            <span className="text-sm font-semibold">Next step</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want a booking system that matches your business — not a template?
          </h2>

          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We’ll review your current flow, identify bottlenecks, and propose a
            build plan you can actually ship.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            {[
              {
                title: "Funnel review",
                description:
                  "See where guests drop off and what to fix first.",
              },
              {
                title: "Scope + roadmap",
                description:
                  "Clear deliverables and a realistic rollout plan.",
              },
              {
                title: "Tech & integrations plan",
                description:
                  "Payments, confirmations, dashboards, and operations tools.",
              },
              {
                title: "No-pressure guidance",
                description:
                  "If you shouldn’t build it now, we’ll tell you.",
              },
            ].map((offer, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                <p className="text-blue-100 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/get-started"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
          >
            <Calendar size={22} />
            Book your strategy session
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <p className="mt-8 text-blue-200 text-sm">
            30–60 minutes • Actionable notes • Clear next steps
          </p>
        </div>
      </section>

      <Footer />

      {/* ============================================================================
          MODAL (kept, but no fake “full demo” link)
          ============================================================================ */}
      {demoActive && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  UI preview (example screens)
                </h3>
                <button
                  onClick={() => setDemoActive(false)}
                  className="text-slate-400 hover:text-slate-700"
                  type="button"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Search + availability",
                    desc: "Fast date selection, clear rules, clean pricing.",
                  },
                  {
                    title: "Room / option selection",
                    desc: "Compare options quickly, with policy summaries.",
                  },
                  {
                    title: "Guest details + extras",
                    desc: "Collect what you need, offer add-ons without clutter.",
                  },
                  {
                    title: "Checkout + confirmation",
                    desc: "Secure payment flow + automated confirmation messaging.",
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
                  >
                    <div className="font-bold text-slate-900 mb-2">
                      {card.title}
                    </div>
                    <div className="text-slate-600 text-sm">{card.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-700 transition-all w-full"
                >
                  Discuss your build
                  <ArrowRight size={18} />
                </Link>
                <button
                  onClick={() => setDemoActive(false)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all w-full"
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
