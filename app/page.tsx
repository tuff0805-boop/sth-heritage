import Link from 'next/link'

const stats = [
  { value: 'SGD $0.4B', label: 'Singapore Heritage Tourism Market', sub: '2024 valuation' },
  { value: '4.62%', label: 'Heritage Tourism CAGR', sub: 'Projected to 2033' },
  { value: '9.9%', label: 'Asia Pacific Handicrafts CAGR', sub: 'Fastest growing segment' },
]

const pillars = [
  {
    number: '01',
    title: 'Sacred Custodianship & Rehoming',
    subtitle: 'Singapore\'s First Formal Statue Custodian',
    description: 'When families can no longer keep their sacred statues, STH steps in — not as a buyer, but as a guardian. Three custodianship tiers provide a dignified alternative to incineration, while statues approaching the 100-year antique threshold appreciate in heritage value.',
    tiers: ['Care — SGD $50/mo', 'Preserve — SGD $120/mo', 'Legacy — SGD $280/mo'],
    cta: 'Explore Custodianship',
    href: '/custodianship',
    dark: true,
  },
  {
    number: '02',
    title: 'Global Heritage Brand & E-Commerce',
    subtitle: 'From Waterloo Street to the World',
    description: 'A dual-tier product strategy preserves the artisan commission model while unlocking international reach through Heritage Collection miniatures. Romanticised storytelling, specialist fragile-art logistics, and provenance documentation transform each piece into a collectible cultural artifact.',
    tiers: ['Artisan Commission from SGD $1,800', 'Heritage Collection SGD $280–680', 'Collector Guardian Sets SGD $480'],
    cta: 'View Heritage Shop',
    href: '/shop',
    dark: false,
  },
]

const quickLinks = [
  { href: '/revenue', label: 'Revenue Calculator', desc: 'Model STH\'s new recurring revenue streams' },
  { href: '/landscape', label: 'Market Landscape', desc: 'Singapore mysticism economy & comparable brands' },
  { href: '/provenance', label: 'Provenance Cards', desc: 'Digital certificates shipped with every statue' },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* HERO — Split viewport */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left — Dark */}
        <div className="bg-ink flex flex-col justify-center px-10 lg:px-16 py-24 relative overflow-hidden">
          {/* Decorative Chinese character watermark */}
          <div className="absolute top-0 right-0 text-[20rem] font-playfair text-gold/5 leading-none select-none pointer-events-none translate-x-16 -translate-y-8">
            佛
          </div>
          <div className="relative z-10">
            <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-8">
              Say Tian Hng · Est. 1841 · Singapore
            </div>
            <h1 className="font-playfair text-4xl lg:text-5xl xl:text-6xl text-cream leading-[1.1] mb-8">
              From Sacred Craft<br />
              <span className="text-gold italic">to Global</span><br />
              Heritage Brand
            </h1>
            <div className="gold-rule mb-8 w-24" />
            <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-sm mb-10">
              184 years of sacred craft mastery. Six generations of family artisans.
              One intrapreneurial vision to carry STH into the next century
              — without sacrificing a single stroke of tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/custodianship"
                className="inline-block px-8 py-4 bg-gold text-ink font-inter text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
              >
                Sacred Custodianship
              </Link>
              <Link
                href="/shop"
                className="inline-block px-8 py-4 border border-gold/40 text-gold font-inter text-xs tracking-widest uppercase hover:border-gold transition-colors"
              >
                Heritage Shop
              </Link>
            </div>
          </div>
        </div>

        {/* Right — Cream */}
        <div className="bg-cream flex flex-col justify-center px-10 lg:px-16 py-24">
          <div className="text-sth-grey font-inter text-[10px] tracking-[0.3em] uppercase mb-8">
            The Business Case
          </div>
          <h2 className="font-playfair text-2xl lg:text-3xl text-ink mb-6">
            A Heritage Business<br />
            <span className="italic text-sth-red">at a Crossroads</span>
          </h2>
          <p className="text-sth-grey font-inter text-sm leading-relaxed mb-10">
            Singapore&apos;s sacred craft trade faces an existential tension: rising heritage tourism interest collides
            with declining intergenerational practice, dwindling workshop space in Waterloo Street, and
            families increasingly unable to care for inherited statues. The window to modernise
            without losing authenticity is narrow — and closing.
          </p>

          {/* Stats */}
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start gap-5 pb-6 border-b border-parchment last:border-0">
                <div className="font-playfair text-3xl text-gold font-bold leading-none shrink-0">{stat.value}</div>
                <div>
                  <div className="text-ink font-inter text-sm font-medium">{stat.label}</div>
                  <div className="text-sth-grey font-inter text-xs mt-0.5">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Our Proposal</div>
            <h2 className="font-playfair text-4xl text-ink">Two Pillars of Innovation</h2>
            <div className="gold-rule mt-6 w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className={`tier-card p-10 ${
                  pillar.dark
                    ? 'bg-ink text-cream'
                    : 'bg-parchment text-ink border border-gold/20'
                }`}
              >
                <div className={`font-playfair text-6xl font-bold mb-6 ${pillar.dark ? 'text-gold/20' : 'text-gold/30'}`}>
                  {pillar.number}
                </div>
                <div className={`font-inter text-[10px] tracking-[0.25em] uppercase mb-3 ${pillar.dark ? 'text-gold/60' : 'text-sth-grey'}`}>
                  {pillar.subtitle}
                </div>
                <h3 className={`font-playfair text-2xl mb-5 ${pillar.dark ? 'text-cream' : 'text-ink'}`}>
                  {pillar.title}
                </h3>
                <p className={`font-inter text-sm leading-relaxed mb-8 ${pillar.dark ? 'text-gold/50' : 'text-sth-grey'}`}>
                  {pillar.description}
                </p>
                <div className="space-y-2 mb-8">
                  {pillar.tiers.map(tier => (
                    <div key={tier} className={`flex items-center gap-3 font-inter text-xs ${pillar.dark ? 'text-gold/60' : 'text-sth-grey'}`}>
                      <span className="text-gold">—</span>
                      {tier}
                    </div>
                  ))}
                </div>
                <Link
                  href={pillar.href}
                  className={`inline-block px-8 py-3 font-inter text-xs tracking-widest uppercase transition-colors ${
                    pillar.dark
                      ? 'bg-gold text-ink hover:bg-gold-light'
                      : 'border border-ink text-ink hover:bg-ink hover:text-cream'
                  }`}
                >
                  {pillar.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links band */}
      <section className="bg-ink py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-gold/40 font-inter text-[10px] tracking-[0.3em] uppercase mb-10 text-center">
            Explore the Full Proposal
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-8 border border-gold/20 hover:border-gold/50 transition-colors"
              >
                <div className="text-gold font-playfair text-xl mb-3 group-hover:text-gold-light transition-colors">
                  {link.label}
                </div>
                <div className="text-gold/40 font-inter text-xs leading-relaxed">
                  {link.desc}
                </div>
                <div className="mt-6 text-gold/30 font-inter text-xs tracking-widest group-hover:text-gold transition-colors">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage context */}
      <section className="bg-background py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="font-playfair text-6xl text-gold/10 mb-6">說天興</div>
          <blockquote className="font-playfair text-2xl italic text-ink leading-relaxed mb-8">
            &ldquo;To modernise is not to abandon — it is to carry forward what matters most,
            in a form the next generation can hold.&rdquo;
          </blockquote>
          <div className="text-sth-grey font-inter text-xs tracking-widest uppercase">
            STH Intrapreneurship Vision · 2026
          </div>
        </div>
      </section>
    </div>
  )
}
