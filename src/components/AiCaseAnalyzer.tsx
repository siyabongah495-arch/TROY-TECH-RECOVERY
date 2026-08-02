import React, { useState } from 'react';
import { CaseEvaluationResult } from '../types';
import { Activity, ShieldCheck, AlertTriangle, FileText, CheckCircle2, ArrowRight, RefreshCw, Cpu, Lock, Sparkles } from 'lucide-react';

interface AiCaseAnalyzerProps {
  onConvertToIntake: (data: { category: string; lossEstimate: string; description: string }) => void;
}

export const AiCaseAnalyzer: React.FC<AiCaseAnalyzerProps> = ({ onConvertToIntake }) => {
  const [category, setCategory] = useState('Blockchain Asset Tracing');
  const [lossEstimate, setLossEstimate] = useState('$150,000');
  const [incidentDate, setIncidentDate] = useState('Within past 7 days');
  const [description, setDescription] = useState(
    'Diverted USDC assets across a cross-chain liquidity bridge to an unknown wallet endpoint. Need to track transaction hashes and identify centralized exchange deposit points.'
  );
  const [technicalLogs, setTechnicalLogs] = useState(
    'TxHash: 0x8a92f1b4c3e8019a72d3f4e5618290ab7c4d3e2f1098a72b3c4d5e6f7a8b9c0d\nTarget: 0x71a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f901'
  );

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CaseEvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const presets = [
    {
      title: 'Crypto Bridge Drain ($250k)',
      cat: 'Blockchain Asset Tracing',
      loss: '$250,000',
      date: '48 hours ago',
      desc: 'Private key compromised on multi-sig wallet. Assets bridged across Arbitrum to Ethereum to unknown mixer pool.',
      logs: 'TxHash: 0x98f21a4bc3109a784d12ef34ab56c7890123de45fa67b89012cd34ef56a7b890'
    },
    {
      title: 'Ransomware Server Breach',
      cat: 'Ransomware / Server Incident',
      loss: '$120,000 Risk',
      date: 'Yesterday',
      desc: 'LockBit ransomware encrypted Linux server cluster via SSH vulnerability. Attackers left ransom note with BTC payment address.',
      logs: 'C2 IP: 185.220.101.42\nSSH Log Entry: Failed password for root from 185.220.101.42 port 49152 ssh2'
    },
    {
      title: 'BEC Wire Fraud ($420k)',
      cat: 'Corporate Wire Fraud',
      loss: '$420,000',
      date: '3 days ago',
      desc: 'Invoice payment diverted to fraudulent offshore bank account after employee responded to spoofed executive email.',
      logs: 'Header: Return-Path: <exec-support@vance-sys-auth.com>\nOriginal IP: 198.51.100.14'
    }
  ];

  const handleApplyPreset = (p: typeof presets[0]) => {
    setCategory(p.cat);
    setLossEstimate(p.loss);
    setIncidentDate(p.date);
    setDescription(p.desc);
    setTechnicalLogs(p.logs);
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/gemini/evaluate-case', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          incidentDate,
          lossEstimate,
          description,
          technicalLogs
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error('Case evaluation error:', err);
      setError(err.message || 'Failed to complete AI case feasibility evaluation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-analyzer" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            AI FORENSIC PRELIMINARY ASSESSOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            AI Case Feasibility & Evidence Potential Analyzer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Test the preliminary technical feasibility of tracking your incident's digital footprints, mapping subpoena endpoints, and preparing a court-admissible evidence package.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="mb-8">
          <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">
            Quick Test Case Presets:
          </label>
          <div className="flex flex-wrap gap-3">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className="text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 px-3 py-2 rounded-lg border border-slate-800 hover:border-cyan-800 font-mono transition-colors flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                {preset.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" /> Case Details Input
            </h3>

            <form onSubmit={handleAnalyze} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-mono text-slate-300 mb-1">Case Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                >
                  <option value="Blockchain Asset Tracing">Blockchain Asset Tracing (Crypto Theft)</option>
                  <option value="Ransomware / Server Incident">Ransomware / Server Incident</option>
                  <option value="Corporate Wire Fraud">Corporate Wire Fraud / BEC</option>
                  <option value="Insider Data Leak / IP Theft">Insider Data Leak / IP Theft</option>
                  <option value="Unauthorized Account Breach">Unauthorized Account Breach</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-slate-300 mb-1">Loss Estimate</label>
                  <input
                    type="text"
                    value={lossEstimate}
                    onChange={(e) => setLossEstimate(e.target.value)}
                    placeholder="e.g. $150,000"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-mono text-slate-300 mb-1">Incident Timeline</label>
                  <input
                    type="text"
                    value={incidentDate}
                    onChange={(e) => setIncidentDate(e.target.value)}
                    placeholder="e.g. 24 hours ago"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">Incident Narrative / Details</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what occurred, affected wallets or servers, and current state..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-slate-300 mb-1">Optional Technical Logs / Hashes / IPs</label>
                <textarea
                  rows={2}
                  value={technicalLogs}
                  onChange={(e) => setTechnicalLogs(e.target.value)}
                  placeholder="Paste transaction hashes, wallet addresses, IP logs, or email headers..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-cyan-200" />
                    Analyzing Digital Footprints...
                  </>
                ) : (
                  <>
                    <Activity className="w-4 h-4 text-cyan-200" />
                    Run AI Feasibility & Evidence Analysis
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 font-mono text-center flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-cyan-400" /> Confidential processing under POPIA encryption rules.
              </p>
            </form>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-7">
            {loading && (
              <div className="bg-slate-900 border border-cyan-800 rounded-2xl p-8 text-center space-y-6 shadow-xl my-auto">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border-2 border-cyan-500 flex items-center justify-center mx-auto animate-pulse">
                  <Activity className="w-8 h-8 text-cyan-400 animate-spin" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-extrabold text-white">Running Digital Forensic Pipeline...</h4>
                  <p className="text-slate-400 text-sm font-mono">Correlating UTXO cluster nodes, parsing log artifacts, and checking CEX endpoint subpoena feasibility...</p>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-3/4 animate-pulse"></div>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-950/80 border border-red-800 rounded-2xl p-6 space-y-3 text-red-200 text-sm">
                <div className="flex items-center gap-2 font-bold text-red-400">
                  <AlertTriangle className="w-5 h-5" /> Evaluation Error
                </div>
                <p>{error}</p>
              </div>
            )}

            {!loading && !error && !result && (
              <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-2xl p-8 sm:p-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Ready for Case Evaluation</h4>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Fill in your case details on the left or select a preset to generate a preliminary technical feasibility analysis and subpoena target breakdown.
                </p>
              </div>
            )}

            {!loading && result && (
              <div className="bg-slate-900 border border-cyan-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-slate-300">PRELIMINARY FORENSIC REPORT</span>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded font-mono font-bold border ${
                    result.complexityLevel === 'Low' ? 'bg-emerald-950 text-emerald-400 border-emerald-800' :
                    result.complexityLevel === 'Medium' ? 'bg-cyan-950 text-cyan-300 border-cyan-800' :
                    'bg-amber-950 text-amber-400 border-amber-800'
                  }`}>
                    COMPLEXITY: {result.complexityLevel.toUpperCase()}
                  </span>
                </div>

                {/* Score Gauge */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Feasibility Rating</div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400">
                      {result.feasibilityScore}%
                    </div>
                    <div className="text-xs text-slate-400">Technical Traceability Index</div>
                  </div>

                  <div className="w-32 bg-slate-900 rounded-full h-4 overflow-hidden border border-slate-800 p-0.5">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${result.feasibilityScore}%` }}
                    />
                  </div>
                </div>

                {/* Recommended Protocol */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-cyan-300 uppercase font-semibold">Recommended Forensic Protocol</h4>
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-cyan-900/50 text-sm font-mono text-cyan-200">
                    {result.recommendedProtocol}
                  </div>
                </div>

                {/* Technical Analysis */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold">Technical Analysis Breakdown</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {result.technicalAnalysis}
                  </p>
                </div>

                {/* Preservation Steps */}
                <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Evidence Preservation Checklist
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 font-mono">
                    {result.evidencePreservationSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subpoena Targets */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold">Potential Subpoena / Freeze Targets</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.potentialSubpoenaTargets.map((target, idx) => (
                      <span key={idx} className="text-xs bg-slate-950 text-slate-300 px-2.5 py-1 rounded border border-slate-800 font-mono">
                        🎯 {target}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Legal Advisory */}
                <div className="text-[11px] text-slate-400 bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
                  <span className="font-bold text-amber-400 font-mono block">COMPLIANCE & LEGAL NOTICE:</span>
                  <p>{result.disclaimerAdvisory}</p>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onConvertToIntake({ category, lossEstimate, description })}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg transition-all"
                  >
                    Convert Analysis to Official Case Intake
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
