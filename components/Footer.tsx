"use client";

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05060b] border-t border-white/[0.04] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND & TRUST */}
          <div>
            <Link href="/" className="text-2xl font-bold flex items-center gap-1 mb-6 font-space-grotesk">
              <span className="text-blue-400">Vidi</span>
              <span className="text-white">Agency</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI automation studio for businesses. We build systems that capture leads, 
              engage customers, and eliminate repetitive work.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: COMPANY */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/#process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><a href="/career" className="hover:text-white transition-colors">Careers</a> <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full ml-2 border border-blue-500/20">Hiring</span></li>
            </ul>
          </div>

          {/* COLUMN 3: LEGAL (CRITICAL FOR US CLIENTS) */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal & Trust</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><a href="sla-agreement" className="hover:text-white transition-colors">SLA Agreement</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0"/>
                <a href="mailto:hello@vidiagency.com" className="text-gray-500 hover:text-white transition-colors">hello@vidiagency.com</a>
              </li>
            </ul>
          </div>

        </div>
        

        {/* BOTTOM BAR */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Vidi Agency — AI Automation Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-600 font-bold uppercase tracking-widest">
            <span>AI Automation for Business</span>
          </div>
        </div>

      </div>
      
    </footer>
  );
}