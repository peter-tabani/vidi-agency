"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Users, MessageCircle,
  ShieldCheck, Clock, Award, Linkedin, Mail,
  Database, Globe, Lock, Zap, Target, BarChart3,
  Building2, Factory, Cpu, FileSearch, Network,
  Sparkles, ChevronRight
} from 'lucide-react';

export default function AboutPage() {
  const router = useRouter();
  const [secretCount, setSecretCount] = useState(0);

  const handleSecretKnock = () => {
    const newCount = secretCount + 1;
    setSecretCount(newCount);
    if (newCount >= 5) router.push('/admin');
    setTimeout(() => setSecretCount(0), 1000);
  };

  const team = [
    {
      name: "Peter Frank",
      role: "Principal Consultant",
      image: "/team/peter-frank.png",
      linkedin: "https://linkedin.com/in/yourprofile",
      email: "peter@vidiagencyltd.com",
    },
    {
      name: "Emmanuel Douglas",
      role: "Lead AI Engineer",
      image: "/team/emmanuel-douglas.jpeg",
      linkedin: "#",
      email: "emmanuel@vidiagencyltd.com",
    },
    {
      name: "Dawson Johnson",
      role: "Systems Architect",
      image: "/team/dawson-johnson.jpeg",
      linkedin: "#",
      email: "dawson@vidiagencyltd.com",
    },
    {
      name: "Anna Hall",
      role: "Knowledge Infrastructure Lead",
      image: "/team/anna-hall.jpeg",
      linkedin: "#",
      email: "anna@vidiagencyltd.com",
    },
    {
      name: "Abigael Roberts",
      role: "Integration Specialist",
      image: "/team/abigael-roberts.jpeg",
      linkedin: "#",
      email: "abigael@vidiagencyltd.com",
    },
  ];

  const industries = [
    { icon: Factory, label: "Industrial Safety" },
    { icon: Database, label: "Oil & Gas" },
    { icon: Building2, label: "Manufacturing" },
    { icon: Network, label: "Engineering" },
    { icon: Globe, label: "Logistics & Terminals" },
    { icon: FileSearch, label: "Regulated Institutions" },
    { icon: Cpu, label: "Technology" },
    { icon: BarChart3, label: "Financial Services" },
  ];

  const stats = [
    { value: "96+", label: "Product Lines Unified" },
    { value: "5", label: "Entity Coverage" },
    { value: "<10s", label: "Query Response Time" },
    { value: "0", label: "Hallucination Tolerance" },
  ];

  return (
    <main className="min-h-screen bg-[#05060b] font-sans text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-28 md:pt-36 pb-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a] via-[#05060b] to-[#05060b] opacity-90" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Building2 className="w-4 h-4" />
              <span>Enterprise Knowledge Infrastructure</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6 leading-[1.05] tracking-tight">
              We make
              <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 mt-1">
                institutional knowledge
              </span>
              indestructible.
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
              Vidi Agency builds private, closed-loop AI knowledge systems for industrial
              and institutional organisations operating across multiple entities, continents,
              and regulatory jurisdictions — where a wrong answer is never acceptable.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="p-4 border border-white/8 rounded-xl bg-white/3 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{s.value}</div>
                  <div className="text-xs text-gray-500 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM WE SOLVE ── */}
      <section className="py-20 bg-gradient-to-b from-[#05060b] to-[#07080f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">The Problem</div>
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 leading-tight">
                95 years of engineering knowledge.
                <span className="block font-semibold text-white mt-1">Living in the wrong places.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Industrial organisations accumulate decades of critical documentation —
                specifications, safety protocols, engineering decisions, installation records —
                across multiple entities, mergers, and geographies. That knowledge becomes
                fragmented, inaccessible, and vulnerable.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                When a field engineer in Riyadh needs a cryogenic specification at 2am,
                or a sales engineer in London needs pre-merger documentation from a US
                acquisition — the answer should take seconds, not hours. Or days. Or never.
              </p>
              <div className="space-y-3">
                {[
                  "Cross-continental knowledge gaps after mergers",
                  "Safety-critical specs living in individual engineers' memory",
                  "Night calls handled by your most senior — and most expensive — people",
                  "New engineer onboarding measured in months, not days",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution card */}
            <div className="bg-gradient-to-br from-blue-600/8 to-[#0a0f1e] border border-blue-500/15 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">The Vidi Solution</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We build private, closed-loop Retrieval-Augmented Generation (RAG)
                systems that unify every document, specification, and institutional
                decision into one secure, queryable intelligence layer.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Lock, title: "Private & Secure", desc: "Your data never touches a public AI model. Fully closed-loop." },
                  { icon: Zap, title: "Zero Hallucination", desc: "If the answer isn't in your documents — the system says so. No guessing." },
                  { icon: Globe, title: "Continent-Agnostic", desc: "One unified brain for all entities, all time zones, all languages." },
                  { icon: Target, title: "Source-Cited", desc: "Every response cites the exact document. Engineers trust what they receive." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium mb-0.5">{item.title}</div>
                        <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-20 bg-[#05060b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Capabilities</div>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              What We Build
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Precision knowledge infrastructure for organisations where complexity
              is not a problem to be worked around — it is the environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "RAG Knowledge Systems",
                desc: "Private retrieval-augmented generation systems built on your documentation. Python, LangChain, vector databases — deployed on your infrastructure.",
                tags: ["LangChain", "Python", "Vector DB"]
              },
              {
                icon: Network,
                title: "Multi-Entity Unification",
                desc: "Cross-continental knowledge bases that connect US, UK, European and Asian operations into one unified intelligence layer. Mergers, acquisitions and partnerships included.",
                tags: ["Cross-continental", "Multi-entity", "Merger integration"]
              },
              {
                icon: FileSearch,
                title: "Legacy Blueprint Digitisation",
                desc: "Vision AI converts physical engineering drawings and legacy documents into queryable data. No document is too old, too complex, or too specialised.",
                tags: ["Vision AI", "OCR", "Engineering drawings"]
              },
              {
                icon: Cpu,
                title: "CRM Integration",
                desc: "Connect your knowledge base to Salesforce and other CRM platforms. Client history informs every technical response. Knowledge meets relationship intelligence.",
                tags: ["Salesforce", "CRM", "Client intelligence"]
              },
              {
                icon: Lock,
                title: "Compliance Architecture",
                desc: "Audit-ready documentation for blue-chip client procurement audits. Access controls, data sovereignty, query logging — built to satisfy enterprise compliance requirements.",
                tags: ["Audit ready", "Data sovereignty", "Access control"]
              },
              {
                icon: BarChart3,
                title: "Executive Intelligence",
                desc: "Dashboards revealing usage patterns, knowledge gaps, and documentation risks before they become operational problems. See your knowledge estate clearly.",
                tags: ["Dashboard", "Gap detection", "Analytics"]
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/3 border border-white/8 rounded-xl p-6 hover:border-blue-500/25 hover:bg-white/5 transition-all group">
                  <div className="w-10 h-10 bg-blue-500/15 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-500/25 transition-all">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 bg-gradient-to-b from-[#07080f] to-[#05060b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">Sectors</div>
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 leading-tight">
                We serve organisations
                <span className="block font-semibold text-white">where precision is not optional.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our systems are built for sectors where the cost of a wrong answer
                is measured in safety incidents, regulatory penalties, and lost
                enterprise contracts — not just inconvenience.
              </p>
              <p className="text-gray-400 leading-relaxed">
                If your organisation operates across multiple entities, jurisdictions,
                or continents — and your knowledge infrastructure has not kept pace
                with your growth — we built this for you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/3 border border-white/8 rounded-xl hover:border-blue-500/20 hover:bg-white/5 transition-all">
                    <div className="w-8 h-8 bg-blue-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{ind.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 bg-[#05060b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-400 font-medium mb-4">
              <Users className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest">The Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Built by specialists.
              <span className="block font-semibold text-white">Focused on one problem.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team combines deep expertise in AI architecture, enterprise systems,
              and industrial knowledge management. We do not build generic tools —
              we solve specific, complex, high-stakes knowledge infrastructure problems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center group w-40">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden mx-auto mb-4 border border-white/10 group-hover:border-blue-500/40 transition-all shadow-lg">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Vidi Agency`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  {/* Hover overlay with contact links */}
                  <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5 text-white" />
                    </a>
                  </div>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{member.name}</h4>
                <p className="text-blue-400 text-xs leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-20 bg-gradient-to-b from-[#07080f] to-[#05060b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">How We Work</div>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Guiding Principles
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Precision Over Speed",
                desc: "We build systems that are correct before they are fast. In safety-critical industrial environments, accuracy is the only acceptable standard."
              },
              {
                icon: Clock,
                title: "Long-Term Partnership",
                desc: "We architect knowledge infrastructure that grows with your organisation — designed for your next decade, not your next quarter."
              },
              {
                icon: Award,
                title: "Zero Compromise on Security",
                desc: "Your proprietary documentation, your engineering decisions, your competitive advantage — stays within your walls. Always. Without exception."
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="text-center p-8 bg-white/3 border border-white/8 rounded-xl hover:border-blue-500/20 transition-all">
                  <div className="w-14 h-14 bg-blue-500/15 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600/10 to-[#0a0f1e] border border-blue-500/20 rounded-2xl p-10 sm:p-14 text-center backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Ready to make your knowledge
              <span className="block font-semibold text-blue-400 mt-1">indestructible?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-base leading-relaxed">
              Let us show you what a unified knowledge infrastructure looks like
              for your specific operations — live, on your documentation, in 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-started"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Request a Demonstration
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-white/15 text-gray-300 font-medium rounded-lg hover:bg-white/8 transition-colors flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-8">
              No obligation · Typical response within 24 hours · Available globally
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER (hidden links preserved) ── */}
      <footer className="py-8 border-t border-white/8 bg-[#05060b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Vidi Agency Ltd</span>
              </div>
              {/* Hidden Easter egg — preserved exactly */}
              <button
                onClick={handleSecretKnock}
                className="text-gray-600 text-sm hover:text-gray-400 transition-colors text-left"
              >
                Building tomorrow's knowledge infrastructure
              </button>
            </div>

            <div className="flex items-center gap-6">
              <a href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                Contact
              </a>
              {/* Hidden link 1 — preserved */}
              <Link href="/case-studies" className="px-6 py-2.5 border border-white/15 text-gray-300 font-medium rounded-lg hover:bg-white/8 transition-colors flex items-center gap-2 text-sm">
                View Our Work
              </Link>
              <a href="https://linkedin.com/company/vidiagency" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                Connect
              </a>
              {/* Hidden link 2 — preserved */}
              <Link href="/team" className="text-gray-600 hover:text-blue-400 text-sm font-medium border-b border-transparent hover:border-blue-400 transition-all">
                Team
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}