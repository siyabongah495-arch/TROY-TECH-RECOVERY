import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/forensicsData';
import { Shield, ArrowRight, CheckCircle2, ChevronRight, FileCheck, Search, Database, Lock } from 'lucide-react';

interface ProcessSectionProps {
  onOpenIntake: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenIntake }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Lock className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Search className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <FileCheck className="w-5 h-5 text-emerald-400" />;
      case 3:
      default:
        return <Shield className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono">
            OUR METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How We Secure Forensic Proof & Results
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A proven 4-step forensic methodology engineered to maintain strict ISO/IEC 27037 chain-of-custody standards and support court proceedings.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline Nav Cards */}
          <div className="lg:col-span-5 space-y-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeStep === idx
                    ? 'bg-slate-950 border-cyan-500 shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                  activeStep === idx
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}>
                  {step.stepNumber}
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className={`font-bold text-base ${
                    activeStep === idx ? 'text-white' : 'text-slate-300'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-snug line-clamp-2">
                    {step.shortDesc}
                  </p>
                </div>

                <ChevronRight className={`w-5 h-5 shrink-0 self-center transition-transform ${
                  activeStep === idx ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                }`} />
              </div>
            ))}
          </div>

          {/* Active Step Detailed Display */}
          <div className="lg:col-span-7 bg-slate-950 border border-cyan-800/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getStepIcon(activeStep)}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase">STEP {PROCESS_STEPS[activeStep].stepNumber} PROTOCOL</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">{PROCESS_STEPS[activeStep].title}</h3>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {PROCESS_STEPS[activeStep].details}
            </p>

            {/* Key Deliverable Box */}
            <div className="bg-slate-900/90 p-4 sm:p-5 rounded-xl border border-cyan-900/60 space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Step Deliverable
              </div>
              <div className="text-sm font-mono text-slate-200 font-semibold">
                {PROCESS_STEPS[activeStep].keyDeliverable}
              </div>
            </div>

            {/* ISO Custody Guarantee */}
            <div className="text-xs text-slate-400 font-mono flex items-center gap-2 pt-2 border-t border-slate-900">
              <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Strict compliance with ISO/IEC 27037 digital evidence preservation standards.</span>
            </div>

            {/* Action */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={onOpenIntake}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-md"
              >
                Start Step 1 Confidential Intake
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
