'use client'

import { useState, useMemo } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend,
} from 'recharts'

const GOLD = '#B8860B'
const GOLD_L = '#D4A843'
const RED = '#8B1A1A'
const GREY = '#6B6355'
const CREAM = '#F7F3EC'

function formatSGD(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1000).toFixed(1)}K`
  return `$${n.toFixed(0)}`
}

function SliderRow({
  label, sub, value, min, max, step, onChange, color,
}: {
  label: string; sub: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; color: string
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-2">
        <div>
          <div className="font-inter text-sm font-medium text-cream">{label}</div>
          <div className="font-inter text-[10px] text-gold/40">{sub}</div>
        </div>
        <div className="font-playfair text-2xl text-gold">{value}</div>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-1 rounded-full appearance-none cursor-pointer"
        style={{ accentColor: color, background: `linear-gradient(to right, ${color} ${(value - min) / (max - min) * 100}%, #2a2010 ${(value - min) / (max - min) * 100}%)` }}
      />
      <div className="flex justify-between text-[9px] font-inter text-gold/20 mt-1">
        <span>{min}</span><span>{max}</span>
      </div>
    </div>
  )
}

export default function RevenuePage() {
  const [custodians, setCustodians] = useState(60)
  const [miniatures, setMiniatures] = useState(30)
  const [commissions, setCommissions] = useState(4)
  const [tours, setTours] = useState(8)

  const revenue = useMemo(() => {
    // Custodianship: 50% Care $50, 30% Preserve $120, 20% Legacy $280
    const custodianship = custodians * (0.5 * 50 + 0.3 * 120 + 0.2 * 280)
    // Heritage collection miniatures at avg $480
    const heritage = miniatures * 480
    // Commissions at avg $2,500
    const commission = commissions * 2500
    // Tours: avg 8 people × $45
    const tourRevenue = tours * 8 * 45

    const totalMonthly = custodianship + heritage + commission + tourRevenue
    const totalAnnual = totalMonthly * 12

    // Current model: only commissions (est 2 per month historically)
    const currentMonthly = 2 * 2500
    const currentAnnual = currentMonthly * 12

    return {
      custodianship,
      heritage,
      commission,
      tourRevenue,
      totalMonthly,
      totalAnnual,
      currentMonthly,
      currentAnnual,
      uplift: totalAnnual / currentAnnual,
    }
  }, [custodians, miniatures, commissions, tours])

  const pieData = [
    { name: 'Custodianship', value: Math.round(revenue.custodianship), color: GOLD },
    { name: 'Heritage Collection', value: Math.round(revenue.heritage), color: GOLD_L },
    { name: 'Commissions', value: Math.round(revenue.commission), color: RED },
    { name: 'Tours', value: Math.round(revenue.tourRevenue), color: GREY },
  ].filter(d => d.value > 0)

  const barData = [
    { month: 'Current', revenue: revenue.currentMonthly },
    { month: 'Proposed', revenue: revenue.totalMonthly },
  ]

  const annualBarData = [
    {
      name: 'Annual Revenue',
      current: revenue.currentAnnual,
      proposed: revenue.totalAnnual,
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Financial Model</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            Revenue<br />
            <span className="text-gold italic">Model Calculator</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            Model STH&apos;s proposed new revenue streams in real time. Adjust the sliders to
            see how each pillar contributes — and how recurring Custodianship revenue transforms
            the financial profile of a traditionally commission-only business.
          </p>
        </div>
      </section>

      {/* Key callout */}
      <section className="bg-sth-red py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-playfair text-xl text-cream italic">
            &ldquo;Custodianship creates STH&apos;s first-ever recurring revenue stream&rdquo;
          </div>
          <div className="text-cream/60 font-inter text-xs mt-2">
            Moving from purely transactional to subscription-based income — a fundamental business model transformation
          </div>
        </div>
      </section>

      {/* Main calculator */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sliders panel */}
            <div className="bg-ink p-10">
              <div className="text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-8">Adjust Parameters</div>

              <SliderRow
                label="Statues in Custodianship"
                sub="50% Care $50 · 30% Preserve $120 · 20% Legacy $280"
                value={custodians} min={0} max={200} step={5}
                onChange={setCustodians} color={GOLD}
              />
              <SliderRow
                label="Heritage Collection Sales / Month"
                sub="Average SGD $480 per piece"
                value={miniatures} min={0} max={100} step={5}
                onChange={setMiniatures} color={GOLD_L}
              />
              <SliderRow
                label="Commission Statues / Month"
                sub="Average SGD $2,500 per commission"
                value={commissions} min={0} max={10} step={1}
                onChange={setCommissions} color={RED}
              />
              <SliderRow
                label="Heritage Tours / Month"
                sub="SGD $45/person · 8 people average"
                value={tours} min={0} max={20} step={1}
                onChange={setTours} color={GREY}
              />
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Big numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ink p-8 border-l-4 border-gold">
                  <div className="text-gold/50 font-inter text-[10px] tracking-widest uppercase mb-2">Monthly Revenue</div>
                  <div className="font-playfair text-3xl text-gold">{formatSGD(revenue.totalMonthly)}</div>
                  <div className="text-gold/30 font-inter text-[10px] mt-1">SGD per month</div>
                </div>
                <div className="bg-ink p-8 border-l-4 border-gold-light">
                  <div className="text-gold/50 font-inter text-[10px] tracking-widest uppercase mb-2">Annual Revenue</div>
                  <div className="font-playfair text-3xl text-gold-light">{formatSGD(revenue.totalAnnual)}</div>
                  <div className="text-gold/30 font-inter text-[10px] mt-1">SGD per year</div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-cream border border-parchment p-6">
                <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-4">Monthly Breakdown</div>
                <div className="space-y-3">
                  {[
                    { label: 'Sacred Custodianship', value: revenue.custodianship, color: GOLD, pct: revenue.totalMonthly > 0 ? revenue.custodianship / revenue.totalMonthly * 100 : 0 },
                    { label: 'Heritage Collection', value: revenue.heritage, color: GOLD_L, pct: revenue.totalMonthly > 0 ? revenue.heritage / revenue.totalMonthly * 100 : 0 },
                    { label: 'Artisan Commissions', value: revenue.commission, color: RED, pct: revenue.totalMonthly > 0 ? revenue.commission / revenue.totalMonthly * 100 : 0 },
                    { label: 'Heritage Tours', value: revenue.tourRevenue, color: GREY, pct: revenue.totalMonthly > 0 ? revenue.tourRevenue / revenue.totalMonthly * 100 : 0 },
                  ].map(row => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs font-inter mb-1">
                        <span className="text-sth-grey">{row.label}</span>
                        <span className="text-ink font-medium">{formatSGD(row.value)}</span>
                      </div>
                      <div className="h-1.5 bg-parchment rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${row.pct}%`, backgroundColor: row.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* vs Current */}
              <div className="bg-ink p-6 border border-gold/20">
                <div className="text-gold/50 font-inter text-[10px] tracking-widest uppercase mb-4">vs. Current Model</div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sth-grey font-inter text-[9px] uppercase tracking-widest mb-1">Current Annual</div>
                    <div className="font-playfair text-xl text-gold/50">{formatSGD(revenue.currentAnnual)}</div>
                  </div>
                  <div className="border-x border-gold/20 flex items-center justify-center">
                    <div>
                      <div className="text-sth-grey font-inter text-[9px] uppercase tracking-widest mb-1">Revenue Uplift</div>
                      <div className="font-playfair text-3xl text-gold">{revenue.uplift.toFixed(1)}×</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sth-grey font-inter text-[9px] uppercase tracking-widest mb-1">Proposed Annual</div>
                    <div className="font-playfair text-xl text-gold-light">{formatSGD(revenue.totalAnnual)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="bg-ink py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bar: current vs proposed */}
            <div>
              <div className="text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-6">Monthly Revenue: Current vs. Proposed</div>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={barData} barCategoryGap="40%">
                  <XAxis dataKey="month" tick={{ fill: '#6B6355', fontSize: 11, fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#6B6355', fontSize: 10, fontFamily: 'Inter' }} tickFormatter={v => formatSGD(v)} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#1A1208', border: '1px solid #B8860B40', borderRadius: 0, color: '#D4A843' }}
                    formatter={(v: number) => [formatSGD(v), 'Revenue']}
                    labelStyle={{ color: '#B8860B', fontFamily: 'serif' }}
                  />
                  <Bar dataKey="revenue" radius={0}>
                    <Cell fill={GREY} />
                    <Cell fill={GOLD} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie: stream breakdown */}
            <div>
              <div className="text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-6">Revenue Stream Breakdown</div>
              {revenue.totalMonthly > 0 ? (
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      innerRadius={45}
                    >
                      {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    </Pie>
                    <Legend
                      iconType="square"
                      iconSize={8}
                      wrapperStyle={{ fontFamily: 'Inter', fontSize: 10, color: '#6B6355' }}
                    />
                    <Tooltip
                      contentStyle={{ background: '#1A1208', border: '1px solid #B8860B40', borderRadius: 0, color: '#D4A843' }}
                      formatter={(v: number) => [formatSGD(v), '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[260px] flex items-center justify-center text-gold/30 font-inter text-sm">
                  Adjust sliders to see breakdown
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Assumptions */}
      <section className="bg-parchment py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-8">Model Assumptions</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Custodianship tier split: 50% Care ($50), 30% Preserve ($120), 20% Legacy ($280)',
              'Heritage Collection average selling price: SGD $480 (blended across miniature range)',
              'Artisan Commission average: SGD $2,500 (30cm–60cm standard statues)',
              'Heritage Tour: SGD $45/person × 8 persons average group size',
              'Current model baseline: 2 commissions/month × SGD $2,500 = SGD $5,000/month',
              'No infrastructure cost model included — pure revenue illustration',
            ].map(note => (
              <div key={note} className="flex items-start gap-3">
                <span className="text-gold mt-0.5 shrink-0">—</span>
                <span className="font-inter text-xs text-sth-grey leading-relaxed">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
