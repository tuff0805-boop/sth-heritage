'use client'

import { useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Cell, Legend,
} from 'recharts'

const GOLD = '#B8860B'
const GOLD_L = '#D4A843'
const RED = '#8B1A1A'
const GREY = '#6B6355'
const TEAL = '#0D9488'

type ScenarioKey = 'downside' | 'base' | 'upside'

interface Scenario {
  key: ScenarioKey
  label: string
  sublabel: string
  custodianshipMRR: number
  heritageMRR: number
  commissionMRR: number
  totalMRR: number
  annualRevenue: number
  upliftPct: number
  upliftMultiple: number
  custodianshipDetail: string
  heritageDetail: string
  commissionDetail: string
  insight: string
  color: string
  textColor: string
}

const CURRENT_MONTHLY = 8000

const scenarios: Record<ScenarioKey, Scenario> = {
  downside: {
    key: 'downside',
    label: 'Downside',
    sublabel: 'Conservative — slow market adoption',
    custodianshipMRR: 1180,
    heritageMRR: 2400,
    commissionMRR: 5000,
    totalMRR: 8580,
    annualRevenue: 8580 * 12,
    upliftPct: 7,
    upliftMultiple: 1.07,
    custodianshipDetail: '10 statues · 60% Care $50 · 30% Preserve $120 · 10% Legacy $280',
    heritageDetail: '5 pieces/month at SGD $480 average',
    commissionDetail: '2/month at SGD $2,500',
    insight: 'Even in the most conservative scenario, STH is at breakeven-plus — and has created a recurring revenue foundation that did not exist before. The Custodianship programme\'s $1,180 MRR is pure new revenue with low incremental cost.',
    color: 'bg-sth-grey',
    textColor: 'text-sth-grey',
  },
  base: {
    key: 'base',
    label: 'Base Case',
    sublabel: 'Expected — 12 months post-launch',
    custodianshipMRR: 3580,
    heritageMRR: 9600,
    commissionMRR: 10000,
    totalMRR: 23180,
    annualRevenue: 23180 * 12,
    upliftPct: 190,
    upliftMultiple: 2.9,
    custodianshipDetail: '50 statues · 50% Care $50 · 30% Preserve $120 · 20% Legacy $280',
    heritageDetail: '20 pieces/month at SGD $480 average',
    commissionDetail: '4/month at SGD $2,500',
    insight: 'The base case reflects conservative word-of-mouth adoption with no paid marketing. At 50 custodian statues — less than 1 per week acquired over 12 months — the recurring revenue floor of $3,580/month transforms STH\'s financial profile from purely transactional to hybrid-subscription.',
    color: 'bg-gold',
    textColor: 'text-gold',
  },
  upside: {
    key: 'upside',
    label: 'Upside',
    sublabel: 'Optimistic — strong international traction',
    custodianshipMRR: 9000,
    heritageMRR: 20800,
    commissionMRR: 16800,
    totalMRR: 46600,
    annualRevenue: 46600 * 12,
    upliftPct: 483,
    upliftMultiple: 5.8,
    custodianshipDetail: '100 statues · 40% Care $50 · 35% Preserve $120 · 25% Legacy $280',
    heritageDetail: '40 pieces/month at SGD $520 blended average (premium mix)',
    commissionDetail: '6/month at SGD $2,800 (premium sizing uplift)',
    insight: 'The upside scenario is unlocked primarily by international Heritage Collection traction — it does not require more custodianship growth, only e-commerce scale. The $16,800/month commission figure reflects a modest 2× increase in commission volume, which becomes achievable once international discovery drives inbound enquiries.',
    color: 'bg-sth-red',
    textColor: 'text-sth-red',
  },
}

function formatSGD(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1000).toFixed(1)}K`
  return `$${n}`
}

const comparisonData = [
  { name: 'Current Model', value: CURRENT_MONTHLY, fill: GREY },
  { name: 'Downside', value: 8580, fill: GREY },
  { name: 'Base Case', value: 23180, fill: GOLD },
  { name: 'Upside', value: 46600, fill: RED },
]

export default function FinancialsPage() {
  const [active, setActive] = useState<ScenarioKey>('base')
  const s = scenarios[active]

  const breakdownData = [
    { name: 'Custodianship', value: s.custodianshipMRR, fill: TEAL },
    { name: 'Heritage Collection', value: s.heritageMRR, fill: GOLD_L },
    { name: 'Commissions', value: s.commissionMRR, fill: RED },
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[16rem] text-gold leading-none">財</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Financial Modelling</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            Revenue Sensitivity<br />
            <span className="text-gold italic">Analysis</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            Three scenarios modelled across all revenue streams. Current model estimated at
            SGD $8,000/month. All figures in SGD. Zero paid marketing spend assumed.
          </p>
        </div>
      </section>

      {/* Scenario toggles */}
      <section className="bg-parchment border-b border-gold/10 py-8 px-6 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {(Object.values(scenarios) as Scenario[]).map(sc => (
              <button
                key={sc.key}
                onClick={() => setActive(sc.key)}
                className={`border-2 px-4 py-4 text-center transition-all ${
                  active === sc.key
                    ? sc.key === 'downside'
                      ? 'border-sth-grey bg-sth-grey text-cream'
                      : sc.key === 'base'
                      ? 'border-gold bg-gold text-ink'
                      : 'border-sth-red bg-sth-red text-cream'
                    : 'border-parchment bg-cream text-ink hover:border-sth-grey/40'
                }`}
              >
                <div className="font-inter text-[10px] tracking-widest uppercase mb-1">{sc.label}</div>
                <div className={`font-inter text-[9px] ${active === sc.key ? 'opacity-70' : 'text-sth-grey'}`}>{sc.sublabel}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main scenario display */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left: numbers */}
            <div className="space-y-6">
              {/* Headline numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ink p-7 border-l-4 border-gold">
                  <div className="text-gold/40 font-inter text-[9px] tracking-widest uppercase mb-2">Monthly Revenue</div>
                  <div className="font-playfair text-3xl text-gold">{formatSGD(s.totalMRR)}</div>
                  <div className="text-gold/30 font-inter text-[10px] mt-1">SGD / month</div>
                </div>
                <div className="bg-ink p-7 border-l-4 border-gold-light">
                  <div className="text-gold/40 font-inter text-[9px] tracking-widest uppercase mb-2">Annual Revenue</div>
                  <div className="font-playfair text-3xl text-gold-light">{formatSGD(s.annualRevenue)}</div>
                  <div className="text-gold/30 font-inter text-[10px] mt-1">SGD / year</div>
                </div>
              </div>

              {/* Uplift */}
              <div className="bg-ink p-6 border border-gold/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-gold/30 font-inter text-[9px] uppercase tracking-widest mb-1">Current Model</div>
                    <div className="font-playfair text-xl text-gold/50">{formatSGD(CURRENT_MONTHLY)}/mo</div>
                  </div>
                  <div className="border-x border-gold/20">
                    <div className="text-gold/30 font-inter text-[9px] uppercase tracking-widest mb-1">Revenue Uplift</div>
                    <div className="font-playfair text-3xl text-gold">{s.upliftMultiple}×</div>
                    <div className="text-gold/40 font-inter text-[9px]">+{s.upliftPct}%</div>
                  </div>
                  <div>
                    <div className="text-gold/30 font-inter text-[9px] uppercase tracking-widest mb-1">New Monthly</div>
                    <div className="font-playfair text-xl text-gold-light">{formatSGD(s.totalMRR)}/mo</div>
                  </div>
                </div>
              </div>

              {/* Recurring Revenue Floor callout */}
              <div className="border-2 border-teal-600 bg-teal-950/20 p-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                  <div>
                    <div className="font-inter text-[10px] tracking-widest uppercase text-teal-400 mb-2">Recurring Revenue Floor</div>
                    <div className="font-playfair text-2xl text-teal-300 mb-1">{formatSGD(s.custodianshipMRR)}<span className="font-inter text-sm text-teal-500 ml-1">/month</span></div>
                    <div className="font-inter text-xs text-teal-400/60 mt-1">Custodianship MRR — guaranteed monthly income independent of commission volume</div>
                  </div>
                </div>
              </div>

              {/* Stream breakdown */}
              <div className="bg-cream border border-parchment p-6 space-y-4">
                <div className="text-sth-grey font-inter text-[9px] tracking-widest uppercase mb-2">Revenue Stream Detail</div>
                {[
                  { label: 'Sacred Custodianship', value: s.custodianshipMRR, detail: s.custodianshipDetail, pct: s.totalMRR > 0 ? s.custodianshipMRR / s.totalMRR * 100 : 0, color: TEAL },
                  { label: 'Heritage Collection', value: s.heritageMRR, detail: s.heritageDetail, pct: s.totalMRR > 0 ? s.heritageMRR / s.totalMRR * 100 : 0, color: GOLD_L },
                  { label: 'Artisan Commissions', value: s.commissionMRR, detail: s.commissionDetail, pct: s.totalMRR > 0 ? s.commissionMRR / s.totalMRR * 100 : 0, color: RED },
                ].map(row => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs font-inter mb-0.5">
                      <span className="text-sth-grey">{row.label}</span>
                      <span className="text-ink font-medium">{formatSGD(row.value)}</span>
                    </div>
                    <div className="h-1.5 bg-parchment rounded-full mb-1">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${row.pct}%`, backgroundColor: row.color }} />
                    </div>
                    <div className="text-sth-grey/50 font-inter text-[9px]">{row.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: charts */}
            <div className="space-y-8">
              {/* Breakdown bar */}
              <div className="bg-ink p-6">
                <div className="text-gold/50 font-inter text-[9px] tracking-widest uppercase mb-4">Monthly Revenue Breakdown — {s.label}</div>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={breakdownData} barCategoryGap="30%">
                    <XAxis dataKey="name" tick={{ fill: '#6B6355', fontSize: 10, fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#6B6355', fontSize: 9, fontFamily: 'Inter' }} tickFormatter={v => formatSGD(v)} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: '#1A1208', border: '1px solid #B8860B40', borderRadius: 0, color: '#D4A843', fontFamily: 'Inter' }}
                      formatter={(v: number) => [formatSGD(v), 'Revenue']}
                    />
                    <Bar dataKey="value" radius={0}>
                      {breakdownData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* All-scenarios comparison */}
              <div className="bg-ink p-6">
                <div className="text-gold/50 font-inter text-[9px] tracking-widest uppercase mb-4">All Scenarios vs. Current Model</div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={comparisonData} barCategoryGap="30%">
                    <XAxis dataKey="name" tick={{ fill: '#6B6355', fontSize: 9, fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#6B6355', fontSize: 9, fontFamily: 'Inter' }} tickFormatter={v => formatSGD(v)} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: '#1A1208', border: '1px solid #B8860B40', borderRadius: 0, color: '#D4A843', fontFamily: 'Inter' }}
                      formatter={(v: number) => [formatSGD(v), 'Monthly Revenue']}
                    />
                    <Bar dataKey="value" radius={0}>
                      {comparisonData.map((entry, i) => <Cell key={i} fill={entry.fill} opacity={i === 0 ? 0.5 : 1} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Key insight */}
              <div className="border border-gold/30 p-6 bg-gold/5">
                <div className="text-gold/50 font-inter text-[9px] tracking-widest uppercase mb-3">Key Insight — {s.label}</div>
                <p className="font-inter text-xs text-gold/60 leading-relaxed">{s.insight}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assumptions */}
      <section className="bg-parchment py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-8">Model Assumptions</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Current model estimated at SGD $8,000/month based on industry benchmarks for single-artisan commission businesses in Singapore',
              'Heritage Collection pricing benchmarked against comparable Southeast Asian craft export markets (Mudmee Thai silk, Batik workshop pieces, Malaysian pewter accessories)',
              'Custodianship adoption modelled conservatively — zero paid marketing spend assumed across all three scenarios',
              'Upside scenario Heritage Collection average price of $520 reflects a premium product mix shift as international collectors self-select higher tiers',
              'Commission volume uplifts in Base ($10K) and Upside ($16.8K) scenarios reflect international discovery driving inbound enquiries — not new sales capacity',
              'All figures in SGD. No capital expenditure costs are modelled — this is a pure revenue illustration for indicative purposes',
            ].map((note, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-gold shrink-0 mt-0.5">—</span>
                <span className="font-inter text-xs text-sth-grey leading-relaxed">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
