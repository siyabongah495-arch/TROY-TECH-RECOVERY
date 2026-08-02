import React from 'react';
import { TEAM_DATA } from '../data/forensicsData';
import { Shield, Award, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">
            LEADERSHIP & INVESTIGATORS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Meet Our Certified Forensic Experts
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A passionate team of certified cybersecurity lead investigators, reverse engineers, and legal compliance officers dedicated to pushing the boundaries of digital forensics.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_DATA.map((member) => (
            <div
              key={member.id}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/40 group"
            >
              <div className="space-y-4">
                {/* Avatar Placeholder / Graphic */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 flex items-center justify-center font-mono font-bold text-xl text-cyan-400 shadow-inner group-hover:border-cyan-500 transition-colors">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 font-medium">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {member.experience}
                  </div>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {member.bio}
                </p>

                {/* Certifications */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold flex items-center gap-1">
                    <Award className="w-3 h-3 text-cyan-400" /> Certifications
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.certifications.map((cert, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800 font-mono">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social / Contact Links */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 text-slate-400 text-xs">
                <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Certified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
