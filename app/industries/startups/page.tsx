"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Rocket, Zap, Cpu, Clock, TrendingUp, Layers, 
  ArrowRight, Check, Users, Globe, Target, BarChart,
  GitBranch, Code, Database, Server, Sparkles, Shield,
  MessageSquare, Smartphone, Cloud, Workflow, Cpu as CpuIcon,
  GitMerge, Terminal, Palette, Lock, Play, Pause,
  Maximize2, Minimize2, X, ChevronRight, ChevronLeft,
  Battery, Wrench, Compass, Map, Filter,
  LineChart, PieChart, Bell, Activity, Zap as ZapIcon,
  Cpu as CPUIcon, Database as DbIcon, Terminal as TerminalIcon
} from 'lucide-react';

export default function StartupsTechPage() {
  const [activeStage, setActiveStage] = useState('idea');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [buildSpeed, setBuildSpeed] = useState(14);

  const startupStages = [
    {
      id: 'idea',
      label: 'Idea & Validation',
      timeframe: '1-2 weeks',
      focus: 'MVP Architecture',
      deliverables: ['Technical feasibility', 'Architecture plan', 'Initial sprint planning']
    },
    {
      id: 'mvp',
      label: 'MVP Development',
      timeframe: '4-8 weeks',
      focus: 'Launch-Ready Product',
      deliverables: ['Core functionality', 'User onboarding', 'Basic analytics']
    },
    {
      id: 'scale',
      label: 'Scaling',
      timeframe: '3-6 months',
      focus: 'Growth Infrastructure',
      deliverables: ['Scalable architecture', 'Team expansion', 'Performance optimization']
    },
    {
      id: 'enterprise',
      label: 'Enterprise Ready',
      timeframe: '6-12 months',
      focus: 'Market Leadership',
      deliverables: ['Enterprise features', 'Security compliance', 'Global deployment']
    }
  ];

  const techStack = {
    frontend: [
      { name: 'Next.js 14', desc: 'App Router, Server Components', color: 'bg-black text-white' },
      { name: 'React 18', desc: 'Concurrent Features', color: 'bg-blue-500 text-white' },
      { name: 'TypeScript', desc: 'Type Safety at Scale', color: 'bg-blue-600 text-white' },
      { name: 'Tailwind CSS', desc: 'Utility-First Styling', color: 'bg-cyan-500 text-white' },
    ],
    backend: [
      { name: 'Node.js', desc: 'Event-Driven Architecture', color: 'bg-green-600 text-white' },
      { name: 'Python', desc: 'AI/ML Integration', color: 'bg-yellow-500 text-black' },
      { name: 'Go', desc: 'High-Performance Systems', color: 'bg-blue-400 text-white' },
      { name: 'PostgreSQL', desc: 'Relational Database', color: 'bg-blue-700 text-white' },
      { name: 'Redis', desc: 'Real-time Caching', color: 'bg-red-600 text-white' },
      { name: 'Docker', desc: 'Containerization', color: 'bg-blue-800 text-white' },
    ],
    infrastructure: [
      { name: 'AWS/GCP/Azure', desc: 'Multi-Cloud Strategy', color: 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white' },
      { name: 'Kubernetes', desc: 'Container Orchestration', color: 'bg-blue-900 text-white' },
      { name: 'Terraform', desc: 'Infrastructure as Code', color: 'bg-purple-700 text-white' },
      { name: 'GitHub Actions', desc: 'CI/CD Automation', color: 'bg-gray-800 text-white' },
    ]
  };

  const startupMetrics = [
    { metric: "Time to MVP", value: "4-8 weeks", improvement: "10x faster than average" },
    { metric: "Initial Cost", value: "$15-50K", improvement: "70% less than agencies" },
    { metric: "Scalability", value: "100M+ users", improvement: "Architected from day 1" },
    { metric: "Team Size", value: "2-4 engineers", improvement: "Lean & efficient" }
  ];

  const commonChallenges = [
    {
      challenge: "Technical Debt Accumulation",
      solution: "Clean architecture patterns from day one",
      icon: Layers,
      color: "from-red-500 to-orange-500"
    },
    {
      challenge: "Scalability Bottlenecks",
      solution: "Cloud-native design with auto-scaling",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      challenge: "Team Scaling Issues",
      solution: "Modular codebase with clear ownership",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      challenge: "Market Speed Pressure",
      solution: "Agile sprints with continuous deployment",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const accelerationFramework = [
    {
      phase: "Week 1",
      title: "Discovery & Architecture",
      activities: ["Market analysis", "Tech stack selection", "Architecture design"],
      outcome: "Clear development roadmap"
    },
    {
      phase: "Weeks 2-4",
      title: "Core Development",
      activities: ["MVP feature build", "Basic UI/UX", "Initial testing"],
      outcome: "Working prototype"
    },
    {
      phase: "Weeks 5-6",
      title: "Launch Preparation",
      activities: ["User testing", "Performance optimization", "Deployment setup"],
      outcome: "Production-ready MVP"
    },
    {
      phase: "Week 7+",
      title: "Iteration & Growth",
      activities: ["User feedback", "Feature iteration", "Scale planning"],
      outcome: "Product-market fit validation"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Dynamic Background Elements */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .gradient-text {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s linear infinite;
        }
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .circuit-pattern {
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, rgba(139, 92, 246, 0.1) 2px, transparent 2px);
          background-size: 100px 100px;
        }
      `}</style>

      <Navbar />
      
      {/* ============================================================================
          ENERGETIC HERO - Speed & Innovation Focus
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-pink-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-lg">
              <Rocket className="w-5 h-5 text-white" />
              <span className="text-sm font-bold text-white tracking-wide">
                STARTUP ACCELERATION ENGINE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-gray-900">From Idea to</span>
              <span className="block gradient-text mt-4">Product-Market Fit</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We build launch-ready startups in weeks, not months. 
              Technical co-founders who architect for scale from day one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => document.getElementById('launch-calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Calculate Your Launch Timeline</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <Link 
                href="/startup-portfolio"
                className="px-10 py-5 rounded-2xl border-2 border-blue-300 text-blue-600 font-bold text-lg hover:bg-blue-50 transition-all duration-300"
              >
                View Startup Portfolio
              </Link>
            </div>
          </div>

          {/* Speed Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {startupMetrics.map((metric, idx) => (
              <div key={idx} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{metric.metric}</div>
                <div className="text-xs text-blue-600 font-medium">{metric.improvement}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          LAUNCH CALCULATOR - Interactive Timeline
          ============================================================================ */}
      <section id="launch-calculator" className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">LAUNCH TIMELINE CALCULATOR</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Build Speed Optimizer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Adjust your feature complexity to see your optimized launch timeline
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Controls */}
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    Feature Complexity Level
                  </label>
                  <div className="relative pt-2">
                    <input
                      type="range"
                      min="7"
                      max="30"
                      step="1"
                      value={buildSpeed}
                      onChange={(e) => setBuildSpeed(parseInt(e.target.value))}
                      className="w-full h-2 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>Simple MVP</span>
                      <span>Enterprise Platform</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    Core Features Needed
                  </label>
                  <div className="space-y-4">
                    {[
                      { label: "User Authentication", checked: true },
                      { label: "Real-time Features", checked: buildSpeed > 14 },
                      { label: "Payment Integration", checked: buildSpeed > 18 },
                      { label: "Admin Dashboard", checked: buildSpeed > 10 },
                      { label: "Mobile App", checked: buildSpeed > 22 },
                      { label: "AI Integration", checked: buildSpeed > 26 }
                    ].map((feature) => (
                      <div key={feature.label} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${
                          feature.checked ? 'bg-green-500' : 'bg-gray-200'
                        }`}>
                          {feature.checked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className={`text-sm ${
                          feature.checked ? 'text-gray-900 font-medium' : 'text-gray-500'
                        }`}>
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Visualization */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Optimized Timeline</h3>
                    <div className="text-3xl font-bold text-blue-600">{buildSpeed} days</div>
                  </div>
                  
                  {/* Timeline Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Discovery & Planning</span>
                      <span className="font-medium">3 days</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '15%' }}></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Core Development</span>
                      <span className="font-medium">{Math.floor(buildSpeed * 0.6)} days</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '60%' }}></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Testing & Launch</span>
                      <span className="font-medium">{Math.floor(buildSpeed * 0.25)} days</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <div className="text-sm text-gray-600 mb-1">Cost Efficiency</div>
                    <div className="text-lg font-bold text-gray-900">
                      ${Math.round(buildSpeed * 1000).toLocaleString()}
                    </div>
                    <div className="text-xs text-green-600">50-70% less than agencies</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-sm text-gray-600 mb-1">Team Size</div>
                    <div className="text-lg font-bold text-gray-900">
                      {buildSpeed > 20 ? '3-4 engineers' : '2-3 engineers'}
                    </div>
                    <div className="text-xs text-blue-600">Lean & efficient</div>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('startup-assessment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>Get Your Custom Launch Plan</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          STARTUP STAGES - Growth Journey
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 circuit-pattern">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Startup's Growth Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial idea to market leadership, we architect each stage for success
            </p>
          </div>

          {/* Stage Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {startupStages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`px-6 py-3 rounded-xl border transition-all duration-300 font-medium ${
                  activeStage === stage.id
                    ? 'border-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>

          {/* Active Stage Detail */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg">
            {startupStages
              .filter(stage => stage.id === activeStage)
              .map((stage) => (
                <div key={stage.id} className="space-y-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{stage.label}</h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-600">{stage.timeframe}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-600">{stage.focus}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Team Structure</div>
                      <div className="text-lg font-bold text-gray-900">
                        {stage.id === 'idea' ? '1-2 engineers' : 
                         stage.id === 'mvp' ? '2-3 engineers' :
                         stage.id === 'scale' ? '3-5 engineers' : '5+ engineers'}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Deliverables</h4>
                      <ul className="space-y-3">
                        {stage.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Technical Focus</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Architecture</span>
                          <span className="font-medium text-gray-900">
                            {stage.id === 'idea' ? 'MVP Pattern' :
                             stage.id === 'mvp' ? 'Modular Design' :
                             stage.id === 'scale' ? 'Microservices' : 'Enterprise Grade'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Infrastructure</span>
                          <span className="font-medium text-gray-900">
                            {stage.id === 'idea' ? 'Single Server' :
                             stage.id === 'mvp' ? 'Auto-scaling' :
                             stage.id === 'scale' ? 'Multi-region' : 'Global CDN'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Security</span>
                          <span className="font-medium text-gray-900">
                            {stage.id === 'idea' ? 'Basic' :
                             stage.id === 'mvp' ? 'Standard' :
                             stage.id === 'scale' ? 'Advanced' : 'Enterprise'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          TECH STACK GALLERY - Modern Tools
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Code className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">MODERN TECH STACK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built with Future-Proof Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use battle-tested tools that scale from MVP to millions of users
            </p>
          </div>

          <div className="space-y-12">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frontend Architecture</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techStack.frontend.map((tech) => (
                  <div
                    key={tech.name}
                    className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      tech.color.split(' ')[0]
                    }`}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="text-lg font-bold mb-1">{tech.name}</div>
                    <div className="text-sm opacity-90">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Backend Systems</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {techStack.backend.map((tech) => (
                  <div
                    key={tech.name}
                    className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      tech.color.split(' ')[0]
                    }`}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="text-lg font-bold mb-1">{tech.name}</div>
                    <div className="text-sm opacity-90">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Infrastructure & DevOps</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techStack.infrastructure.map((tech) => (
                  <div
                    key={tech.name}
                    className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      tech.color.includes('gradient') ? tech.color : tech.color.split(' ')[0]
                    }`}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="text-lg font-bold mb-1">{tech.name}</div>
                    <div className="text-sm opacity-90">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stack Philosophy */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Philosophy</h3>
                <p className="text-gray-700 mb-6">
                  We choose technologies based on performance, maintainability, and scalability—not hype. 
                  Every tool in our stack is production-proven and has a clear migration path to handle 
                  exponential growth.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Type-safe by default</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Serverless-ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Multi-cloud compatible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          ACCELERATION FRAMEWORK - Process Visualization
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The 7-Week Launch Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology to transform ideas into market-ready products
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Framework Steps */}
            <div className="space-y-12">
              {accelerationFramework.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={`flex flex-col md:flex-row items-start gap-8 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Phase Indicator */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {step.phase}
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white transform rotate-45 hidden md:block"
                        style={{
                          left: idx % 2 === 0 ? '100%' : '-16px',
                          right: idx % 2 === 1 ? '100%' : 'auto'
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {step.activities.map((activity, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                                <span className="text-gray-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                          <h4 className="font-bold text-gray-900 mb-3">Expected Outcome</h4>
                          <p className="text-gray-700 mb-4">{step.outcome}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <BarChart className="w-4 h-4" />
                            <span>Completion: {((idx + 1) * 25)}% of MVP</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          STARTUP ASSESSMENT - Intelligent Matching
          ============================================================================ */}
      <section id="startup-assessment" className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Compass className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">STARTUP FIT ASSESSMENT</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Find Your Launch Configuration
              </h3>
              <p className="text-xl text-blue-100">
                Get matched with the optimal tech stack and timeline for your startup
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    What's your primary startup focus?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "SaaS Product",
                      "Marketplace Platform",
                      "Mobile App",
                      "AI/ML Solution",
                      "Enterprise Software",
                      "Consumer Tech"
                    ].map((focus) => (
                      <button
                        key={focus}
                        type="button"
                        className="py-4 rounded-xl border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium hover:bg-blue-50"
                      >
                        {focus}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Target Launch Date</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="e.g., Q2 2024, 3 months"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Expected User Scale</label>
                    <select className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                      <option>Select scale</option>
                      <option>1,000 - 10,000 users (Early Stage)</option>
                      <option>10,000 - 100,000 users (Growth)</option>
                      <option>100,000+ users (Scale)</option>
                      <option>Enterprise deployment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    Technical Team Status
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Solo Founder", value: "solo" },
                      { label: "Tech Co-founder", value: "tech_cofounder" },
                      { label: "Small Team", value: "small_team" },
                      { label: "Building Team", value: "building_team" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className="py-3 rounded-lg border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-700 transition-all text-sm font-medium"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-3 group">
                  <Rocket className="w-6 h-6" />
                  <span>Get Your Launch Blueprint</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>

                <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                  <p className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>Receive a custom tech stack recommendation and timeline estimate</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20">
            <p className="text-2xl text-gray-600 mb-8">
              Ready to build something extraordinary?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all">
                Start Your 7-Week Launch
              </button>
              <button 
                onClick={() => document.getElementById('launch-calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 rounded-2xl border-2 border-blue-300 text-blue-600 font-bold text-lg hover:bg-blue-50 transition-all"
              >
                Calculate Timeline
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}