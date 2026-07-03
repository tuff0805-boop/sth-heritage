'use client'

import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell,
} from 'recharts'

const GOLD = '#B8860B'
const GOLD_L = '#D4A843'
const RED = '#8B1A1A'

const heritageTourismData = [
  { year: '2020', value: 280 },
  { year: '2021', value: 295 },
  { year: '2022', value: 320 },
  { year: '2023', value: 365 },
  { year: '2024', value: 400 },
  { year: '2025', value: 419 },
  { year: '2026', value: 438 },
  { year: '2027', value: 458 },
  { year: '2028', value: 479 },
  { year: '2029', value: 501 },
  { year: '2030', value: 524 },
  { year: '2031', value: 549 },
  { year: '2032', value: 575 },
  { year: '2033', value: 600 },
]

const handicraftsData = [
  { region: 'Asia Pacific', cagr: 9.9 },
  { region: 'South Asia', cagr: 8.4 },
  { region: 'Middle East', cagr: 7.1 },
  { region: 'Latin America', cagr: 5.8 },
  { region: 'North America', cagr: 4.2 },
  { region: 'Europe', cagr: 3.6 },
]

const ecommerceData = [
  { year: '2022', share: 18 },
  { year: '2023', share: 24 },
  { year: '2024', share: 31 },
  { year: '2025', share: 38 },
  { year: '2026', share: 46 },
]

const segments = [
  {
    icon: '🏮',
    name: 'Home Devotees',
    profile: 'Singapore Chinese households, 50+, maintaining ancestral altar practices',
    size: 'Est. 180,000 households with active altars in Singapore',
    opportunity: 'Primary market for both Custodianship and Artisan Commissions',
  },
  {
    icon: '📸',
    name: 'Cultural Tourists',
    profile: 'International visitors drawn to Singapore\'s religious heritage trail',
    size: 'Singapore received 16.5M visitors in 2024; heritage trail growing subset',
    opportunity: 'Heritage Collection impulse purchases; workshop tour experiences',
  },
  {
    icon: '🌏',
    name: 'International Collectors',
    profile: 'Diaspora Chinese in US, UK, AU, EU; Western collectors of Asian art',
    size: 'Estimated 50M overseas Chinese globally; 8% engaged in heritage collecting',
    opportunity: 'E-commerce channel primary. Provenance cards essential for confidence.',
  },
  {
    icon: '✨',
    name: 'Gen Z Heritage Explorers',
    profile: 'Singapore-born Gen Z rediscovering traditional practices through aesthetics',
    size: 'Cece astrology app: 100M+ downloads. Crystal healing market: USD $1.5B globally',
    opportunity: 'Mysticism economy crossover. Social-native heritage storytelling.',
  },
  {
    icon: '🛶',
    name: 'Indonesian–Singaporean Diaspora',
    profile: 'Ethnic Chinese Indonesians with strong Taoist practice; frequent Singapore visitors',
    size: '8M+ ethnic Chinese in Indonesia; significant Riau–JB–Singapore corridor travel',
    opportunity: 'Culturally aligned buyers for full commissions and Heritage Collection',
  },
]

const comparables = [
  {
    company: 'Cece Astrology',
    category: 'Mysticism Tech',
    metric: '100M+ downloads',
    backer: 'Tencent-backed',
    insight: 'Proves massive global appetite for Chinese spiritual/mystical products delivered digitally. STH occupies the premium physical tier of the same ecosystem.',
  },
  {
    company: 'Tong Heng Mooncakes',
    category: 'Heritage F&B',
    metric: 'SGD $5M+ annual revenue',
    backer: 'Self-funded, 80+ years',
    insight: 'Singapore heritage brand successfully romanticising a commodity product. Heritage narrative and premium positioning transfer directly to STH\'s model.',
  },
  {
    company: 'Wabi Sabi Co.',
    category: 'Crystal & Wellness',
    metric: 'SGD $2M est. revenue',
    backer: 'Venture-backed',
    insight: 'Demonstrates Singapore consumer willingness to pay premium for spiritual objects with aesthetic storytelling and experiential retail.',
  },
  {
    company: 'Coffee Chains (wooden fish objects)',
    category: 'Mysticism Retail',
    metric: 'Mass channel distribution',
    backer: 'F&B operators',
    insight: 'Validates Gen Z mysticism crossover demand. STH is positioned as the authentic, premium alternative — provenance where the chain has none.',
  },
]

const trends = [
  { label: 'Mysticism Economy Revival', desc: 'Post-pandemic spiritual interest surge across Asia. Crystal healing, tarot, and traditional deity worship all growing simultaneously — a single cultural shift benefiting multiple formats.' },
  { label: 'Diaspora Cultural Reconnection', desc: 'Third-generation overseas Chinese actively seeking authentic heritage objects. E-commerce removes the gatekeeping that previously confined purchases to Singapore visits.' },
  { label: 'Heritage Tourism Maturation', desc: 'Visitors increasingly seeking craft workshops and cultural maker experiences over passive museum visits. STH\'s Waterloo Street location is prime real estate for this shift.' },
  { label: 'Premium Collectibles Market', desc: 'Global secondary market for Asian art objects growing 12% annually. Documented provenance dramatically increases resale value — creating collector incentives from first purchase.' },
]

export default function LandscapePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[20rem] text-gold leading-none">市</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Market Research</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            Business<br />
            <span className="text-gold italic">Landscape</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            The Singapore mysticism economy is quietly expanding. Heritage tourism is growing faster
            than the general hospitality sector. Asia Pacific leads global handicrafts CAGR.
            STH sits at the intersection of all three vectors.
          </p>
        </div>
      </section>

      {/* Charts row */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Heritage tourism growth */}
            <div className="bg-cream border border-parchment p-8">
              <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-2">Singapore Heritage Tourism Market</div>
              <div className="font-playfair text-3xl text-ink mb-1">4.62% CAGR</div>
              <div className="text-sth-grey font-inter text-xs mb-6">SGD Millions · 2020–2033 projection</div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={heritageTourismData}>
                  <XAxis dataKey="year" tick={{ fontSize: 9, fontFamily: 'Inter', fill: '#6B6355' }} axisLine={false} tickLine={false} interval={2} />
                  <YAxis tick={{ fontSize: 9, fontFamily: 'Inter', fill: '#6B6355' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}M`} />
                  <Tooltip
                    contentStyle={{ background: '#1A1208', border: '1px solid #B8860B40', borderRadius: 0, fontSize: 11, fontFamily: 'Inter', color: '#D4A843' }}
                    formatter={(v: number) => [`SGD $${v}M`, 'Market Size']}
                  />
                  <Area type="monotone" dataKey="value" stroke={GOLD} strokeWidth={2} fill={GOLD + '18'} dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Asia Pacific handicrafts CAGR */}
            <div className="bg-cream border border-parchment p-8">
              <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-2">Handicrafts Market CAGR by Region</div>
              <div className="font-playfair text-3xl text-ink mb-1">Asia Pacific Leads</div>
              <div className="text-sth-grey font-inter text-xs mb-6">Compound Annual Growth Rate %</div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={handicraftsData} layout="vertical" barCategoryGap="30%">
                  <XAxis type="number" tick={{ fontSize: 9, fontFamily: 'Inter', fill: '#6B6355' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
                  <YAxis type="category" dataKey="region" tick={{ fontSize: 9, fontFamily: 'Inter', fill: '#6B6355' }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip
                    contentStyle={{ background: '#1A1208', border: '1px solid #B8860B40', borderRadius: 0, fontSize: 11, fontFamily: 'Inter', color: '#D4A843' }}
                    formatter={(v: number) => [`${v}%`, 'CAGR']}
                  />
                  <Bar dataKey="cagr" radius={0}>
                    {handicraftsData.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? GOLD : i === 1 ? GOLD_L : '#6B6355'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* E-commerce growth */}
          <div className="bg-ink p-10 border border-gold/20">
            <div className="text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-2">E-Commerce Channel Share — Religious & Cultural Objects</div>
            <div className="font-playfair text-3xl text-cream mb-1">Fastest Growing Channel</div>
            <div className="text-gold/40 font-inter text-xs mb-8">% of category sales via digital channels</div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={ecommerceData}>
                <XAxis dataKey="year" tick={{ fontSize: 10, fontFamily: 'Inter', fill: '#6B6355' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fontFamily: 'Inter', fill: '#6B6355' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
                <Tooltip
                  contentStyle={{ background: '#1A1208', border: '1px solid #B8860B40', borderRadius: 0, fontSize: 11, fontFamily: 'Inter', color: '#D4A843' }}
                  formatter={(v: number) => [`${v}%`, 'E-commerce share']}
                />
                <Area type="monotone" dataKey="share" stroke={RED} strokeWidth={2} fill={RED + '20'} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Comparable brands */}
      <section className="bg-parchment py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Market Context</div>
            <h2 className="font-playfair text-4xl text-ink">Comparable Companies</h2>
            <div className="gold-rule w-24 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparables.map(co => (
              <div key={co.company} className="bg-background p-8 border border-parchment">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-playfair text-xl text-ink">{co.company}</div>
                    <div className="text-sth-grey font-inter text-xs">{co.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold font-playfair text-sm">{co.metric}</div>
                    <div className="text-sth-grey font-inter text-[10px]">{co.backer}</div>
                  </div>
                </div>
                <div className="h-px bg-parchment mb-4" />
                <p className="text-sth-grey font-inter text-xs leading-relaxed">{co.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer segments */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Target Segments</div>
            <h2 className="font-playfair text-4xl text-cream">Who STH Serves</h2>
            <div className="gold-rule w-24 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((seg, i) => (
              <div key={seg.name} className={`border border-gold/20 p-8 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="text-4xl mb-4">{seg.icon}</div>
                <div className="font-playfair text-xl text-cream mb-3">{seg.name}</div>
                <div className="text-gold/50 font-inter text-xs leading-relaxed mb-3">{seg.profile}</div>
                <div className="border-t border-gold/10 pt-3 mt-3">
                  <div className="text-gold/30 font-inter text-[9px] tracking-widest uppercase mb-2">Market Size</div>
                  <div className="text-gold/50 font-inter text-xs">{seg.size}</div>
                </div>
                <div className="border-t border-gold/10 pt-3 mt-3">
                  <div className="text-gold/30 font-inter text-[9px] tracking-widest uppercase mb-2">STH Opportunity</div>
                  <div className="text-gold/60 font-inter text-xs">{seg.opportunity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging trends */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Environmental Analysis</div>
            <h2 className="font-playfair text-4xl text-ink">Emerging Trends</h2>
            <div className="gold-rule w-24 mx-auto mt-6" />
          </div>
          <div className="space-y-4">
            {trends.map((trend, i) => (
              <div key={trend.label} className="flex gap-8 p-8 bg-cream border border-parchment">
                <div className="font-playfair text-4xl text-gold/20 shrink-0 leading-none">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="font-playfair text-xl text-ink mb-3">{trend.label}</div>
                  <p className="text-sth-grey font-inter text-sm leading-relaxed">{trend.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
