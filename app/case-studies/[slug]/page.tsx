'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  getCaseStudyBySlug,
  getRelatedCaseStudies,
  Project,
  Industry
} from '@/lib/case-studies-detail';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Quote,
  Calendar,
  Clock,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import Footer from '@/components/Footer';

// ============================================================================
// CASE STUDY DETAIL PAGE COMPONENT
// ============================================================================

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const data = getCaseStudyBySlug(slug);

  if (!data) {
    notFound();
  }

  const { project, industry } = data;
  const relatedProjects = getRelatedCaseStudies(slug, 3);
  const IndustryIcon = industry.icon;

  return (
    <main className="min-h-screen bg-[#05060b] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10" aria-label="Breadcrumb">
            <Link
              href="/case-studies"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-gray-600">{industry.title}</span>
            <span>/</span>
            <span className="text-gray-300">{project.title}</span>
          </nav>

          {/* Industry Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} opacity-80`}>
              <IndustryIcon className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-sm font-medium text-gray-300">{industry.title}</span>
            <span className="text-gray-700">•</span>
            <span className="text-sm text-gray-500">{project.type}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk leading-[1.08]">
            <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
              {project.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
            {project.fullDescription || project.desc}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Client: <strong className="text-white">{project.client}</strong></span>
            </div>
            {project.duration && (
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Duration: <strong className="text-white">{project.duration}</strong></span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-2 text-gray-400">
                <span>Year: <strong className="text-white">{project.year}</strong></span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── KEY RESULTS ── */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">What changed</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-space-grotesk flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-blue-400" aria-hidden="true" />
              Key Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.metrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <div
                  key={index}
                  className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} mb-5`}>
                      <MetricIcon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-sm leading-snug">{metric.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CHALLENGE / SOLUTION / RESULTS ── */}
      {(project.challenge || project.solution || project.results) && (
        <section className="py-16 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-10">The full picture</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {project.challenge && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-3 font-space-grotesk text-white">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm text-white font-bold flex-shrink-0">1</span>
                    The Problem
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-3 font-space-grotesk text-white">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm text-white font-bold flex-shrink-0">2</span>
                    What We Built
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{project.solution}</p>
                </div>
              )}

              {project.results && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-3 font-space-grotesk text-white">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm text-white font-bold flex-shrink-0">3</span>
                    What Changed
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{project.results}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIAL ── */}
      {project.testimonial && (
        <section className="py-16 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative p-10 md:p-14 rounded-3xl bg-white/[0.03] border border-white/[0.07]">
              <Quote className="absolute top-8 left-8 w-10 h-10 text-blue-500/25" aria-hidden="true" />

              <blockquote className="relative">
                <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-8">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center text-xl font-bold text-white flex-shrink-0`}>
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-white block">
                      {project.testimonial.author}
                    </cite>
                    <p className="text-sm text-gray-500">{project.testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED CASE STUDIES ── */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">More work</p>
            <h2 className="text-2xl font-bold mb-10 font-space-grotesk text-white">Related Case Studies</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <Link
                  key={index}
                  href={`/case-studies/${relatedProject.slug}`}
                  className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${relatedProject.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className="relative">
                    <span className="text-xs text-gray-600 uppercase tracking-wider">{relatedProject.type}</span>
                    <h3 className="text-lg font-bold mt-2 mb-3 text-white group-hover:text-blue-300 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{relatedProject.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm text-gray-500 group-hover:text-blue-400 transition-colors">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/[0.06] bg-[#07080e]">
        <div className="max-w-5xl mx-auto px-6">

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-600/[0.07] via-[#07080e] to-indigo-600/[0.05] p-10 md:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Want the same for your business?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 font-space-grotesk text-white leading-tight">
                Let&apos;s build this for your team.
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Tell us about your operation. We&apos;ll show you exactly how an AI assistant
                trained on your own documents can save your team hours every week —
                and send qualified leads straight to your CRM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:border-white/25 transition-all"
                >
                  View More Case Studies
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