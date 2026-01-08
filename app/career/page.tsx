'use client';

import { 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Code2, 
  UploadCloud,
  ChevronRight,
  Briefcase
} from 'lucide-react';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <div className="relative border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 mb-8 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now Hiring in Europe
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Join the <span className="text-blue-600">Vidi</span> Engineering Team
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
            We are looking for exceptional talent to build enterprise-grade software. 
            
          </p>
        </div>
      </div>

      {/* --- JOB LISTING SECTION --- */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          
          {/* Job Header */}
          <div className="p-8 md:p-10 border-b border-gray-100 bg-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Senior Software Engineer</h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md border border-gray-200">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    Remote (Germany) 🇩🇪
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md border border-gray-200">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    Full-Time
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md border border-gray-200">
                    <Code2 className="w-4 h-4 text-gray-400" />
                    Engineering Dept.
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Job Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left Content */}
            <div className="md:col-span-2 p-8 md:p-10 space-y-8">
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-4">About The Role</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vidi Agency is expanding its European presence. We need a Senior Software Engineer based in Germany to lead development on complex client architectures. You will work directly with the founder and our core team to ship high-performance web applications and AI agents.
                </p>
                
              </section>

              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-4">What You Will Do</h3>
                <ul className="space-y-3">
                  {[
                    "Architect scalable full-stack applications using Next.js 14+.",
                    "Integrate AI models into business workflows.",
                    "Communicate technical concepts to our DACH region partners.",
                    "Take ownership of features from database design to UI deployment."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Sidebar (Requirements) */}
            <div className="bg-gray-50 p-8 md:p-10 border-l border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Requirements</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Languages</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" /> English (Professional)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" /> German (Fluent/Native)
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Next.js', 'Supabase', 'PostgreSQL', 'Tailwind'].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-600 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Experience</p>
                  <p className="text-sm text-gray-700 font-medium">3+ Years of Production Experience</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <button 
                  onClick={() => document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- APPLICATION FORM --- */}
      <div id="apply-section" className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Application</h2>
            <p className="text-gray-500">
              We value code over credentials. Show us what you've built.
            </p>
          </div>

          <form className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  placeholder="Hans"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  placeholder="Müller"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                placeholder="hans@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Portfolio / GitHub</label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="url" 
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  placeholder="https://github.com/..."
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Resume / CV</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 transition-colors hover:border-blue-400 hover:bg-blue-50/30 cursor-pointer flex flex-col items-center justify-center group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-1">PDF only (Max 5MB)</p>
              </div>
            </div>

            <button className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Send Application
            </button>
          </form>
        </div>
      </div>

    </main>
  );
}