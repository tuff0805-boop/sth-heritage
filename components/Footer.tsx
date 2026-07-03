import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-gold font-playfair text-3xl mb-2">說天興</div>
            <div className="text-gold/60 font-playfair text-sm italic mb-4">Say Tian Hng Buddha Shop</div>
            <p className="text-gold/40 font-inter text-xs leading-relaxed">
              Six generations of sacred craft mastery. Preserving Singapore&apos;s living heritage since 1841 —
              one statue at a time, one family at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.2em] uppercase mb-5">Navigate</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '/', label: 'Overview' },
                { href: '/custodianship', label: 'Custodianship' },
                { href: '/shop', label: 'Heritage Shop' },
                { href: '/provenance', label: 'Provenance' },
                { href: '/revenue', label: 'Revenue Model' },
                { href: '/landscape', label: 'Landscape' },
              ].map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-gold/50 hover:text-gold font-inter text-xs tracking-wide transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Assignment Info */}
          <div>
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.2em] uppercase mb-5">Research Team</div>
            <div className="space-y-1">
              {['Cayden', 'Zahi', 'Brandon', 'Ian', 'Yan Zu', 'Davier'].map(name => (
                <div key={name} className="text-gold/60 font-inter text-xs">{name}</div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gold/10">
              <div className="text-gold/30 font-inter text-[10px] leading-relaxed">
                Ngee Ann Polytechnic<br />
                CENT Group Assignment 2026<br />
                Intrapreneurship Proposal
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="gold-rule mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gold/30 font-inter text-[10px] tracking-wide">
            © 2026 Say Tian Hng Heritage. Academic Research Prototype.
          </div>
          <div className="text-gold/30 font-inter text-[10px] tracking-widest uppercase">
            Sacred Craft Since 1841
          </div>
        </div>
      </div>
    </footer>
  )
}
