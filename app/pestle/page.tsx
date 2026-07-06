import React from 'react'

const factors = [
  {
    letter: 'P',
    label: 'Political',
    bg: 'bg-ink',
    border: 'border-gold/20',
    textHead: 'text-cream',
    textSub: 'text-gold/50',
    arrowColor: 'text-gold',
    letterColor: 'text-gold/8',
    implicationBg: 'bg-gold/10 border-gold/20',
    implicationText: 'text-gold/60',
    labelBadge: 'bg-gold/20 text-gold',
    points: [
      'Singapore government actively supports heritage businesses — the National Heritage Board\'s Singapore Heritage Business Registry lists STH as a living heritage enterprise',
      'Rising global awareness of cultural appropriation creates regulatory sensitivity around the marketing of sacred objects to non-devotee international markets',
      'China\'s government restrictions on mysticism businesses limit direct China-market entry, but drive suppressed diaspora demand among overseas Chinese in Singapore and Southeast Asia',
      'Singapore\'s bilateral free trade agreements (US FTA, EUSFTA) facilitate international e-commerce shipping and reduce customs friction for artisan goods',
    ],
    implication: 'Political tailwinds are strong domestically. STH should position all international marketing around cultural education and artisan heritage — not religious retail — to navigate cultural appropriation sensitivities.',
  },
  {
    letter: 'E',
    label: 'Economic',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    textHead: 'text-ink',
    textSub: 'text-sth-grey',
    arrowColor: 'text-gold',
    letterColor: 'text-amber-200',
    implicationBg: 'bg-amber-100 border-amber-200',
    implicationText: 'text-amber-800',
    labelBadge: 'bg-gold text-ink',
    points: [
      'Singapore Heritage Tourism Market valued at SGD $0.4 billion in 2024, projected $0.6 billion by 2033 at 4.62% CAGR (Deep Market Insights, 2026)',
      'Asia Pacific handicrafts market growing at 9.9% CAGR, reaching USD $492 billion by 2033 — STH\'s core product category in the world\'s fastest-growing region (IMARC Group, 2024)',
      'E-commerce distribution channel growing at 18.5% CAGR — the fastest-growing channel for handicrafts globally, removing geography as a barrier',
      'Premium pricing already validated — SGD $1,800+ per commission statue accepted without resistance by the existing STH customer base',
      'Post-COVID recovery of cultural tourism is driving renewed interest in heritage maker experiences and authentic craft consumption',
    ],
    implication: 'The economic environment is unambiguously favourable. STH is in the right product category, in the right geography, at the right moment in the tourism recovery cycle. The risk is inaction, not premature expansion.',
  },
  {
    letter: 'S',
    label: 'Social',
    bg: 'bg-cream',
    border: 'border-parchment',
    textHead: 'text-ink',
    textSub: 'text-sth-grey',
    arrowColor: 'text-sth-red',
    letterColor: 'text-sth-grey/15',
    implicationBg: 'bg-parchment border-parchment',
    implicationText: 'text-sth-grey',
    labelBadge: 'bg-ink text-cream',
    points: [
      'China\'s youth driving a mainstream mysticism economy revival — Cece astrology app exceeded 100M downloads, backed by Tencent; crystal healing market valued at USD $1.5B globally (Hawkins, 2025)',
      'Singapore Gen Z consumers increasingly interested in cultural heritage experiences that go beyond food tourism — seeking craft narrative and material culture',
      'Growing awareness of cultural appropriation is simultaneously a risk and a differentiator — STH\'s authentic 184-year heritage is the very thing that separates it from appropriative competitors',
      'Ageing Singapore population creates a structural, growing demand driver for custodianship: more elderly devotees downsizing, more families facing statue disposal decisions',
      'Indonesian-Singaporean diaspora maintains strong cross-border devotional practices, creating a natural commission and e-commerce customer base within the Riau-JB-Singapore corridor',
    ],
    implication: 'Social forces are converging in STH\'s favour from multiple directions simultaneously — ageing devotees generating custodianship demand while younger mysticism consumers generate e-commerce demand. These are structurally different customers requiring different channels.',
  },
  {
    letter: 'T',
    label: 'Technological',
    bg: 'bg-teal-950',
    border: 'border-teal-700/30',
    textHead: 'text-teal-50',
    textSub: 'text-teal-300/60',
    arrowColor: 'text-teal-400',
    letterColor: 'text-teal-400/8',
    implicationBg: 'bg-teal-900/50 border-teal-700/30',
    implicationText: 'text-teal-300/70',
    labelBadge: 'bg-teal-500 text-white',
    points: [
      'E-commerce platforms (Shopify, custom Next.js storefront) make international sales operationally simple for a small family business with no in-house tech team',
      'Klook and Airbnb Experiences provide fully built distribution channels for cultural tours with zero upfront cost and built-in trust infrastructure',
      'FedEx and UPS specialist fragile-art and fine-art shipping divisions make previously impossible international logistics viable for small consignments',
      'QR codes on provenance cards link physical statues to digital mythology storytelling — extending the brand narrative past the point of sale',
      'Instagram Reels and TikTok allow craft content to reach global audiences organically: the carving process, the deity stories, the handover ceremonies are inherently compelling visual content',
    ],
    implication: 'Technology removes virtually every traditional barrier facing STH\'s expansion: distribution, logistics, storytelling, and reach. The implementation cost is low. The enabling opportunity is high. This is a technology tailwind, not a headwind.',
  },
  {
    letter: 'L',
    label: 'Legal',
    bg: 'bg-sth-red',
    border: 'border-cream/10',
    textHead: 'text-cream',
    textSub: 'text-cream/60',
    arrowColor: 'text-cream/60',
    letterColor: 'text-cream/8',
    implicationBg: 'bg-cream/10 border-cream/20',
    implicationText: 'text-cream/60',
    labelBadge: 'bg-cream text-sth-red',
    points: [
      'Religious and cultural objects may face import restrictions or heightened customs scrutiny in certain destination countries — particularly in North America and the EU — requiring careful item classification documentation',
      'Custodianship agreements require formal legal contracts precisely defining ownership rights, liability for damage, storage obligations, and conditions for return or transfer of statues',
      'Intellectual property considerations around STH\'s 6th-generation craftsmen\'s proprietary techniques and iconographic designs, particularly as the Heritage Collection scales',
      'Singapore\'s Consumer Protection (Fair Trading) Act and Unfair Contract Terms Act govern service agreements including custodianship contracts — must be reviewed by a family law solicitor',
    ],
    implication: 'Legal is the primary risk area requiring active management. Custodianship contracts must be professionally drafted before Phase 1 launch. International shipping documentation must be templated per destination country. Both are manageable with appropriate professional advice.',
  },
  {
    letter: 'E',
    label: 'Environmental',
    bg: 'bg-emerald-950',
    border: 'border-emerald-700/30',
    textHead: 'text-emerald-50',
    textSub: 'text-emerald-300/60',
    arrowColor: 'text-emerald-400',
    letterColor: 'text-emerald-400/8',
    implicationBg: 'bg-emerald-900/50 border-emerald-700/30',
    implicationText: 'text-emerald-300/70',
    labelBadge: 'bg-emerald-500 text-white',
    points: [
      'Camphor wood statues require climate-controlled storage with humidity and temperature management — a non-negotiable infrastructure requirement for the Custodianship Preserve and Legacy tiers',
      'Sustainable and minimal-waste packaging materials align with growing international consumer preference for eco-conscious purchasing, particularly among European collectors',
      'STH\'s timber sourcing practices are increasingly relevant to environmentally conscious international buyers who will ask about sustainable forestry certification',
      'Carbon footprint of air freight shipping is a genuine concern for overseas buyers, particularly in the EU and UK markets where carbon consciousness is highest — offset programmes worth considering',
    ],
    implication: 'Environmental factors are manageable operational requirements rather than strategic threats. Climate-controlled storage is essential infrastructure that must be budgeted in Phase 2. Eco-conscious packaging differentiates STH positively for international collectors.',
  },
]

export default function PestlePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[18rem] text-gold leading-none">析</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Macro-Environment Analysis</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            PESTLE<br />
            <span className="text-gold italic">Analysis</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            A structured examination of the Political, Economic, Social, Technological, Legal, and
            Environmental factors shaping STH&apos;s operating environment — and the strategic implications
            for our intrapreneurship proposal.
          </p>
        </div>
      </section>

      {/* Summary callout */}
      <section className="bg-parchment py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border border-gold/30 p-8 bg-cream relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold" />
            <div className="pl-4">
              <div className="text-gold font-inter text-[10px] tracking-widest uppercase mb-4">Overall PESTLE Summary</div>
              <p className="font-inter text-sm text-ink leading-relaxed">
                The macro environment is <strong>broadly favourable</strong> for STH&apos;s expansion.{' '}
                <span className="text-ink font-medium">Political</span> support from the National Heritage Board,{' '}
                <span className="text-amber-700 font-medium">Economic</span> growth across heritage tourism and handicrafts,{' '}
                <span className="text-sth-grey font-medium">Social</span> demand from both Singapore&apos;s ageing devotee base and the global mysticism economy,
                and <span style={{ color: '#0D9488' }} className="font-medium">Technological</span> enablers
                that remove traditional barriers for small family businesses.
                The primary risks are{' '}
                <span className="text-sth-red font-medium">Legal</span> (custodianship contracts, international shipping classifications) and{' '}
                <span className="text-emerald-700 font-medium">Environmental</span> (climate-controlled storage infrastructure for wooden statues) —
                both of which are <em>manageable</em> with targeted investment and professional advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PESTLE cards */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {factors.map((factor) => (
              <div
                key={factor.label}
                className={`${factor.bg} border ${factor.border} relative overflow-hidden`}
              >
                {/* Large letter watermark */}
                <div className={`absolute top-0 right-0 font-playfair text-[14rem] leading-none select-none pointer-events-none ${factor.letterColor} translate-x-8 -translate-y-4`}>
                  {factor.letter}
                </div>

                <div className="relative z-10 p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`font-playfair text-5xl font-bold ${factor.textHead} opacity-30`}>{factor.letter}</div>
                    <div>
                      <span className={`inline-block font-inter text-[9px] tracking-widest uppercase px-3 py-1 mb-1 ${factor.labelBadge}`}>
                        {factor.label}
                      </span>
                    </div>
                  </div>

                  <div className={`h-px mb-6 opacity-20 ${factor.textHead === 'text-cream' || factor.textHead === 'text-teal-50' || factor.textHead === 'text-emerald-50' ? 'bg-white' : 'bg-ink'}`} />

                  {/* Points */}
                  <ul className="space-y-4 mb-8">
                    {factor.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`${factor.arrowColor} shrink-0 mt-0.5 text-sm`}>→</span>
                        <span className={`font-inter text-xs leading-relaxed ${factor.textSub}`}>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Implication */}
                  <div className={`border p-5 ${factor.implicationBg}`}>
                    <div className={`font-inter text-[9px] tracking-widest uppercase mb-2 ${factor.implicationText} opacity-70`}>
                      What this means for our proposal
                    </div>
                    <p className={`font-inter text-xs leading-relaxed ${factor.implicationText}`}>
                      {factor.implication}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-playfair text-5xl text-gold/10 mb-6">PESTLE</div>
          <blockquote className="font-playfair text-2xl italic text-cream leading-relaxed mb-6">
            &ldquo;The window to modernise without losing authenticity is narrow — and closing.
            The macro environment will not stay this favourable indefinitely.&rdquo;
          </blockquote>
          <div className="text-gold/30 font-inter text-xs tracking-widest uppercase">
            STH Intrapreneurship Analysis · 2026
          </div>
        </div>
      </section>
    </div>
  )
}
