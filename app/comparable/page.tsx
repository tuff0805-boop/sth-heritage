import React from 'react'

const milestones = [
  { year: '1885', event: 'Founded by Yong Koon in Kuala Lumpur. One craftsman, one product: hand-beaten pewter.' },
  { year: '1972', event: 'Only 2% of revenue from international sales. Predominantly a domestic Malaysian brand.' },
  { year: '1980s', event: 'Begins strategic international brand building. Heritage storytelling positioned as the core differentiator.' },
  { year: '1990s', event: 'Dual-tier product strategy formalised: bespoke commissions for collectors alongside accessible souvenir pieces for mass retail.' },
  { year: '2002', event: '55% of revenue from international sales across 25 countries. Domestic to global in three decades.' },
  { year: '2005', event: '12 million+ pieces exported annually. 250 craftspeople employed. Family ownership retained throughout.' },
  { year: '2017', event: 'Partnership with Victoria & Albert Museum, London, for the Streamline Collection. Institutional credibility secured.' },
  { year: 'Present', event: '40+ stores across London, Melbourne, Tokyo, Singapore. Southeast Asian craft with global collector base.' },
]

const parallels = [
  {
    dimension: 'Heritage Age',
    rs: '139 years (founded 1885)',
    sth: '184 years (founded 1841)',
    advantage: 'sth',
    note: 'STH\'s deeper heritage moat provides a stronger premium positioning foundation',
  },
  {
    dimension: 'Family Ownership',
    rs: 'Yong family — multi-generational',
    sth: '6th-generation artisan family',
    advantage: 'equal',
    note: 'Both leverage family lineage as an authentic brand differentiator',
  },
  {
    dimension: 'Product Nature',
    rs: 'Decorative pewterware — no religious dimension',
    sth: 'Sacred statues — profound spiritual significance',
    advantage: 'sth',
    note: 'STH\'s religious dimension adds emotional depth and devotee loyalty unavailable to purely decorative brands',
  },
  {
    dimension: 'Domestic Market',
    rs: 'Small (Malaysia, ~32M population)',
    sth: 'Small (Singapore, ~5.9M population)',
    advantage: 'equal',
    note: 'Both require international expansion as growth imperative — domestic ceiling is a structural reality',
  },
  {
    dimension: 'Craft Authenticity',
    rs: 'Hand-finished pewter work by trained artisans',
    sth: 'Hand-carved and painted by 6th-generation master',
    advantage: 'equal',
    note: 'Both cannot mass-produce without losing core value — artisan scarcity is feature, not bug',
  },
  {
    dimension: 'Dual-Tier Strategy',
    rs: 'Bespoke commissions + accessible souvenir line',
    sth: 'Artisan Commissions + Heritage Collection miniatures',
    advantage: 'equal',
    note: 'Royal Selangor proves the dual-tier approach does not dilute premium positioning',
  },
]

const lessons = [
  {
    n: '01',
    title: 'The dual-tier model works',
    body: 'Royal Selangor\'s accessible souvenir line did not cannibalise or devalue its bespoke commission work — it expanded the market. Buyers of a $15 keychain became buyers of a $500 vase over time. STH\'s Heritage Collection miniatures will function identically: accessible entry, premium aspiration.',
  },
  {
    n: '02',
    title: 'Heritage storytelling is the moat',
    body: 'Royal Selangor does not compete on price or production efficiency — no competitor in that space can win that game. It competes on 139 years of uninterrupted craft legacy. STH\'s 184-year lineage is an even deeper moat. The Victoria & Albert Museum partnership was earned, not bought — it was the natural consequence of consistent heritage positioning.',
  },
  {
    n: '03',
    title: 'Logistics partnerships enable scale without owned infrastructure',
    body: 'Royal Selangor did not build its own international distribution warehouses. It partnered with established logistics and retail networks. STH\'s FedEx/UPS fine-art logistics partnership mirrors this approach exactly — enabling global reach without capital expenditure on infrastructure.',
  },
  {
    n: '04',
    title: 'Family ownership is an asset to communicate, not hide',
    body: 'The Yong family\'s continuity is central to Royal Selangor\'s brand narrative — not incidental to it. Chen Tien Yue speaks publicly about his great-grandfather\'s workshop. STH\'s sixth-generation master craftsman is not a limitation — he is the brand.',
  },
  {
    n: '05',
    title: 'Cultural identity travels',
    body: 'Southeast Asian craft has demonstrated proven global collector demand. Royal Selangor sells in London\'s Victoria & Albert Museum gift shop. The market for authentic Asian heritage objects is not a niche — it is a growing global category with documented consumer appetite.',
  },
]

export default function ComparablePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-parchment py-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[16rem] text-ink leading-none">錫</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-gold font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Comparable Case Study</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-ink mb-6">
            Royal Selangor<br />
            <span className="text-sth-red italic">The Blueprint</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-sth-grey font-inter text-sm leading-relaxed max-w-2xl">
            Founded 1885 in Kuala Lumpur. 139 years of uninterrupted family-owned craft heritage.
            From 2% international revenue to 55% in three decades — without sacrificing artisanal identity.
            The closest analogue in the world to what STH is proposing.
          </p>
        </div>
      </section>

      {/* Key stats band */}
      <section className="bg-ink py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: '139', label: 'Years of heritage', sub: 'Founded 1885' },
            { stat: '55%', label: 'International revenue', sub: 'Up from 2% in 1972' },
            { stat: '12M+', label: 'Pieces exported', sub: 'Annually by 2005' },
            { stat: '40+', label: 'Stores worldwide', sub: 'London · Tokyo · Melbourne' },
          ].map(item => (
            <div key={item.label} className="text-center border border-gold/20 p-6">
              <div className="font-playfair text-3xl text-gold mb-1">{item.stat}</div>
              <div className="font-inter text-xs text-cream uppercase tracking-widest mb-1">{item.label}</div>
              <div className="font-inter text-[10px] text-gold/40">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-gold font-playfair text-5xl mb-4 opacity-20">&ldquo;</div>
          <blockquote className="font-playfair text-2xl lg:text-3xl italic text-ink leading-relaxed mb-6">
            We like the heritage we have. We like the fact that today we are still designing
            and making things in pewter like our great-grandfather was doing over 120 years ago.
          </blockquote>
          <div className="gold-rule w-16 mx-auto mb-4" />
          <cite className="font-inter text-xs text-sth-grey tracking-widest uppercase not-italic">
            Chen Tien Yue · Executive Director, Royal Selangor Marketing
          </cite>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-3">Growth Journey</div>
            <h2 className="font-playfair text-4xl text-ink">139 Years of Heritage Globalisation</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-parchment via-gold/40 to-parchment hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 sm:gap-0 items-start">
                  {/* Year */}
                  <div className="w-[72px] shrink-0 text-right pr-6 hidden sm:block">
                    <span className="font-playfair text-gold text-sm">{m.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="hidden sm:flex items-center justify-center w-5 h-5 rounded-full border-2 border-gold bg-background shrink-0 mt-0.5 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 sm:pl-6 pb-2">
                    <div className="sm:hidden font-playfair text-gold text-sm mb-1">{m.year}</div>
                    <p className="font-inter text-sm text-sth-grey leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parallel comparison */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-3">Side by Side</div>
            <h2 className="font-playfair text-4xl text-cream">Royal Selangor vs. STH</h2>
            <div className="gold-rule w-24 mx-auto mt-6" />
          </div>

          {/* Table header */}
          <div className="grid grid-cols-4 gap-0 border border-gold/20 mb-0">
            <div className="p-4 border-r border-gold/20 bg-gold/5">
              <div className="font-inter text-[9px] tracking-widest uppercase text-gold/40">Dimension</div>
            </div>
            <div className="p-4 border-r border-gold/20 bg-gold/5">
              <div className="font-inter text-[9px] tracking-widest uppercase text-gold/40">Royal Selangor</div>
            </div>
            <div className="p-4 border-r border-gold/20 bg-gold/5">
              <div className="font-inter text-[9px] tracking-widest uppercase text-gold/40">Say Tian Hng</div>
            </div>
            <div className="p-4 bg-gold/5">
              <div className="font-inter text-[9px] tracking-widest uppercase text-gold/40">STH Edge</div>
            </div>
          </div>
          {parallels.map((p, i) => (
            <div key={i} className="grid grid-cols-4 gap-0 border-x border-b border-gold/20">
              <div className="p-4 border-r border-gold/20">
                <div className="font-inter text-xs font-medium text-cream">{p.dimension}</div>
              </div>
              <div className="p-4 border-r border-gold/20">
                <div className="font-inter text-xs text-gold/50">{p.rs}</div>
              </div>
              <div className="p-4 border-r border-gold/20">
                <div className={`font-inter text-xs ${p.advantage === 'sth' ? 'text-gold font-medium' : 'text-gold/50'}`}>{p.sth}</div>
              </div>
              <div className="p-4">
                {p.advantage === 'sth' ? (
                  <span className="font-inter text-[9px] text-gold tracking-widest uppercase">STH ✓</span>
                ) : (
                  <span className="font-inter text-[9px] text-gold/30 tracking-widest uppercase">Equal</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lessons for STH */}
      <section className="bg-parchment py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold font-inter text-[10px] tracking-[0.3em] uppercase mb-3">What STH Takes From This</div>
            <h2 className="font-playfair text-4xl text-ink">Five Lessons</h2>
            <div className="gold-rule w-24 mx-auto mt-6" />
          </div>
          <div className="space-y-5">
            {lessons.map(l => (
              <div key={l.n} className="bg-cream border border-parchment p-8 flex gap-8 items-start">
                <div className="font-playfair text-5xl text-gold/20 shrink-0 leading-none">{l.n}</div>
                <div>
                  <h3 className="font-playfair text-xl text-ink mb-3">{l.title}</h3>
                  <p className="font-inter text-sm text-sth-grey leading-relaxed">{l.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Star clientele / V&A */}
      <section className="bg-ink py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-8">Notable Validation</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Victoria & Albert Museum', detail: 'London · Streamline Collection partnership 2017' },
              { name: 'Bill Clinton, Mel Gibson, Martha Stewart', detail: 'High-profile international clientele' },
              { name: '25 Countries', detail: 'International distribution by 2002 — 30 years post-domestication' },
            ].map(item => (
              <div key={item.name} className="border border-gold/20 p-6">
                <div className="font-playfair text-lg text-gold mb-2">{item.name}</div>
                <div className="font-inter text-xs text-gold/40">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
