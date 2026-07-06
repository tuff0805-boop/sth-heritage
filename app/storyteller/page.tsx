'use client'

import { useState } from 'react'

const DEITIES = [
  'Guan Yu', 'Guan Yin', 'Tu Di Gong', 'Mazu', 'Nezha',
  'Cai Shen', 'Er Lang Shen', 'Four Heavenly Kings',
]

const SIZES = [
  { value: 'Small — palm-sized (under 20cm)', label: 'Small', sub: 'Palm-sized · under 20cm' },
  { value: 'Medium — forearm-sized (20–50cm)', label: 'Medium', sub: 'Forearm-sized · 20–50cm' },
  { value: 'Large — seated height (50cm+)', label: 'Large', sub: 'Seated height · 50cm+' },
]

const MATERIALS = ['Teak', 'Camphor Wood', 'Pine', 'Mixed Hardwood']

const AUDIENCES = [
  { value: 'Devotee — spiritual focus, emphasise sacred power and ritual significance', label: 'Devotee', sub: 'Spiritual focus' },
  { value: 'Collector — cultural focus, emphasise heritage, craft, and artisan provenance', label: 'Collector', sub: 'Cultural focus' },
  { value: 'Gift — emotional focus, emphasise the personal meaning and story of the piece', label: 'Gift', sub: 'Emotional focus' },
]

type ProvenanceCardProps = {
  deity: string
  story: string
  onClose: () => void
}

function ProvenanceCard({ deity, story, onClose }: ProvenanceCardProps) {
  const refNo = `STH-PROV-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
  const date = new Date().toLocaleDateString('en-SG', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-6" onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="max-w-lg w-full">
        <div className="bg-ink border-2 border-gold/60 p-8 relative overflow-hidden">
          {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map(pos => (
            <div key={pos} className={`absolute ${pos} text-gold/40 font-playfair text-lg`}>✦</div>
          ))}
          <div className="absolute inset-4 border border-gold/15 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
            <span className="font-playfair text-[12rem] text-gold leading-none">說</span>
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-gold mb-4">
              <span className="font-playfair text-gold text-xl">說</span>
            </div>
            <div className="text-gold/50 font-inter text-[8px] tracking-[0.3em] uppercase mb-1">Say Tian Hng Heritage House · Est. 1841</div>
            <div className="font-playfair text-cream text-xl mb-1">Certificate of Provenance</div>
            <div className="gold-rule w-20 mx-auto mb-5" />

            <div className="font-playfair text-gold text-3xl mb-5">{deity}</div>

            <div className="border border-gold/20 p-4 mb-5 bg-gold/5">
              <div className="text-gold/40 font-inter text-[8px] tracking-widest uppercase mb-2">Provenance Story</div>
              <p className="text-gold/60 font-inter text-[10px] leading-relaxed italic">{story}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-5">
              {[
                ['Craftsman', 'Master Wee Ah Kow, 6th Gen.'],
                ['Workshop', 'Waterloo Street, Singapore'],
                ['Date', date],
                ['Reference', refNo],
              ].map(([k, v]) => (
                <div key={k} className="border border-gold/20 p-2.5">
                  <div className="text-gold/30 font-inter text-[7px] tracking-widest uppercase mb-0.5">{k}</div>
                  <div className="text-cream font-inter text-[9px]">{v}</div>
                </div>
              ))}
            </div>

            <div className="gold-rule w-20 mx-auto mb-3" />
            <div className="text-gold/25 font-inter text-[8px]">190 Waterloo Street, Singapore 187965</div>

            <button onClick={onClose} className="mt-6 px-6 py-2 border border-gold/30 text-gold/60 font-inter text-[10px] tracking-widest uppercase hover:border-gold hover:text-gold transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function StorytellerPage() {
  const [form, setForm] = useState({
    deity: 'Guan Yu',
    age: 30,
    size: SIZES[1].value,
    material: 'Camphor Wood',
    audience: AUDIENCES[0].value,
    notes: '',
  })
  const [loading, setLoading] = useState(false)
  const [story, setStory] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [showCard, setShowCard] = useState(false)

  function set(k: string, v: string | number) {
    setForm(prev => ({ ...prev, [k]: v }))
  }

  async function generate() {
    setLoading(true)
    setStory('')
    setError('')
    try {
      const res = await fetch('/api/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Generation failed')
      setStory(data.story)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setLoading(false)
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(story).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="pt-16">
      {showCard && story && (
        <ProvenanceCard deity={form.deity} story={story} onClose={() => setShowCard(false)} />
      )}

      {/* Hero */}
      <section className="bg-ink py-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[18rem] text-gold leading-none">故</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase">AI Provenance Tool</div>
            <span className="bg-gold/20 text-gold font-inter text-[8px] tracking-widest uppercase px-2 py-1">Powered by Claude</span>
          </div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            Heritage Story<br />
            <span className="text-gold italic">Generator</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            Enter a statue&apos;s details and Claude AI will generate a romanticised provenance story —
            ready for e-commerce product descriptions, provenance cards, and international collectors.
            STH&apos;s sacred craft knowledge, translated into words that resonate globally.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-ink p-8 lg:p-10">
              <div className="text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-8">Statue Details</div>

              {/* Deity */}
              <div className="mb-6">
                <label className="block text-gold/50 font-inter text-[10px] tracking-widest uppercase mb-2">Sacred Deity</label>
                <select
                  value={form.deity}
                  onChange={e => set('deity', e.target.value)}
                  className="w-full bg-ink border border-gold/30 text-cream font-inter text-sm px-4 py-3 focus:border-gold focus:outline-none transition-colors"
                >
                  {DEITIES.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              {/* Age slider */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-gold/50 font-inter text-[10px] tracking-widest uppercase">Approximate Age</label>
                  <span className="font-playfair text-2xl text-gold">{form.age} <span className="font-inter text-sm text-gold/40">years</span></span>
                </div>
                <input
                  type="range" min={1} max={100} step={1}
                  value={form.age}
                  onChange={e => set('age', Number(e.target.value))}
                  className="w-full h-1 appearance-none cursor-pointer rounded-full"
                  style={{ accentColor: '#B8860B', background: `linear-gradient(to right, #B8860B ${form.age}%, #2a2010 ${form.age}%)` }}
                />
                <div className="flex justify-between text-[9px] font-inter text-gold/20 mt-1"><span>1 yr</span><span>100 yrs</span></div>
              </div>

              {/* Size */}
              <div className="mb-6">
                <label className="block text-gold/50 font-inter text-[10px] tracking-widest uppercase mb-2">Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {SIZES.map(s => (
                    <label key={s.value} className="cursor-pointer">
                      <input type="radio" name="size" value={s.value} checked={form.size === s.value} onChange={e => set('size', e.target.value)} className="sr-only" />
                      <div className={`border p-3 text-center transition-colors ${form.size === s.value ? 'border-gold bg-gold/10' : 'border-gold/20 hover:border-gold/40'}`}>
                        <div className="text-gold font-playfair text-sm">{s.label}</div>
                        <div className="text-gold/30 font-inter text-[9px]">{s.sub}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <label className="block text-gold/50 font-inter text-[10px] tracking-widest uppercase mb-2">Primary Material</label>
                <div className="grid grid-cols-2 gap-2">
                  {MATERIALS.map(m => (
                    <label key={m} className="cursor-pointer">
                      <input type="radio" name="material" value={m} checked={form.material === m} onChange={e => set('material', e.target.value)} className="sr-only" />
                      <div className={`border p-3 text-center transition-colors ${form.material === m ? 'border-gold bg-gold/10' : 'border-gold/20 hover:border-gold/40'}`}>
                        <div className="text-gold/70 font-inter text-xs">{m}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Audience */}
              <div className="mb-6">
                <label className="block text-gold/50 font-inter text-[10px] tracking-widest uppercase mb-2">Intended Audience</label>
                <div className="space-y-2">
                  {AUDIENCES.map(a => (
                    <label key={a.value} className="cursor-pointer flex items-center gap-3">
                      <input type="radio" name="audience" value={a.value} checked={form.audience === a.value} onChange={e => set('audience', e.target.value)} className="sr-only" />
                      <div className={`flex-1 border p-3 flex justify-between items-center transition-colors ${form.audience === a.value ? 'border-gold bg-gold/10' : 'border-gold/20 hover:border-gold/40'}`}>
                        <div className="text-gold font-inter text-sm">{a.label}</div>
                        <div className="text-gold/30 font-inter text-[10px]">{a.sub}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="mb-8">
                <label className="block text-gold/50 font-inter text-[10px] tracking-widest uppercase mb-2">Special Notes (Optional)</label>
                <textarea
                  value={form.notes}
                  onChange={e => set('notes', e.target.value)}
                  placeholder="e.g. commissioned for a French interior designer, family heirloom being rehomed, corporate boardroom installation…"
                  rows={3}
                  className="w-full bg-transparent border border-gold/30 text-cream font-inter text-sm px-4 py-3 placeholder-gold/20 focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                onClick={generate}
                disabled={loading}
                className="w-full bg-gold text-ink font-inter text-xs tracking-widest uppercase font-medium py-4 hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin" />
                    Claude is writing your story…
                  </>
                ) : (
                  'Generate Provenance Story'
                )}
              </button>

              <p className="text-gold/25 font-inter text-[10px] text-center mt-4 leading-relaxed">
                Powered by Claude AI — this tool helps STH&apos;s craftsmen translate their sacred knowledge
                into stories that resonate with international collectors
              </p>
            </div>

            {/* Output */}
            <div className="flex flex-col gap-6">
              {/* Story output */}
              <div className={`flex-1 border-2 ${story ? 'border-gold/40' : 'border-parchment'} relative transition-all`}>
                {!story && !loading && !error && (
                  <div className="p-12 text-center h-full flex flex-col items-center justify-center min-h-[300px]">
                    <div className="text-parchment font-playfair text-6xl mb-6 opacity-40">故</div>
                    <div className="text-sth-grey font-inter text-sm">
                      Fill in the statue details and generate a provenance story
                    </div>
                    <div className="text-sth-grey/50 font-inter text-xs mt-2">
                      The story will appear here
                    </div>
                  </div>
                )}

                {loading && (
                  <div className="p-12 text-center h-full flex flex-col items-center justify-center min-h-[300px]">
                    <div className="text-gold font-playfair text-4xl mb-6 animate-pulse">說</div>
                    <div className="text-sth-grey font-inter text-sm">Claude is crafting your story…</div>
                    <div className="text-sth-grey/40 font-inter text-xs mt-2 italic">
                      Drawing on 184 years of sacred craft knowledge
                    </div>
                  </div>
                )}

                {error && (
                  <div className="p-8">
                    <div className="border-l-4 border-sth-red bg-sth-red/5 p-6">
                      <div className="text-sth-red font-inter text-xs font-medium mb-1">Generation Error</div>
                      <div className="text-sth-red/70 font-inter text-xs">{error}</div>
                      <div className="text-sth-grey font-inter text-[10px] mt-3">
                        Ensure ANTHROPIC_API_KEY is set in your .env.local file.
                      </div>
                    </div>
                  </div>
                )}

                {story && !loading && (
                  <div className="bg-parchment p-8 h-full">
                    {/* Parchment header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center">
                        <span className="text-gold font-playfair text-xs">說</span>
                      </div>
                      <div>
                        <div className="text-sth-grey font-inter text-[9px] tracking-widest uppercase">Generated Provenance Story</div>
                        <div className="text-sth-grey/60 font-inter text-[9px]">{form.deity} · {form.age} years · {form.material}</div>
                      </div>
                    </div>
                    <div className="gold-rule mb-6 w-16" />
                    <blockquote className="font-playfair text-lg italic text-ink leading-relaxed">
                      {story}
                    </blockquote>
                    <div className="gold-rule mt-6 mb-6 w-16" />
                    <div className="text-sth-grey/40 font-inter text-[9px]">
                      Generated by Claude AI · Say Tian Hng Heritage Collective · {new Date().toLocaleDateString('en-SG')}
                    </div>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              {story && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={copyToClipboard}
                    className="flex-1 border border-ink text-ink font-inter text-[10px] tracking-widest uppercase py-3 hover:bg-ink hover:text-cream transition-colors"
                  >
                    {copied ? '✓ Copied' : 'Copy to Clipboard'}
                  </button>
                  <button
                    onClick={() => setShowCard(true)}
                    className="flex-1 bg-ink text-cream font-inter text-[10px] tracking-widest uppercase py-3 hover:bg-sth-red transition-colors"
                  >
                    Generate Provenance Card
                  </button>
                </div>
              )}

              {/* Context box */}
              <div className="bg-cream border border-parchment p-6">
                <div className="text-sth-grey font-inter text-[9px] tracking-widest uppercase mb-3">How STH Would Use This</div>
                <div className="space-y-2">
                  {[
                    'E-commerce product descriptions for international collectors',
                    'Physical provenance cards shipped with every statue',
                    'Tour guide scripts and mythology storytelling',
                    'Social media content for Instagram and TikTok',
                    'Press materials for heritage coverage',
                  ].map(use => (
                    <div key={use} className="flex items-start gap-2">
                      <span className="text-gold text-xs shrink-0 mt-0.5">→</span>
                      <span className="font-inter text-xs text-sth-grey">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
