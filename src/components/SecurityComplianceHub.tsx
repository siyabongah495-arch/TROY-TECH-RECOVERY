import React, { useState } from 'react';
import { SECURITY_CHECKLIST } from '../data/forensicsData';
import { Lock, Shield, CheckCircle2, FileText, ChevronDown, ChevronUp, AlertCircle, Server, Key, Eye } from 'lucide-react';

export const SecurityComplianceHub: React.FC = () => {
  const [showPrivacyPolicyModal, setShowPrivacyPolicyModal] = useState(false);
  const [expandedChecklist, setExpandedChecklist] = useState<string | null>('ssl-encryption');

  return (
    <section id="security" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-mono">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            LIVE SECURITY & POPIA COMPLIANCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Enterprise Infrastructure & Data Privacy Protections
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            In digital forensics and asset recovery, security is the foundation. All client data and evidence are processed under strict South African POPIA laws and 256-bit cryptographic protocols.
          </p>
        </div>

        {/* Security Checklist Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Active Security Controls
            </h3>

            {SECURITY_CHECKLIST.map((item) => (
              <div
                key={item.id}
                className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 transition-all hover:border-cyan-800"
              >
                <div 
                  onClick={() => setExpandedChecklist(expandedChecklist === item.id ? null : item.id)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                    <h4 className="font-bold text-slate-100 text-sm sm:text-base">{item.title}</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-0.5 rounded font-mono font-bold">
                      {item.badge}
                    </span>
                    {expandedChecklist === item.id ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {expandedChecklist === item.id && (
                  <div className="pt-3 mt-3 border-t border-slate-900 bg-slate-900/80 p-3 rounded-lg text-xs font-mono text-cyan-300 space-y-1">
                    <span className="text-slate-400 font-bold uppercase block text-[10px]">Technical Verification Detail:</span>
                    <div>{item.technicalDetails}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legal Compliance Box */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Lock className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">LEGAL MANDATE</span>
                <h3 className="text-xl font-bold text-white">POPIA Act & Disclaimer</h3>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <p>
                <strong className="text-white font-mono">POPIA Statement:</strong> Troy Tech Recovery Funds (Pty) Ltd operates strictly as a registered technical forensic consultancy in Cape Town, South Africa. In accordance with the Protection of Personal Information Act (POPIA Act 4 of 2013), all client identity information, transaction logs, and case files are encrypted and processed solely for forensic evaluation.
              </p>
              <p>
                <strong className="text-amber-400 font-mono">Transparency Disclaimer:</strong> We do not guarantee the recovery of stolen funds, nor do we perform illegal "hack-back" operations. All recovery actions are pursued through certified technical evidence packages served via official legal channels, subpoena requests, and law enforcement coordination.
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs font-mono space-y-2">
              <div className="text-slate-400 uppercase font-semibold">Information Officer Contact:</div>
              <div className="text-slate-200">Email: legal@troytechrecovery.com</div>
              <div className="text-slate-200">Phone: +27 83 315 3358</div>
            </div>

            <button
              onClick={() => setShowPrivacyPolicyModal(true)}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-cyan-300 font-semibold py-2.5 px-4 rounded-xl border border-slate-700 text-xs transition-colors"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              Read Full POPIA Privacy Policy & Terms
            </button>
          </div>

        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative max-h-[85vh] overflow-y-auto text-slate-200">
            
            <button
              onClick={() => setShowPrivacyPolicyModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              ✕
            </button>

            <h3 className="text-xl font-extrabold text-white font-mono">POPIA Act Privacy Policy & Compliance Framework</h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <h4 className="font-bold text-white font-mono uppercase text-xs">1. Data Collection & Purpose</h4>
              <p>We collect personal identifiers, company details, transaction hashes, and incident narratives solely for digital forensic analysis and legal evidence compilation.</p>

              <h4 className="font-bold text-white font-mono uppercase text-xs">2. Zero Third-Party Sharing</h4>
              <p>Under POPIA Act 4 of 2013, your data is never sold, leased, or shared with third parties, except when explicitly required to fulfill subpoena packages or court orders with client consent.</p>

              <h4 className="font-bold text-white font-mono uppercase text-xs">3. Encrypted Vault Storage</h4>
              <p>All digital evidence images and volatile RAM dumps are stored in hardware-encrypted, air-gapped vaults with dual-custody access logs.</p>

              <h4 className="font-bold text-white font-mono uppercase text-xs">4. Client Rights & Deletion</h4>
              <p>You maintain the right to request access, correction, or permanent cryptographic wiping of your un-subpoenaed personal records by contacting our Information Officer at legal@troytechrecovery.com.</p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowPrivacyPolicyModal(false)}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs px-5 py-2 rounded-lg"
              >
                I Understand & Acknowledge
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
