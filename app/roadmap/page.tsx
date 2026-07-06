import React from 'react'

const phases = [
  {
    number: '01',
    name: 'Foundation',
    timeline: 'Months 1 – 3',
    resource: 'Low',
    resourceDetail: 'Existing space + staff time',
    bg: 'bg-parchment',
    textPrimary: 'text-ink',
    textSecondary: 'text-sth-grey',
    textAccent: 'text-sth-red',
    border: 'border-parchment',
    badgeBg: 'bg-ink text-cream',
    numberColor: 'text-ink/10',
    resourceColor: 'bg-cream border-parchment text-sth-grey',
    arrowColor: 'text-gold',
    actions: [
      'Formalise custodianship legal framework and storage agreements with family law firm',
      'Launch Care Tier custodianship with pilot cohort of 10–20 families via temple community outreach',
      'Set up FedEx / UPS fragile-art shipping account and test packaging with dummy cargo',
      'Photograph and list first 5 Heritage Collection miniatures on the STH website with provenance copy',
      'Train all staff on the custodianship intake ceremony process — ritual, documentation, family reception',
    ],
  },
  {
    number: '02',
    name: 'Growth',
    timeline: 'Months 4 – 6',
    resource: 'Medium',
    resourceDetail: 'Storage infrastructure + packaging materials',
    bg: 'bg-ink',
    textPrimary: 'text-cream',
    textSecondary: 'text-gold/50',
    textAccent: 'text-gold',
    border: 'border-gold/20',
    badgeBg: 'bg-gold text-ink',
    numberColor: 'text-gold/10',
    resourceColor: 'bg-gold/10 border-gold/20 text-gold/60',
    arrowColor: 'text-gold',
    actions: [
      'Launch Preserve and Legacy tiers with dedicated in-shop custodian display integration',
      'Expand Heritage Collection to 15 SKUs across three deity categories (Guan Yu, Guan Yin, Tu Di Gong)',
      'Integrate Klook and Airbnb Experience tour bookings with custodianship soft-sell touchpoints',
      'Launch provenance card system with QR codes linking to digital records for all shipped pieces',
      'Fulfil first international orders with full white-glove packaging and photo delivery confirmation',
    ],
  },
  {
    number: '03',
    name: 'Scale',
    timeline: 'Months 7 – 12',
    resource: 'High',
    resourceDetail: 'Potential additional storage + marketing budget',
    bg: 'bg-sth-red',
    textPrimary: 'text-cream',
    textSecondary: 'text-cream/60',
    textAccent: 'text-cream',
    border: 'border-cream/10',
    badgeBg: 'bg-cream text-sth-red',
    numberColor: 'text-cream/10',
    resourceColor: 'bg-cream/10 border-cream/20 text-cream/60',
    arrowColor: 'text-cream/60',
    actions: [
      'Target 50+ statues under custodianship generating meaningful recurring monthly revenue',
      'Launch Collector Guardian Sets into international mysticism economy markets via e-commerce',
      'Partner with Singapore Tourism Board for heritage trail inclusion and certified experience listing',
      'Explore pop-up exhibition at Chinatown Heritage Centre to raise STH\'s institutional profile',
      'Review and publish antique valuation milestones for oldest custodian statues entering 80-year bracket',
    ],
  },
]

const resourceColors: Record<string, string> = {
  Low: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  Medium: 'text-amber-700 bg-amber-50 border-amber-200',
  High: 'text-rose-700 bg-rose-50 border-rose-200',
}

export default function RoadmapPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[18rem] text-gold leading-none">路</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Implementation Plan</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            12-Month<br />
            <span className="text-gold italic">Roadmap</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            A phased, de-risked path from today&apos;s commission-only model to a dual-pillar heritage
            business — executed incrementally so that every step can be validated before the next
            commitment is made. Inspired by Burns (2018) entrepreneurial architecture.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-parchment via-gold/40 to-sth-red/60 hidden md:block" />

            <div className="space-y-6">
              {phases.map((phase, idx) => (
                <div key={phase.number} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-10 w-6 h-6 rounded-full border-2 border-gold bg-background hidden md:flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>

                  <div className={`md:ml-20 ${phase.bg} border ${phase.border} relative overflow-hidden`}>
                    {/* Phase number watermark */}
                    <div className={`absolute top-0 right-0 font-playfair text-[10rem] leading-none select-none pointer-events-none ${phase.numberColor} translate-x-6 -translate-y-4`}>
                      {phase.number}
                    </div>

                    <div className="relative z-10 p-8 lg:p-12">
                      <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                        <div>
                          <div className={`inline-block font-inter text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 mb-4 ${phase.badgeBg}`}>
                            Phase {phase.number}
                          </div>
                          <h2 className={`font-playfair text-4xl ${phase.textPrimary} mb-1`}>{phase.name}</h2>
                          <div className={`font-inter text-sm ${phase.textSecondary}`}>{phase.timeline}</div>
                        </div>
                        <div className={`border px-5 py-3 ${phase.resourceColor} text-right`}>
                          <div className="font-inter text-[9px] tracking-widest uppercase mb-1 opacity-60">Resource Requirement</div>
                          <div className="font-playfair text-lg">{phase.resource}</div>
                          <div className="font-inter text-[10px] mt-0.5 opacity-70">{phase.resourceDetail}</div>
                        </div>
                      </div>

                      <div className={`h-px mb-8 ${idx === 0 ? 'bg-parchment' : idx === 1 ? 'bg-gold/20' : 'bg-cream/20'}`} />

                      <ul className="space-y-4">
                        {phase.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className={`${phase.arrowColor} font-inter text-sm mt-0.5 shrink-0`}>→</span>
                            <span className={`font-inter text-sm leading-relaxed ${phase.textSecondary}`}>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource summary strip */}
      <section className="bg-cream border-y border-parchment py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-6 text-center">Resource Summary</div>
          <div className="grid grid-cols-3 gap-6">
            {phases.map(phase => (
              <div key={phase.number} className="text-center">
                <div className="font-playfair text-sm text-sth-grey mb-1">Phase {phase.number} · {phase.timeline}</div>
                <div className={`inline-block font-inter text-xs px-4 py-1.5 border rounded-full ${resourceColors[phase.resource]}`}>
                  {phase.resource} — {phase.resourceDetail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters callout */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border border-gold/30 p-12 relative overflow-hidden">
            {/* Ornament */}
            <div className="absolute top-6 left-6 text-gold/20 font-playfair text-3xl">✦</div>
            <div className="absolute top-6 right-6 text-gold/20 font-playfair text-3xl">✦</div>
            <div className="absolute bottom-6 left-6 text-gold/20 font-playfair text-3xl">✦</div>
            <div className="absolute bottom-6 right-6 text-gold/20 font-playfair text-3xl">✦</div>

            <div className="text-center mb-10">
              <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Why This Matters</div>
              <h2 className="font-playfair text-3xl text-cream">De-Risking Innovation<br /><span className="text-gold italic">for a Family Business</span></h2>
            </div>

            <div className="gold-rule w-24 mx-auto mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { phase: '01', title: 'Validate before committing', desc: 'The pilot custodianship cohort and first e-commerce listings test market response with minimal capital — no new infrastructure until demand is proven.' },
                { phase: '02', title: 'Build on proof', desc: 'Phase 2 expansions only happen after Phase 1 data confirms product-market fit. Preserve and Legacy tiers require demonstrated Care tier success.' },
                { phase: '03', title: 'Scale what works', desc: 'Phase 3 investments in storage, marketing, and institutional partnerships are warranted only by Phase 2 growth — protecting STH from over-extension.' },
              ].map(item => (
                <div key={item.phase} className="text-center">
                  <div className="font-playfair text-5xl text-gold/20 mb-4">{item.phase}</div>
                  <div className="font-playfair text-lg text-cream mb-3">{item.title}</div>
                  <div className="font-inter text-xs text-gold/40 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-gold/20 pt-8">
              <blockquote className="font-playfair text-lg italic text-gold/70 text-center leading-relaxed">
                &ldquo;This phased approach reflects Burns (2018) entrepreneurial architecture — aligning leadership, culture,
                structure, and strategy incrementally rather than disrupting STH&apos;s core identity overnight.&rdquo;
              </blockquote>
              <div className="text-center mt-4">
                <span className="text-gold/30 font-inter text-[10px] tracking-widest uppercase">Burns, P. (2018). New Venture Creation. Palgrave Macmillan.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
