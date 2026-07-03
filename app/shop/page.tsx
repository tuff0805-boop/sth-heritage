'use client'

import { useState } from 'react'

const products = [
  {
    id: 1,
    tier: 'Artisan Commission',
    tierColor: 'bg-sth-red text-cream',
    name: 'Guan Yu — Guardian of Righteousness',
    chinese: '關羽',
    price: 'From SGD $1,800',
    priceNote: 'Price varies with scale (30cm–120cm) and material complexity',
    leadTime: '8–14 weeks',
    material: 'Camphor wood, mineral pigments, 24K gold leaf accents',
    symbol: '⚔',
    symbolColor: '#8B1A1A',
    description: 'The most commissioned deity at Say Tian Hng. Guan Yu — general, god, guardian — stands at the intersection of martial prowess and moral rectitude. His statue anchors altars from Jurong shophouses to Singapore corporate boardrooms. Each commission is a conversation between patron and craftsman: the deity\'s posture, expression, and accoutrements carry specific meanings that STH\'s sixth-generation artisans encode with the precision of scripture.',
    story: true,
  },
  {
    id: 2,
    tier: 'Heritage Collection',
    tierColor: 'bg-gold text-ink',
    name: 'Guan Yin — Vessel of Infinite Mercy',
    chinese: '觀音',
    price: 'SGD $380',
    priceNote: '22cm lacquered camphor wood with painted mineral pigments',
    leadTime: 'Ships in 2–4 weeks',
    material: 'Camphor wood, lacquer, gold-leaf halo',
    symbol: '☽',
    symbolColor: '#B8860B',
    description: 'The Goddess of Mercy, rendered in miniature with the same reverence as her full-sized counterparts. Guan Yin is the most universally beloved deity in the Sinosphere — her compassion extends across sectarian boundaries. This Heritage Collection piece distils six generations of STH craftsmanship into a form that travels the world without losing its soul.',
    story: false,
  },
  {
    id: 3,
    tier: 'Collector Guardian Set',
    tierColor: 'bg-ink text-gold border border-gold',
    name: 'The Three Celestial Officials',
    chinese: '三官大帝',
    price: 'SGD $480',
    priceNote: 'Set of three 15cm statues, presented in lacquered keepsake box',
    leadTime: 'Ships in 3–5 weeks',
    material: 'Resin composite, hand-painted, camphor wood display base',
    symbol: '三',
    symbolColor: '#D4A843',
    description: 'Heaven, Earth, and Water — the Three Celestial Officials govern fortune, forgiveness, and the wellspring of life. This collector set makes an exceptional gift for diaspora families or cultural collectors seeking a meaningful connection to Chinese heritage. Each set includes the STH Provenance Card, cultural mythology booklet, and a hand-signed certificate from the master craftsman.',
    story: false,
  },
  {
    id: 4,
    tier: 'Heritage Collection',
    tierColor: 'bg-gold text-ink',
    name: 'Tu Di Gong — Earth God of Prosperity',
    chinese: '土地公',
    price: 'SGD $280',
    priceNote: '18cm carved camphor wood, natural pigment finish',
    leadTime: 'Ships in 2–4 weeks',
    material: 'Camphor wood, natural earth pigments',
    symbol: '土',
    symbolColor: '#6B6355',
    description: 'The most approachable of the Chinese folk deities, Tu Di Gong greets devotees at the entrances of businesses, homes, and temples across Southeast Asia. He asks for no grand ceremony — only sincerity. This Heritage Collection piece carries the warmth of a deity who has watched over Singapore\'s merchant families for generations.',
    story: false,
  },
]

const shippingInfo = [
  { icon: '✈', title: 'FedEx & UPS Partnership', desc: 'Specialist fragile-art logistics via established carriers with documented handling protocols for cultural objects.' },
  { icon: '📦', title: 'Conservation Packaging', desc: 'Each statue is wrapped in acid-free tissue, suspended in custom foam cradles, and double-boxed per museum-grade shipping standards.' },
  { icon: '🌍', title: '40+ Countries', desc: 'We ship to all major markets including the US, UK, EU, Australia, Canada, and Southeast Asia.' },
  { icon: '🛡', title: 'Insured up to SGD $5,000', desc: 'Every shipment carries full declared-value insurance. Documentation provided for customs in all destination countries.' },
]

export default function ShopPage() {
  const [added, setAdded] = useState<number[]>([])

  function handleAdd(id: number) {
    setAdded(prev => [...prev, id])
    setTimeout(() => setAdded(prev => prev.filter(x => x !== id)), 2000)
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[16rem] text-gold">佛</span>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Pillar Two</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            Heritage Shop<br />
            <span className="text-gold italic">& Global Collection</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            Two centuries of Singaporean sacred craft, now accessible to the world.
            Commission a full-scale deity for your altar, or bring home a Heritage Collection
            miniature that carries every ounce of the tradition in a fraction of the footprint.
          </p>
        </div>
      </section>

      {/* Featured product — Guan Yu deep dive */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-gold/40 font-inter text-[10px] tracking-widest uppercase mb-12 text-center">Featured Masterwork</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Visual */}
            <div className="bg-ink flex items-center justify-center min-h-[500px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gold" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gold" />
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gold" />
              </div>
              <div className="text-center relative z-10">
                <div className="font-playfair text-[10rem] text-sth-red/70 leading-none mb-4">⚔</div>
                <div className="font-playfair text-6xl text-gold/30">關羽</div>
              </div>
              <div className="absolute top-6 left-6">
                <span className="bg-sth-red text-cream font-inter text-[9px] tracking-widest uppercase px-3 py-1.5">Artisan Commission</span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-parchment p-10 lg:p-12">
              <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-4">The Guardian Deity</div>
              <h2 className="font-playfair text-4xl text-ink mb-2">Guan Yu</h2>
              <div className="font-playfair text-xl text-sth-grey italic mb-6">Guardian of Righteousness</div>
              <div className="gold-rule w-16 mb-6" />

              <div className="prose-sm text-sth-grey font-inter leading-relaxed space-y-4 mb-8">
                <p>
                  Born in 160 AD during the turbulent Eastern Han dynasty, Guan Yu rose from humble origins to become
                  one of history&apos;s most celebrated generals — a man of such towering virtue that his deification
                  after death was a matter of popular consensus rather than imperial decree.
                </p>
                <p>
                  He is simultaneously the God of War, the God of Righteousness, the patron deity of the police force,
                  and the protector of business. In the Chinese moral cosmology, these are not contradictions —
                  they are facets of a single, integrated character: the man who kept his oath at the cost of his life.
                </p>
                <p>
                  Commissioning a Guan Yu from Say Tian Hng is not merely a purchase. It is a conversation with
                  six generations of craftsmen who understand that the statue is not the deity — it is a vessel,
                  a threshold, a point of contact between the mortal and the sacred.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  ['Material', 'Camphor wood, mineral pigments, 24K gold leaf'],
                  ['Lead Time', '8–14 weeks'],
                  ['Available Sizes', '30cm, 60cm, 90cm, 120cm'],
                  ['Craftsmanship', '6th generation STH artisan'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="text-sth-grey font-inter text-[9px] tracking-widest uppercase mb-1">{label}</div>
                    <div className="text-ink font-inter text-xs">{value}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-end gap-4 mb-6">
                <div>
                  <div className="text-sth-grey font-inter text-[10px] uppercase tracking-widest">Commission Price</div>
                  <div className="font-playfair text-3xl text-ink">From SGD $1,800</div>
                </div>
              </div>

              <button
                onClick={() => handleAdd(1)}
                className="w-full bg-ink text-cream font-inter text-xs tracking-widest uppercase py-4 hover:bg-sth-red transition-colors"
              >
                {added.includes(1) ? '✓ Added to Collection' : 'Commission This Statue'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All products grid */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">The Collection</div>
            <h2 className="font-playfair text-4xl text-ink">Sacred Works for Every Home</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-background border border-parchment group hover:border-gold/30 transition-colors">
                {/* Visual area */}
                <div className="relative h-64 flex items-center justify-center overflow-hidden" style={{ background: '#1A1208' }}>
                  <div className="text-center">
                    <div className="font-playfair text-8xl leading-none mb-3" style={{ color: product.symbolColor + '60' }}>
                      {product.symbol}
                    </div>
                    <div className="font-playfair text-4xl text-gold/20">{product.chinese}</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`font-inter text-[9px] tracking-widest uppercase px-3 py-1.5 ${product.tierColor}`}>
                      {product.tier}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="font-playfair text-xl text-ink mb-1">{product.name}</h3>
                  <div className="text-sth-grey font-inter text-xs mb-4">{product.material}</div>
                  <p className="text-sth-grey font-inter text-xs leading-relaxed mb-6">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-playfair text-xl text-ink">{product.price}</div>
                      <div className="text-sth-grey font-inter text-[10px] mt-0.5">{product.leadTime}</div>
                    </div>
                    <button
                      onClick={() => handleAdd(product.id)}
                      className={`px-6 py-3 font-inter text-[10px] tracking-widest uppercase transition-colors ${
                        added.includes(product.id)
                          ? 'bg-gold text-ink'
                          : 'border border-ink text-ink hover:bg-ink hover:text-cream'
                      }`}
                    >
                      {added.includes(product.id) ? '✓ Added' : 'Add to Collection'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping section */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Global Delivery</div>
            <h2 className="font-playfair text-4xl text-cream mb-4">Sacred Objects, Safely Delivered</h2>
            <div className="gold-rule w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {shippingInfo.map(item => (
              <div key={item.title} className="border border-gold/20 p-8">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="font-playfair text-xl text-gold mb-3">{item.title}</div>
                <div className="text-gold/50 font-inter text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="border border-gold/30 p-10 bg-gold/5 relative">
            <div className="text-gold/20 font-playfair text-8xl absolute top-4 left-6 leading-none">&ldquo;</div>
            <div className="relative z-10">
              <blockquote className="font-playfair text-xl italic text-cream leading-relaxed mb-6">
                My statue arrived in France in perfect condition. The quality is exceptional
                and looks even nicer than the photographs. The provenance card that came with it
                has become a treasured piece of documentation — I feel I understand what I have.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gold/20" />
                <div className="text-gold/50 font-inter text-[10px] tracking-widest uppercase">
                  Verified Customer — France
                </div>
                <div className="h-px flex-1 bg-gold/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
