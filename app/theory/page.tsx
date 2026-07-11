import React from 'react'

const theories = [
  {
    author: 'Sarasvathy',
    year: '2001',
    name: 'Effectuation',
    principle: 'Start with available means, not predefined goals. The future is not predicted — it is constructed from what already exists.',
    symbol: '手',
    symbolMeaning: 'The hand — what you hold, not what you chase',
    bg: 'bg-teal-950',
    border: 'border-teal-700/30',
    textHead: 'text-teal-50',
    textSub: 'text-teal-300/60',
    badge: 'bg-teal-500 text-white',
    accentBg: 'bg-teal-900/50 border-teal-700/30',
    accentText: 'text-teal-300',
    letterColor: 'text-teal-400/8',
    bulletColor: 'text-teal-400',
    points: [
      '"Bird in Hand": STH\'s existing means — 184-year heritage brand, 35 Neil Road physical space, proven Klook/Airbnb tour infrastructure, community trust, sixth-generation craft expertise — are the starting points of both pillars',
      'Custodianship leverages existing storage space and existing community relationships. Heritage Collection leverages existing craft skills. Tours leverage existing Klook listings. Zero new capabilities required to begin.',
      'The phased rollout embodies Sarasvathy\'s "affordable loss" principle: each phase commits only what STH can afford to lose if the experiment fails, not what it hopes to gain.',
    ],
    quote: '"If I can control the future, I do not need to predict it."',
    quoteSource: 'Sarasvathy (2001)',
  },
  {
    author: 'Burns',
    year: '2018',
    name: 'Entrepreneurial Architecture',
    principle: 'Sustainable corporate entrepreneurship requires alignment of leadership, culture, structure, and strategy — changed incrementally rather than disrupted simultaneously.',
    symbol: '柱',
    symbolMeaning: 'The pillar — four aligned, nothing falls',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    textHead: 'text-ink',
    textSub: 'text-sth-grey',
    badge: 'bg-gold text-ink',
    accentBg: 'bg-amber-100 border-amber-200',
    accentText: 'text-amber-800',
    letterColor: 'text-amber-200',
    bulletColor: 'text-gold',
    points: [
      'Leadership: The 6th-generation artisan master serves as both craftsman and cultural custodian — the proposal never asks him to become a businessman, only to permit structured innovation around his core craft',
      'Culture: The heritage-first, no-rush craft ethos is explicitly preserved and becomes the proposition\'s selling point rather than a constraint to overcome',
      'Structure: The 3-phase 12-month implementation roadmap provides the incremental scaffolding Burns prescribes — each phase validated before the next committed',
    ],
    quote: '"Corporate entrepreneurs work within existing systems to create new value — they do not replace the system."',
    quoteSource: 'Burns (2018), New Venture Creation',
  },
  {
    author: 'Christensen',
    year: '1997',
    name: "Innovator's Dilemma — Avoided",
    principle: "Companies fail when new innovations cannibalise existing profitable products. STH's dual-tier model is explicitly designed to avoid this trap.",
    symbol: '盾',
    symbolMeaning: 'The shield — protecting what matters while advancing',
    bg: 'bg-sth-red',
    border: 'border-cream/10',
    textHead: 'text-cream',
    textSub: 'text-cream/60',
    badge: 'bg-cream text-sth-red',
    accentBg: 'bg-cream/10 border-cream/20',
    accentText: 'text-cream/70',
    letterColor: 'text-cream/8',
    bulletColor: 'text-cream/60',
    points: [
      'The Heritage Collection targets an entirely new customer segment — international collectors, non-religious buyers, cultural tourists — who have no existing relationship with STH\'s artisan commission model and are not being diverted from it',
      'The Artisan Commission model is explicitly ring-fenced and protected: it is presented as the premium tier, not replaced by the accessible tier. The miniatures exist to introduce, not to substitute.',
      'Tour participants who buy a $380 Heritage Collection miniature were never going to commission a $1,800 custom statue. The two products address different purchase occasions, different budgets, and different motivations entirely.',
    ],
    quote: '"Disruptive technologies bring to a market a very different value proposition than had been available previously."',
    quoteSource: 'Christensen (1997), The Innovator\'s Dilemma',
  },
  {
    author: 'Pinchot',
    year: '1985',
    name: 'Intrapreneurship',
    principle: '"Dreamers who do" — individuals who act entrepreneurially within an established organisation, using existing corporate resources rather than building from scratch.',
    symbol: '內',
    symbolMeaning: 'Within — the intrapreneurial position',
    bg: 'bg-ink',
    border: 'border-gold/20',
    textHead: 'text-cream',
    textSub: 'text-gold/50',
    badge: 'bg-gold/20 text-gold border border-gold/40',
    accentBg: 'bg-gold/5 border-gold/20',
    accentText: 'text-gold/60',
    letterColor: 'text-gold/5',
    bulletColor: 'text-gold',
    points: [
      'This group operates as intrapreneurs within STH — not as external consultants proposing a strategy for someone else to execute, and not as founders building a new company, but as innovators who will work inside STH\'s existing structure',
      'The intrapreneurial mandate leverages STH\'s brand, physical space, community relationships, and 184-year reputation — none of which would be available to an external startup attempting to enter the same market',
      'Key distinction: we are not proposing that STH hire entrepreneurs. We are proposing that STH\'s next generation — already inside the institution — acts with entrepreneurial intentionality from within.',
    ],
    quote: '"Intrapreneurs are the dreamers who do. Those who take hands-on responsibility for creating innovation of any kind within an organisation."',
    quoteSource: 'Pinchot (1985), Intrapreneuring',
  },
]

const connections = [
  {
    from: 'Sarasvathy',
    to: 'Burns',
    link: 'Effectuation\'s "affordable loss" directly maps to Burns\' phased incremental change — both reject big-bang transformation in favour of iterative commitment.',
  },
  {
    from: 'Burns',
    to: 'Christensen',
    link: 'Burns\' cultural preservation requirement is what enables the Christensen trap to be avoided — because STH\'s culture is never sacrificed, the commission model is never threatened.',
  },
  {
    from: 'Christensen',
    to: 'Pinchot',
    link: 'The dual-tier solution that avoids Christensen\'s dilemma is only possible because intrapreneurs inside STH can see both customer segments simultaneously — external consultants would see only one.',
  },
  {
    from: 'Pinchot',
    to: 'Sarasvathy',
    link: 'Intrapreneurship is effectuation in institutional form: the intrapreneur\'s "available means" are the organisation\'s existing assets — brand, space, trust — not capital raised from scratch.',
  },
]

export default function TheoryPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[18rem] text-gold leading-none">論</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Academic Grounding</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            Theoretical<br />
            <span className="text-gold italic">Framework</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            Four interlocking theories from entrepreneurship and innovation literature underpin
            every strategic decision in this proposal. Together they answer: why this approach,
            why this sequence, and why it works for a family heritage business specifically.
          </p>
        </div>
      </section>

      {/* Theory cards — 2×2 grid */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {theories.map(t => (
              <div
                key={t.author}
                className={`${t.bg} border ${t.border} relative overflow-hidden`}
              >
                {/* Symbol watermark */}
                <div className={`absolute top-0 right-0 font-playfair text-[12rem] leading-none select-none pointer-events-none translate-x-8 -translate-y-4 ${t.letterColor}`}>
                  {t.symbol}
                </div>

                <div className="relative z-10 p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className={`inline-block font-inter text-[9px] tracking-widest uppercase px-3 py-1 mb-3 ${t.badge}`}>
                        {t.author} ({t.year})
                      </span>
                      <h2 className={`font-playfair text-2xl lg:text-3xl ${t.textHead}`}>{t.name}</h2>
                    </div>
                  </div>

                  {/* Symbol meaning */}
                  <div className={`font-inter text-[9px] tracking-widest uppercase mb-5 ${t.textSub} opacity-70`}>
                    {t.symbol} — {t.symbolMeaning}
                  </div>

                  {/* Core principle */}
                  <p className={`font-inter text-sm leading-relaxed mb-6 ${t.textSub}`}>
                    {t.principle}
                  </p>

                  <div className={`h-px mb-6 opacity-20 ${t.textHead === 'text-cream' ? 'bg-white' : 'bg-ink'}`} />

                  {/* Application points */}
                  <div className="mb-6">
                    <div className={`font-inter text-[9px] tracking-widest uppercase mb-4 ${t.textSub} opacity-70`}>How It Applies to STH</div>
                    <ul className="space-y-3">
                      {t.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`${t.bulletColor} shrink-0 mt-0.5 text-sm`}>→</span>
                          <span className={`font-inter text-xs leading-relaxed ${t.textSub}`}>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className={`border p-5 ${t.accentBg}`}>
                    <blockquote className={`font-playfair text-base italic leading-relaxed mb-2 ${t.accentText}`}>
                      {t.quote}
                    </blockquote>
                    <cite className={`font-inter text-[9px] tracking-widest uppercase not-italic ${t.accentText} opacity-60`}>
                      {t.quoteSource}
                    </cite>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synthesis — how they connect */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Theoretical Synthesis</div>
            <h2 className="font-playfair text-4xl text-cream">How the Theories Connect</h2>
            <div className="gold-rule w-24 mx-auto mt-6" />
            <p className="text-gold/40 font-inter text-sm mt-6 max-w-xl mx-auto leading-relaxed">
              These four theories are not independently applied — they interlock.
              Each theory answers a question that the next theory raises.
            </p>
          </div>

          <div className="space-y-4">
            {connections.map((c, i) => (
              <div key={i} className="flex gap-6 items-start border border-gold/20 p-6 hover:border-gold/40 transition-colors">
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <div className="font-playfair text-gold text-sm font-bold">{c.from}</div>
                  <div className="w-px h-5 bg-gold/30" />
                  <div className="font-playfair text-gold/50 text-sm">↓</div>
                  <div className="w-px h-5 bg-gold/30" />
                  <div className="font-playfair text-gold text-sm font-bold">{c.to}</div>
                </div>
                <div className="border-l border-gold/20 pl-6">
                  <p className="font-inter text-sm text-gold/50 leading-relaxed">{c.link}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Final synthesis statement */}
          <div className="mt-12 border border-gold/30 p-8 bg-gold/5 text-center">
            <div className="font-playfair text-xl text-cream leading-relaxed mb-4">
              Sarasvathy defines the <em className="text-gold">starting point</em>.
              Burns defines the <em className="text-gold">path</em>.
              Christensen defines the <em className="text-gold">trap to avoid</em>.
              Pinchot defines the <em className="text-gold">actor</em>.
            </div>
            <div className="gold-rule w-16 mx-auto mb-4" />
            <div className="text-gold/40 font-inter text-xs tracking-widest uppercase">
              Together: a complete intrapreneurial theory of change for Say Tian Hng
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
