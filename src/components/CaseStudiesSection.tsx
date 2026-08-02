import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/forensicsData';
import { CaseStudy, ServiceCategory } from '../types';
import { FileText, CheckCircle2, ArrowRight, X, Clock, DollarSign, Filter } from 'lucide-react';

interface CaseStudiesProps {
  onOpenIntake: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesProps> = ({ onOpenIntake }) => {
  const [filter, setFilter] = useState<'all' | 'blockchain' | 'incident-response' | 'expert-witness' | 'fraud-investigation'>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredCases = filter === 'all'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter((c) => c.category === filter);

  return (
    <section id="case-studies" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">
            OUR PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Forensic Case Studies
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Real results from technical investigations. Explore how we've assisted companies and legal teams in tracking digital assets and securing court-ready evidence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`text-xs font-mono font-semibold px-4 py-2 rounded-xl transition-all border ${
              filter === 'all'
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            All Case Studies
          </button>
          <button
            onClick={() => setFilter('blockchain')}
            className={`text-xs font-mono font-semibold px-4 py-2 rounded-xl transition-all border ${
              filter === 'blockchain'
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            Blockchain Asset Trace
          </button>
          <button
            onClick={() => setFilter('incident-response')}
            className={`text-xs font-mono font-semibold px-4 py-2 rounded-xl transition-all border ${
              filter === 'incident-response'
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            Ransomware & Triage
          </button>
          <button
            onClick={() => setFilter('expert-witness')}
            className={`text-xs font-mono font-semibold px-4 py-2 rounded-xl transition-all border ${
              filter === 'expert-witness'
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            Legal Affidavits & Wire Fraud
          </button>
          <button
            onClick={() => setFilter('fraud-investigation')}
            className={`text-xs font-mono font-semibold px-4 py-2 rounded-xl transition-all border ${
              filter === 'fraud-investigation'
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            Corporate Insider Leaks
          </button>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-800 rounded-2xl p-6 sm:p-8 space-y-5 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-950 text-cyan-400 border border-slate-800 font-mono font-semibold">
                    {caseStudy.category.toUpperCase().replace('-', ' ')}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" /> {caseStudy.timeframe}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {caseStudy.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {caseStudy.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {caseStudy.tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800 font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> {caseStudy.lossValue} Impact
                </div>

                <button
                  onClick={() => setSelectedCase(caseStudy)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  View Case Breakdown →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-cyan-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase">FORENSIC CASE STUDY REPORT</span>
              <h3 className="text-2xl font-extrabold text-white">{selectedCase.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono">
              <div>
                <span className="text-slate-500 block uppercase">Scope / Impact</span>
                <span className="text-emerald-400 font-bold">{selectedCase.lossValue}</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase">Resolution Timeline</span>
                <span className="text-cyan-300 font-bold">{selectedCase.timeframe}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-cyan-300 uppercase font-semibold">Forensic Methodology & Execution</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedCase.forensicMethod}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-emerald-400 uppercase font-semibold">Final Outcome</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedCase.outcome}
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1 text-xs font-mono">
              <span className="text-slate-400 uppercase font-semibold block">Deliverable Package:</span>
              <span className="text-slate-200">{selectedCase.deliverablePackage}</span>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  onOpenIntake();
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-md"
              >
                Request Similar Forensic Investigation
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
