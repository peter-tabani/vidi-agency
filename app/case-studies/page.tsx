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

// Solution Card (no link, just presentation)
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
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.slice(0, 3).map((tech: string, i: number) => (
            <span key={i} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] text-gray-500">+{project.tech.length - 3}</span>
          )}
        </div>
        
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
    <section className="mb-20 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg border ${colorClass}`}>
            <Icon size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white font-space-grotesk">{industry.title}</h2>
            <p className="text-gray-400 text-sm max-w-2xl">{industry.description}</p>
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 border-b border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-4">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Industrial AI Automation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk leading-tight">
              AI Systems Built for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Heavy Equipment & Manufacturing
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Private AI assistants trained on your engineering data, safety manuals, and CMMS records. 
              Designed for fall protection, loading docks, conveyors, EHS, and technical documentation.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all"
              >
                Explore Solutions <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Grid */}
      <div id="solutions" className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        {industries.map((industry, idx) => (
          <IndustrySection key={idx} industry={industry} />
        ))}
      </div>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space-grotesk">
            Ready to automate your industrial operations?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            We'll build a private AI assistant trained on your engineering data, manuals, and safety procedures. 
            No generic chatbots — only your knowledge, made instantly accessible.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
          >
            Talk to an Engineer <ArrowRight size={20} />
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}