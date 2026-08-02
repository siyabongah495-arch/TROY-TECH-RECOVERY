import React, { useState } from 'react';
import { IntakeSubmission } from '../types';
import { Mail, Phone, MapPin, Send, Lock, CheckCircle2, Shield, AlertCircle, FileText, Clock } from 'lucide-react';

interface ContactIntakeProps {
  initialCategory?: string;
  initialLoss?: string;
  initialDescription?: string;
}

export const ContactIntakeForm: React.FC<ContactIntakeProps> = ({
  initialCategory = '',
  initialLoss = '',
  initialDescription = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState(initialCategory || 'Blockchain Asset Tracing');
  const [lossEstimate, setLossEstimate] = useState(initialLoss || '');
  const [description, setDescription] = useState(initialDescription || '');
  const [popiaConsent, setPopiaConsent] = useState(true);

  const [loading, setLoading] = useState(false);
  const [submittedCaseId, setSubmittedCaseId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!popiaConsent) {
      setErrorMessage('You must accept POPIA processing consent to submit confidential case information.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          company,
          category,
          lossEstimate,
          description,
          popiaConsent
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit case intake record.');
      }

      setSubmittedCaseId(data.caseId || 'TTF-2026-8903');
    } catch (err: any) {
      setErrorMessage(err.message || 'Error connecting to intake server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Start a Confidential Case Intake
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a digital asset loss, breach, or corporate fraud incident? Submit your preliminary timeline below for an immediate non-disclosure review by our Cape Town forensic team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" /> Direct Contact Information
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">Headquarters</span>
                    <span className="text-slate-200 font-semibold">Cape Town, South Africa</span>
                    <p className="text-xs text-slate-400">Forensic Laboratory & Vault Operations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">Official Email</span>
                    <a href="mailto:info@troytechrecovery.com" className="text-cyan-300 hover:underline font-mono font-semibold">
                      info@troytechrecovery.com
                    </a>
                    <p className="text-xs text-slate-400">DMARC Strict Protected • 24hr Response</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">24/7 Hotline</span>
                    <a href="tel:+27833153358" className="text-cyan-300 hover:underline font-mono font-semibold">
                      +27 83 315 3358
                    </a>
                    <p className="text-xs text-slate-400">Urgent Threat Containment Line</p>
                  </div>
                </div>
              </div>

              {/* Map Callout */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300 font-mono font-semibold">
                  <span>🗺 Cape Town Digital Forensics Hub</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> ONLINE
                  </span>
                </div>
                <p className="text-slate-400">Serving enterprise clients, law firms, and private individuals worldwide.</p>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                All transmissions encrypted under TLS 1.3 standard.
              </div>
            </div>
          </div>

          {/* Form / Submission Output */}
          <div className="lg:col-span-7">
            {submittedCaseId ? (
              <div className="bg-slate-950 border border-emerald-500/80 rounded-2xl p-8 sm:p-10 space-y-6 shadow-2xl animate-fade-in text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">CONFIDENTIAL INTAKE RECORDED</span>
                  <h3 className="text-2xl font-extrabold text-white">Case Reference: {submittedCaseId}</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your preliminary timeline and log artifacts have been received securely by our Cape Town forensic desk. A Senior Investigator will review the evidence within 2 hours.
                  </p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-left space-y-2 text-xs font-mono text-slate-300">
                  <div className="text-cyan-400 font-bold uppercase">Evidence Preservation Reminders:</div>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Do NOT reboot or wipe affected server hardware.</li>
                    <li>Preserve all raw email headers and transaction hashes.</li>
                    <li>Check your inbox for official NDA & intake instructions from info@troytechrecovery.com.</li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSubmittedCaseId(null);
                    setFullName('');
                    setEmail('');
                    setCompany('');
                    setDescription('');
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-cyan-300 font-semibold text-xs px-5 py-2.5 rounded-xl border border-slate-700"
                >
                  Submit Another Intake
                </button>
              </div>
            ) : (
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" /> Case Intake Form
                </h3>

                {errorMessage && (
                  <div className="bg-red-950/80 border border-red-800 text-red-200 p-3.5 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-slate-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-slate-300 mb-1">Business Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-slate-300 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your Company Name"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-slate-300 mb-1">Loss Amount / Budget Range</label>
                      <select
                        value={lossEstimate}
                        onChange={(e) => setLossEstimate(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono text-xs"
                      >
                        <option value="">Select Estimated Range</option>
                        <option value="Under $50,000">Under $50,000</option>
                        <option value="$50,000 - $250,000">$50,000 - $250,000</option>
                        <option value="$250,000 - $1,000,000">$250,000 - $1,000,000</option>
                        <option value="$1,000,000+">$1,000,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-slate-300 mb-1">Primary Case Service</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono text-xs"
                    >
                      <option value="Blockchain Asset Tracing">Blockchain Asset Tracing & Flow-of-Funds</option>
                      <option value="Cyber Incident Response">Cyber Incident Response & Ransomware</option>
                      <option value="Expert Witness Reports">Expert Witness Reports & Litigation Support</option>
                      <option value="Security Hardening">Enterprise Security Hardening</option>
                      <option value="Data Recovery">Deep Data Recovery & Disk Extraction</option>
                      <option value="Corporate Fraud">Corporate Fraud & Insider Leak</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-slate-300 mb-1">Project Description & Timeline *</label>
                    <textarea
                      rows={4}
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell us about your case, transaction hashes, incident timeline, and immediate goals..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
                    />
                  </div>

                  {/* POPIA Consent Checkbox */}
                  <div className="flex items-start gap-2 pt-2 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      id="popiaConsent"
                      checked={popiaConsent}
                      onChange={(e) => setPopiaConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-800 bg-slate-900 text-cyan-600 focus:ring-cyan-500"
                    />
                    <label htmlFor="popiaConsent" className="leading-snug">
                      I consent to Troy Tech & Asset Forensics processing this case information under South African POPIA Act regulations for preliminary technical evaluation.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl shadow-xl transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Recording Intake...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Confidential Intake Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
