"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, Zap, Users } from 'lucide-react';
import { industries } from '@/lib/case-studies-detail';

// Helper for consistent color classes
const getIndustryColor = (color: string) => {
  const colors: any = {
    blue: "border-blue-500/30 bg-blue-500/5 text-blue-400",
    indigo: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400",
    orange: "border-orange-500/30 bg-orange-500/5 text-orange-400",
    cyan: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400",
    emerald: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
    slate: "border-slate-500/30 bg-slate-500/5 text-slate-400",
    green: "border-green-500/30 bg-green-500/5 text-green-400",
    amber: "border-amber-500/30 bg-amber-500/5 text-amber-400",
    teal: "border-teal-500/30 bg-teal-500/5 text-teal-400",
    violet: "border-violet-500/30 bg-violet-500/5 text-violet-400",
    yellow: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400",
    gray: "border-gray-500/30 bg-gray-500/5 text-gray-400",
    zinc: "border-zinc-500/30 bg-zinc-500/5 text-zinc-400",
    pink: "border-pink-500/30 bg-pink-500/5 text-pink-400",
    rose: "border-rose-500/30 bg-rose-500/5 text-rose-400",
  };
  return colors[color] || colors.blue;
};

// Metric badge (compact)
const MetricBadge = ({ metric, colorClass }: { metric: any; colorClass: string }) => {
  const Icon = metric.icon;
  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${colorClass}`}>
      <Icon size={12} />
      <span className="text-[10px] font-medium uppercase tracking-wide">{metric.label}</span>
      <span className="text-xs font-bold ml-1 text-white">{metric.value}</span>
    </div>
  );
};

// Solution Card
const SolutionCard = ({ project, industryColor }: { project: any; industryColor: string }) => {
  return (
    <div className="group relative bg-[#0a0b12] rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

      <div className="p-6 md:p-8">
        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${industryColor}`}>
          {project.type}
        </span>

        <h3 className="text-xl font-bold text-white mt-4 mb-2 font-space-grotesk">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.metrics.map((metric: any, i: number) => (
            <MetricBadge key={i} metric={metric} colorClass={industryColor} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Industry section
const IndustrySection = ({ industry }: { industry: any }) => {
  const Icon = industry.icon;
  const colorClass = getIndustryColor(industry.color);

  return (
    <section className="mb-24 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-10">
        <div className="flex items-start gap-4">
          <div className={`p-2.5 rounded-xl border flex-shrink-0 ${colorClass}`}>
            <Icon size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white font-space-grotesk mb-1">{industry.title}</h2>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">{industry.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industry.projects.map((project: any, idx: number) => (
          <SolutionCard key={idx} project={project} industryColor={colorClass} />
        ))}
      </div>
    </section>
  );
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#05060b] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 border-b border-white/[0.04]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-6 max-w-3xl">

            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-blue-400/60" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-400">
                Industrial AI Solutions
              </span>
              <span className="w-6 h-px bg-blue-400/60" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk leading-[1.08] tracking-tight text-white">
              AI assistants built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">
                industrial operations.
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed">
              Every assistant is trained on your own manuals, drawings, and safety documents —
              not generic data. Your team gets instant answers. Your clients stop waiting.
              Your sales team closes faster.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:border-white/25 transition-all"
              >
                Browse Solutions <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <div id="solutions" className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {industries.map((industry, idx) => (
          <IndustrySection key={idx} industry={industry} />
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.04] bg-[#07080e]">
        <div className="container mx-auto max-w-5xl px-6 md:px-12 py-20 md:py-28">

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-600/[0.07] via-[#07080e] to-indigo-600/[0.05] p-10 md:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-xl">
                <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  Ready to get started?
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space-grotesk leading-tight">
                  Your documents. Your data.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                    Answers in seconds.
                  </span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed">
                  We build an AI assistant trained entirely on your manuals, drawings, and
                  procedures — then connect it to your CRM, email, or spreadsheets. No
                  generic chatbots. No public data. Just your knowledge, instantly accessible.
                </p>
              </div>

              <div className="flex flex-col gap-4 flex-shrink-0">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/25 whitespace-nowrap"
                >
                  Talk to an Engineer <ArrowRight size={18} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:border-white/25 transition-all whitespace-nowrap"
                >
                  See Case Studies
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}