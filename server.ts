import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy initializer for Gemini Client
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// In-memory case intake storage for demonstration
interface CaseRecord {
  id: string;
  fullName: string;
  email: string;
  company: string;
  category: string;
  lossEstimate: string;
  description: string;
  timestamp: string;
  status: 'Pending Assessment' | 'Under Investigation' | 'Forensic Package Ready';
}

const caseDatabase: CaseRecord[] = [
  {
    id: 'TTF-2026-8901',
    fullName: 'Robert Vance',
    email: 'r.vance@vance-sys.com',
    company: 'Vance Systems LLC',
    category: 'Ransomware Entry-Point Mitigation',
    lossEstimate: '$120,000',
    description: 'Server cluster compromised via zero-day SSH exploit. Attackers left encrypted metadata.',
    timestamp: '2026-08-01 14:32:00',
    status: 'Forensic Package Ready'
  },
  {
    id: 'TTF-2026-8902',
    fullName: 'Elena Rostova',
    email: 'elena@crypto-venture.io',
    company: 'Nexus Crypto Ventures',
    category: 'Blockchain Asset Tracing',
    lossEstimate: '$250,000',
    description: 'Diverted USDC assets across multi-sig bridging protocol to unverified exchange wallet.',
    timestamp: '2026-08-02 09:15:20',
    status: 'Under Investigation'
  }
];

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    version: '2026.2.0',
    service: 'Troy Tech & Asset Forensics API Engine',
    securityMode: 'POPIA / GDPR Compliant',
    timestamp: new Date().toISOString()
  });
});

// Endpoint: Case Intake Submission
app.post('/api/intake', (req, res) => {
  try {
    const { fullName, email, company, category, lossEstimate, description } = req.body;
    if (!fullName || !email || !description) {
      return res.status(400).json({ error: 'Missing required client fields' });
    }

    const newId = `TTF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newCase: CaseRecord = {
      id: newId,
      fullName,
      email,
      company: company || 'N/A',
      category: category || 'General Forensic Assessment',
      lossEstimate: lossEstimate || 'Unspecified',
      description,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      status: 'Pending Assessment'
    };

    caseDatabase.unshift(newCase);

    return res.json({
      success: true,
      caseId: newId,
      message: 'Case intake recorded securely. A Senior Forensic Investigator will review your chain-of-custody submission.',
      record: newCase
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Server error processing intake' });
  }
});

// Endpoint: AI Case Preliminary Assessment
app.post('/api/gemini/evaluate-case', async (req, res) => {
  try {
    const { category, incidentDate, lossEstimate, description, technicalLogs } = req.body;

    if (!description && !category) {
      return res.status(400).json({ error: 'Please provide case description or details.' });
    }

    const ai = getGeminiClient();

    const systemPrompt = `
You are the Lead Digital Forensics & Blockchain Investigator at "Troy Tech & Asset Forensics" (Cape Town, South Africa).
You analyze cyber incident reports, cryptocurrency theft vectors, ransomware attacks, and unauthorized wire transfers.
You provide objective, realistic, forensic preliminary feasibility evaluations.

STRICT MANDATE:
- Maintain maximum legal integrity.
- Never guarantee recovery of stolen funds or hack back.
- Emphasize deep-trace blockchain cluster mapping, server log forensics, IP extraction, and evidentiary package compilation for law enforcement & subpoenas.
- Format output as clean structured JSON.

Return JSON in this EXACT structure:
{
  "feasibilityScore": number (0-100),
  "complexityLevel": "Low" | "Medium" | "High" | "Critical",
  "recommendedProtocol": "string describing primary technical approach",
  "technicalAnalysis": "string detailed explanation of what forensic traces can be gathered",
  "evidencePreservationSteps": [
    "string step 1",
    "string step 2",
    "string step 3"
  ],
  "potentialSubpoenaTargets": [
    "string target 1 (e.g., Centralized Exchange CEX, ISP, Cloud Hosting)",
    "string target 2"
  ],
  "disclaimerAdvisory": "Official disclaimer regarding zero-guarantee legal standards and POPIA data protection guidelines."
}
`;

    const userPrompt = `
Case Category: ${category || 'Digital Asset Loss / Cyber Incident'}
Incident Date / Timeline: ${incidentDate || 'Recent'}
Estimated Loss Amount: ${lossEstimate || 'Not specified'}
Case Narrative / Details: ${description || 'No detailed narrative'}
Technical Logs / Hashes provided: ${technicalLogs || 'None provided'}
`;

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not configured yet
      const fallbackScore = lossEstimate && lossEstimate.includes('$') ? 78 : 65;
      return res.json({
        feasibilityScore: fallbackScore,
        complexityLevel: 'High',
        recommendedProtocol: 'Deep UTXO / Account Flow-of-Funds Cluster Mapping & Memory Dump Extraction',
        technicalAnalysis: `Based on the provided narrative regarding ${category || 'the incident'}, our initial technical assessment indicates identifiable digital footprints. UTXO flow-of-funds or server log IP trails can be isolated to produce an admissible evidence package for exchange freeze subpoenas or legal filing.`,
        evidencePreservationSteps: [
          'Isolate compromised system hardware immediately and preserve raw disk/memory state without rebooting.',
          'Export raw transaction hashes, wallet public addresses, and timestamped API connection logs in UTC.',
          'Secure all email header data and 2FA authentication logs related to the breach timeframe.'
        ],
        potentialSubpoenaTargets: [
          'Centralized Exchanges (CEX) endpoint liquidity pools',
          'Domain Registrars & Cloud Hosting CDN IP endpoints',
          'Internet Service Providers (ISPs) corresponding to exit node IPs'
        ],
        disclaimerAdvisory: 'Troy Tech & Asset Forensics operates strictly as a certified technical consultancy under South African POPIA regulations. Preliminary assessments provide technical feasibility analysis and do not guarantee asset recovery.'
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text || '';
    let parsedResult;
    try {
      parsedResult = JSON.parse(responseText);
    } catch (e) {
      parsedResult = {
        feasibilityScore: 72,
        complexityLevel: 'Medium',
        recommendedProtocol: 'Multi-layer Blockchain Forensics & Entry Point Audit',
        technicalAnalysis: responseText,
        evidencePreservationSteps: [
          'Freeze all active sessions and preserve log snapshots.',
          'Collect transaction hashes and target address records.',
          'Prepare formal incident narrative for law enforcement.'
        ],
        potentialSubpoenaTargets: ['Exchange Endpoints', 'Hosting Providers'],
        disclaimerAdvisory: 'Forensic evaluation performed under POPIA compliance standards.'
      };
    }

    return res.json(parsedResult);
  } catch (err: any) {
    console.error('Gemini Case Evaluation Error:', err);
    return res.status(500).json({
      error: 'Failed to generate AI case evaluation',
      details: err.message || 'Internal Server Error'
    });
  }
});

// Setup Vite or Static File Serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Troy Tech Forensics Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
