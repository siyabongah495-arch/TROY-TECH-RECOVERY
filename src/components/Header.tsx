import React, { useState } from 'react';
import { Shield, Lock, Phone, Mail, CheckCircle2, Menu, X, ArrowRight, Activity } from 'lucide-react';

interface HeaderProps {
  onOpenIntake: () => void;
  onScrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenIntake, onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      {/* Top Security & Hotline Banner */}
      <div className="bg-slate-900 border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Security Status: Protected (POPIA & TLS 1.3)
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Lock className="w-3 h-3 text-slate-400" /> Cape Town Forensic Lab
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href="tel:+27833153358" 
              className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-cyan-400" /> +27 83 315 3358
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="mailto:info@troytechrecovery.com" 
              className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              <Mail className="w-3 h-3 text-cyan-400" /> info@troytechrecovery.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-900 p-0.5 shadow-lg shadow-cyan-950/50">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center group-hover:bg-slate-900 transition-colors">
              <Shield className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white font-mono">TROY TECH</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono">FORENSICS</span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">Digital Forensics & Asset Recovery</p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleNavClick('services')}
            className="hover:text-cyan-400 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('ai-analyzer')}
            className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors font-semibold"
          >
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            AI Case Feasibility
          </button>
          <button 
            onClick={() => handleNavClick('process')}
            className="hover:text-cyan-400 transition-colors"
          >
            Our Process
          </button>
          <button 
            onClick={() => handleNavClick('case-studies')}
            className="hover:text-cyan-400 transition-colors"
          >
            Case Studies
          </button>
          <button 
            onClick={() => handleNavClick('security')}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Security & POPIA
          </button>
          <button 
            onClick={() => handleNavClick('team')}
            className="hover:text-cyan-400 transition-colors"
          >
            Leadership
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenIntake}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-md shadow-cyan-950/40 border border-cyan-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Case Intake
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-3">
          <button
            onClick={() => handleNavClick('services')}
            className="block w-full text-left py-2 text-slate-200 hover:text-cyan-400 font-medium"
          >
            Specialized Services
          </button>
          <button
            onClick={() => handleNavClick('ai-analyzer')}
            className="flex items-center justify-between w-full py-2 text-cyan-300 font-semibold"
          >
            <span className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" /> AI Case Feasibility Tool
            </span>
            <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">FREE</span>
          </button>
          <button
            onClick={() => handleNavClick('process')}
            className="block w-full text-left py-2 text-slate-200 hover:text-cyan-400 font-medium"
          >
            4-Step Forensic Methodology
          </button>
          <button
            onClick={() => handleNavClick('case-studies')}
            className="block w-full text-left py-2 text-slate-200 hover:text-cyan-400 font-medium"
          >
            Case Studies
          </button>
          <button
            onClick={() => handleNavClick('security')}
            className="block w-full text-left py-2 text-slate-200 hover:text-cyan-400 font-medium"
          >
            Security & POPIA Compliance
          </button>
          <button
            onClick={() => handleNavClick('team')}
            className="block w-full text-left py-2 text-slate-200 hover:text-cyan-400 font-medium"
          >
            Leadership Team
          </button>
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntake();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-2.5 rounded-lg text-sm"
            >
              Start Confidential Intake
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
