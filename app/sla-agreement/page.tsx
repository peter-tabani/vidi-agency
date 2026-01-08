'use client';

import { 
  Server, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';

export default function SLAPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <div className="border-b border-gray-100 bg-gray-50/50 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-6 border border-blue-100">
            <Server className="w-3 h-3" />
            Enterprise Reliability
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Service Level Agreement
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Our commitment to uptime, performance, and support response times for Vidi Agency Enterprise Partners.
          </p>
          <p className="text-sm text-gray-400 mt-4 font-mono">
            Effective Date: January 1, 2026
          </p>
        </div>
      </div>

      {/* --- CORE CONTENT --- */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        
        {/* 1. Uptime Guarantee */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Uptime Guarantee</h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We guarantee that our core infrastructure (hosted AI agents, dashboards, and API endpoints) will be available <strong>99.9%</strong> of the time during any given monthly billing cycle.
                </p>
                <p className="text-sm text-gray-500">
                  If we fail to meet this guarantee, Enterprise partners are eligible for service credits credited toward future maintenance or development hours.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center items-center text-center border border-gray-100">
                <span className="text-4xl font-extrabold text-blue-600">99.9%</span>
                <span className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide">Target Availability</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Incident Response Times */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Support Response Times</h2>
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Severity Level</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Definition</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Response Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                
                {/* Severity 1 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Severity 1 (Critical)
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    System is down. Critical AI agent failure. Data loss risk.
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    &lt; 1 Hour (24/7)
                  </td>
                </tr>

                {/* Severity 2 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      Severity 2 (High)
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Core feature functionality is impaired but system is operational.
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    &lt; 4 Hours
                  </td>
                </tr>

                {/* Severity 3 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Severity 3 (Normal)
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Minor bug, glitch, or non-critical error.
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    &lt; 24 Hours
                  </td>
                </tr>

                {/* Severity 4 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Severity 4 (Low)
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    General questions, cosmetic tweaks, or feature requests.
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    &lt; 48 Hours
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Exclusions & Third Party */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Exclusions & Dependencies</h2>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <p className="text-gray-600 mb-6">
              Our SLA covers the codebase and infrastructure managed directly by Vidi Agency. It does not cover outages caused by third-party providers that are beyond our control.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "OpenAI / Anthropic API Outages",
                "AWS / Vercel Region-wide Failures",
                "Client-side Internet Connectivity",
                "Force Majeure Events",
                "Unauthorized Code Modifications by Client"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Contact for Support */}
        <section className="bg-gray-900 text-white rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
              Need to open a priority ticket?
            </h3>
            <p className="text-gray-400">
              Enterprise clients can report Severity 1 issues via the dedicated emergency channel.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Access Support Portal
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}