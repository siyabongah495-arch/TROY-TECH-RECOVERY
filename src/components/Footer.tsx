import React from 'react';
import { Shield, Lock, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div className="font-mono font-bold text-white text-base tracking-tight">
                TROY TECH <span className="text-cyan-400">FORENSICS</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Troy Tech & Asset Forensics provides enterprise digital forensics, blockchain flow-of-funds analysis, cyber incident triage, and court-admissible expert witness packages.
            </p>

            <div className="text-xs font-mono text-emerald-400 flex items-center gap-2 pt-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> POPIA Act Compliant • Cape Town HQ
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-cyan-400">Blockchain Forensics</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-cyan-400">Incident Response</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-cyan-400">Expert Witness Reports</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-cyan-400">Security Hardening</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-cyan-400">Deep Data Recovery</button></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li><button onClick={() => onScrollToSection('ai-analyzer')} className="hover:text-cyan-400">AI Case Assessor</button></li>
              <li><button onClick={() => onScrollToSection('process')} className="hover:text-cyan-400">Our 4-Step Process</button></li>
              <li><button onClick={() => onScrollToSection('case-studies')} className="hover:text-cyan-400">Case Studies</button></li>
              <li><button onClick={() => onScrollToSection('security')} className="hover:text-cyan-400">Security & POPIA</button></li>
              <li><button onClick={() => onScrollToSection('team')} className="hover:text-cyan-400">Leadership Team</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider">Cape Town Office</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Cape Town, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="mailto:info@troytechrecovery.com" className="hover:text-cyan-300">
                  info@troytechrecovery.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="tel:+27833153358" className="hover:text-cyan-300">
                  +27 83 315 3358
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-slate-900/80 p-4 sm:p-5 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1.5 font-sans">
          <span className="font-bold text-amber-400 font-mono block">POPIA DISCLAIMER & COMPLIANCE NOTICE:</span>
          <p className="leading-relaxed">
            Troy Tech Recovery Funds (Pty) Ltd is a registered technical digital forensics consultancy operating under South African law (POPIA Act 4 of 2013). We process client information solely for forensic evaluation and evidentiary package compilation. We do not guarantee the recovery of digital assets, nor do we perform illegal hacking or law-bypassing operations. All recovery actions are pursued strictly through certified evidence packages served via official legal counsel and law enforcement channels.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Troy Tech & Asset Forensics. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => onScrollToSection('security')} className="hover:text-slate-300">
              Privacy Policy (POPIA)
            </button>
            <span>•</span>
            <button onClick={() => onScrollToSection('security')} className="hover:text-slate-300">
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-cyan-400 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
