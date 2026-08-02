import { ServiceItem, CaseStudy, TeamMember, ProcessStep, SecurityCheckItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'blockchain-forensics',
    category: 'blockchain',
    title: 'Blockchain Forensics & Flow-of-Funds',
    shortDesc: 'Detailed UTXO and account-level transaction tracing to map wallet endpoints and identify centralized exchange liquidity pools.',
    fullDesc: 'Using deep-cluster heuristic mapping and proprietary wallet attribution intelligence, we track stolen cryptocurrencies across Bitcoin, Ethereum, Solana, and cross-chain bridging protocols. We identify coin-mixer de-anonymization patterns and isolate deposit addresses at KYC-compliant exchanges.',
    iconName: 'Binary',
    deliverables: [
      'Comprehensive Transaction Flowchart & DAG Diagram',
      'Wallet Endpoint Exchange Attribution Matrix',
      'Certified Evidentiary Hash Log for Subpoena Filing',
      'De-anonymization Analysis Report'
    ],
    keyTools: ['Chainalysis Reactor', 'Elliptic Forensics', 'Proprietary UTXO Parser', 'Etherscan / Solscan APIs']
  },
  {
    id: 'incident-response',
    category: 'incident-response',
    title: 'Cyber Incident Response & Threat Containment',
    shortDesc: 'Rapid triage following server breaches, ransomware attacks, or credential leaks to contain threats and preserve memory artifacts.',
    fullDesc: 'When unauthorized access occurs, our forensic engineers deploy immediately to halt active data exfiltration, isolate compromised endpoints, and capture volatile RAM memory dumps. We analyze system event logs to pinpoint zero-day entries and lateral movement.',
    iconName: 'ShieldAlert',
    deliverables: [
      'Zero-Day Entry Point Root Cause Analysis',
      'Volatile Memory & Volatility Framework Artifacts',
      'Lateral Movement Timeline & IP Access Logs',
      'Post-Breach Remediation & Hardening Plan'
    ],
    keyTools: ['FTK Imager', 'Volatility Framework', 'Splunk Enterprise', 'KAPE Log Parser']
  },
  {
    id: 'expert-witness',
    category: 'expert-witness',
    title: 'Expert Witness Reports & Litigation Support',
    shortDesc: 'Court-admissible forensic documentation and certified affidavits engineered for law enforcement and legal counsel.',
    fullDesc: 'A successful recovery depends on legally watertight proof. We compile forensic evidence packages adhering strictly to ISO/IEC 27037 chain-of-custody standards. Our lead investigators assist attorneys in drafting Anton Piller orders, freezing injunctions, and 1782 discovery petitions.',
    iconName: 'FileCheck',
    deliverables: [
      'ISO/IEC 27037 Certified Forensic Affidavit',
      'Court-Admissible Technical Briefing Package',
      'Subpoena Target Blueprint for Exchange Freezes',
      'Expert Testimony & Cross-Examination Defense'
    ],
    keyTools: ['EnCase Forensic', 'Autopsy Digital', 'Chain-of-Custody Vault', 'Legal Discovery Prep']
  },
  {
    id: 'security-hardening',
    category: 'security-hardening',
    title: 'Enterprise Security Hardening & Zero-Trust',
    shortDesc: 'Multi-layered perimeter defense, hardware 2FA enforcement, and cold-storage security to prevent recurring breaches.',
    fullDesc: 'We audit enterprise server infrastructure, smart contracts, and access controls to eliminate security debt. By implementing zero-trust network access, Hardware Security Modules (HSM), and encrypted key management, we safeguard high-value digital holdings.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Perimeter Penetration Test & Vulnerability Audit',
      'YubiKey / FIDO2 Hardware 2FA Deployment',
      'Multi-Signature Cold Storage Architecture',
      'POPIA & GDPR Employee Security Policy Framework'
    ],
    keyTools: ['Burp Suite Professional', 'Metasploit Pro', 'Nessus Vulnerability Scanner', 'AWS KMS / Vault']
  },
  {
    id: 'data-recovery',
    category: 'data-recovery',
    title: 'Deep Data Recovery & Forensic Extraction',
    shortDesc: 'Physical and logical data retrieval from damaged, formatted, or ransomware-locked enterprise disk arrays.',
    fullDesc: 'Our hardware extraction specialists recover critical database files and private keys from degraded RAID volumes, encrypted SSDs, and damaged mobile storage. All extraction is executed on clean write-blocker hardware to guarantee data integrity.',
    iconName: 'Database',
    deliverables: [
      'Bit-Stream Physical Disk Clone Images',
      'Carved Database & Master Key Artifacts',
      'Data Extraction Verification Certificate',
      'Secure Encrypted Hard Drive Delivery'
    ],
    keyTools: ['Tableau Forensic Write Blockers', 'PC-3000 Express', 'X-Ways Forensics', 'Sleuth Kit']
  },
  {
    id: 'fraud-investigation',
    category: 'fraud-investigation',
    title: 'Corporate Fraud & Whistleblower Analysis',
    shortDesc: 'Investigating corporate asset diversion, insider trading, wire fraud, and confidential document leakage.',
    fullDesc: 'We perform covert digital audits to uncover internal embezzlement, altered financial ledgers, and unauthorized IP transfers. By correlating employee workstation logs, email metadata, and cloud activity, we construct undisputable timelines.',
    iconName: 'Search',
    deliverables: [
      'Insider Threat Digital Footprint Analysis',
      'Correlated Email & Cloud Metadata Audit',
      'Financial Ledger Discrepancy Matrix',
      'Confidential Executive Report'
    ],
    keyTools: ['Magnet AXIOM', 'Nuix Investigator', 'Elasticsearch SIEM', 'Maltego OSINT']
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'cs-1',
    title: '$250,000 Bridge Drain & Exchange Endpoint Freeze',
    category: 'blockchain',
    lossValue: '$250,000 USDC',
    timeframe: '48 Hours Response',
    summary: 'A Web3 venture firm suffered an unauthorized private key extraction. The attacker routed funds across three cross-chain liquidity pools to obscure the trail.',
    forensicMethod: 'Applied proprietary UTXO cluster graph parsing to de-anonymize bridging contracts. Identified the final $180,000 deposit at a KYC-regulated European exchange within 14 hours.',
    outcome: 'Forensic affidavit served to exchange legal compliance unit within 24 hours, securing a preliminary account freeze prior to cash-out.',
    deliverablePackage: 'Evidentiary Chain-of-Custody Report + Exchange Subpoena Package',
    tags: ['DeFi', 'Cross-Chain', 'Exchange Freeze', 'Ethereum']
  },
  {
    id: 'cs-2',
    title: 'Ransomware Entry-Point Containment for Logistics Corp',
    category: 'incident-response',
    lossValue: 'Critical Data Locked',
    timeframe: '72 Hours Incident Triage',
    summary: 'A major African logistics company experienced LockBit ransomware deployment across 45 virtual servers, halting operational dispatches.',
    forensicMethod: 'Extracted volatile RAM memory dumps and domain controller event logs. Pinpointed a compromised RDP gateway used by threat actors 3 weeks prior to encryption.',
    outcome: 'Contained ransomware spread, neutralized active C2 backdoors, and extracted unencrypted volume shadow copies to restore 92% of operational systems without paying ransom.',
    deliverablePackage: 'Root Cause Incident Analysis + Systems Hardening Blueprint',
    tags: ['Ransomware', 'RAM Analysis', 'RDP Triage', 'Server Hardening']
  },
  {
    id: 'cs-3',
    title: 'Corporate Wire Fraud & Insider Email Spoofing Trace',
    category: 'expert-witness',
    lossValue: '$420,000 USD',
    timeframe: '5 Days Investigation',
    summary: 'An international exporter was tricked into transferring funds to a fraudulent offshore account via a sophisticated Business Email Compromise (BEC).',
    forensicMethod: 'Analyzed Microsoft 365 tenant audit logs and raw email headers. Identified rogue mailbox forwarding rules and traced the attacker IP to a commercial proxy node.',
    outcome: 'Compiled a comprehensive ISO/IEC 27037 forensic affidavit used by commercial banking lawyers to obtain an urgent court order freezing the recipient bank account.',
    deliverablePackage: 'ISO 27037 Affidavit + M365 Security Audit Report',
    tags: ['BEC Fraud', 'Email Forensics', 'Bank Freeze', 'M365 Audit']
  },
  {
    id: 'cs-4',
    title: 'Insider IP Leak & Source Code Theft Analysis',
    category: 'fraud-investigation',
    lossValue: 'Proprietary IP At Risk',
    timeframe: '4 Days Investigation',
    summary: 'A fintech firm suspected a departing lead engineer of exfiltrating proprietary trading algorithms to a competitor.',
    forensicMethod: 'Performed bit-stream physical imaging of workstation storage and USB registry artifact analysis. Carved deleted cloud sync logs and encrypted ZIP archives.',
    outcome: 'Proved unauthorized exfiltration of 1.2GB code repository via an unapproved cloud drive 48 hours before resignation.',
    deliverablePackage: 'Workstation Artifact Analysis + Legal Evidence Binder',
    tags: ['Insider Threat', 'USB Registry', 'Data Exfiltration', 'IP Theft']
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'david-wilson',
    name: 'David Wilson',
    role: 'Founder & Chief Investigator',
    experience: '15+ Years Experience',
    bio: 'Former senior cybersecurity consultant and blockchain forensics specialist. Spearheaded over 300 high-profile digital asset investigations and cross-border financial crime cases.',
    certifications: ['GCFA (GIAC Certified Forensic Analyst)', 'CFE (Certified Fraud Examiner)', 'Chainalysis Certified Investigator']
  },
  {
    id: 'sarah-martinez',
    name: 'Sarah J. Martinez',
    role: 'Head of Digital Forensics',
    experience: '12+ Years Experience',
    bio: 'Specialist in reverse engineering, memory analysis, and zero-day threat response. Formerly lead incident responder at global tier-1 enterprise security firms.',
    certifications: ['GREM (GIAC Reverse Engineering Malware)', 'EnCE (EnCase Certified Examiner)', 'CISSP']
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Lead Compliance & POPIA Officer',
    experience: '10+ Years Experience',
    bio: 'Expert in international cyber law, chain-of-custody evidentiary standards, and South African POPIA/GDPR data privacy regulations. Directs subpoena packaging.',
    certifications: ['CIPP/E (Certified Information Privacy Professional)', 'Certified Fraud Examiner (CFE)', 'LL.M Cyber Law']
  },
  {
    id: 'ryan-martinez',
    name: 'Ryan Martinez',
    role: 'Head of Incident Response',
    experience: '11+ Years Experience',
    bio: 'Full-stack security architecture engineer specializing in zero-trust infrastructure, write-blocker hardware extraction, and automated SIEM detection.',
    certifications: ['GCIH (GIAC Certified Incident Handler)', 'CEH Master', 'AWS Certified Security Specialist']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Intake & Chain of Custody',
    shortDesc: 'Immediate triage, NDA execution, and non-destructive digital asset image acquisition.',
    details: 'We execute strict Non-Disclosure Agreements (NDAs) and create a bit-stream physical copy of compromised storage volumes using write-blocker hardware to maintain pristine chain-of-custody.',
    keyDeliverable: 'Signed Chain of Custody Form & Physical Image Hash Verification'
  },
  {
    stepNumber: '02',
    title: 'Deep-Trace Investigation',
    shortDesc: 'Correlating blockchain DAG graphs, server logs, RAM memory dumps, and OSINT trails.',
    details: 'Our forensic engineers deploy proprietary UTXO cluster tools and memory analysis frameworks to isolate entry vectors, threat actor IP nodes, and wallet deposit endpoints.',
    keyDeliverable: 'Forensic Flowchart & Technical Findings Matrix'
  },
  {
    stepNumber: '03',
    title: 'Evidentiary Package Compilation',
    shortDesc: 'Assembling court-admissible forensic reports complying with ISO/IEC 27037 standards.',
    details: 'We compile an exhaustive evidence package including verified transaction hashes, IP connection logs, and sworn investigator affidavits formatted specifically for court submission.',
    keyDeliverable: 'Certified Forensic Evidence Package & Subpoena Target Blueprint'
  },
  {
    stepNumber: '04',
    title: 'Litigation & Exchange Support',
    shortDesc: 'Coordinating directly with legal counsel and law enforcement to facilitate freeze orders.',
    details: 'We provide technical support to attorneys and law enforcement compliance officers serving subpoenas or freeze notices to centralized exchanges and domain hosts.',
    keyDeliverable: 'Exchange Freeze Confirmation & Court-Ready Expert Affidavit'
  }
];

export const SECURITY_CHECKLIST: SecurityCheckItem[] = [
  {
    id: 'ssl-encryption',
    title: '256-Bit SSL/TLS Encryption',
    status: 'enforced',
    description: 'All client communications and intake forms are encrypted end-to-end using TLS 1.3 cryptographic protocols.',
    technicalDetails: 'RSA 4096-bit key exchange with perfect forward secrecy (PFS). Browser connection verified secure with valid certificate authority.',
    badge: 'HTTPS Verified'
  },
  {
    id: 'cloudflare-waf',
    title: 'Cloudflare Enterprise WAF',
    status: 'active',
    description: 'Real-time mitigation against SQL injections, cross-site scripting (XSS), and automated bot scraping.',
    technicalDetails: 'Edge network firewall filtering 100% of incoming HTTP/HTTPS requests with DDoS protection and rate limiting.',
    badge: 'WAF Active'
  },
  {
    id: 'popia-compliance',
    title: 'POPIA & GDPR Regulatory Compliance',
    status: 'verified',
    description: 'Fully compliant with South Africa Protection of Personal Information Act (Act 4 of 2013) data processing standards.',
    technicalDetails: 'Encrypted intake storage, zero-sharing policy, explicit client consent logging, and mandatory Data Officer oversight.',
    badge: 'POPIA Compliant'
  },
  {
    id: 'email-auth',
    title: 'Domain Email Security (SPF / DKIM / DMARC)',
    status: 'enforced',
    description: 'Custom domain email infrastructure preventing spoofing, phishing, and domain forgery.',
    technicalDetails: 'Strict DMARC policy (p=reject) with DKIM 2048-bit digital signing on info@troytechrecovery.com.',
    badge: 'DMARC Strict'
  },
  {
    id: 'vault-storage',
    title: 'Encrypted Vault Evidence Storage',
    status: 'verified',
    description: 'Physical evidence write-blocked and stored in air-gapped encrypted hardware vaults.',
    technicalDetails: 'AES-256 hardware encryption with dual-custody access controls and automated audit logging.',
    badge: 'AES-256 Vault'
  }
];
