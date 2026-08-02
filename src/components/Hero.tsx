import React, { useState, useEffect } from 'react';
import { Shield, ShieldAlert, ArrowRight, Activity, Database, Lock, CheckCircle2, Cpu, FileText } from 'lucide-react';

interface HeroProps {
  onStartAnalysis: () => void;
  onOpenIntake: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartAnalysis, onOpenIntake, onScrollToSection }) => {
  // Live simulated forensic console log ticker
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const consoleLogs = [
    { type: 'TRACE', msg: 'ETH 0x71a...8f4 -> De-mix cluster identified (Tornado/Synapse Bridge)', timestamp: '14:56:01' },
    { type: 'INFO', msg: 'Chain-of-Custody SHA-256 Hash Verified: 8f92a1...bc90', timestamp: '14:56:04' },
    { type: 'SUCCESS', msg: 'Centralized Exchange Deposit Endpoint Flagged: Subpoena Blueprint Generated', timestamp: '14:56:08' },
    { type: 'AUDIT', msg: 'POPIA Compliance Vault Check: Zero-Knowledge Key Storage Enforced', timestamp: '14:56:11' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % consoleLogs.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [consoleLogs.length]);

  return (
    <section id="hero" className="relative bg-slate-950 text-slate-100 pt-10 pb-20 overflow-hidden border-b border-slate-800">
      {/* Background Subtle Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Compliance & Badge Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-cyan-800/60 rounded-full px-3.5 py-1 text-xs font-mono text-cyan-300">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>Troy Tech & Asset Forensics</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 flex items-center gap-1 font-sans font-medium">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> POPIA Act Compliant
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Forensic Intake Desk Open • Cape Town HQ
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Crafting Excellence,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Delivering Results
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              We provide the technical expertise required to track digital assets, investigate complex cyber breaches, and secure court-admissible forensic proof for legal recovery.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartAnalysis}
                className="flex items-center gap-2.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-xl shadow-cyan-950/60 border border-cyan-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Activity className="w-4 h-4 text-cyan-200 animate-pulse" />
                AI Case Feasibility Check
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenIntake}
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-700 transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                Start Confidential Intake
              </button>
            </div>

            {/* Transparency Note */}
            <p className="text-xs text-slate-400 font-mono flex items-center gap-1.5 pt-1">
              <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              Technical forensics consultancy. We do not guarantee asset recovery or perform illegal operations.
            </p>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-2xl font-black font-mono text-cyan-400">$15M+</div>
                <div className="text-xs text-slate-400 font-medium">Digital Assets Tracked</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-2xl font-black font-mono text-emerald-400">450+</div>
                <div className="text-xs text-slate-400 font-medium">Cases Resolved</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-2xl font-black font-mono text-blue-400">12+</div>
                <div className="text-xs text-slate-400 font-medium">Years Expertise</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                <div className="text-2xl font-black font-mono text-indigo-400">99.9%</div>
                <div className="text-xs text-slate-400 font-medium">Custody Integrity</div>
              </div>
            </div>

          </div>

          {/* Simulated Forensic Terminal Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-cyan-900/80 rounded-2xl p-5 shadow-2xl shadow-cyan-950/60 relative overflow-hidden group">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-slate-300 font-bold ml-2">TTF-FORENSICS-ENGINE v2.4</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                  <Cpu className="w-3 h-3 text-emerald-400" /> LIVE PARSER
                </span>
              </div>

              {/* Console Output */}
              <div className="space-y-3 font-mono text-xs">
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 text-slate-300 space-y-2">
                  <div className="text-slate-500 text-[11px] flex justify-between">
                    <span>STATUS: ACTIVE FORENSIC SESSION</span>
                    <span>ZONE: ZA-CPT-01</span>
                  </div>
                  <div className="text-cyan-400 font-semibold">$ ttf-chain-tracer --mode deep-cluster --target 0x71a...8f4</div>
                  <div className="text-slate-400 text-[11px] pl-2 border-l border-cyan-800">
                    <div>→ UTXO Graph Built: 142 connected nodes</div>
                    <div>→ Cross-Chain Bridge Transit: Arbitrum → Ethereum</div>
                    <div>→ Exchange Deposit Endpoint ID: CEX-0491 (KYC Enforced)</div>
                  </div>
                </div>

                {/* Animated Log Box */}
                <div className="bg-slate-950/80 p-3 rounded-lg border border-cyan-900/40 text-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span className="text-cyan-300 font-semibold">EVENT STREAM</span>
                    <span>{consoleLogs[activeLogIndex].timestamp}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                      consoleLogs[activeLogIndex].type === 'SUCCESS' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                      consoleLogs[activeLogIndex].type === 'TRACE' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800' :
                      'bg-slate-800 text-slate-200'
                    }`}>
                      {consoleLogs[activeLogIndex].type}
                    </span>
                    <span className="text-slate-200 leading-snug">
                      {consoleLogs[activeLogIndex].msg}
                    </span>
                  </div>
                </div>

                {/* Verification Check Marks */}
                <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5 bg-slate-950/60 p-2 rounded border border-slate-800">
                    <Database className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Raw Memory Imager</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-950/60 p-2 rounded border border-slate-800">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Write-Blocker Enforced</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Callout */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Need immediate threat containment?</span>
                <button
                  onClick={() => onScrollToSection('contact')}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 font-mono"
                >
                  Contact Investigator →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
