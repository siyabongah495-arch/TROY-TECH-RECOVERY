import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AiCaseAnalyzer } from './components/AiCaseAnalyzer';
import { ProcessSection } from './components/ProcessSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { SecurityComplianceHub } from './components/SecurityComplianceHub';
import { TeamSection } from './components/TeamSection';
import { ContactIntakeForm } from './components/ContactIntakeForm';
import { Footer } from './components/Footer';

export default function App() {
  const [intakeCategory, setIntakeCategory] = useState<string>('');
  const [intakeLoss, setIntakeLoss] = useState<string>('');
  const [intakeDesc, setIntakeDesc] = useState<string>('');

  const handleScrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenIntake = () => {
    handleScrollToSection('contact');
  };

  const handleOpenIntakeWithCategory = (category: string) => {
    setIntakeCategory(category);
    handleScrollToSection('contact');
  };

  const handleConvertAnalysisToIntake = (data: { category: string; lossEstimate: string; description: string }) => {
    setIntakeCategory(data.category);
    setIntakeLoss(data.lossEstimate);
    setIntakeDesc(data.description);
    handleScrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Header Bar */}
      <Header 
        onOpenIntake={handleOpenIntake}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onStartAnalysis={() => handleScrollToSection('ai-analyzer')}
          onOpenIntake={handleOpenIntake}
          onScrollToSection={handleScrollToSection}
        />

        {/* What We Do / Services Section */}
        <Services 
          onOpenIntakeWithCategory={handleOpenIntakeWithCategory}
        />

        {/* AI Case Feasibility & Evidence Potential Analyzer */}
        <AiCaseAnalyzer 
          onConvertToIntake={handleConvertAnalysisToIntake}
        />

        {/* 4-Step Forensic Methodology */}
        <ProcessSection 
          onOpenIntake={handleOpenIntake}
        />

        {/* Featured Case Studies */}
        <CaseStudiesSection 
          onOpenIntake={handleOpenIntake}
        />

        {/* Security & POPIA Compliance Controls */}
        <SecurityComplianceHub />

        {/* Certified Forensic Experts & Leadership */}
        <TeamSection />

        {/* Confidential Case Intake Form */}
        <ContactIntakeForm 
          initialCategory={intakeCategory}
          initialLoss={intakeLoss}
          initialDescription={intakeDesc}
        />
      </main>

      {/* Footer */}
      <Footer 
        onScrollToSection={handleScrollToSection}
      />
    </div>
  );
}
