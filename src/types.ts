export type ServiceCategory = 'blockchain' | 'incident-response' | 'expert-witness' | 'security-hardening' | 'data-recovery' | 'fraud-investigation';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  keyTools: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: ServiceCategory;
  lossValue: string;
  timeframe: string;
  summary: string;
  forensicMethod: string;
  outcome: string;
  deliverablePackage: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  certifications: string[];
  avatarUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  shortDesc: string;
  details: string;
  keyDeliverable: string;
}

export interface SecurityCheckItem {
  id: string;
  title: string;
  status: 'active' | 'verified' | 'enforced';
  description: string;
  technicalDetails: string;
  badge: string;
}

export interface CaseEvaluationRequest {
  category: string;
  incidentDate: string;
  lossEstimate: string;
  description: string;
  technicalLogs?: string;
}

export interface CaseEvaluationResult {
  feasibilityScore: number;
  complexityLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  recommendedProtocol: string;
  technicalAnalysis: string;
  evidencePreservationSteps: string[];
  potentialSubpoenaTargets: string[];
  disclaimerAdvisory: string;
}

export interface IntakeSubmission {
  fullName: string;
  email: string;
  company: string;
  category: string;
  lossEstimate: string;
  description: string;
  popiaConsent: boolean;
}
