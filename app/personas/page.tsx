import React from 'react'

const personas = [
  {
    name: 'Mr Tan Ah Kow',
    age: 68,
    occupation: 'Retired',
    initials: 'TA',
    avatarBg: 'bg-amber-100 text-amber-800',
    segment: 'Home Devotee',
    segmentColor: 'bg-gold text-ink',
    dark: true,
    background: 'Third-generation Singapore Chinese who has maintained a home altar for over four decades. Inherited three family statues — including a 55-year-old Guan Yin — from his late parents. Regular temple-goer, part of the Waterloo Street community that has known STH for generations.',
    painPoint: 'Downsizing from a 5-room HDB flat to a 3-room unit. Cannot accommodate all three statues in the new space. Deeply reluctant to incinerate them — the Guan Yin especially carries strong family memory and spiritual meaning. Feels guilt, grief, and confusion about the right path forward.',
    pillar: 'Custodianship — Preserve Tier',
    pillarNote: 'Monthly welfare reports and conservation care give Mr Tan peace of mind while his family situation stabilises.',
    quote: 'I cannot throw my mother\'s Guan Yin away. But I have no space. I need to know she is somewhere safe and respected.',
    reach: 'Temple community networks, word of mouth, Chinese-language newspaper advertisements, community centre bulletin boards',
  },
  {
    name: 'Sarah Chen',
    age: 29,
    occupation: 'UX Designer',
    initials: 'SC',
    avatarBg: 'bg-rose-100 text-rose-800',
    segment: 'Gen Z Heritage Explorer',
    segmentColor: 'bg-ink text-gold border border-gold',
    dark: false,
    background: 'Singapore-born Chinese professional. Not religiously observant but deeply curious about Chinese mythology, heritage craft, and the cultural stories behind objects. Regularly books Klook and Airbnb Experiences to explore Singapore beyond the tourist trail. Follows heritage and craft accounts on Instagram.',
    painPoint: 'Wants meaningful cultural engagement that goes beyond food tours and museum visits. Finds most heritage experiences passive — she wants to learn a story, understand a craft, and bring something home that carries real meaning. Unfamiliar with where to start with Chinese deities.',
    pillar: 'Cultural Tours → Heritage Collection',
    pillarNote: 'The tour provides the mythology story that transforms a miniature from a souvenir into a conversation piece.',
    quote: 'I loved the tour. I had no idea these deities had such incredible stories. I bought a Nezha miniature for my desk — it\'s art, not religion.',
    reach: 'Klook, Airbnb Experiences, Instagram Reels, TikTok, heritage Singapore content communities',
  },
  {
    name: 'Marie Dubois',
    age: 44,
    occupation: 'Interior Designer, Paris',
    initials: 'MD',
    avatarBg: 'bg-indigo-100 text-indigo-800',
    segment: 'International Collector',
    segmentColor: 'bg-gold text-ink',
    dark: true,
    background: 'French interior designer based in Paris with a longstanding interest in Asian material culture and sacred art. Discovered STH through an Airbnb Experience during a Singapore stopover. Has purchased Asian art objects from gallery exhibitions before but was immediately struck by STH\'s combination of active living craft and documented heritage.',
    painPoint: 'Wants to acquire authentic sacred art from Asia for her studio and personal collection, but has concerns about shipping fragility, cultural authenticity claims, and whether overseas purchases will survive transit intact. Has been disappointed by previous purchases arriving damaged.',
    pillar: 'Heritage Collection + E-Commerce Logistics',
    pillarNote: 'FedEx white-glove shipping and the provenance card resolve both pain points — physical safety and cultural legitimacy.',
    quote: 'My statue arrived in perfect condition. The quality is exceptional. It sits in my studio as the centrepiece — every client asks about it.',
    reach: 'Airbnb Experiences, Google search (international craft), international collector community forums, social media',
  },
  {
    name: 'Budi Santoso',
    age: 52,
    occupation: 'Businessman, Jakarta',
    initials: 'BS',
    avatarBg: 'bg-emerald-100 text-emerald-800',
    segment: 'Southeast Asian Diaspora',
    segmentColor: 'bg-ink text-gold border border-gold',
    dark: false,
    background: 'Indonesian Chinese businessman from Jakarta, from a Taoist family background with a well-maintained home altar. Visits Singapore 4–6 times per year for business. Has commissioned statues in the past from both Indonesian and Singapore craftsmen, but finds the quality of traditional work declining across the region.',
    painPoint: 'Wants to commission a significant new altar piece for his family and trust that the craftsman truly understands the deity\'s iconographic requirements. Concerned about the logistics of transporting a large, fragile religious statue from Singapore to Jakarta safely and without customs complications.',
    pillar: 'Artisan Commission + Specialist Logistics',
    pillarNote: 'STH\'s 6th-generation iconographic expertise and FedEx fragile-art logistics remove both barriers completely.',
    quote: 'There is no one in Jakarta who does this the right way anymore. STH is the last place I trust with my family\'s altar.',
    reach: 'Indonesian Chinese business and religious community networks, WhatsApp referrals from Singapore contacts, personal Singapore visits',
  },
  {
    name: 'David Lim',
    age: 38,
    occupation: 'Private Banker',
    initials: 'DL',
    avatarBg: 'bg-slate-100 text-slate-800',
    segment: 'Cultural Asset Investor',
    segmentColor: 'bg-gold text-ink',
    dark: true,
    background: 'Singapore Chinese high-net-worth professional working in private banking. Has a sophisticated understanding of alternative asset classes — wine, art, watches — and has been paying attention to the growing secondary market for Asian heritage objects. Understands that documented provenance dramatically affects collectible resale value.',
    painPoint: 'Interested in a respectful, professionally managed channel to hold cultural assets that appreciate over time. Recognises the 100-year antique threshold as a hard value inflection point for hand-carved statues. Wants a custodianship arrangement that is transparent, documented, and run by people with genuine expertise.',
    pillar: 'Custodianship — Legacy Tier',
    pillarNote: 'The Legacy Tier\'s formal valuation documentation and gallery placement create the provenance trail that underpins future appreciation.',
    quote: 'A 60-year-old hand-carved Guan Yu by a 6th-generation craftsman — in 40 years that is an antique worth multiples of today\'s value. The Legacy Tier makes complete sense to me.',
    reach: 'Private banking and family office networks, Straits Times heritage coverage, Singapore Heritage Society events, word of mouth',
  },
]

const matrix = [
  { persona: 'Mr Tan Ah Kow', custodianship: true, ecommerce: false },
  { persona: 'Sarah Chen', custodianship: false, ecommerce: true },
  { persona: 'Marie Dubois', custodianship: false, ecommerce: true },
  { persona: 'Budi Santoso', custodianship: false, ecommerce: true },
  { persona: 'David Lim', custodianship: true, ecommerce: false },
]

export default function PersonasPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-parchment py-20 px-6 border-b border-gold/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Primary Research</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-ink mb-6">
            Customer<br />
            <span className="text-sth-red italic">Personas</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-sth-grey font-inter text-sm leading-relaxed max-w-2xl">
            Five distinct customer segments identified through primary site visit research at
            Say Tian Hng Buddha Shop, May 2026. Each persona represents a real archetype observed
            or referenced during the visit — mapped to the two pillars of our proposal.
          </p>
        </div>
      </section>

      {/* Persona cards */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {personas.map((p, idx) => (
              <div
                key={p.name}
                className={`border relative overflow-hidden ${
                  p.dark
                    ? 'bg-ink border-gold/20'
                    : 'bg-cream border-parchment'
                } ${idx === personas.length - 1 && personas.length % 2 !== 0 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto w-full' : ''}`}
              >
                {/* Persona number watermark */}
                <div className={`absolute top-0 right-0 font-playfair text-[9rem] leading-none select-none pointer-events-none translate-x-4 -translate-y-2 ${p.dark ? 'text-gold/5' : 'text-ink/5'}`}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10 p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    {/* Avatar */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-playfair text-lg font-bold shrink-0 ${p.avatarBg}`}>
                      {p.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h2 className={`font-playfair text-xl ${p.dark ? 'text-cream' : 'text-ink'}`}>{p.name}</h2>
                        <span className={`font-inter text-[9px] tracking-widest uppercase px-2.5 py-1 ${p.dark ? 'text-gold/50' : 'text-sth-grey'}`}>
                          {p.age} · {p.occupation}
                        </span>
                      </div>
                      <span className={`inline-block font-inter text-[9px] tracking-widest uppercase px-3 py-1 ${p.segmentColor}`}>
                        {p.segment}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`h-px mb-6 ${p.dark ? 'bg-gold/10' : 'bg-parchment'}`} />

                  {/* Background */}
                  <div className="mb-5">
                    <div className={`font-inter text-[9px] tracking-widest uppercase mb-2 ${p.dark ? 'text-gold/40' : 'text-sth-grey/60'}`}>Background</div>
                    <p className={`font-inter text-xs leading-relaxed ${p.dark ? 'text-gold/50' : 'text-sth-grey'}`}>{p.background}</p>
                  </div>

                  {/* Pain point */}
                  <div className={`mb-5 p-4 border-l-2 ${p.dark ? 'border-sth-red bg-sth-red/10' : 'border-sth-red bg-sth-red/5'}`}>
                    <div className={`font-inter text-[9px] tracking-widest uppercase mb-2 ${p.dark ? 'text-sth-red/70' : 'text-sth-red/80'}`}>Pain Point</div>
                    <p className={`font-inter text-xs leading-relaxed ${p.dark ? 'text-cream/70' : 'text-ink'}`}>{p.painPoint}</p>
                  </div>

                  {/* Pillar */}
                  <div className={`mb-6 p-4 border-l-2 ${p.dark ? 'border-gold bg-gold/5' : 'border-gold bg-gold/10'}`}>
                    <div className={`font-inter text-[9px] tracking-widest uppercase mb-1 ${p.dark ? 'text-gold/50' : 'text-gold'}`}>Served By</div>
                    <div className={`font-inter text-sm font-medium mb-1 ${p.dark ? 'text-gold' : 'text-ink'}`}>{p.pillar}</div>
                    <div className={`font-inter text-[10px] leading-relaxed ${p.dark ? 'text-gold/40' : 'text-sth-grey'}`}>{p.pillarNote}</div>
                  </div>

                  {/* Quote */}
                  <blockquote className={`font-playfair text-lg italic leading-relaxed mb-6 ${p.dark ? 'text-cream' : 'text-ink'}`}>
                    &ldquo;{p.quote}&rdquo;
                  </blockquote>

                  {/* Divider */}
                  <div className={`h-px mb-4 ${p.dark ? 'bg-gold/10' : 'bg-parchment'}`} />

                  {/* How we reach them */}
                  <div>
                    <div className={`font-inter text-[9px] tracking-widest uppercase mb-2 ${p.dark ? 'text-gold/40' : 'text-sth-grey/60'}`}>How STH Reaches Them</div>
                    <p className={`font-inter text-xs leading-relaxed ${p.dark ? 'text-gold/40' : 'text-sth-grey'}`}>{p.reach}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segment coverage matrix */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Segment Coverage</div>
            <h2 className="font-playfair text-3xl text-cream">Pillar Alignment Matrix</h2>
            <div className="gold-rule w-24 mx-auto mt-6" />
          </div>

          <div className="border border-gold/20 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gold/10 border-b border-gold/20">
              <div className="p-4 font-inter text-[10px] tracking-widest uppercase text-gold/50">Persona</div>
              <div className="p-4 font-inter text-[10px] tracking-widest uppercase text-gold/50 border-l border-gold/20 text-center">Custodianship</div>
              <div className="p-4 font-inter text-[10px] tracking-widest uppercase text-gold/50 border-l border-gold/20 text-center">E-Commerce</div>
            </div>
            {matrix.map((row, i) => (
              <div key={row.persona} className={`grid grid-cols-3 border-b border-gold/10 last:border-0 ${i % 2 === 0 ? '' : 'bg-gold/5'}`}>
                <div className="p-4 font-inter text-xs text-cream">{row.persona}</div>
                <div className="p-4 border-l border-gold/10 flex items-center justify-center">
                  {row.custodianship ? (
                    <span className="text-gold font-inter text-base">✓</span>
                  ) : (
                    <span className="text-gold/15 font-inter text-base">—</span>
                  )}
                </div>
                <div className="p-4 border-l border-gold/10 flex items-center justify-center">
                  {row.ecommerce ? (
                    <span className="text-gold font-inter text-base">✓</span>
                  ) : (
                    <span className="text-gold/15 font-inter text-base">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="border border-gold/20 p-6 text-center">
              <div className="font-playfair text-3xl text-gold mb-2">2</div>
              <div className="text-gold/50 font-inter text-xs">Personas served by Custodianship</div>
            </div>
            <div className="border border-gold/20 p-6 text-center">
              <div className="font-playfair text-3xl text-gold mb-2">3</div>
              <div className="text-gold/50 font-inter text-xs">Personas served by E-Commerce</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
