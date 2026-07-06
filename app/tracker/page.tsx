'use client'

import { useState, useMemo } from 'react'

type Tier = 'Care' | 'Preserve' | 'Legacy'
type Condition = 'Excellent' | 'Good' | 'Fair'

interface Statue {
  id: number
  deity: string
  owner: string
  age: number
  tier: Tier
  condition: Condition
  conditionNote: string
  lastCleaned: string
  yearsToAntique: number
  priority?: boolean
  priorityNote?: string
}

const statues: Statue[] = [
  { id: 1, deity: 'Guan Yin', owner: 'Tan Family', age: 67, tier: 'Care', condition: 'Good', conditionNote: '', lastCleaned: 'Jan 2026', yearsToAntique: 33 },
  { id: 2, deity: 'Guan Yu', owner: 'Lim Family', age: 45, tier: 'Legacy', condition: 'Excellent', conditionNote: '', lastCleaned: 'Mar 2026', yearsToAntique: 55 },
  { id: 3, deity: 'Tu Di Gong', owner: 'Wong Family', age: 78, tier: 'Preserve', condition: 'Fair', conditionNote: 'Minor restoration recommended', lastCleaned: 'Feb 2026', yearsToAntique: 22 },
  { id: 4, deity: 'Mazu', owner: 'Chen Family', age: 55, tier: 'Preserve', condition: 'Good', conditionNote: '', lastCleaned: 'Apr 2026', yearsToAntique: 45 },
  { id: 5, deity: 'Cai Shen', owner: 'Ng Family', age: 89, tier: 'Legacy', condition: 'Good', conditionNote: 'Approaching antique status', lastCleaned: 'Jan 2026', yearsToAntique: 11 },
  { id: 6, deity: 'Nezha', owner: 'Ong Family', age: 34, tier: 'Care', condition: 'Excellent', conditionNote: '', lastCleaned: 'May 2026', yearsToAntique: 66 },
  { id: 7, deity: 'Er Lang Shen', owner: 'Lee Family', age: 92, tier: 'Legacy', condition: 'Fair', conditionNote: 'Restoration scheduled', lastCleaned: 'Mar 2026', yearsToAntique: 8, priority: true, priorityNote: '8 years to antique — most urgent in collection' },
  { id: 8, deity: 'Guan Yin', owner: 'Tan Family (2)', age: 23, tier: 'Care', condition: 'Excellent', conditionNote: '', lastCleaned: 'Apr 2026', yearsToAntique: 77 },
  { id: 9, deity: 'Four Heavenly Kings', owner: 'Ho Family', age: 61, tier: 'Legacy', condition: 'Good', conditionNote: '', lastCleaned: 'Feb 2026', yearsToAntique: 39 },
  { id: 10, deity: 'Guan Yu', owner: 'Yeo Family', age: 71, tier: 'Preserve', condition: 'Good', conditionNote: '', lastCleaned: 'Jan 2026', yearsToAntique: 29 },
  { id: 11, deity: 'Tu Di Gong', owner: 'Koh Family', age: 44, tier: 'Care', condition: 'Excellent', conditionNote: '', lastCleaned: 'May 2026', yearsToAntique: 56 },
  { id: 12, deity: 'Mazu', owner: 'Chua Family', age: 83, tier: 'Legacy', condition: 'Fair', conditionNote: 'Humidity damage noted', lastCleaned: 'Mar 2026', yearsToAntique: 17, priority: true, priorityNote: 'Humidity damage — requires immediate climate assessment' },
]

const tierPrice: Record<Tier, number> = { Care: 50, Preserve: 120, Legacy: 280 }

const tierColors: Record<Tier, string> = {
  Care: 'bg-sth-grey/20 text-sth-grey border border-sth-grey/30',
  Preserve: 'bg-gold/15 text-gold border border-gold/40',
  Legacy: 'bg-sth-red/20 text-sth-red border border-sth-red/30',
}

const conditionColors: Record<Condition, string> = {
  Excellent: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  Good: 'bg-amber-50 text-amber-700 border border-amber-200',
  Fair: 'bg-red-100 text-red-700 border border-red-200',
}

const conditionDot: Record<Condition, string> = {
  Excellent: 'bg-emerald-500',
  Good: 'bg-amber-400',
  Fair: 'bg-red-500',
}

type SortKey = 'age' | 'tier' | 'condition'

export default function TrackerPage() {
  const [tierFilter, setTierFilter] = useState<'All' | Tier>('All')
  const [conditionFilter, setConditionFilter] = useState<'All' | Condition>('All')
  const [sortBy, setSortBy] = useState<SortKey>('age')
  const [restored, setRestored] = useState<number[]>([])

  const filtered = useMemo(() => {
    return statues
      .filter(s => (tierFilter === 'All' || s.tier === tierFilter) && (conditionFilter === 'All' || s.condition === conditionFilter))
      .sort((a, b) => {
        if (sortBy === 'age') return b.age - a.age
        if (sortBy === 'tier') return ['Care', 'Preserve', 'Legacy'].indexOf(a.tier) - ['Care', 'Preserve', 'Legacy'].indexOf(b.tier)
        if (sortBy === 'condition') return ['Fair', 'Good', 'Excellent'].indexOf(a.condition) - ['Fair', 'Good', 'Excellent'].indexOf(b.condition)
        return 0
      })
  }, [tierFilter, conditionFilter, sortBy])

  const priorityStatues = statues.filter(s => s.priority)

  // MRR calculation
  const tierCounts = { Care: 0, Preserve: 0, Legacy: 0 }
  statues.forEach(s => tierCounts[s.tier]++)
  const mrr = Object.entries(tierCounts).reduce((sum, [tier, count]) => sum + count * tierPrice[tier as Tier], 0)

  const approachingAntique = statues.filter(s => s.yearsToAntique <= 20).length

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-16 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[16rem] text-gold leading-none">管</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Internal Operations</div>
          <h1 className="font-playfair text-4xl lg:text-5xl text-cream mb-4">
            Custodianship Tracker
          </h1>
          <div className="gold-rule w-24 mb-6" />
          <p className="text-gold/40 font-inter text-sm max-w-2xl mb-8">
            This dashboard demonstrates the operational infrastructure required to scale the
            Custodianship programme to 50+ statues. All data is representative of a live programme.
          </p>

          {/* Summary stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Statues', value: '12', sub: 'under custodianship', color: 'border-gold' },
              { label: 'Monthly Recurring Revenue', value: `SGD $${mrr.toLocaleString()}`, sub: 'blended across all tiers', color: 'border-gold-light' },
              { label: 'Approaching Antique', value: String(approachingAntique), sub: 'statues within 20 years', color: 'border-sth-red' },
              { label: 'Require Attention', value: String(statues.filter(s => s.condition === 'Fair').length), sub: 'Fair condition statues', color: 'border-amber-400' },
            ].map(stat => (
              <div key={stat.label} className={`border-l-4 ${stat.color} bg-gold/5 px-5 py-4`}>
                <div className="text-gold/40 font-inter text-[9px] tracking-widest uppercase mb-1">{stat.label}</div>
                <div className="font-playfair text-2xl text-gold">{stat.value}</div>
                <div className="text-gold/30 font-inter text-[10px]">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

            {/* Main content */}
            <div className="xl:col-span-3 space-y-8">

              {/* Priority attention */}
              <div className="border-2 border-sth-red/40 bg-sth-red/5 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-sth-red animate-pulse" />
                  <div className="text-sth-red font-inter text-xs tracking-widest uppercase font-medium">Priority Attention Required</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {priorityStatues.map(s => (
                    <div key={s.id} className="bg-white border border-sth-red/20 p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-playfair text-lg text-ink">{s.deity}</div>
                          <div className="text-sth-grey font-inter text-xs">{s.owner} · {s.age} years old</div>
                        </div>
                        <span className={`font-inter text-[9px] tracking-widest uppercase px-2.5 py-1 ${tierColors[s.tier]}`}>{s.tier}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-2 h-2 rounded-full ${conditionDot[s.condition]}`} />
                        <span className="font-inter text-xs text-sth-red">{s.condition} — {s.conditionNote}</span>
                      </div>
                      <div className="text-sth-grey/70 font-inter text-[10px] italic">{s.priorityNote}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filters + Sort */}
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sth-grey font-inter text-[10px] tracking-widest uppercase self-center mr-1">Tier:</span>
                  {(['All', 'Care', 'Preserve', 'Legacy'] as const).map(t => (
                    <button
                      key={t}
                      onClick={() => setTierFilter(t)}
                      className={`px-3 py-1.5 font-inter text-[10px] tracking-widest uppercase border transition-colors ${
                        tierFilter === t ? 'bg-ink text-gold border-ink' : 'border-sth-grey/30 text-sth-grey hover:border-ink hover:text-ink'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sth-grey font-inter text-[10px] tracking-widest uppercase self-center mr-1">Condition:</span>
                  {(['All', 'Excellent', 'Good', 'Fair'] as const).map(c => (
                    <button
                      key={c}
                      onClick={() => setConditionFilter(c)}
                      className={`px-3 py-1.5 font-inter text-[10px] tracking-widest uppercase border transition-colors ${
                        conditionFilter === c ? 'bg-ink text-gold border-ink' : 'border-sth-grey/30 text-sth-grey hover:border-ink hover:text-ink'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sth-grey font-inter text-[10px] tracking-widest uppercase">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as SortKey)}
                    className="border border-parchment bg-cream text-ink font-inter text-xs px-3 py-1.5 focus:border-gold focus:outline-none"
                  >
                    <option value="age">Age (Oldest First)</option>
                    <option value="tier">Tier</option>
                    <option value="condition">Condition</option>
                  </select>
                </div>
              </div>

              {/* Statue rows */}
              <div className="space-y-3">
                {filtered.map(statue => (
                  <div
                    key={statue.id}
                    className={`bg-cream border p-5 flex flex-wrap lg:flex-nowrap items-start lg:items-center gap-4 justify-between ${
                      statue.priority ? 'border-sth-red/30' : 'border-parchment'
                    }`}
                  >
                    {/* Identity */}
                    <div className="min-w-[160px]">
                      <div className="font-playfair text-lg text-ink">{statue.deity}</div>
                      <div className="text-sth-grey font-inter text-xs">{statue.owner}</div>
                    </div>

                    {/* Age */}
                    <div className="text-center min-w-[70px]">
                      <div className="font-playfair text-2xl text-ink">{statue.age}</div>
                      <div className="text-sth-grey font-inter text-[9px]">years old</div>
                    </div>

                    {/* Tier */}
                    <div>
                      <span className={`font-inter text-[9px] tracking-widest uppercase px-3 py-1.5 ${tierColors[statue.tier]}`}>
                        {statue.tier}
                      </span>
                    </div>

                    {/* Condition */}
                    <div>
                      <div className={`flex items-center gap-2 font-inter text-[10px] px-3 py-1.5 ${conditionColors[statue.condition]}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${conditionDot[statue.condition]}`} />
                        <span>{statue.condition}</span>
                      </div>
                      {statue.conditionNote && (
                        <div className="text-sth-grey font-inter text-[9px] mt-1 italic">{statue.conditionNote}</div>
                      )}
                    </div>

                    {/* Last cleaned */}
                    <div className="text-center">
                      <div className="text-sth-grey font-inter text-[9px] uppercase tracking-widest mb-0.5">Last Cleaned</div>
                      <div className="font-inter text-xs text-ink">{statue.lastCleaned}</div>
                    </div>

                    {/* Years to antique */}
                    <div className="text-center min-w-[100px]">
                      <div className="text-sth-grey font-inter text-[9px] uppercase tracking-widest mb-0.5">Antique In</div>
                      <div className={`font-playfair text-xl ${statue.yearsToAntique <= 15 ? 'text-sth-red' : statue.yearsToAntique <= 25 ? 'text-amber-600' : 'text-ink'}`}>
                        {statue.yearsToAntique}
                        <span className="font-inter text-xs text-sth-grey ml-1">yrs</span>
                      </div>
                    </div>

                    {/* Action */}
                    <div>
                      {statue.condition === 'Fair' ? (
                        <button
                          onClick={() => setRestored(prev => [...prev, statue.id])}
                          className={`font-inter text-[10px] tracking-widest uppercase px-4 py-2 transition-colors ${
                            restored.includes(statue.id)
                              ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                              : 'border border-sth-red text-sth-red hover:bg-sth-red hover:text-cream'
                          }`}
                        >
                          {restored.includes(statue.id) ? '✓ Scheduled' : 'Schedule Restoration'}
                        </button>
                      ) : (
                        <div className="font-inter text-[10px] text-sth-grey/40 px-4 py-2">—</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-16 text-sth-grey font-inter text-sm">
                  No statues match the selected filters
                </div>
              )}
            </div>

            {/* Sidebar — Revenue panel */}
            <div className="space-y-6">
              <div className="bg-ink p-6">
                <div className="text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-6">Monthly Revenue Breakdown</div>

                <div className="space-y-4 mb-6">
                  {(['Care', 'Preserve', 'Legacy'] as Tier[]).map(tier => {
                    const count = tierCounts[tier]
                    const rev = count * tierPrice[tier]
                    return (
                      <div key={tier}>
                        <div className="flex justify-between text-xs font-inter mb-1.5">
                          <span className="text-gold/60">{tier} Tier × {count}</span>
                          <span className="text-cream">${rev.toLocaleString()}</span>
                        </div>
                        <div className="h-1.5 bg-gold/10 rounded-full">
                          <div
                            className="h-full bg-gold rounded-full"
                            style={{ width: `${(rev / mrr) * 100}%` }}
                          />
                        </div>
                        <div className="text-gold/25 font-inter text-[9px] mt-1">
                          {count} × SGD ${tierPrice[tier]}/mo
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="border-t border-gold/20 pt-4">
                  <div className="text-gold/40 font-inter text-[9px] tracking-widest uppercase mb-1">Total MRR</div>
                  <div className="font-playfair text-3xl text-gold">SGD ${mrr.toLocaleString()}</div>
                  <div className="text-gold/30 font-inter text-[9px] mt-1">per month</div>
                  <div className="text-gold-light font-playfair text-xl mt-2">${(mrr * 12).toLocaleString()}</div>
                  <div className="text-gold/30 font-inter text-[9px]">per year</div>
                </div>
              </div>

              {/* Antique watch */}
              <div className="bg-cream border border-parchment p-6">
                <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-4">Antique Watch List</div>
                <div className="space-y-3">
                  {statues
                    .filter(s => s.yearsToAntique <= 20)
                    .sort((a, b) => a.yearsToAntique - b.yearsToAntique)
                    .map(s => (
                      <div key={s.id} className="flex justify-between items-center">
                        <div>
                          <div className="font-inter text-xs text-ink">{s.deity}</div>
                          <div className="font-inter text-[9px] text-sth-grey">{s.owner}</div>
                        </div>
                        <div className={`font-playfair text-lg ${s.yearsToAntique <= 10 ? 'text-sth-red' : 'text-amber-600'}`}>
                          {s.yearsToAntique}y
                        </div>
                      </div>
                    ))}
                </div>
                <div className="border-t border-parchment mt-4 pt-4">
                  <p className="text-sth-grey font-inter text-[9px] leading-relaxed">
                    Statues reaching 100 years qualify for antique status, significantly increasing heritage value.
                    Legacy Tier custodianship includes formal valuation at the 80-year milestone.
                  </p>
                </div>
              </div>

              {/* Tier distribution */}
              <div className="bg-cream border border-parchment p-6">
                <div className="text-sth-grey font-inter text-[10px] tracking-widest uppercase mb-4">Tier Distribution</div>
                {(['Care', 'Preserve', 'Legacy'] as Tier[]).map(tier => (
                  <div key={tier} className="flex items-center gap-3 mb-3">
                    <span className={`font-inter text-[9px] tracking-widest uppercase px-2.5 py-1 min-w-[64px] text-center ${tierColors[tier]}`}>{tier}</span>
                    <div className="flex-1 h-1.5 bg-parchment rounded-full">
                      <div
                        className="h-full bg-gold rounded-full"
                        style={{ width: `${(tierCounts[tier] / 12) * 100}%` }}
                      />
                    </div>
                    <span className="text-ink font-inter text-xs w-4 text-right">{tierCounts[tier]}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
