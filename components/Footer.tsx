"use client";

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND & TRUST */}
          <div>
            <Link href="/" className="text-2xl font-bold flex items-center gap-1 mb-6">
              <span className="text-blue-500">Vidi</span>
              <span className="text-white">Agency</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We build the digital engines that power the next generation of businesses. 
              Enterprise-grade development, accessible to everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: COMPANY */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-500 transition-colors">Case Studies</Link></li>
              <li><Link href="/#process" className="hover:text-blue-500 transition-colors">Our Process</Link></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a> <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full ml-2">Hiring</span></li>
            </ul>
          </div>

          {/* COLUMN 3: LEGAL (CRITICAL FOR US CLIENTS) */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal & Trust</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-500 transition-colors">Cookie Policy</Link></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">SLA Agreement</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-0.5"/>
                <span>
                  123 Tech Plaza, Suite 400<br/>
                  San Francisco, CA 94107<br/>
                  United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 flex-shrink-0"/>
                <a href="mailto:hello@vidiagency.com" className="hover:text-white transition-colors">hello@vidiagency.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 flex-shrink-0"/>
                <a href="tel:+15550000000" className="hover:text-white transition-colors">+1 (555) 000-0000</a>
              </li>
            </ul>
          </div>

        </div>
        

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vidi Agency Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-600 font-bold uppercase tracking-widest">
            <span>Serving the World</span>
          </div>
        </div>

      </div>
      
    </footer>
  );
}