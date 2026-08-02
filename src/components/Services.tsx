import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/forensicsData';
import { ServiceItem } from '../types';
import { Binary, ShieldAlert, FileCheck, ShieldCheck, Database, Search, ArrowRight, CheckCircle2, X, Wrench } from 'lucide-react';

interface ServicesProps {
  onOpenIntakeWithCategory: (category: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenIntakeWithCategory }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary':
        return <Binary className="w-6 h-6 text-cyan-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-indigo-400" />;
      case 'Search':
      default:
        return <Search className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Digital Forensics & Litigation Support
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We combine strategy, design, and advanced forensic technology to create digital solutions that protect businesses and track digital assets for legal recovery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950 border border-slate-800 hover:border-cyan-700/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Deliverable Highlights */}
                <div className="pt-3 space-y-2 border-t border-slate-800/80 text-xs text-slate-300 font-mono">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  View Full Technical Scope
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenIntakeWithCategory(service.title)}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors font-medium"
                >
                  Request Evaluation
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-cyan-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Forensic Capability</span>
                <h3 className="text-2xl font-extrabold text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedService.fullDesc}
            </p>

            {/* Deliverables List */}
            <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-mono text-cyan-300 uppercase font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Deliverable Package
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                {selectedService.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold">•</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Forensic Tools */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-slate-400" /> Specialized Tools & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.keyTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700 font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenIntakeWithCategory(title);
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-md"
              >
                Start Case Intake for {selectedService.title.split('&')[0]}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
