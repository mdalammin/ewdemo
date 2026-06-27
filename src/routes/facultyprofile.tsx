import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'


import face5 from "@/assets/faculty/cse_dean.jpg";

import { Player } from '@lottiefiles/react-lottie-player'

export const Route = createFileRoute('/facultyprofile')({
  component: RouteComponent,
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const citationData = [
  { year: '2018', citations: 310, papers: 4 },
  { year: '2019', citations: 520, papers: 6 },
  { year: '2020', citations: 740, papers: 8 },
  { year: '2021', citations: 980, papers: 10 },
  { year: '2022', citations: 1320, papers: 12 },
  { year: '2023', citations: 1750, papers: 14 },
  { year: '2024', citations: 2140, papers: 16 },
]

const publications = [
  {
    year: '2024',
    title: 'Toward Algorithmic Equity in Urban Infrastructure',
    venue: 'Nature Machine Intelligence',
    abstract: 'This paper investigates fairness-aware optimization frameworks for urban infrastructure planning, proposing scalable methods to reduce systemic bias in transportation, housing, and public resource allocation systems.',
    cited: 312,
    type: 'journal',
    highlight: false,
  },
  {
    year: '2024',
    title: 'Neural Dynamics of Decision Fatigue in LLMs',
    venue: 'ICML Proceedings',
    abstract: 'A controlled study revealing measurable degradation patterns in long-horizon LLM reasoning under sustained load, alongside mitigation techniques that improve consistency and reliability.',
    cited: 188,
    type: 'conference',
    highlight: false,
  },
  {
    year: '2023',
    title: 'Socio-Cognitive Feedbacks in Human-AI Teams',
    venue: 'AAAI',
    abstract: 'Examines reciprocal learning dynamics between humans and AI systems, identifying factors that influence trust, collaboration quality, and collective decision-making outcomes.',
    cited: 421,
    type: 'conference',
    highlight: false,
  },
  {
    year: '2022',
    title: 'The Sovereign Algorithm: A Governance Primer',
    venue: 'Oxford University Press',
    abstract: 'A foundational exploration of governance frameworks for algorithmic systems, covering accountability, transparency, regulatory structures, and democratic oversight.',
    cited: 612,
    type: 'book chapter',
    highlight: false,
  },
  {
    year: '2022',
    title: 'Differential Privacy in Civic Datasets',
    venue: 'Journal of the ACM',
    abstract: 'Introduces privacy-preserving methodologies for large-scale civic datasets, balancing statistical utility with rigorous protections against individual re-identification.',
    cited: 290,
    type: 'journal',
    highlight: false,
  },
  {
    year: '2023',
    title: 'Method for Verifiable AI Audit Trails',
    venue: 'USPTO',
    abstract: 'Describes a patented framework for creating tamper-resistant audit trails that enable transparent inspection and verification of AI-driven decisions.',
    cited: 14,
    type: 'patent',
    highlight: false,
  },
];

const expertiseMap = [
  { label: 'Algorithmic Ethics', pct: 96 },
  { label: 'Machine Learning', pct: 88 },
  { label: 'Policy Translation', pct: 92 },
  { label: 'Cognitive Science', pct: 78 },
  { label: 'Statistical Modeling', pct: 84 },
]

const pubFilters = ['ALL', 'JOURNAL', 'CONFERENCE', 'BOOK CHAPTER', 'PATENT']

const courses = {
  'Current Courses': [
    { code: 'CE 401', level: 'Undergraduate', title: 'Foundations of Computational Ethics', semester: 'Fall 2025' },
    { code: 'CE 612', level: 'Graduate', title: 'Governance of Autonomous Systems', semester: 'Spring 2026' },
    { code: 'CE 701', level: 'Doctoral', title: 'Doctoral Seminar in Algorithmic Fairness', semester: 'Year-round' },
  ],
  'Past Courses': [
    { code: 'CE 301', level: 'Undergraduate', title: 'Introduction to AI Ethics', semester: 'Spring 2024' },
    { code: 'CE 510', level: 'Graduate', title: 'Fairness in Machine Learning', semester: 'Fall 2023' },
    { code: 'CE 680', level: 'Graduate', title: 'Digital Rights & Policy', semester: 'Spring 2023' },
  ],
  'Materials': [
    { code: 'SLIDES', level: 'PDF', title: 'CE 401 Lecture Slides — Spring 2025', semester: 'Download' },
    { code: 'SYLLABUS', level: 'PDF', title: 'CE 612 Course Syllabus', semester: 'Download' },
    { code: 'READING', level: 'List', title: 'Doctoral Seminar Reading List 2024', semester: 'Download' },
  ],
  'Resources': [
    { code: 'GUIDE', level: 'Doc', title: 'PhD Application Guide — HCS Lab', semester: 'View' },
    { code: 'TOOL', level: 'Web', title: 'Algorithmic Fairness Toolkit', semester: 'Open' },
  ],
}

const doctoralStudents = [
  { initials: 'AP', name: 'Anya Petrova', topic: 'Causal fairness in healthcare ML', degree: 'PHD', year: '2024' },
  { initials: 'MC', name: 'Marcus Chen', topic: 'Auditable RLHF pipelines', degree: 'PHD', year: '2024' },
  { initials: 'LO', name: 'Lina Okonkwo', topic: 'Civic data sovereignty in West Africa', degree: 'PHD', year: '2023' },
]

const awards = [
  { year: '2024', title: 'ACM Distinguished Researcher Award', org: 'Association for Computing Machinery' },
  { year: '2023', title: 'Royal Society Wolfson Fellowship', org: 'The Royal Society' },
  { year: '2022', title: 'National Medal for Public Interest Technology', org: 'U.S. National Academy' },
  { year: '2021', title: 'MIT Technology Review TR35 Recognition', org: 'MIT' },
  { year: '2019', title: 'Best Paper Award', org: 'AAAI Conference' },
]

const journeySteps = [
  { step: '01', title: 'B.A. in Philosophy & Mathematics', org: 'University of Oxford', years: '2001' },
  { step: '02', title: 'M.Sc. in Cognitive Science', org: 'University of Edinburgh', years: '2003' },
  { step: '03', title: 'Ph.D. in Computer Science', org: 'MIT', years: '2007' },
  { step: '04', title: 'Postdoctoral Fellow', org: 'Max Planck Institute', years: '2007 – 2009' },
  { step: '05', title: 'Assistant Professor', org: 'Stanford University', years: '2009 – 2013' },
  { step: '06', title: 'Associate Professor', org: 'East West University', years: '2013 – 2018' },
]

const mediaItems = [
  { type: 'INTERVIEW', title: 'What we get wrong about machine ethics', source: 'The New Yorker', year: '2024', dark: false, tall: false },
  { type: 'KEYNOTE', title: 'Keynote: Architectures of Trust', source: 'World Economic Forum, Davos', year: '2024', dark: false, tall: true },
  { type: 'LECTURE', title: 'On Algorithmic Sovereignty', source: 'BBC Reith Lectures', year: '2023', dark: false, tall: false },
  { type: 'PODCAST', title: 'The case for slow AI', source: 'Nature Podcast', year: '2023', dark: true, tall: false },
  { type: 'TESTIMONY', title: 'Testimony before EU AI Act Committee', source: 'European Parliament', year: '2022', dark: false, tall: true },
  { type: 'WEBINAR', title: 'Webinar: Ethics in production ML', source: 'ACM TechTalks', year: '2023', dark: false, tall: false },
]

const collaborators = [
  { name: 'MIT CSAIL', location: 'Cambridge, MA', type: 'UNIVERSITY' },
  { name: 'Future of Humanity Institute', location: 'Oxford, UK', type: 'LAB' },
  { name: 'Max Planck Institute', location: 'Berlin, DE', type: 'UNIVERSITY' },
  { name: 'RIKEN AIP', location: 'Tokyo, JP', type: 'LAB' },
  { name: 'USP DataLab', location: 'São Paulo, BR', type: 'UNIVERSITY' },
  { name: 'Strathmore CIPIT', location: 'Nairobi, KE', type: 'LAB' },
  { name: 'Gradient Institute', location: 'Sydney, AU', type: 'INDUSTRY' },
  { name: 'Vector Institute', location: 'Toronto, CA', type: 'LAB' },
]

const newsItems = [
  { type: 'PUBLICATION', date: 'Jun 18, 2026', title: 'New Nature MI paper on equitable infrastructure released', featured: true },
  { type: 'GRANT', date: 'May 02, 2026', title: 'EU Digital Polis Initiative awarded €3.2M extension', featured: false },
  { type: 'ACHIEVEMENT', date: 'Mar 20, 2026', title: 'Doctoral student Anya Petrova wins ACM SIGAI dissertation award', featured: false },
  { type: 'SPEAKING', date: 'Apr 11, 2026', title: 'Keynote announced for NeurIPS 2026', featured: false },
]

// ─── Custom Tooltip ────────────────────────────────────────────────────────────

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #d2c9c2', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#2c1610', boxShadow: '0 4px 16px rgba(166,75,42,0.1)' }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>{label}</div>
        <div style={{ color: '#a64b2a' }}>citations : {payload[0]?.value}</div>
        <div style={{ color: '#9ca3af' }}>papers : {payload[1]?.value}</div>
      </div>
    )
  }
  return null
}

// ─── Bubble Map ───────────────────────────────────────────────────────────────

const bubbles = [
  { x: 32, y: 42, r: 72 }, { x: 44, y: 38, r: 8 }, { x: 47, y: 38, r: 8 },
  { x: 58, y: 32, r: 22 }, { x: 66, y: 30, r: 16 }, { x: 67, y: 53, r: 28 },
  { x: 36, y: 62, r: 38 }, { x: 52, y: 58, r: 28 }, { x: 84, y: 42, r: 14 },
  { x: 84, y: 62, r: 18 },
]

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
      <span style={{ fontSize: 11, color: '#a64b2a', fontWeight: 600, letterSpacing: '0.1em' }}>{num}</span>
      <h2 style={{ fontSize: 42, fontStyle: 'normal', fontWeight: 600, margin: 0, color: '#2c1610' }}>{title}</h2>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

function RouteComponent() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeCourseTab, setActiveCourseTab] = useState('Current Courses');
  const [hoveredPub, setHoveredPub] = useState(null);

  const filteredPubs = activeFilter === 'ALL'
    ? publications
    : publications.filter(p => p.type.toUpperCase() === activeFilter)

  const W = 1200
  const px = 48

  // hero section - helper
  const [showCvModal, setShowCvModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    marginBottom: 14,
    border: '1px solid #d2c9c2',
    borderRadius: 6,
    outline: 'none',
    fontSize: 14,
  };

  const submitBtn = {
    background: '#a64b2a',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '12px 20px',
    cursor: 'pointer',
  };

  const [cvSections, setCvSections] = useState({
    publications: true,
    grants: true,
    awards: true,
    teaching: true,
    supervision: true,
    media: true,
  });

  const toggleSection = (key) => {
    setCvSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


  // Media & Speaking - helper
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardStyle = (isHovered: boolean) => ({
    background: isHovered ? '#a64b2a' : '#fff',
    border: `1px solid ${isHovered ? '#a64b2a' : '#d2c9c2'}`,
    borderRadius: 8,
    padding: '20px 24px',
    transition: 'all .3s ease',
    cursor: 'pointer',
  });


  function LottieMap() {
    const [LottiePlayer, setLottiePlayer] = useState(null)

    useEffect(() => {
      import('@lottiefiles/react-lottie-player').then((mod) => {
        setLottiePlayer(() => mod.Player)
      })
    }, [])

    if (!LottiePlayer) return null

    return (
      <LottiePlayer
        autoplay
        loop
        src="/world-map.json"
        speed={0.3}
        style={{ width: '100%', height: '100%' }}
      />
    )
  }


  return (
    <div style={{ fontFamily: 'Poppins, system-ui, sans-serif', background: '#fffaf7', color: '#2c1610', minHeight: '100vh' }}>

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Hero
      ══════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: W, margin: '0 auto', padding: `72px ${px}px 64px`, display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Photo */}
        <div style={{ flexShrink: 0 }}>
          <img
            src={face5}
            alt="Dr. Elara Vance"
            style={{
              width: 460,
              height: 560,
              objectFit: 'cover',
              objectPosition: '15% center', // right side shift
              borderRadius: 4,
              display: 'block',
            }}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
            {['ALGORITHMIC BIAS', 'DIGITAL SOVEREIGNTY', 'HUMAN-AI AGENCY', 'DATA ETHICS'].map(tag => (
              <span key={tag} style={{ border: '1px solid #d2c9c2', borderRadius: 4, padding: '4px 10px', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', color: '#2c1610' }}>{tag}</span>
            ))}
          </div>
        </div>
        {/* Right */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, border: '1px solid #d2c9c2', borderRadius: 999, padding: '5px 14px', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#2c1610', marginBottom: 22 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#a64b2a', display: 'inline-block' }} />
            ACCEPTING PHD CANDIDATES · 2026 COHORT
          </div>
          <h1 style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.1, margin: '0 0 10px', color: '#2c1610' }}>Dr. Shariar Kabir</h1>
          <p style={{ fontSize: 26, fontStyle: 'italic', fontWeight: 400, color: '#2c1610', margin: '0 0 20px', lineHeight: 1.4 }}>
            Defining the <span style={{ color: '#a64b2a' }}>moral architecture</span> of autonomous systems.
          </p>
          <p style={{ fontSize: 14, color: '#6d5a50', margin: '0 0 28px', lineHeight: 1.6 }}>Professor of Computational Ethics at East West University. Director of the Human-Centered Systems Lab.</p>
          <hr style={{ border: 'none', borderTop: '1px solid #d2c9c2', margin: '0 0 28px' }} />
          <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
            {[{ label: 'PUBLICATIONS', value: '142' }, { label: 'CITATIONS', value: '8,240' }, { label: 'H-INDEX', value: '48' }, { label: 'GRANTS (USD)', value: '$8.4M' }].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6d5a50', fontWeight: 500, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 30, fontWeight: 700, color: '#2c1610' }}>{s.value}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{ background: '#2c1610', color: '#fffaf7', border: 'none', borderRadius: 6, padding: '12px 22px', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', cursor: 'pointer' }}>VIEW RESEARCH PROFILE ↗</button>
            {/* <button style={{ background: 'transparent', color: '#2c1610', border: '1px solid #d2c9c2', borderRadius: 6, padding: '12px 22px', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', cursor: 'pointer' }}>GENERATE CV</button>
            <button style={{ background: 'transparent', color: '#2c1610', border: '1px solid #d2c9c2', borderRadius: 6, padding: '12px 22px', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', cursor: 'pointer' }}>CONTACT</button> */}
            <button
              style={{ background: '#2c1610', color: '#fffaf7', border: 'none', borderRadius: 6, padding: '12px 22px', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', cursor: 'pointer' }}
              onClick={() => setShowCvModal(true)}
            >
              GENERATE CV
            </button>

            <button
              style={{ background: '#2c1610', color: '#fffaf7', border: 'none', borderRadius: 6, padding: '12px 22px', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', cursor: 'pointer' }}
              onClick={() => setShowContactModal(true)}
            >
              CONTACT
            </button>
          </div>
        </div>


        {showCvModal && (
          <>
            <div
              onClick={() => setShowCvModal(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,.45)',
                backdropFilter: 'blur(12px)',
                zIndex: 999,
              }}
            />

            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '95%',
                maxWidth: 1400,
                height: '90vh',
                background: '#a64b2a',
                borderRadius: 12,
                overflow: 'hidden',
                zIndex: 1000,
                boxShadow: '0 30px 80px rgba(0,0,0,.35)',
              }}
            >
              <button
                onClick={() => setShowCvModal(false)}
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,.15)',
                  background: 'transparent',
                  color: '#341715',
                  fontSize: 20,
                  cursor: 'pointer',
                  zIndex: 10,
                }}
              >
                ×
              </button>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 600px',
                  height: '100%',
                }}
              >
                {/* LEFT */}
                <div
                  className="modal-scroll"
                  style={{
                    overflowY: 'auto',
                    padding: '50px 70px',
                  }}
                >
                  <div
                    style={{
                      color: '#fff',
                      fontSize: 64,
                      fontWeight: 300,
                      lineHeight: 1.1,
                      marginBottom: 8,
                    }}
                  >
                    Generate an{' '}
                    <span
                      style={{
                        color: '#341715',
                        fontWeight: '500',
                      }}
                    >
                      authoritative
                    </span>{' '}
                    CV
                  </div>

                  <p
                    style={{
                      color: '#c7b8b1',
                      fontSize: 18,
                      maxWidth: 520,
                      lineHeight: 1.8,
                      marginBottom: 8,
                    }}
                  >
                    Select which sections to include. Your CV is
                    compiled from live profile data and exported as a
                    branded PDF.
                  </p>

                  {[
                    ['publications', 'PUBLICATIONS'],
                    ['grants', 'RESEARCH PROJECTS & GRANTS'],
                    ['awards', 'AWARDS & RECOGNITION'],
                    ['teaching', 'TEACHING HISTORY'],
                    ['supervision', 'STUDENT SUPERVISION'],
                    ['media', 'MEDIA & SPEAKING'],
                  ].map(([key, label]) => (
                    <div
                      key={key}
                      onClick={() => toggleSection(key)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                        padding: '20px 0',
                        borderBottom:
                          '1px solid rgba(255,255,255,.08)',
                        cursor: 'pointer',
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          background: cvSections[key]
                            ? '#341715'
                            : 'transparent',
                          border: '1px solid #341715',
                          color: '#fff',
                          fontSize: 11,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {cvSections[key] ? '✓' : ''}
                      </div>

                      <span
                        style={{
                          color: '#fff',
                          fontSize: 12,
                          letterSpacing: '.12em',
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}

                  <button
                    style={{
                      marginTop: 40,
                      background: '#341715',
                      border: 'none',
                      color: '#fff',
                      padding: '16px 26px',
                      borderRadius: 4,
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '.12em',
                      cursor: 'pointer',
                    }}
                  >
                    DOWNLOAD PDF
                  </button>

                  <div
                    style={{
                      marginTop: 12,
                      color: '#341715',
                      fontSize: 12,
                    }}
                  >
                    {
                      Object.values(cvSections).filter(Boolean).length
                    }{' '}
                    of 6 sections selected
                  </div>
                </div>

                {/* RIGHT CV */}
                <div
                  className="modal-scroll"
                  style={{
                    overflowY: 'auto',
                    background: '#efe9e5',
                    padding: 32,
                  }}
                >
                  <div
                    style={{
                      background: '#faf7f4',
                      minHeight: '100%',
                      padding: 36,
                      boxShadow:
                        '0 10px 40px rgba(0,0,0,.08)',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 4,
                        background: '#c33224',
                        marginBottom: 24,
                      }}
                    />

                    <h1
                      style={{
                        fontSize: 32,
                        margin: 0,
                        color: '#341715',
                      }}
                    >
                      ELARA VANCE, Ph.D.
                    </h1>

                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: '.18em',
                        color: '#8f7770',
                        marginTop: 8,
                        marginBottom: 24,
                      }}
                    >
                      CURRICULUM VITAE · LIVE PREVIEW
                    </div>

                    <hr
                      style={{
                        border: 'none',
                        borderTop:
                          '1px solid rgba(195,50,36,.15)',
                        marginBottom: 24,
                      }}
                    />

                    <h4>PROFILE</h4>

                    <p
                      style={{
                        color: '#5f4d46',
                        lineHeight: 1.7,
                      }}
                    >
                      Professor Elara Vance directs the
                      Human-Centered Systems Lab and researches the
                      governance of intelligent systems.
                    </p>

                    {cvSections.publications && (
                      <>
                        <h4>PUBLICATIONS</h4>
                        <ul>
                          <li>
                            Toward Algorithmic Equity in Urban
                            Infrastructure
                          </li>
                          <li>
                            Neural Dynamics of Decision Fatigue in
                            LLMs
                          </li>
                          <li>
                            Socio-Cognitive Feedbacks in Human-AI
                            Teams
                          </li>
                        </ul>
                      </>
                    )}

                    {cvSections.grants && (
                      <>
                        <h4>PROJECTS & GRANTS</h4>
                        <ul>
                          <li>NSF Responsible AI Initiative</li>
                          <li>UNESCO Digital Rights Program</li>
                          <li>Global Ethics Infrastructure Fund</li>
                        </ul>
                      </>
                    )}

                    {cvSections.awards && (
                      <>
                        <h4>AWARDS</h4>
                        <ul>
                          <li>ACM Distinguished Researcher Award</li>
                          <li>Royal Society Fellowship</li>
                        </ul>
                      </>
                    )}

                    {cvSections.teaching && (
                      <>
                        <h4>TEACHING</h4>
                        <ul>
                          <li>Computational Ethics</li>
                          <li>AI Governance</li>
                          <li>Human-AI Interaction</li>
                        </ul>
                      </>
                    )}

                    {cvSections.supervision && (
                      <>
                        <h4>SUPERVISION</h4>
                        <p>PhD: 22 · Masters: 38</p>
                      </>
                    )}

                    {cvSections.media && (
                      <>
                        <h4>MEDIA & SPEAKING</h4>
                        <ul>
                          <li>TED AI Summit</li>
                          <li>World Economic Forum</li>
                          <li>BBC Future Interview</li>
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}



        {showContactModal && (
          <>
            <div
              onClick={() => setShowContactModal(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,.35)',
                backdropFilter: 'blur(8px)',
                zIndex: 999,
              }}
            />

            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: 700,
                background: '#fffaf7',
                borderRadius: 12,
                zIndex: 1000,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '20px 24px',
                  borderBottom: '1px solid #d2c9c2',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <h2 style={{ margin: 0 }}>Contact</h2>

                <button
                  onClick={() => setShowContactModal(false)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: 22,
                  }}
                >
                  ×
                </button>
              </div>

              {/* Tabs */}
              <div
                style={{
                  display: 'flex',
                  borderBottom: '1px solid #d2c9c2',
                }}
              >
                <button
                  onClick={() => setActiveTab('contact')}
                  style={{
                    flex: 1,
                    padding: 16,
                    border: 'none',
                    cursor: 'pointer',
                    background:
                      activeTab === 'contact'
                        ? '#a64b2a'
                        : 'transparent',
                    color:
                      activeTab === 'contact'
                        ? '#fff'
                        : '#2c1610',
                  }}
                >
                  Contact Form
                </button>

                <button
                  onClick={() => setActiveTab('collaboration')}
                  style={{
                    flex: 1,
                    padding: 16,
                    border: 'none',
                    cursor: 'pointer',
                    background:
                      activeTab === 'collaboration'
                        ? '#a64b2a'
                        : 'transparent',
                    color:
                      activeTab === 'collaboration'
                        ? '#fff'
                        : '#2c1610',
                  }}
                >
                  Research Collaboration
                </button>
              </div>

              <div style={{ padding: 24 }}>
                {activeTab === 'contact' ? (
                  <form>
                    <input
                      placeholder="Full Name"
                      style={inputStyle}
                    />

                    <input
                      placeholder="Email"
                      style={inputStyle}
                    />

                    <textarea
                      placeholder="Message"
                      rows={5}
                      style={inputStyle}
                    />

                    <button style={submitBtn}>
                      Send Message
                    </button>
                  </form>
                ) : (
                  <form>
                    <input
                      placeholder="Institution"
                      style={inputStyle}
                    />

                    <input
                      placeholder="Research Area"
                      style={inputStyle}
                    />

                    <textarea
                      rows={5}
                      placeholder="Project Details"
                      style={inputStyle}
                    />

                    <button style={submitBtn}>
                      Submit Proposal
                    </button>
                  </form>
                )}
              </div>
            </div>
          </>
        )}



      </section>

      {/* Stats Banner */}
      <div style={{ background: '#2c1610', padding: '28px 48px', display: 'flex', justifyContent: 'center', gap: 80 }}>
        {[{ value: '142+', label: 'PUBLICATIONS' }, { value: '8,240', label: 'CITATIONS' }, { value: '22', label: 'PROJECTS' }, { value: '18', label: 'YEARS TENURE' }, { value: '35', label: 'STUDENTS MENTORED' }].map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: '#fff7f2', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 10, letterSpacing: '0.12em', color: '#d2c9c2', fontWeight: 500, marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — About
      ══════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: W, margin: '0 auto', padding: `80px ${px}px`, display: 'grid', gridTemplateColumns: '1fr 380px', gap: 80, alignItems: 'start' }}>
        <div>
          <SectionHeader num="01" title="About" />
          <blockquote style={{ fontSize: 18, fontStyle: 'italic', lineHeight: 1.75, color: '#2c1610', margin: '0 0 48px', fontWeight: 400 }}>
            "Professor Elara Vance directs the Human-Centered Systems Lab at East West University, where her research interrogates the moral architecture of autonomous systems. Over eighteen years, her work has bridged algorithmic fairness, digital sovereignty, and the governance of agentic AI — informing policy at the EU Commission and three national parliaments."
          </blockquote>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', fontWeight: 600, color: '#6d5a50', marginBottom: 16 }}>RESEARCH INTERESTS</div>
              {['Algorithmic Fairness', 'Digital Sovereignty', 'Human-AI Agency', 'Governance of Autonomous Systems', 'Cognitive Science'].map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, fontSize: 14, color: i === 4 ? '#a64b2a' : '#2c1610' }}>
                  <span style={{ color: '#a64b2a' }}>—</span>{item}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', fontWeight: 600, color: '#6d5a50', marginBottom: 16 }}>EDUCATION</div>
              {[{ deg: 'Ph.D. in Computer Science', inst: 'MIT · 2007' }, { deg: 'M.Sc. in Cognitive Science', inst: 'University of Edinburgh · 2003' }, { deg: 'B.A. in Philosophy & Mathematics', inst: 'University of Oxford · 2001' }].map(e => (
                <div key={e.deg} style={{ marginBottom: 16 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#2c1610' }}>{e.deg}</div>
                  <div style={{ fontSize: 13, color: '#a64b2a', marginTop: 2 }}>{e.inst}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.12em', fontWeight: 600, color: '#6d5a50', marginBottom: 24 }}>EXPERTISE MAP</div>
          {expertiseMap.map(e => (
            <div key={e.label} style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: '#2c1610', marginBottom: 6 }}>
                <span>{e.label}</span>
                <span style={{ color: '#6d5a50', fontWeight: 500 }}>{e.pct}%</span>
              </div>
              <div style={{ height: 3, background: '#eadbd3', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${e.pct}%`, background: '#a64b2a', borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Impact Dashboard
      ══════════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <SectionHeader num="02" title="Impact Dashboard" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24, alignItems: 'start' }}>
            <div style={{ background: '#fff', border: '1px solid #d2c9c2', borderRadius: 10, padding: '28px 32px' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', fontWeight: 600, color: '#6d5a50', marginBottom: 6 }}>CITATION VELOCITY</div>
              <div style={{ fontSize: 26, fontWeight: 700, color: '#2c1610', marginBottom: 20 }}>2018 — 2024</div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={citationData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="citGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a64b2a" stopOpacity={0.18} />
                      <stop offset="95%" stopColor="#a64b2a" stopOpacity={0.01} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f2ece8" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#6d5a50' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: '#6d5a50' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="citations" stroke="#a64b2a" strokeWidth={2} fill="url(#citGrad)" dot={{ fill: '#a64b2a', r: 3 }} activeDot={{ r: 5 }} />
                  <Area type="monotone" dataKey="papers" stroke="#d2c9c2" strokeWidth={1.5} fill="none" dot={{ fill: '#d2c9c2', r: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#fff', border: '1px solid #d2c9c2', borderRadius: 10, padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[{ label: 'TOTAL CITATIONS', value: '8,240' }, { label: 'H-INDEX', value: '48' }, { label: 'I10-INDEX', value: '112' }, { label: 'ACTIVE PROJECTS', value: '22' }].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: 9, letterSpacing: '0.1em', color: '#6d5a50', fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: '#2c1610' }}>{s.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#fff', border: '1px solid #d2c9c2', borderRadius: 10, padding: '20px 24px' }}>
                <div style={{ fontSize: 9, letterSpacing: '0.1em', fontWeight: 600, color: '#6d5a50', marginBottom: 16 }}>EXTERNAL PROFILES</div>
                {['Google Scholar', 'ORCID', 'Scopus', 'ResearchGate'].map(p => (
                  <div key={p} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f2ece8', fontSize: 14, color: '#2c1610', cursor: 'pointer' }}>
                    {p}<span style={{ fontSize: 12, color: '#6d5a50' }}>↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Featured Publications
      ══════════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 11, color: '#a64b2a', fontWeight: 600, letterSpacing: '0.1em' }}>03</span>
              <h2 style={{ fontSize: 42, fontStyle: 'normal', fontWeight: 600, margin: 0, color: '#2c1610' }}>Featured Publications</h2>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {pubFilters.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} style={{ padding: '7px 14px', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', borderRadius: 4, border: '1px solid', cursor: 'pointer', background: activeFilter === f ? '#2c1610' : 'transparent', borderColor: activeFilter === f ? '#2c1610' : '#d2c9c2', color: activeFilter === f ? '#fffaf7' : '#2c1610' }}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          {filteredPubs.map((pub, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredPub(i)}
              onMouseLeave={() => setHoveredPub(null)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 32,
                padding: '24px 0',
                borderBottom: '1px solid #f2ece8',
                transition: 'all .3s ease',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: hoveredPub === i ? '#a64b2a' : '#6d5a50',
                  fontWeight: 500,
                  width: 36,
                  flexShrink: 0,
                  paddingTop: 2,
                }}
              >
                {pub.year}
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color:
                      hoveredPub === i
                        ? '#a64b2a'
                        : pub.highlight
                          ? '#a64b2a'
                          : '#2c1610',
                    marginBottom: 4,
                    transition: 'color .3s ease',
                  }}
                >
                  {pub.title}
                </div>

                {pub.venue && (
                  <div
                    style={{
                      fontSize: 13,
                      fontStyle: 'italic',
                      color: '#6d5a50',
                      marginBottom: 8,
                    }}
                  >
                    {pub.venue}
                  </div>
                )}

                {hoveredPub === i && (
                  <div
                    style={{
                      fontSize: 13,
                      color: '#6d5a50',
                      lineHeight: 1.7,
                      maxWidth: 700,
                      animation: 'fadeIn .3s ease',
                    }}
                  >
                    {pub.abstract}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.1em',
                      color: '#6d5a50',
                      fontWeight: 600,
                      marginBottom: 2,
                    }}
                  >
                    CITED
                  </div>

                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: hoveredPub === i ? '#a64b2a' : '#2c1610',
                      transition: 'color .3s ease',
                    }}
                  >
                    {pub.cited}
                  </div>
                </div>

                <button
                  style={{
                    width: 32,
                    height: 32,
                    border: '1px solid #d2c9c2',
                    borderRadius: 4,
                    background: hoveredPub === i ? '#a64b2a' : 'transparent',
                    color: hoveredPub === i ? '#fff' : '#2c1610',
                    cursor: 'pointer',
                    transition: 'all .3s ease',
                  }}
                >
                  ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Teaching
      ══════════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <SectionHeader num="05" title="Teaching" />
          {/* Tabs */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #d2c9c2', marginBottom: 32 }}>
            {Object.keys(courses).map(tab => (
              <button key={tab} onClick={() => setActiveCourseTab(tab)} style={{ padding: '10px 20px', fontSize: 14, fontWeight: activeCourseTab === tab ? 600 : 400, color: activeCourseTab === tab ? '#2c1610' : '#6d5a50', background: 'transparent', border: 'none', borderBottom: activeCourseTab === tab ? '2px solid #a64b2a' : '2px solid transparent', cursor: 'pointer', marginBottom: -1 }}>
                {tab}
              </button>
            ))}
          </div>
          {/* Course cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {(courses[activeCourseTab as keyof typeof courses] || []).map((course, i) => (
              <div key={i} style={{ border: '1px solid #d2c9c2', borderRadius: 8, padding: '20px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#a64b2a', letterSpacing: '0.06em' }}>{course.code}</span>
                  <span style={{ fontSize: 11, border: '1px solid #d2c9c2', borderRadius: 999, padding: '2px 10px', color: '#6d5a50' }}>{course.level}</span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#2c1610', lineHeight: 1.4, marginBottom: 16 }}>{course.title}</div>
                <hr style={{ border: 'none', borderTop: '1px solid #f2ece8', margin: '0 0 12px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#6d5a50' }}>{course.semester}</span>
                  <span style={{ fontSize: 14, color: '#2c1610' }}>↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Student Supervision
      ══════════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <SectionHeader num="06" title="Student Supervision" />
          <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 32, alignItems: 'start' }}>
            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, border: '1px solid #d2c9c2', borderRadius: 8, overflow: 'hidden' }}>
              {[{ icon: '🎓', value: '22', label: 'PHD COMPLETED' }, { icon: '🎓', value: '38', label: 'MASTERS COMPLETED' }, { icon: '👤', value: '64', label: 'UNDERGRAD PROJECTS' }, { icon: '⚙️', value: '8', label: 'CURRENTLY ADVISING' }].map((s, i) => (
                <div key={s.label} style={{ background: '#fff', padding: '24px 20px', borderRight: i % 2 === 0 ? '1px solid #f2ece8' : 'none', borderBottom: i < 2 ? '1px solid #f2ece8' : 'none' }}>
                  <div style={{ fontSize: 18, marginBottom: 8 }}><span style={{ color: '#a64b2a' }}>{s.icon}</span></div>
                  <div style={{ fontSize: 32, fontWeight: 700, color: '#2c1610', marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6d5a50', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
            {/* Featured doctoral research */}
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', fontWeight: 600, color: '#6d5a50', marginBottom: 16 }}>FEATURED DOCTORAL RESEARCH</div>
              <div style={{ border: '1px solid #d2c9c2', borderRadius: 8, overflow: 'hidden' }}>
                {doctoralStudents.map((s, i) => (
                  <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', borderBottom: i < doctoralStudents.length - 1 ? '1px solid #f2ece8' : 'none', background: '#fff' }}>
                    <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#eadbd3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#a64b2a', flexShrink: 0 }}>{s.initials}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#2c1610' }}>{s.name}</div>
                      <div style={{ fontSize: 13, color: '#6d5a50', marginTop: 2 }}>{s.topic}</div>
                    </div>
                    <div style={{ fontSize: 12, color: '#6d5a50', textAlign: 'right', flexShrink: 0 }}>
                      <span style={{ letterSpacing: '0.06em' }}>{s.degree}</span> · {s.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Awards & Recognition
      ══════════════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <SectionHeader num="07" title="Awards & Recognition" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid #d2c9c2', borderRadius: 8, overflow: 'hidden' }}>
            {awards.map((a, i) => {
              const isLast = i === awards.length - 1
              const isLastRow = i >= 3
              const isLastCol = (i + 1) % 3 === 0
              // empty filler for last row
              const cells = [...awards]
              while (cells.length % 3 !== 0) cells.push(null as any)
              return null
            })}
            {(() => {
              const cells: (typeof awards[0] | null)[] = [...awards]
              while (cells.length % 3 !== 0) cells.push(null)
              return cells.map((a, i) => {
                const col = i % 3
                const row = Math.floor(i / 3)
                const totalRows = Math.ceil(cells.length / 3)
                return (
                  <div key={i} style={{ padding: '28px 24px', background: a === null ? '#eadbd3' : '#fff', borderRight: col < 2 ? '1px solid #d2c9c2' : 'none', borderBottom: row < totalRows - 1 ? '1px solid #d2c9c2' : 'none' }}>
                    {a && (
                      <>
                        <div style={{ fontSize: 18, color: '#a64b2a', marginBottom: 16 }}>🏅</div>
                        <div style={{ fontSize: 11, color: '#6d5a50', letterSpacing: '0.06em', marginBottom: 8 }}>{a.year}</div>
                        <div style={{ fontSize: 16, fontWeight: 600, color: '#2c1610', lineHeight: 1.4, marginBottom: 8 }}>{a.title}</div>
                        <div style={{ fontSize: 13, color: '#6d5a50' }}>{a.org}</div>
                      </>
                    )}
                  </div>
                )
              })
            })()}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Academic Journey (dark bg)
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#2c1610', padding: '72px 0' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 52 }}>
            <span style={{ fontSize: 11, color: '#a64b2a', fontWeight: 600, letterSpacing: '0.1em' }}>08</span>
            <h2 style={{ fontSize: 42, fontStyle: 'normal', fontWeight: 600, margin: 0, color: '#fff7f2' }}>Academic Journey</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0 }}>
            {journeySteps.map((s, i) => (
              <div key={s.step} style={{ borderRight: i < journeySteps.length - 1 ? '1px solid rgba(210,201,194,0.2)' : 'none', paddingRight: 24, paddingLeft: i > 0 ? 24 : 0 }}>
                {/* <div style={{ fontSize: 10, letterSpacing: '0.12em', color: 'rgba(210,201,194,0.6)', fontWeight: 600, marginBottom: 16 }}>STEP {s.step}</div> */}
                <div style={{ fontSize: 15, fontWeight: 600, color: '#fff7f2', lineHeight: 1.4, marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(210,201,194,0.7)', marginBottom: 8 }}>{s.org}</div>
                <div style={{ fontSize: 12, color: '#a64b2a', fontWeight: 600 }}>{s.years}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Media & Speaking
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <SectionHeader num="09" title="Media & Speaking" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {/* Col 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[mediaItems[0], mediaItems[3], mediaItems[5]].map((m, i) => {
                const key = `left-${i}`;
                const isHovered = hoveredCard === key;

                return (
                  <div
                    key={m.title}
                    onMouseEnter={() => setHoveredCard(key)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      ...cardStyle(isHovered),
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: 140,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          marginBottom: 12,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            color: isHovered ? '#fff' : '#a64b2a',
                          }}
                        >
                          ▷
                        </span>

                        <span
                          style={{
                            fontSize: 10,
                            letterSpacing: '0.1em',
                            fontWeight: 600,
                            color: isHovered ? '#fff' : '#6d5a50',
                          }}
                        >
                          {m.type}
                        </span>
                      </div>

                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: isHovered ? '#fff' : '#2c1610',
                          lineHeight: 1.4,
                        }}
                      >
                        {m.title}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginTop: 16,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: isHovered ? '#fff' : '#2c1610',
                          }}
                        >
                          {m.source}
                        </div>

                        <div
                          style={{
                            fontSize: 12,
                            color: isHovered ? 'rgba(255,255,255,.75)' : '#6d5a50',
                          }}
                        >
                          {m.year}
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: 16,
                          color: isHovered ? '#fff' : '#6d5a50',
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'all .3s ease',
                        }}
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Col 2 — tall keynote card */}
            <div style={{ border: '1px solid #d2c9c2', borderRadius: 8, padding: '20px 24px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: '#a64b2a' }}>▷</span>
                  <span style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 600, color: '#6d5a50' }}>KEYNOTE</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#2c1610', lineHeight: 1.4 }}>Keynote: Architectures of Trust</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 16 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#2c1610' }}>World Economic Forum, Davos</div>
                  <div style={{ fontSize: 12, color: '#6d5a50' }}>2024</div>
                </div>
                <span style={{ fontSize: 16, color: '#6d5a50' }}>↗</span>
              </div>
            </div>
            {/* Col 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[mediaItems[2], mediaItems[4]].map((m, i) => {
                const key = `right-${i}`;
                const isHovered = hoveredCard === key;

                return (
                  <div
                    key={m.title}
                    onMouseEnter={() => setHoveredCard(key)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      background: isHovered ? '#a64b2a' : '#fff',
                      border: `1px solid ${isHovered ? '#a64b2a' : '#d2c9c2'}`,
                      borderRadius: 8,
                      padding: '20px 24px',
                      flex: 1,
                      minHeight: 140,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all .3s ease',
                      cursor: 'pointer',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          marginBottom: 12,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            color: isHovered ? '#fff' : '#a64b2a',
                          }}
                        >
                          ▷
                        </span>

                        <span
                          style={{
                            fontSize: 10,
                            letterSpacing: '0.1em',
                            fontWeight: 600,
                            color: isHovered ? '#fff' : '#6d5a50',
                          }}
                        >
                          {m.type}
                        </span>
                      </div>

                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: isHovered ? '#fff' : '#2c1610',
                          lineHeight: 1.4,
                        }}
                      >
                        {m.title}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginTop: 16,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: isHovered ? '#fff' : '#2c1610',
                          }}
                        >
                          {m.source}
                        </div>

                        <div
                          style={{
                            fontSize: 12,
                            color: isHovered ? 'rgba(255,255,255,.75)' : '#6d5a50',
                          }}
                        >
                          {m.year}
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: 16,
                          color: isHovered ? '#fff' : '#6d5a50',
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'all .3s ease',
                        }}
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
    SECTION 10 — Collaboration Network
══════════════════════════════════════════════════════ */}
      <section style={{ padding: '0 0 80px' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <SectionHeader num="10" title="Collaboration Network" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>

            {/* Lottie World Map */}
            <div style={{ border: '1px solid #d2c9c2', borderRadius: 8, background: '#fff', overflow: 'hidden', height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LottieMap />
            </div>

            {/* Partner list */}
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 600, color: '#6d5a50', marginBottom: 16 }}>
                8 ACTIVE PARTNER INSTITUTIONS
              </div>
              {collaborators.map((c, i) => (
                <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < collaborators.length - 1 ? '1px solid #f2ece8' : 'none' }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#2c1610' }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: '#6d5a50', marginTop: 2 }}>{c.location}</div>
                  </div>
                  <span style={{ fontSize: 10, letterSpacing: '0.08em', color: '#6d5a50', fontWeight: 600 }}>{c.type}</span>
                </div>
              ))}
              <button style={{ marginTop: 24, background: '#a64b2a', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 20px', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                START A COLLABORATION ↗
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 11 — Latest News
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '0 0 100px' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <SectionHeader num="11" title="Latest News" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #d2c9c2', borderRadius: 8, overflow: 'hidden' }}>
            {/* Featured left (tall) */}
            <div style={{ gridRow: '1 / 3', background: '#fff', borderRight: '1px solid #d2c9c2', padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 600, color: '#a64b2a' }}>PUBLICATION</span>
                  <span style={{ fontSize: 12, color: '#6d5a50' }}>Jun 18, 2026</span>
                </div>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#2c1610', lineHeight: 1.3 }}>New Nature MI paper on equitable infrastructure released</div>
              </div>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#a64b2a', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
                READ MORE ↗
              </button>
            </div>
            {/* Right top */}
            <div style={{ background: '#fff', borderBottom: '1px solid #d2c9c2', padding: '24px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 600, color: '#a64b2a' }}>GRANT</span>
                <span style={{ fontSize: 12, color: '#6d5a50' }}>May 02, 2026</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#2c1610', lineHeight: 1.4 }}>EU Digital Polis Initiative awarded €3.2M extension</div>
            </div>
            {/* Right middle */}
            <div style={{ background: '#fff', borderBottom: '1px solid #d2c9c2', padding: '24px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 600, color: '#a64b2a' }}>SPEAKING</span>
                <span style={{ fontSize: 12, color: '#6d5a50' }}>Apr 11, 2026</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#2c1610', lineHeight: 1.4 }}>Keynote announced for NeurIPS 2026</div>
            </div>
            {/* Bottom left */}
            <div style={{ background: '#fff', borderRight: '1px solid #d2c9c2', borderTop: '1px solid #d2c9c2', padding: '24px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 600, color: '#a64b2a' }}>ACHIEVEMENT</span>
                <span style={{ fontSize: 12, color: '#6d5a50' }}>Mar 20, 2026</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#2c1610', lineHeight: 1.4 }}>Doctoral student Anya Petrova wins ACM SIGAI dissertation award</div>
            </div>
            {/* Bottom right — accent filler */}
            <div style={{ background: '#eadbd3', borderTop: '1px solid #d2c9c2' }} />
          </div>
        </div>
      </section>


    </div>
  )
}