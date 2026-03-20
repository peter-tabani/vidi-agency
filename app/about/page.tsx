"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import {
  ArrowRight, MessageCircle, ShieldCheck, Clock,
  Lock, Linkedin, Mail, Sparkles, Database, Zap, Globe
} from 'lucide-react';

// ── TICKER ──────────────────────────────────────────────────────
const clients = [
  "KASNEB",
  "Institutional Client · Kenya",
  "Government Sector · East Africa",
  "Enterprise Client · Nairobi",
];

function ClientsTicker() {
  const items = [...clients, ...clients, ...clients];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-20 whitespace-nowrap"
        style={{ animation: "ticker 22s linear infinite" }}
      >
        {items.map((c, i) => (
          <span key={i} className="text-gray-500 text-sm font-medium tracking-widest uppercase shrink-0">
            {c}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

// ── PAGE ────────────────────────────────────────────────────────
export default function AboutPage() {
  const router = useRouter();
  const [secretCount, setSecretCount] = useState(0);

  const handleSecretKnock = () => {
    const n = secretCount + 1;
    setSecretCount(n);
    if (n >= 5) router.push('/admin');
    setTimeout(() => setSecretCount(0), 1000);
  };

  const team = [
    { name: "Peter Frank",      role: "Principal Consultant",          image: "/team/peter-frank.png",       linkedin: "https://linkedin.com/in/yourprofile", email: "peter@vidiagencyltd.com" },
    { name: "Emmanuel Douglas", role: "Lead AI Engineer",              image: "/team/emmanuel-douglas.jpeg", linkedin: "#", email: "emmanuel@vidiagencyltd.com" },
    { name: "Dawson Johnson",   role: "Systems Architect",             image: "/team/dawson-johnson.jpeg",   linkedin: "#", email: "dawson@vidiagencyltd.com" },
    { name: "Anna Hall",        role: "Knowledge Infrastructure Lead", image: "/team/anna-hall.jpeg",        linkedin: "#", email: "anna@vidiagencyltd.com" },
    { name: "Abigael Roberts",  role: "Integration Specialist",        image: "/team/abigael-roberts.jpeg",  linkedin: "#", email: "abigael@vidiagencyltd.com" },
  ];

  const capabilities = [
    { icon: Database, title: "Private AI Assistants",  desc: "Trained exclusively on your company data. Deployed within your infrastructure." },
    { icon: Lock,     title: "Zero Data Exposure",     desc: "Fully closed-loop. Your information never touches a public AI model." },
    { icon: Zap,      title: "Instant Accurate Answers", desc: "Responds in seconds. Only answers from verified company documentation." },
    { icon: Globe,    title: "Always Available",       desc: "24 hours a day. Any device. Any location. Any language." },
  ];

  const principles = [
    { icon: ShieldCheck, title: "Accuracy first",              desc: "We build systems that are correct before they are fast. Precision is the only acceptable standard." },
    { icon: Lock,        title: "Security without compromise", desc: "Your data stays within your infrastructure. No exceptions, no third-party exposure." },
    { icon: Clock,       title: "Built to last",               desc: "Designed for the next decade. Every system grows with your organisation." },
  ];

  return (
    <main className="min-h-screen bg-[#05060b] text-white font-sans">
      <Navbar />

      {/* ── HERO WITH BACKGROUND IMAGE ── */}
      <section className="relative min-h-[90vh] flex items-center">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero-bg.jpeg"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay so text is always readable */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-32">
          <div className="max-w-3xl">

            {/* Label */}
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              Vidi Agency Ltd — Enterprise AI Solutions
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-[1.1] tracking-tight mb-8">
              Every question answered.{" "}
              <span className="font-semibold">Every process explained.</span>{" "}
              <span className="text-blue-400">24 hours a day.</span>
            </h1>

            {/* Body */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-4">
              We build smart AI assistants trained on your company's own data — always
              available to answer questions, explain processes, guide users, and deliver
              information instantly.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
              Whether it is a client needing support, a staff member navigating a complex
              workflow, or a visitor looking for direction — your AI assistant handles it.
              Accurately. Immediately. Every time.
            </p>

            {/* Action words */}
            <p className="text-blue-400/70 text-xs font-semibold tracking-[0.25em] uppercase mb-10">
              Delivering · Answering · Guiding · Supporting · Selling · Comforting
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/get-started"
                className="px-8 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Get in Touch
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS TICKER ── */}
      <section className="py-12 px-4 border-y border-white/6">
        <p className="text-center text-gray-600 text-xs uppercase tracking-[0.2em] mb-6">
          Organisations we have worked with
        </p>
        <ClientsTicker />
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="max-w-2xl mb-16">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight mb-4">
              One system.{" "}
              <span className="font-semibold">All the answers.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We build private, closed-loop AI systems that unify your organisation's
              documentation into a single intelligence layer — accessible to any
              authorised team member, on any device, in any timezone.
            </p>
          </div>

          {/* 2x2 capability grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-transparent hover:border-blue-500/20 hover:bg-white/3 transition-all group"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THIN RULE ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="border-t border-white/6" />
      </div>

      {/* ── TEAM ── */}
      <section className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">

          {/* Section header — centred */}
          <div className="text-center mb-16">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              The Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              A focused team of{" "}
              <span className="font-semibold">AI specialists.</span>
            </h2>
          </div>

          {/* Team grid — centred, even spacing */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-12">
            {team.map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center w-36 text-center">

                {/* Photo */}
                <div className="relative w-28 h-28 rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-blue-500/30 transition-all">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className="object-cover transition-all duration-300"
                  />
                  {/* Hover overlay */}
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

                <p className="text-white text-sm font-semibold leading-tight">{member.name}</p>
                <p className="text-blue-400 text-xs mt-1 leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THIN RULE ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="border-t border-white/6" />
      </div>

      {/* ── PRINCIPLES ── */}
      <section className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-16">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              How We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              What we stand for.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-xl border border-transparent hover:border-blue-500/20 hover:bg-white/3 transition-all group"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THIN RULE ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="border-t border-white/6" />
      </div>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 leading-tight">
            Ready to give your organisation{" "}
            <span className="font-semibold">its own AI assistant?</span>
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed max-w-xl mx-auto">
            We offer a 30-minute live demonstration built around your company's
            own documentation. No slides. No theory. Just the system working.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-started"
              className="px-8 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 border border-transparent text-gray-400 text-sm font-semibold rounded-lg hover:border-white/15 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              Get in Touch
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-700 text-xs mt-8">
            Response within 24 hours · Available globally
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 border-t border-white/6 bg-[#05060b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Vidi Agency Ltd</span>
              </div>
              {/* Easter egg — preserved */}
              <button
                onClick={handleSecretKnock}
                className="text-gray-700 text-xs hover:text-gray-500 transition-colors text-left"
              >
                Building tomorrow's knowledge infrastructure
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Contact
              </a>
              {/* Hidden link 1 — preserved */}
              <Link
                href="/case-studies"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Our Work
              </Link>
              <a
                href="https://linkedin.com/company/vidiagency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                LinkedIn
              </a>
              {/* Hidden link 2 — preserved */}
              <Link
                href="/team"
                className="text-gray-700 hover:text-blue-400 text-xs transition-colors"
              >
                Team
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}