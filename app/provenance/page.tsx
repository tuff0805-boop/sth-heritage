'use client'

import { useState } from 'react'

const deityMythologies: Record<string, { myth: string; attributes: string }> = {
  'Guan Yu': {
    myth: 'Mortal general of the Three Kingdoms era, deified for his supreme loyalty, righteousness, and martial virtue. His oath of brotherhood sworn in the Peach Garden became the template for fidelity across all human relationships.',
    attributes: 'Green dragon crescent blade, red face, long black beard',
  },
  'Guan Yin': {
    myth: 'Bodhisattva of infinite compassion, who heard the cries of all suffering beings and turned back from complete nirvana to remain as the great intercessor. She who holds the willow branch and pure-water vase.',
    attributes: 'White robes, willow branch, pure-water vase, lotus throne',
  },
  'Tu Di Gong': {
    myth: 'Earth god and local protector deity, worshipped at the threshold of every business and home. His domain is the immediate soil underfoot — he knows every soul in his territory and petitions Heaven on their behalf.',
    attributes: 'White beard, gold ingot, jade tablet, magistrate\'s robes',
  },
  'Mazu': {
    myth: 'Lin Mo, the daughter of a Song dynasty fisherman who became the protector of all who go upon the waters. First deified by Fujian fishermen, her cult spread along every coast that Chinese sailors reached.',
    attributes: 'Phoenix crown, empress robes, the two generals Thousand-League Eyes and Favourable-Wind Ears',
  },
  'Custom': {
    myth: 'Every deity in the Chinese folk pantheon embodies a moral virtue made manifest — the personification of an ideal so pure that heaven itself could not contain it. This statue carries that virtue into your home.',
    attributes: 'As commissioned and documented by the master craftsman',
  },
}

export default function ProvenancePage() {
  const [deity, setDeity] = useState('Guan Yu')
  const [customDeity, setCustomDeity] = useState('')
  const [craftsman] = useState('Master Wee Ah Kow, 6th Generation')
  const [date] = useState(new Date().toLocaleDateString('en-SG', { day: 'numeric', month: 'long', year: 'numeric' }))

  const displayDeity = deity === 'Custom' ? customDeity || 'Your Deity' : deity
  const mythology = deityMythologies[deity] || deityMythologies['Custom']
  const refNo = `STH-PROV-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-parchment py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Digital Provenance System</div>
          <h1 className="font-playfair text-5xl text-ink mb-6">
            Every Statue Has<br />
            <span className="text-gold italic">a Story to Tell</span>
          </h1>
          <div className="gold-rule w-24 mx-auto mb-8" />
          <p className="text-sth-grey font-inter text-sm leading-relaxed max-w-2xl mx-auto">
            Say Tian Hng provenance cards transform a purchase into a permanent cultural artifact.
            Each card — printed on archival paper and digitally registered — documents the deity,
            the craftsman, and the mythology. Shipped with every statue, worldwide.
          </p>
        </div>
      </section>

      {/* Interactive section */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Controls */}
            <div>
              <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Customise the Card</div>
              <div className="space-y-5">
                <div>
                  <label className="block text-ink font-inter text-xs font-medium mb-2 tracking-wide">Select Deity</label>
                  <select
                    value={deity}
                    onChange={e => setDeity(e.target.value)}
                    className="w-full border border-parchment bg-cream text-ink font-inter text-sm px-4 py-3 focus:border-gold focus:outline-none transition-colors"
                  >
                    <option>Guan Yu</option>
                    <option>Guan Yin</option>
                    <option>Tu Di Gong</option>
                    <option>Mazu</option>
                    <option>Custom</option>
                  </select>
                </div>
                {deity === 'Custom' && (
                  <div>
                    <label className="block text-ink font-inter text-xs font-medium mb-2 tracking-wide">Enter Deity Name</label>
                    <input
                      value={customDeity}
                      onChange={e => setCustomDeity(e.target.value)}
                      placeholder="e.g. Nezha, Jade Emperor..."
                      className="w-full border border-parchment bg-cream text-ink font-inter text-sm px-4 py-3 placeholder-sth-grey/50 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                )}

                <div className="bg-cream border border-parchment p-6">
                  <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-3">Card Contents Preview</div>
                  <div className="space-y-2">
                    {[
                      ['Deity', displayDeity],
                      ['Craftsman', craftsman],
                      ['Date of Creation', date],
                      ['Reference', refNo],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs font-inter">
                        <span className="text-sth-grey">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <button
                  onClick={() => window.print()}
                  className="w-full bg-ink text-cream font-inter text-xs tracking-widest uppercase py-4 hover:bg-sth-red transition-colors"
                >
                  Print Provenance Card
                </button>
                <p className="text-sth-grey font-inter text-[10px] text-center">
                  Print functionality isolates the card for clean output. Use A5 or card stock for best results.
                </p>
              </div>

              {/* What this does */}
              <div className="mt-10 space-y-4">
                <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Why This Matters</div>
                {[
                  { icon: '📜', title: 'Permanent Identity', desc: 'The card creates a paper trail of provenance that persists regardless of future ownership.' },
                  { icon: '🌐', title: 'International Confidence', desc: 'Overseas buyers receive documented cultural context — transforming uncertainty into confidence.' },
                  { icon: '💎', title: 'Heritage Value', desc: 'Documented provenance increases collectible value, particularly as statues age toward the antique threshold.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="text-xl shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <div className="font-inter text-sm font-medium text-ink mb-1">{item.title}</div>
                      <div className="font-inter text-xs text-sth-grey leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Card */}
            <div id="provenance-card">
              <div className="bg-ink border-2 border-gold/60 p-8 relative min-h-[600px]">
                {/* Corner ornaments */}
                {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map(pos => (
                  <div key={pos} className={`absolute ${pos} text-gold/40 font-playfair text-lg`}>✦</div>
                ))}

                {/* Inner border */}
                <div className="absolute inset-4 border border-gold/20 pointer-events-none" />

                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                  <span className="font-playfair text-[14rem] text-gold leading-none">說</span>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Top seal */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gold">
                      <span className="font-playfair text-gold text-2xl">說</span>
                    </div>
                  </div>

                  <div className="text-gold/50 font-inter text-[8px] tracking-[0.3em] uppercase mb-1">
                    Say Tian Hng Heritage House · Est. 1841
                  </div>
                  <div className="font-playfair text-cream text-lg mb-1">Certificate of Provenance</div>
                  <div className="gold-rule w-20 mx-auto mb-6" />

                  {/* Deity name */}
                  <div className="mb-2">
                    <div className="font-playfair text-gold text-4xl mb-1">{displayDeity}</div>
                    {deity !== 'Custom' && (
                      <div className="text-gold/50 font-inter text-xs italic">
                        {deity === 'Guan Yu' ? '關羽' : deity === 'Guan Yin' ? '觀音' : deity === 'Tu Di Gong' ? '土地公' : '媽祖'}
                      </div>
                    )}
                  </div>

                  {/* Mythology */}
                  <div className="mb-6 px-4">
                    <p className="text-gold/40 font-inter text-[10px] leading-relaxed">
                      {mythology.myth}
                    </p>
                  </div>

                  {/* Attributes */}
                  <div className="border border-gold/20 px-6 py-3 mb-6 w-full">
                    <div className="text-gold/40 font-inter text-[8px] tracking-widest uppercase mb-1">Sacred Attributes</div>
                    <div className="text-gold/60 font-inter text-[10px]">{mythology.attributes}</div>
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-2 gap-3 w-full mb-6">
                    {[
                      ['Craftsman', craftsman],
                      ['Date Created', date],
                      ['Workshop', 'Waterloo Street, Singapore'],
                      ['Reference', refNo],
                    ].map(([k, v]) => (
                      <div key={k} className="border border-gold/20 p-3">
                        <div className="text-gold/30 font-inter text-[7px] tracking-widest uppercase mb-1">{k}</div>
                        <div className="text-cream font-inter text-[9px] leading-tight">{v}</div>
                      </div>
                    ))}
                  </div>

                  {/* QR placeholder */}
                  <div className="border border-gold/30 p-3 mb-4">
                    <div className="w-16 h-16 bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-1">
                      <div className="grid grid-cols-3 gap-0.5">
                        {Array(9).fill(0).map((_, i) => (
                          <div key={i} className={`w-3 h-3 ${Math.random() > 0.4 ? 'bg-gold/50' : 'bg-transparent'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="text-gold/30 font-inter text-[8px] text-center">Scan to verify authenticity</div>
                  </div>

                  <div className="gold-rule w-20 mx-auto mb-3" />
                  <div className="text-gold/30 font-inter text-[8px]">
                    190 Waterloo Street, Singapore 187965 · saytianhn g.com.sg
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
