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

      {/* HERO */}
      <div className="border-b border-gray-100 bg-gray-50/50 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-6 border border-blue-100">
            <Server className="w-3 h-3" />
            Support Commitment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Service Level Agreement
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Our commitment to uptime, support response times, and data security for Vidi Agency clients.
          </p>
          <p className="text-sm text-gray-400 mt-4 font-mono">
            Effective Date: January 1, 2026
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* 1. Uptime */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Uptime Commitment</h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We target <strong>99.9% availability</strong> for all AI assistants, knowledge bases,
                  and integrations we host and manage on behalf of clients. This is measured per calendar month
                  and excludes scheduled maintenance windows communicated in advance.
                </p>
                <p className="text-sm text-gray-500">
                  If we fall below this target due to issues within our control, we will discuss remediation
                  with the affected client — typically in the form of additional support hours or priority fixes
                  at no charge.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center items-center text-center border border-gray-100">
                <span className="text-4xl font-extrabold text-blue-600">99.9%</span>
                <span className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide">Target Uptime</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Response Times */}
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
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Severity</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">What it means</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Response time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Critical
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    AI assistant is completely down. Engineers or sales team cannot access the system.
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    &lt; 2 Hours
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      High
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Core feature is impaired — answers degraded, CRM sync failing, leads not being captured.
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    &lt; 8 Hours
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Normal
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Minor bug or unexpected behaviour that does not block daily use.
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    &lt; 24 Hours
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Low
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    General questions, wording tweaks, or adding new documents to the knowledge base.
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    &lt; 48 Hours
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Exclusions */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What This SLA Does Not Cover</h2>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <p className="text-gray-600 mb-6">
              This SLA applies to the AI systems and infrastructure directly managed by Vidi Agency Ltd.
              Outages or issues caused by the following are outside our control and not covered:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "AI API provider outages (e.g. Groq, OpenAI)",
                "Cloud or hosting platform outages (e.g. Vercel, AWS)",
                "Client's internet or network connectivity",
                "Third-party CRM or CMMS downtime",
                "Client-made modifications to the delivered system",
                "Force majeure events",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
              Need to report an issue?
            </h3>
            <p className="text-gray-400">
              Email us directly at{' '}
              <a href="mailto:peter@vidiagencyltd.com" className="text-blue-400 hover:underline">
                peter@vidiagencyltd.com
              </a>
              {' '}with the word URGENT in the subject line for critical issues.
            </p>
          </div>
          <div>
            <a
              href="mailto:peter@vidiagencyltd.com"
              className="px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap"
            >
              Contact Support
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}