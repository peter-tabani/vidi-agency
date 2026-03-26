"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import ReceptionistAI from '@/components/ReceptionistAI';
import {
  ArrowRight, CheckCircle2, Bot, LayoutDashboard, Code2, Inbox, UploadCloud,
  Smartphone, Workflow, Database, Plus, Clock, ShieldCheck, X,
  Factory, Truck, HardHat, FlaskConical, Package, Anchor, Cog, Shield, Layers
} from "lucide-react";

// ─── MODAL CONTENT ────────────────────────────────────────────────────────────
const modalContent = {
  sales: {
    title: "Sales & Quoting",
    color: "blue",
    headline: "Your sales team, at full speed.",
    body: [
      "Every hour spent pulling specs, chasing engineers, or manually updating CRM records is an hour not spent closing deals. AI handles the background work so your team stays focused on the conversation.",
      "RFQs are drafted using your own historical quotes, product specs, and pricing rules. Responses that used to take three days go out in hours — without your engineers being interrupted.",
      "Every interaction is automatically logged. Your CRM stays current without anyone maintaining it.",
    ],
    stats: [
      { value: "32hrs", label: "saved per rep, per month" },
      { value: "14×",   label: "faster proposal generation" },
      { value: "9×",    label: "higher conversion within 5 min response" },
    ],
  },
  engineering: {
    title: "Engineering & Technical",
    color: "indigo",
    headline: "Your engineers answer once. AI answers forever.",
    body: [
      "Your senior engineers shouldn't spend their day answering questions that already exist in your documentation. Once your manuals, drawings, and CMMS data are ingested, AI handles those queries instead.",
      "Staff ask plain questions and get precise answers — sourced directly from your own documents. No guessing, no waiting, no interruptions to the people doing the actual engineering work.",
      "Legacy systems, SCADA exports, P&IDs — all made searchable. Engineers can also upload drawings or photos of equipment and get the exact spec or procedure in seconds.",
    ],
    stats: [
      { value: "100%",   label: "answers sourced from your own data" },
      { value: "Instant", label: "access to drawings & specifications" },
      { value: "Zero",   label: "public model data used" },
    ],
  },
  ehs: {
    title: "EHS & Compliance",
    color: "emerald",
    headline: "The right answer, at the right moment.",
    body: [
      "In a safety-critical environment, slow answers are not acceptable. When your team needs a compliance procedure, an incident report, or a regulatory reference, they need it immediately.",
      "AI surfaces the exact document, the exact clause, the exact procedure — drawn from your own EHS library. Response time drops from days to minutes.",
      "Inspection reports, corrective action tracking, and safety procedure retrieval all happen through a single interface your team already knows how to use.",
    ],
    stats: [
      { value: "Minutes",    label: "not days, for compliance queries" },
      { value: "All docs",   label: "searchable in one place" },
      { value: "Audit-ready", label: "records at any time" },
    ],
  },
};

type ModalKey = keyof typeof modalContent;

// ─── INDUSTRIES ───────────────────────────────────────────────────────────────
const industries = [
  { icon: Factory,      name: "Industrial Manufacturing" },
  { icon: Anchor,       name: "Loading Platforms & Rail/Truck Access" },
  { icon: ShieldCheck,  name: "Fall Protection & Safety Systems" },
  { icon: FlaskConical, name: "Process & Chemical Equipment" },
  { icon: Shield,       name: "EHS & Safety Solutions" },
  { icon: Layers,       name: "Conveyor & Material Handling" },
  { icon: Package,      name: "Bulk Handling & Storage" },
  { icon: Cog,          name: "Engineering & Technical Services" },
  { icon: Truck,        name: "Logistics & Supply Chain" },
  { icon: HardHat,      name: "Construction & Heavy Equipment" },
];

// ─── MODAL ────────────────────────────────────────────────────────────────────
function Modal({ id, onClose }: { id: ModalKey; onClose: () => void }) {
  const m = modalContent[id];
  const colorMap = {
    blue:    { badge: "bg-blue-500/15 border-blue-400/25 text-blue-300",       stat: "text-blue-400",   top: "bg-gradient-to-r from-blue-500 to-sky-400"       },
    indigo:  { badge: "bg-indigo-500/15 border-indigo-400/25 text-indigo-300", stat: "text-indigo-400", top: "bg-gradient-to-r from-indigo-500 to-blue-400"    },
    emerald: { badge: "bg-emerald-500/15 border-emerald-400/25 text-emerald-300", stat: "text-emerald-400", top: "bg-gradient-to-r from-emerald-500 to-teal-400" },
  };
  const c = colorMap[m.color as keyof typeof colorMap];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl bg-[#0c0d16] border border-white/[0.08] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-1 w-full ${c.top}`} />
        <div className="p-6 md:p-10">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest mb-3 ${c.badge}`}>
                {m.title}
              </span>
              <h3 className="font-space-grotesk text-2xl md:text-3xl font-extrabold text-white leading-tight">
                {m.headline}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 mt-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {m.body.map((para, i) => (
              <p key={i} className="text-gray-400 text-sm md:text-base font-light leading-relaxed">{para}</p>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
            {m.stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className={`text-xl md:text-2xl font-extrabold font-space-grotesk ${c.stat}`}>{s.value}</p>
                <p className="text-gray-500 text-xs mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [openModal, setOpenModal]           = useState<ModalKey | null>(null);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">

      {openModal && <Modal id={openModal} onClose={() => setOpenModal(null)} />}

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#05060b] min-h-screen flex items-center">

        {/* Mobile background */}
        <div className="absolute inset-0 pointer-events-none lg:hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[#05060b]" />
          <div className="absolute top-0 bottom-0 left-[25%] right-[25%] bg-[#0a0f1e] origin-center -skew-x-[16deg] scale-x-[1.3]" />
          <div className="absolute top-0 bottom-0 left-[55%] right-[-15%] bg-[#0c2d6b] origin-center -skew-x-[16deg] scale-x-[1.3]" />
          <div className="absolute top-0 bottom-0 left-[20%] w-[20%] bg-gradient-to-r from-[#05060b] to-transparent" />
          <div className="absolute top-0 bottom-0 left-[48%] w-[18%] bg-gradient-to-r from-[#0a0f1e]/80 to-transparent" />
          <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
        </div>

        {/* Desktop background */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">
          <img src="/hero-bg.jpg" alt="AI background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

            {/* LEFT */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-blue-400/60" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/35">AI Automation Studio</span>
                <span className="w-6 h-px bg-blue-400/60" />
              </div>

              <h1 className="font-space-grotesk font-bold text-white tracking-tight leading-[1.1] mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                Get A Smart{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">
                  AI Assistant
                </span>{' '}
                that works for{' '}
                <span className="font-light text-white/60">your Company.</span>
              </h1>

              <div className="w-10 h-0.5 bg-blue-500 rounded-full mb-6 mx-auto lg:mx-0" />

              <p className="text-white/50 font-light text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                We install an AI assistant on your website that answers questions from your own
                manuals and drawings, and sends qualified leads straight to your{' '}
                <span className="text-white/80 font-medium">CRM, email, or spreadsheet</span>.
                Your clients get instant answers. Your team stops wasting time on repetitive
                questions and data entry.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                {[
                  'AI assistant on your website',
                  'Uses your manuals & drawings',
                  'Sends leads to CRM / email / Sheets',
                  'No change to your current systems',
                ].map((pill) => (
                  <span key={pill} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/55 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/get-started"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 rounded-2xl text-base font-semibold text-white bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-center"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* RIGHT — ORBIT */}
            <div className="hidden lg:flex relative w-full items-center justify-center min-h-[500px] xl:min-h-[600px]">
              <div className="w-full h-full flex items-center justify-center scale-90 xl:scale-100 transition-transform duration-500">
                <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] aspect-square flex items-center justify-center">

                  <div className="absolute z-20 w-32 h-32 xl:w-40 xl:h-40 bg-white/10 backdrop-blur-xl rounded-full shadow-[0_0_80px_-10px_rgba(59,130,246,0.6)] flex items-center justify-center border border-white/20">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 xl:w-20 xl:h-20 mx-auto rounded-xl flex items-center justify-center text-white mb-2 shadow-lg">
                        <Bot className="w-8 h-8 xl:w-10 xl:h-10" />
                      </div>
                      <span className="text-xs xl:text-sm font-bold text-white block uppercase tracking-wider">AI Core</span>
                    </div>
                  </div>

                  <div className="absolute w-[90%] h-[90%] border border-dashed border-blue-500/20 rounded-full" />
                  <div className="absolute w-[68%] h-[68%] border border-blue-400/15 rounded-full" />

                  <div className="absolute inset-0 animate-orbit-ring flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 xl:w-56 animate-orbit-item">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2.5 rounded-lg text-blue-400"><LayoutDashboard className="w-5 h-5 xl:w-6 xl:h-6" /></div>
                        <div>
                          <span className="text-sm xl:text-base font-bold text-white block">AI Lead Capture</span>
                          <span className="text-xs text-white/40">Qualify 24/7</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-48 xl:w-56 animate-orbit-item">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                        <div className="bg-purple-500/20 p-2.5 rounded-lg text-purple-400"><Smartphone className="w-5 h-5 xl:w-6 xl:h-6" /></div>
                        <div>
                          <span className="text-sm xl:text-base font-bold text-white block">Smart Engagement</span>
                          <span className="text-xs text-white/40">Client support</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-48 xl:w-56 animate-orbit-item">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                        <div className="bg-green-500/20 p-2.5 rounded-lg text-green-400"><Workflow className="w-5 h-5 xl:w-6 xl:h-6" /></div>
                        <div>
                          <span className="text-sm xl:text-base font-bold text-white block">Workflow Automation</span>
                          <span className="text-xs text-white/40">No manual tasks</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-48 xl:w-56 animate-orbit-item">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                        <div className="bg-orange-500/20 p-2.5 rounded-lg text-orange-400"><Database className="w-5 h-5 xl:w-6 xl:h-6" /></div>
                        <div>
                          <span className="text-sm xl:text-base font-bold text-white block">System Integration</span>
                          <span className="text-xs text-white/40">CRM & tools</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PARTNERSHIPS STRIP ── */}
      <section className="w-full bg-[#05060b] border-t border-b border-white/[0.04] py-8 md:py-10 relative z-20 overflow-hidden">
        <style>{`
          @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-scroll { animation: scroll 30s linear infinite; width: max-content; }
          .animate-scroll:hover { animation-play-state: paused; }
        `}</style>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
          <h2 className="text-center text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8 md:mb-10">Partnerships & Recognition</h2>
        </div>
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#05060b] to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-scroll items-center">
            {[1, 2].map((setIndex) => (
              <div key={setIndex} className="flex items-center">
                {[
                  { n: 1, ext: "png"  },
                  { n: 2, ext: "png"  },
                  { n: 3, ext: "jpg"  },
                  { n: 4, ext: "jpeg" },
                  { n: 5, ext: "png"  },
                  { n: 6, ext: "jpeg" },
                ].map(({ n, ext }) => (
                  <div key={n} className="flex items-center justify-center mx-10 md:mx-14 opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-32 h-14 md:w-40 md:h-16 flex items-center justify-center">
                      <img
                        src={`/logos/partner-${n}.${ext}`}
                        alt={`Partner ${n}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#05060b] to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* ── WHAT IS AI AUTOMATION ── */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#05060b] relative overflow-hidden border-t border-white/[0.04]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl relative z-10">

          {/* Header with bg image */}
          <div className="relative rounded-2xl overflow-hidden mb-20 md:mb-28">
            <img src="/images/ai-automation-bg.avif" alt="AI Automation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05060b] via-[#05060b]/85 to-[#05060b]/40" />
            <div className="relative z-10 max-w-3xl px-8 py-16 md:px-14 md:py-24">
              <h2 className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                What is{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">AI Automation</span>{' '}
                — and why does your business need it?
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-5">
                Instead of forms and slow email replies, you get an assistant that talks to your clients and staff, finds answers in your documents, and fills in your systems for you. Less back‑and‑forth. Faster quotes. Fewer mistakes.
              </p>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                We look at how your team works today and add an assistant that takes over the repetitive work — answering questions, finding documents, and filling in systems — so your people focus on the work that actually moves the business forward.
              </p>
            </div>
          </div>

          {/* Block 1 — Website */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 md:mb-32">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3] group">
                <img src="/images/ai-website.jpeg" alt="AI embedded into websites and apps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060b] via-[#05060b]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Website & App Integration
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-6">
              <p className="text-blue-400 text-xs font-bold tracking-[0.18em] uppercase mb-4">Live on Your Website in Days</p>
              <h3 className="font-space-grotesk text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-5">
                An assistant that talks to every visitor — and never sleeps.
              </h3>
              <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed mb-10">
                Your AI sits on your existing website — no rebuild needed. The moment a visitor lands, it greets them, answers their questions, and moves them toward a quote or conversation with your team.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Talks to every visitor",
                    desc: "The assistant greets visitors, answers common questions, and asks about their project — so you never lose an interested buyer to a slow reply.",
                  },
                  {
                    label: "Understands your documents",
                    desc: "It reads your manuals, drawings, FAQs, and price lists and uses them to answer accurately — like your best team member, available 24/7.",
                  },
                  {
                    label: "Reads PDFs and uploaded images",
                    desc: "Clients or engineers can upload a PDF or photo of equipment, and the assistant pulls the right specs or next steps straight from your documentation.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1.5">{item.label}</p>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Block 2 — CRM */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 mb-24 md:mb-32">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3] group">
                <img src="/images/ai-crm.avif" alt="CRM and email integration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060b] via-[#05060b]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    CRM & Email Integration
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-6">
              <p className="text-emerald-400 text-xs font-bold tracking-[0.18em] uppercase mb-4">No More Manual Data Entry</p>
              <h3 className="font-space-grotesk text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-5">
                Every lead captured and sent where your team needs it.
              </h3>
              <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed mb-10">
                Names, emails, company, project details — all captured in the chat conversation and sent straight to Salesforce, HubSpot, your email, or a Google Sheet. Your team starts their day with leads already organised.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Captures and sends every lead",
                    desc: "Names, emails, company, project details — all captured in chat and sent to Salesforce, HubSpot, email, or Sheets. Nothing gets lost.",
                  },
                  {
                    label: "No manual copy-paste",
                    desc: "Your team stops moving data between inbox, Excel, and CRM. Everything is already there when they start their day.",
                  },
                  {
                    label: "Follows up before your team gets in",
                    desc: "The moment a conversation ends, a tailored follow-up is drafted and sent. High-intent prospects never wait days for a reply.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1.5">{item.label}</p>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
            {[
              { num: "32hrs", label: "Saved per rep, per month" },
              { num: "9×",    label: "More conversions with instant response" },
              { num: "70%",   label: "Reduction in admin time" },
              { num: "317%",  label: "Average annual ROI" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#05060b] px-6 py-10 md:px-10 md:py-14 flex flex-col gap-3">
                <span className="font-space-grotesk text-3xl md:text-4xl font-extrabold text-white">{stat.num}</span>
                <span className="text-gray-500 text-sm font-light leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── INDUSTRIAL MANUFACTURERS ── */}
      <section className="relative bg-[#05060b] border-t border-white/[0.04] overflow-hidden">

        {/* Block 1 — Opening statement */}
        <div className="relative min-h-[75vh] flex items-center">
          <img src="/images/industrial-plant.avif" alt="Industrial facility" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05060b] via-[#05060b]/85 to-[#05060b]/30" />
          <div className="relative z-10 container mx-auto px-6 md:px-12 xl:px-16 max-w-7xl py-24">
            <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">Built for Industrial Operations</p>
            <h2 className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 max-w-2xl">
              Built for operations that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                cannot afford to slow down.
              </span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-10">
              If you sell loading platforms, fall protection equipment, bulk handling systems, or industrial safety solutions — your team is drowning in emails asking the same questions: dimensions, lead times, options, safety details. Your AI assistant answers these from your own docs and passes real projects straight to your sales and engineering teams.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Talk to an engineer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Block 2 — Three areas */}
        <div className="border-t border-white/[0.04] bg-[#07080e]">
          <div className="container mx-auto px-6 md:px-12 xl:px-16 max-w-7xl py-20 md:py-28">
            <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase mb-12 text-center">
              Where AI makes the biggest difference
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.05]">
              {[
                {
                  id: "sales" as ModalKey,
                  icon: <Clock className="w-5 h-5" />,
                  label: "Sales & Quoting",
                  heading: "Slow Quotes",
                  text: "AI cross-references your drawings, specs, and history. RFQ responses go from days to hours — without pulling engineers off their work.",
                  color: "blue",
                },
                {
                  id: "engineering" as ModalKey,
                  icon: <Inbox className="w-5 h-5" />,
                  label: "Engineering & Technical",
                  heading: "Buried Manuals",
                  text: "Every manual, drawing, CMMS record, and SCADA export becomes instantly searchable. Upload a drawing or photo and get the exact spec in seconds.",
                  color: "indigo",
                },
                {
                  id: "ehs" as ModalKey,
                  icon: <ShieldCheck className="w-5 h-5" />,
                  label: "EHS & Compliance",
                  heading: "EHS Response Delays",
                  text: "Safety queries answered in minutes. The right compliance document, procedure, or incident report — surfaced immediately from your own EHS library.",
                  color: "emerald",
                },
              ].map((item) => {
                const styles = ({
  blue:    { icon: "bg-blue-500/15 border-blue-400/25 text-blue-400",       btn: "text-blue-400 hover:text-blue-300"    },
  indigo:  { icon: "bg-indigo-500/15 border-indigo-400/25 text-indigo-400", btn: "text-indigo-400 hover:text-indigo-300" },
  emerald: { icon: "bg-emerald-500/15 border-emerald-400/25 text-emerald-400", btn: "text-emerald-400 hover:text-emerald-300" },
} as Record<string, { icon: string; btn: string }>)[item.color];
                return (
                  <div key={item.id} className="bg-[#07080e] px-8 py-10 md:px-10 md:py-12 flex flex-col gap-5 hover:bg-white/[0.02] transition-all duration-300">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${styles!.icon}`}>{item.icon}</div>
                    <div className="flex-1">
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">{item.label}</p>
                      <h3 className="text-white font-extrabold text-xl mb-3 font-space-grotesk">{item.heading}</h3>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{item.text}</p>
                    </div>
                    <button
                      onClick={() => setOpenModal(item.id)}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group ${styles!.btn}`}
                    >
                      Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Block 3 — Sales */}
        <div className="border-t border-white/[0.04]">
          <div className="container mx-auto px-6 md:px-12 xl:px-16 max-w-7xl py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <img src="/images/sales-team.jpeg" alt="Industrial sales team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060b]/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">Sales & Quoting</span>
                </div>
              </div>
              <div>
                <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Sales Teams</p>
                <h3 className="font-space-grotesk text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Respond faster. Close more.
                </h3>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8">
                  Manual data entry and quote prep account for over{' '}
                  <span className="text-white font-medium">32 hours per rep, per month.</span>{' '}
                  AI handles the background work — your team stays focused on the deal.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "RFQs drafted in hours, not days",
                    "Specs and drawings retrieved instantly",
                    "Every interaction logged to your CRM automatically",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-light">{point}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setOpenModal("sales")}
                  className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors duration-200 group"
                >
                  Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Block 4 — Engineering */}
        <div className="border-t border-white/[0.04] bg-[#07080e]">
          <div className="container mx-auto px-6 md:px-12 xl:px-16 max-w-7xl py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Engineering Teams</p>
                <h3 className="font-space-grotesk text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Knowledge available to everyone, instantly.
                </h3>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8">
                  Train AI on your manuals, drawings, CMMS, and SCADA data. Engineers and technicians can ask plain-language questions — or upload a drawing or photo of equipment — and get the right spec, measurement, or procedure without interrupting senior staff.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Technical queries answered from your own documents",
                    "Measurements and specs pulled from drawings and uploaded images",
                    "Legacy system data made searchable",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-light">{point}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setOpenModal("engineering")}
                  className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors duration-200 group"
                >
                  Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group order-1 lg:order-2">
                <img src="/images/engineering-team.jpeg" alt="Engineering team reviewing technical drawings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080e]/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">Engineering & Technical</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 5 — EHS */}
        <div className="border-t border-white/[0.04]">
          <div className="container mx-auto px-6 md:px-12 xl:px-16 max-w-7xl py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <img src="/images/ehs-safety.jpeg" alt="EHS safety compliance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060b]/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">EHS & Compliance</span>
                </div>
              </div>
              <div>
                <p className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">EHS Teams</p>
                <h3 className="font-space-grotesk text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Safety information, when it matters most.
                </h3>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8">
                  When a safety situation arises, your team needs the right answer immediately. AI surfaces the exact regulation, procedure, or EHS report — from your own documentation, in seconds.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Compliance documents retrieved in seconds",
                    "Incident history and EHS reports instantly accessible",
                    "Regulatory response time reduced from days to minutes",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-light">{point}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setOpenModal("ehs")}
                  className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors duration-200 group"
                >
                  Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Block 6 — Who we serve */}
        <div className="border-t border-white/[0.04] bg-[#07080e]">
          <div className="container mx-auto px-6 md:px-12 xl:px-16 max-w-7xl py-16 md:py-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
              <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase">Industries we serve</p>
              <button
                onClick={() => setShowAllIndustries(!showAllIndustries)}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200 uppercase tracking-widest"
              >
                {showAllIndustries ? "Show less" : "See all industries"}
                <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${showAllIndustries ? "rotate-90" : ""}`} />
              </button>
            </div>

            <style>{`
              @keyframes scroll-industries { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              .animate-scroll-industries { animation: scroll-industries 22s linear infinite; width: max-content; }
              .animate-scroll-industries:hover { animation-play-state: paused; }
            `}</style>

            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#07080e] to-transparent z-10 pointer-events-none" />
              <div className="flex animate-scroll-industries items-stretch gap-4 py-2">
                {[...industries, ...industries].map((ind, i) => {
                  const Icon = ind.icon;
                  return (
                    <div key={i} className="flex-shrink-0 flex flex-col items-center justify-center gap-3 px-6 py-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-300 cursor-default min-w-[140px] group">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-white/60 text-xs font-medium text-center leading-tight group-hover:text-white/90 transition-colors duration-300">{ind.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#07080e] to-transparent z-10 pointer-events-none" />
            </div>

            {showAllIndustries && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {industries.map((ind, i) => {
                  const Icon = ind.icon;
                  return (
                    <div key={i} className="flex flex-col items-center justify-center gap-3 px-4 py-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-300 cursor-default group">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-white/60 text-xs font-medium text-center leading-tight group-hover:text-white/90 transition-colors duration-300">{ind.name}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </section>

      {/* ── OPERATIONAL CAPABILITIES ── */}
      <section className="relative py-24 md:py-32 z-10 overflow-hidden bg-[#07080e] border-t border-white/[0.04]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl relative">

          <div className="mb-20 md:mb-24 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-space-grotesk">
              Operational{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Capabilities.</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-light mt-4 max-w-2xl mx-auto">
              Our AI only answers from your approved documents and systems — never guesses, never uses public data.
            </p>
          </div>

          <div className="flex flex-col gap-20 md:gap-28">
            {[
              {
                src: "/images/knowledge-ingestion.jpeg",
                alt: "Knowledge Ingestion",
                title: "1. High-Fidelity Knowledge Ingestion",
                label: "Your Documents. Your Data.",
                labelColor: "text-blue-400",
                dotColor: "bg-blue-400",
                reverse: false,
                text: "SOPs, maintenance logs, safety manuals, CMMS records, SCADA/PLC exports, P&IDs, QC docs — all ingested into a private AI model trained exclusively on your data. Every answer is sourced directly from your approved documents.",
                points: [
                  "Zero public model data — your IP stays private",
                  "Answers complex process, dimension & spec questions instantly",
                  "If the data isn't there, the AI directs the client to the right department",
                ],
              },
              {
                src: "/images/crm-sync.jpeg",
                alt: "CRM Sync",
                title: "2. Bi-Directional CRM Synchronization",
                label: "Connected. Automatic. Zero Manual Entry.",
                labelColor: "text-indigo-400",
                dotColor: "bg-indigo-400",
                reverse: true,
                text: "Every customer conversation, lead qualification, and follow-up is mapped directly into your existing CRM pipeline — or your email and spreadsheets if that's where your team works. No manual entry. No lost context. 70% of administrative time recovered.",
                points: [
                  "Salesforce, HubSpot, Dynamics 365, Google Sheets — all supported",
                  "Lead intent signals logged automatically after every interaction",
                  "Sales reps receive pre-qualified accounts, ready to engage",
                ],
              },
              {
                src: "/images/email-architecture.avif",
                alt: "Email Architecture",
                title: "3. Conversational Email Architecture",
                label: "Speed to Lead. Every Time.",
                labelColor: "text-emerald-400",
                dotColor: "bg-emerald-400",
                reverse: false,
                text: "The moment a conversation ends, your AI drafts a context-aware follow-up directly inside your rep's inbox — technical specs included, ready for 1-click send. High-intent industrial buyers never go cold waiting days for a response.",
                points: [
                  "Proposals generated 14× faster than manual methods",
                  "Technical specs and drawings referenced automatically",
                  "Cuts back-and-forth email chains from 20+ to under 5",
                ],
              },
              {
                src: "/images/lead-qualifications.jpg",
                alt: "Lead Qualification",
                title: "4. Autonomous Qualification & Routing",
                label: "Right Lead. Right Rep. Instantly.",
                labelColor: "text-amber-400",
                dotColor: "bg-amber-400",
                reverse: true,
                text: "Your AI qualifies every inbound based on your criteria — product type, application, safety requirements — and routes high-value accounts immediately for human follow-up. Not every inquiry deserves a senior engineer's time.",
                points: [
                  "Low-intent inquiries handled autonomously, 24/7",
                  "High-value accounts flagged and escalated immediately",
                  "9× more conversions when leads are contacted within 5 minutes",
                ],
              },
              {
                src: "/images/maintenance-floor.jpeg",
                alt: "Maintenance",
                title: "5. Maintenance & Troubleshooting",
                label: "On the Floor. In the Moment.",
                labelColor: "text-rose-400",
                dotColor: "bg-rose-400",
                reverse: false,
                text: "A technician describes a symptom — or uploads a photo of the issue. The AI returns the exact corrective steps from your approved SOPs, maintenance logs, and equipment history — in seconds. No more hunting binders. No more waiting for an engineer.",
                points: [
                  "Cuts unplanned downtime by up to 50%",
                  "MTTR and rework rate measurably reduced",
                  "New hires ramp faster — manuals become a conversational coach",
                ],
              },
              {
                src: "/images/plant-integration.avif",
                alt: "Plant Integration",
                title: "6. Built for Your Real Plant — Not a Greenfield Ideal",
                label: "Messy Data. Legacy Systems. Physical Constraints.",
                labelColor: "text-sky-400",
                dotColor: "bg-sky-400",
                reverse: true,
                text: "Most industrial operations weren't built for today's level of automation. We design AI that fits your real layout and tools — orchestrating across your docs, CMMS, SCADA/PLC data, and people so they work together. A practical partner. Not a generic vendor.",
                points: [
                  "Works with messy, legacy, and fragmented data sources",
                  "Connects CMMS, SCADA/PLC, ERP, and email without rip-and-replace",
                  "Designed for complex, safety-critical equipment environments with zero room for guesswork",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                <div className={`w-full md:w-1/2 ${item.reverse ? "order-1 md:order-2" : "order-1"}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group">
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080e] via-[#07080e]/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white font-space-grotesk leading-tight">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className={`w-full md:w-1/2 ${item.reverse ? "order-2 md:order-1 md:pr-8 lg:pr-12" : "order-2 md:pl-8 lg:pl-12"}`}>
                  <p className={`text-xs font-bold tracking-[0.18em] uppercase mb-3 ${item.labelColor}`}>{item.label}</p>
                  <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-6">{item.text}</p>
                  <div className="flex flex-col gap-3">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${item.dotColor} flex-shrink-0 mt-2`} />
                        <span className="text-gray-300 text-sm font-light leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pilot offer */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-600/[0.07] via-[#07080e] to-indigo-600/[0.05] p-8 md:p-14 mt-24 md:mt-32 mb-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Low Risk Entry Point</p>
                <h3 className="font-space-grotesk text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                  Start with one line.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                    Prove it in 3–4 weeks.
                  </span>
                </h3>
                <p className="text-gray-400 font-light text-base leading-relaxed mb-6">
                  One loading bay, one product line, or one unit operation. We ingest your top 20 recurring issues and procedures, configure guardrails, and deploy a live AI assistant — in under a month.
                </p>
                <p className="text-white/60 text-sm font-light italic border-l-2 border-blue-500/40 pl-4 mb-8">
                  &ldquo;If it doesn&apos;t move the metrics we agree on, you keep the system and the playbook. We don&apos;t push expansion.&rdquo;
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Book a pilot <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Scope",     value: "One line / one loading bay / one product category",                color: "blue"    },
                  { label: "Timeline",  value: "3–4 weeks from document handoff to live assistant",               color: "indigo"  },
                  { label: "Target",    value: "30–50% faster answers to SOP and technical questions",            color: "emerald" },
                  { label: "Guarantee", value: "You own the system regardless of outcome",                        color: "amber"   },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest flex-shrink-0 mt-0.5 ${
                      item.color === "blue"    ? "bg-blue-500/15 text-blue-400"     :
                      item.color === "indigo"  ? "bg-indigo-500/15 text-indigo-400"  :
                      item.color === "emerald" ? "bg-emerald-500/15 text-emerald-400" :
                                                 "bg-amber-500/15 text-amber-400"
                    }`}>{item.label}</div>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
  <a href="https://wa.me/254100856199" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full text-base lg:text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
    WhatsApp Us
  </a>
</div>

        </div>
      </section>

      {/* ── DEPLOYMENT ARCHITECTURE ── */}
      <section id="process" className="py-24 md:py-32 lg:py-40 bg-[#07080e] border-t border-white/[0.04] relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
          <div className="text-center md:text-left mb-16 md:mb-24">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-space-grotesk">
              Deployment <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Architecture.</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { phase: "01", pulseColor: "bg-blue-500",  label: "Phase_01", title: "Ingest Your\nDocs & Data",          desc: "We train a private AI model on your safety manuals, maintenance logs, product specs, CMMS records, SCADA exports, drawings, and technical PDFs.", href: "/deployment/ingestion",   hoverText: "group-hover:text-blue-500"  },
              { phase: "02", pulseColor: "bg-blue-400",  label: "Phase_02", title: "Configure\nGuardrails & Access",    desc: "On-prem or private cloud. Per-role permissions configured. Only approved, current documents used for every answer. Connected to your CRM, email, and spreadsheets.",      href: "/deployment/integration", hoverText: "group-hover:text-blue-400"  },
              { phase: "03", pulseColor: "bg-sky-400",   label: "Phase_03", title: "Deploy &\nGo Live",                 desc: "Web, tablet, kiosk, or internal chat. Your team and clients get answers instantly. Every question logged to continuously improve your AI.",     href: "/deployment/growth",      hoverText: "group-hover:text-sky-400"   },
            ].map((item, i) => (
              <div key={item.phase} className="relative p-8 md:p-12 bg-[#0a0b12] border border-white/[0.04] hover:border-white/[0.1] rounded-2xl md:rounded-[32px] overflow-hidden group transition-all duration-500 flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-4 -bottom-10 text-[120px] md:text-[160px] font-black text-white/[0.02] group-hover:text-blue-500/[0.04] transition-colors duration-700 pointer-events-none font-space-grotesk leading-none">{item.phase}</div>
                <div className="relative z-10 mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-md mb-8 md:mb-12">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.pulseColor} animate-pulse`} style={{ animationDelay: `${i * 300}ms` }} />
                    <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">{item.label}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight font-space-grotesk whitespace-pre-line">{item.title}</h4>
                  <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="relative z-10 mt-auto pt-6 border-t border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-500">
                  <Link href={item.href} className={`inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors duration-300`}>
                    Learn More <ArrowRight className={`w-4 h-4 text-gray-600 ${item.hoverText} transform transition-all duration-300 group-hover:translate-x-1`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#07080e]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 md:mb-4 font-space-grotesk">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Everything you need to know about our AI automation systems and how we work with your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { q: "Do I own the AI system you build?",                a: <span>Yes. Unlike SaaS platforms where you rent access, we build custom AI systems that belong to you. Once the project is complete, <b>you own 100% of the code, AI agents, workflows, and data.</b> It is your asset to keep, scale, or sell.</span> },
              { q: "How long does a typical project take?",            a: <span>It depends on scope. A focused <b>AI lead capture or chatbot system</b> can be live in 7–14 days. A full <b>multi-channel automation suite</b> typically takes 4–8 weeks. We work in short sprints so you see progress constantly.</span> },
              { q: "What happens after launch?",                       a: <span>We don&apos;t disappear after launch. Every project includes a <b>30-day warranty period</b> for bug fixes. After that, we offer optional support packages to keep your AI system optimized, updated, and performing at its best.</span> },
              { q: "Can you add AI to my existing website or systems?", a: <span>Absolutely. We specialize in integrating AI into what you already have — whether it&apos;s an industrial product site, an engineering portal, or an internal ops system. We add AI chat, lead capture, and automation workflows <b>without rebuilding anything.</b></span> },
              { q: "How does your pricing work?",                      a: <span>Projects typically start at <b>$2,500</b> for a focused AI automation build. Pricing depends on scope and complexity. We provide a clear proposal with a fixed price before any work begins. <b>No hidden fees. No forced recurring charges.</b></span> },
              { q: "Will I work directly with your team?",             a: <span>Yes. You work directly with the people building your system — including our founder. No account managers in between. You get a direct line to the engineers and AI specialists working on your project.</span> },
            ].map((item) => (
              <div key={item.q} className="group">
                <details className="group bg-white/[0.03] border border-white/[0.06] rounded-xl md:rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors duration-300 open:ring-1 open:ring-blue-500/20 open:border-blue-500/20">
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-200">
                    <span>{item.q}</span>
                    <span className="bg-white/[0.06] text-blue-400 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-500/20 flex-shrink-0 ml-4">
                      <Plus size={20} />
                    </span>
                  </summary>
                  <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-relaxed text-sm md:text-base">{item.a}</div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-16 md:py-20 lg:py-24 bg-[#07080e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-600/5 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 font-space-grotesk">
              Ready to see what AI automation can do for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">your business?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Tell us about your goals. We&apos;ll show you exactly how AI can capture more leads, answer technical questions, and save your team hours every week.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start">

            <div className="relative py-4">
              <div className="absolute left-6 top-6 bottom-12 w-0.5 bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-transparent" />
              {[
                { n: 1, grad: "from-blue-600 to-blue-500",   title: "Free AI Automation Consultation", desc: "We discuss your business, identify automation opportunities, and outline what AI can do for you. No sales pressure." },
                { n: 2, grad: "from-blue-500 to-blue-400",   title: "Review Your Custom Proposal",     desc: "We deliver a clear plan with scope, timeline, and fixed pricing. You know exactly what you're getting before we start." },
                { n: 3, grad: "from-blue-500 to-indigo-500", title: "Build & Integrate",               desc: "We build your AI system and integrate it with your existing tools. You see progress every step of the way." },
                { n: 4, grad: "from-blue-600 to-sky-500",    title: "Launch & Optimize",               desc: "Your AI system goes live. We monitor performance, optimize results, and ensure everything runs smoothly." },
              ].map((step) => (
                <div key={step.n} className="relative flex items-start gap-6 md:gap-8 mb-8 md:mb-12 group last:mb-0">
                  <div className={`relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.grad} text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {step.n}
                  </div>
                  <div className="pt-1 md:pt-2">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{step.title}</h4>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.04] rounded-2xl md:rounded-[32px] p-6 md:p-8 lg:p-10 shadow-xl border border-white/[0.08] relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-sky-400" />
              <form className="space-y-4 md:space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 ml-1">Name</label>
                    <input type="text" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all" suppressHydrationWarning />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 ml-1">Email</label>
                    <input type="email" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all" suppressHydrationWarning />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 ml-1">Phone</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all" suppressHydrationWarning />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 ml-1">Budget (Optional)</label>
                    <select className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all text-gray-400" suppressHydrationWarning>
                      <option>Select Range</option>
                      <option>$1k - $5k</option>
                      <option>$5k - $20k</option>
                      <option>$20k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 ml-1">Project Description</label>
                  <textarea rows={4} placeholder="Tell us about your business, what you want to automate, and any systems you currently use (CRM, CMMS, SCADA, etc.)..." className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all resize-none" suppressHydrationWarning />
                </div>
                <div className="border-2 border-dashed border-white/[0.08] rounded-xl p-6 md:p-8 text-center hover:border-blue-500/30 hover:bg-blue-500/[0.03] transition-all cursor-pointer group">
                  <UploadCloud size={24} className="md:size-[32px] mx-auto text-gray-500 group-hover:text-blue-400 transition-colors mb-2" />
                  <p className="text-xs md:text-sm text-gray-500 font-medium">
                    <span className="text-blue-400 font-bold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Manuals, drawings, SOPs, or specs (PDF, DOCX, up to 10MB)</p>
                </div>
                <button className="w-full py-3 md:py-4 rounded-xl bg-blue-600 text-white font-bold text-base md:text-lg hover:bg-blue-500 shadow-xl shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                  Get Your Free AI Consultation
                </button>
                <p className="text-center text-xs text-gray-600 mt-4">
                  Protected by reCAPTCHA and our{' '}
                  <a href="#" className="underline text-gray-500 hover:text-gray-300">Privacy Policy</a>.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <ReceptionistAI />
    </main>
  );
}