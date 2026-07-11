import React from 'react'

type Likelihood = 'Low' | 'Medium' | 'High'
type Impact = 'Medium' | 'High' | 'Very High'

interface Risk {
  id: number
  name: string
  likelihood: Likelihood
  impact: Impact
  mitigation: string
  // 0–1 coordinates for the quadrant: x = likelihood, y = impact
  qx: number
  qy: number
}

const risks: Risk[] = [
  {
    id: 1,
    name: 'Cultural Appropriation',
    likelihood: 'Medium',
    impact: 'High',
    mitigation: 'All international marketing frames statues as sacred art with educational context. Provenance cards include cultural significance notes. Opt-in framing — never "exotic decor". Cultural advisory framework governs all copy.',
    qx: 0.5,
    qy: 0.72,
  },
  {
    id: 2,
    name: 'Heritage Collection Production Bottleneck',
    likelihood: 'High',
    impact: 'High',
    mitigation: 'CNC-roughing model — basic forms 3D-roughed to establish proportions, then hand-finished and painted by the artisan and trained apprentices. Preserves authenticity while enabling scale. Mirrors luxury watchmaking: CNC component roughing before hand-finishing. Formal 3-month apprenticeship programme formalised in Phase 2.',
    qx: 0.82,
    qy: 0.72,
  },
  {
    id: 3,
    name: 'Tour-to-Conversion Gap',
    likelihood: 'High',
    impact: 'Medium',
    mitigation: 'Post-tour email nurture sequence. Heritage Collection miniatures at SGD $280 offered at tour end as accessible entry point. Custodianship soft-sell woven into tour narrative at the statue disposal pain point moment. Exclusive post-tour shop hours for tour participants.',
    qx: 0.82,
    qy: 0.42,
  },
  {
    id: 4,
    name: 'Neil Road Storage Capacity',
    likelihood: 'Medium',
    impact: 'Medium',
    mitigation: 'Phase 1 capped at 20 statues using existing back-of-shop space. Phase 3 overflow managed via Crown Fine Art Singapore — ISO-certified, climate-controlled fine art storage with 24/7 CCTV monitoring and customised racking systems. Preserve Tier statues displayed in-shop, reducing active storage load.',
    qx: 0.5,
    qy: 0.42,
  },
  {
    id: 5,
    name: 'Knowledge Transfer & Succession',
    likelihood: 'Medium',
    impact: 'Very High',
    mitigation: 'Formal 3-month apprenticeship documentation programme established in Phase 1. Video archive of all carving techniques. Digital Mythology Encyclopedia preserves craft knowledge permanently for future generations. This is STH\'s most existential risk — addressed before commercial scaling begins.',
    qx: 0.5,
    qy: 0.95,
  },
  {
    id: 6,
    name: 'Financial Liability (Damaged Statues)',
    likelihood: 'Low',
    impact: 'Very High',
    mitigation: 'Chubb Fine Art Insurance Singapore (60+ years fine art coverage experience) engaged for the custodianship programme. Liability limitation waiver signed by all clients at intake. Full condition report and photographic record conducted at intake for every statue accepted.',
    qx: 0.18,
    qy: 0.95,
  },
]

const likelihoodColors: Record<Likelihood, string> = {
  Low: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  Medium: 'bg-amber-100 text-amber-800 border border-amber-200',
  High: 'bg-red-100 text-red-800 border border-red-200',
}

const impactColors: Record<Impact, string> = {
  Medium: 'bg-amber-50 text-amber-700 border border-amber-200',
  High: 'bg-red-100 text-red-700 border border-red-200',
  'Very High': 'bg-red-900/10 text-red-900 border border-red-900/30',
}

const quadrantDotColor: Record<string, string> = {
  'Low-Very High': '#8B1A1A',
  'Medium-Very High': '#8B1A1A',
  'High-High': '#B8860B',
  'Medium-High': '#B8860B',
  'High-Medium': '#D4A843',
  'Medium-Medium': '#6B6355',
}

export default function RisksPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[18rem] text-gold leading-none">危</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Risk Management</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-4">
            Six Risks.<br />
            <span className="text-gold italic">Six Solutions.</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            Every intrapreneurial proposal carries risk. The measure of a credible proposal is not
            the absence of risk — it is the specificity and realism of the mitigations. Each risk
            below is paired with a concrete, actionable, budgeted response.
          </p>
        </div>
      </section>

      {/* Risk Quadrant */}
      <section className="bg-parchment py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-sth-grey font-inter text-[10px] tracking-[0.3em] uppercase mb-3">Visual Risk Map</div>
            <h2 className="font-playfair text-3xl text-ink">Likelihood × Impact Matrix</h2>
          </div>

          <div className="bg-cream border border-parchment p-6 lg:p-10">
            <div className="relative" style={{ paddingBottom: '66%' }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                {/* Background quadrants */}
                <rect x="0" y="0" width="300" height="200" fill="#F7F3EC" />
                <rect x="300" y="0" width="300" height="200" fill="#FEF3C7" opacity="0.6" />
                <rect x="0" y="200" width="300" height="200" fill="#FEF3C7" opacity="0.4" />
                <rect x="300" y="200" width="300" height="200" fill="#FEE2E2" opacity="0.5" />

                {/* Grid lines */}
                <line x1="300" y1="0" x2="300" y2="400" stroke="#EDE6D6" strokeWidth="1.5" />
                <line x1="0" y1="200" x2="600" y2="200" stroke="#EDE6D6" strokeWidth="1.5" />

                {/* Axis labels */}
                <text x="150" y="390" textAnchor="middle" fontSize="11" fill="#6B6355" fontFamily="Inter, sans-serif" letterSpacing="2">LOW ← LIKELIHOOD → HIGH</text>
                <text x="12" y="210" textAnchor="middle" fontSize="11" fill="#6B6355" fontFamily="Inter, sans-serif" letterSpacing="1" transform="rotate(-90, 12, 200)">LOW ↑ IMPACT ↑ HIGH</text>

                {/* Quadrant labels */}
                <text x="150" y="24" textAnchor="middle" fontSize="9" fill="#6B6355" fontFamily="Inter, sans-serif" letterSpacing="1.5" opacity="0.6">MONITOR</text>
                <text x="450" y="24" textAnchor="middle" fontSize="9" fill="#B8860B" fontFamily="Inter, sans-serif" letterSpacing="1.5" opacity="0.8">MITIGATE</text>
                <text x="150" y="215" textAnchor="middle" fontSize="9" fill="#6B6355" fontFamily="Inter, sans-serif" letterSpacing="1.5" opacity="0.6">ACCEPT</text>
                <text x="450" y="215" textAnchor="middle" fontSize="9" fill="#8B1A1A" fontFamily="Inter, sans-serif" letterSpacing="1.5" opacity="0.8">PRIORITISE</text>

                {/* Risk dots */}
                {risks.map(risk => {
                  const cx = 30 + risk.qx * 540
                  const cy = 370 - risk.qy * 340
                  const key = `${risk.likelihood}-${risk.impact}`
                  const fill = quadrantDotColor[key] || '#6B6355'
                  return (
                    <g key={risk.id}>
                      <circle cx={cx} cy={cy} r="18" fill={fill} opacity="0.15" />
                      <circle cx={cx} cy={cy} r="10" fill={fill} opacity="0.85" />
                      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="9" fill="white" fontFamily="Inter, sans-serif" fontWeight="bold">
                        {risk.id}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {risks.map(risk => (
                <div key={risk.id} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-ink flex items-center justify-center shrink-0">
                    <span className="text-cream font-inter text-[9px] font-bold">{risk.id}</span>
                  </div>
                  <span className="font-inter text-[10px] text-sth-grey leading-tight">{risk.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk cards */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {risks.map((risk, idx) => (
            <div
              key={risk.id}
              className={`border relative overflow-hidden ${
                idx % 2 === 0 ? 'bg-ink border-gold/20' : 'bg-cream border-parchment'
              }`}
            >
              {/* Risk number watermark */}
              <div className={`absolute top-0 right-0 font-playfair text-[9rem] leading-none select-none pointer-events-none translate-x-4 -translate-y-2 ${
                idx % 2 === 0 ? 'text-gold/5' : 'text-ink/5'
              }`}>
                {String(risk.id).padStart(2, '0')}
              </div>

              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className={`font-inter text-[9px] tracking-[0.25em] uppercase mb-2 ${idx % 2 === 0 ? 'text-gold/40' : 'text-sth-grey/60'}`}>
                      Risk {String(risk.id).padStart(2, '0')}
                    </div>
                    <h2 className={`font-playfair text-2xl lg:text-3xl ${idx % 2 === 0 ? 'text-cream' : 'text-ink'}`}>
                      {risk.name}
                    </h2>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <div>
                      <div className={`font-inter text-[8px] tracking-widest uppercase mb-1 ${idx % 2 === 0 ? 'text-gold/30' : 'text-sth-grey/50'}`}>Likelihood</div>
                      <span className={`font-inter text-[10px] tracking-widest uppercase px-3 py-1.5 ${likelihoodColors[risk.likelihood]}`}>
                        {risk.likelihood}
                      </span>
                    </div>
                    <div>
                      <div className={`font-inter text-[8px] tracking-widest uppercase mb-1 ${idx % 2 === 0 ? 'text-gold/30' : 'text-sth-grey/50'}`}>Impact</div>
                      <span className={`font-inter text-[10px] tracking-widest uppercase px-3 py-1.5 ${impactColors[risk.impact]}`}>
                        {risk.impact}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`h-px mb-6 ${idx % 2 === 0 ? 'bg-gold/10' : 'bg-parchment'}`} />

                <div className={`border-l-4 pl-6 ${idx % 2 === 0 ? 'border-gold' : 'border-sth-red'}`}>
                  <div className={`font-inter text-[9px] tracking-widest uppercase mb-3 ${idx % 2 === 0 ? 'text-gold/50' : 'text-sth-red/70'}`}>
                    Mitigation Strategy
                  </div>
                  <p className={`font-inter text-sm leading-relaxed ${idx % 2 === 0 ? 'text-gold/60' : 'text-sth-grey'}`}>
                    {risk.mitigation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing callout */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border border-gold/30 p-10 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-gold/20 font-playfair text-2xl">✦</div>
            <div className="absolute top-4 right-4 text-gold/20 font-playfair text-2xl">✦</div>
            <div className="absolute bottom-4 left-4 text-gold/20 font-playfair text-2xl">✦</div>
            <div className="absolute bottom-4 right-4 text-gold/20 font-playfair text-2xl">✦</div>
            <blockquote className="font-playfair text-xl lg:text-2xl italic text-cream leading-relaxed">
              &ldquo;Risk mitigation is not an afterthought — it is how intrapreneurs earn the trust
              to innovate within institutions that cannot afford to fail.&rdquo;
            </blockquote>
            <div className="gold-rule w-16 mx-auto mt-8" />
            <div className="text-gold/30 font-inter text-[10px] tracking-widest uppercase mt-4">
              STH Heritage Collective · Intrapreneurship Proposal 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
