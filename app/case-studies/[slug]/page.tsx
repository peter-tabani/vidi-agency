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
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r ${project.gradient} opacity-20 blur-3xl rounded-full`} />
          <div className={`absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r ${project.gradient} opacity-10 blur-3xl rounded-full`} />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link 
              href="/case-studies" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-gray-500">{industry.title}</span>
            <span>/</span>
            <span className="text-white">{project.title}</span>
          </nav>
          
          {/* Industry Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
              <IndustryIcon className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-sm font-medium text-gray-300">{industry.title}</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm text-gray-400">{project.type}</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
              {project.title}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
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
      
      {/* Metrics Section */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400" aria-hidden="true" />
            Key Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.metrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <div 
                  key={index}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} mb-4`}>
                      <MetricIcon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-gray-400">{metric.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Challenge, Solution, Results */}
      {(project.challenge || project.solution || project.results) && (
        <section className="py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {project.challenge && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-red-400 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm">1</span>
                    The Challenge
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                </div>
              )}
              
              {project.solution && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm">2</span>
                    Our Solution
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              )}
              
              {project.results && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-sm">3</span>
                    The Results
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{project.results}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* Tech Stack */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Technology Stack</h2>
          
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-white/10 text-sm font-medium`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <div className={`relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10`}>
              <Quote className={`absolute top-6 left-6 w-12 h-12 text-${project.accentColor}-500 opacity-30`} aria-hidden="true" />
              
              <blockquote className="relative">
                <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-6">
                  "{project.testimonial.quote}"
                </p>
                <footer className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center text-xl font-bold`}>
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-white">
                      {project.testimonial.author}
                    </cite>
                    <p className="text-sm text-gray-400">{project.testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <Link 
                  key={index}
                  href={`/case-studies/${relatedProject.slug}`}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${relatedProject.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className="relative">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{relatedProject.type}</span>
                    <h3 className={`text-lg font-bold mt-2 mb-2 group-hover:bg-gradient-to-r group-hover:${relatedProject.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{relatedProject.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
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
      
      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can achieve similar results for your company. 
            Get a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-started"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${project.gradient} text-white font-semibold hover:opacity-90 transition-opacity`}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link 
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Vidi Agency. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
