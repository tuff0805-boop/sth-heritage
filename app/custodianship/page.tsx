'use client'

import { useState } from 'react'

const tiers = [
  {
    name: 'Care',
    price: 'SGD $50',
    period: '/month',
    badge: 'Essential Custodianship',
    color: 'border-sth-grey/40',
    features: [
      'Climate-controlled indoor storage',
      'Monthly photographic welfare report',
      'Annual ritual cleaning by artisan',
      'Digital provenance record maintained',
      'Family visitation by appointment',
    ],
    desc: 'Dignified temporary care while families navigate life transitions.',
  },
  {
    name: 'Preserve',
    price: 'SGD $120',
    period: '/month',
    badge: 'Heritage Preservation',
    color: 'border-gold',
    featured: true,
    features: [
      'Everything in Care',
      'Quarterly conservation assessment',
      'Professional restoration if needed',
      'Certified antique appraisal at 80-year mark',
      'STH Heritage Collection display eligibility',
      'Priority rehoming to cultural institutions',
    ],
    desc: 'Active conservation for statues with emerging heritage value.',
  },
  {
    name: 'Legacy',
    price: 'SGD $280',
    period: '/month',
    badge: 'Living Heritage',
    color: 'border-sth-red/40',
    features: [
      'Everything in Preserve',
      'Named gallery placement in STH heritage wing',
      'Annual provenance documentation ceremony',
      'First right of acquisition at heritage valuation',
      'Dedicated relationship manager',
      'Story documentation & oral history recording',
      'National Heritage Board nomination consideration',
    ],
    desc: 'For statues of significant age or cultural importance. The highest form of custodianship.',
  },
]

const deityOptions = [
  'Guan Yin (Goddess of Mercy)',
  'Guan Yu (God of War & Righteousness)',
  'Tu Di Gong (Earth God)',
  'Mazu (Goddess of the Sea)',
  'Buddha (Amitabha)',
  'Tua Pek Kong',
  'Nezha',
  'Jade Emperor',
  'Other',
]

function generateRef() {
  const yr = new Date().getFullYear()
  const code = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `STH-${yr}-${code}`
}

export default function CustodianshipPage() {
  const [formData, setFormData] = useState({
    familyName: '',
    email: '',
    deity: '',
    age: '',
    size: '',
    tier: '',
    reason: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [refNumber, setRefNumber] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setRefNumber(generateRef())
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const selectedTier = tiers.find(t => t.name === formData.tier)

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-ink flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full">
          {/* Certificate */}
          <div className="border border-gold/60 p-12 relative overflow-hidden">
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 text-gold/30 font-playfair text-3xl">✦</div>
            <div className="absolute top-4 right-4 text-gold/30 font-playfair text-3xl">✦</div>
            <div className="absolute bottom-4 left-4 text-gold/30 font-playfair text-3xl">✦</div>
            <div className="absolute bottom-4 right-4 text-gold/30 font-playfair text-3xl">✦</div>

            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center text-[12rem] font-playfair text-gold/5 select-none pointer-events-none">
              說
            </div>

            <div className="relative z-10 text-center">
              {/* Seal */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold mb-6">
                <div className="text-gold font-playfair text-2xl">說</div>
              </div>

              <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-2">
                Say Tian Hng Heritage House
              </div>
              <h1 className="font-playfair text-3xl text-cream mb-2">Certificate of Custodianship</h1>
              <div className="gold-rule w-32 mx-auto mb-8" />

              <p className="text-gold/50 font-inter text-xs mb-8">
                This certifies that the following sacred statue has been formally entrusted to
                the care of Say Tian Hng Heritage House and shall be kept with the dignity and
                reverence befitting its sacred nature.
              </p>

              <div className="grid grid-cols-2 gap-4 text-left mb-8">
                {[
                  ['Family', formData.familyName],
                  ['Sacred Deity', formData.deity],
                  ['Custodianship Tier', formData.tier],
                  ['Statue Age', `Approx. ${formData.age} years`],
                  ['Statue Size', formData.size],
                  ['Reference No.', refNumber],
                ].map(([label, value]) => (
                  <div key={label} className="border border-gold/20 p-4">
                    <div className="text-gold/40 font-inter text-[9px] tracking-widest uppercase mb-1">{label}</div>
                    <div className="text-cream font-playfair text-sm">{value}</div>
                  </div>
                ))}
              </div>

              {selectedTier && (
                <div className="border border-gold/30 p-5 mb-8 bg-gold/5">
                  <div className="text-gold font-inter text-[10px] tracking-widest uppercase mb-2">
                    {selectedTier.badge} — {selectedTier.price}{selectedTier.period}
                  </div>
                  <p className="text-gold/50 font-inter text-xs">{selectedTier.desc}</p>
                </div>
              )}

              <div className="gold-rule w-32 mx-auto mb-6" />
              <div className="text-gold/30 font-inter text-[10px]">
                Issued {new Date().toLocaleDateString('en-SG', { day: 'numeric', month: 'long', year: 'numeric' })} · Say Tian Hng Heritage House, 190 Waterloo Street, Singapore
              </div>

              <div className="mt-8">
                <button
                  onClick={() => { setSubmitted(false); setFormData({ familyName: '', email: '', deity: '', age: '', size: '', tier: '', reason: '' }) }}
                  className="px-8 py-3 border border-gold/40 text-gold font-inter text-xs tracking-widest uppercase hover:border-gold transition-colors"
                >
                  Register Another Statue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pr-16 opacity-5 pointer-events-none select-none">
          <span className="font-playfair text-[20rem] text-gold leading-none">觀</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Pillar One</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            Sacred Custodianship<br />
            <span className="text-gold italic">& Rehoming Service</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl">
            For 184 years, Say Tian Hng has given statues life. Now, we ensure they are never dishonoured
            when family circumstances change. Singapore&apos;s first formal sacred statue custodian —
            a dignified alternative to incineration, abandonment, or sale to unknown parties.
          </p>
        </div>
      </section>

      {/* Problem context */}
      <section className="bg-parchment py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '⚠', stat: 'Rising trend', label: 'Families incinerating statues due to lack of rehoming options' },
            { icon: '🏠', stat: 'HDB downsizing', label: 'Smaller homes mean less space for inherited altar statues' },
            { icon: '⏳', stat: '100-year mark', label: 'Statues approaching antique threshold gain significant heritage value' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-playfair text-xl text-sth-red mb-2">{item.stat}</div>
              <div className="text-sth-grey font-inter text-xs leading-relaxed">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Custodianship Tiers</div>
            <h2 className="font-playfair text-4xl text-ink">Three Levels of Sacred Care</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map(tier => (
              <div
                key={tier.name}
                className={`tier-card border-2 ${tier.color} p-8 relative ${tier.featured ? 'bg-ink text-cream' : 'bg-cream'}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink font-inter text-[9px] tracking-widest uppercase px-4 py-1">
                    Most Popular
                  </div>
                )}
                <div className={`font-inter text-[10px] tracking-[0.2em] uppercase mb-3 ${tier.featured ? 'text-gold/60' : 'text-sth-grey'}`}>
                  {tier.badge}
                </div>
                <div className="font-playfair text-3xl mb-1 text-gold">{tier.name}</div>
                <div className={`mb-2 ${tier.featured ? 'text-cream' : 'text-ink'}`}>
                  <span className="font-playfair text-2xl">{tier.price}</span>
                  <span className={`font-inter text-sm ${tier.featured ? 'text-gold/50' : 'text-sth-grey'}`}>{tier.period}</span>
                </div>
                <p className={`font-inter text-xs leading-relaxed mb-6 pb-6 border-b ${tier.featured ? 'text-gold/40 border-gold/20' : 'text-sth-grey border-parchment'}`}>
                  {tier.desc}
                </p>
                <ul className="space-y-3">
                  {tier.features.map(f => (
                    <li key={f} className={`flex items-start gap-3 font-inter text-xs ${tier.featured ? 'text-gold/60' : 'text-sth-grey'}`}>
                      <span className="text-gold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-4">Sacred Registration</div>
            <h2 className="font-playfair text-4xl text-cream mb-4">Register Your Statue</h2>
            <p className="text-gold/40 font-inter text-sm leading-relaxed">
              Begin the custodianship process. Our team will contact you within 48 hours
              to arrange a respectful, ceremonial handover.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-2">Family Name *</label>
                <input
                  name="familyName"
                  value={formData.familyName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Tan Family"
                  className="w-full bg-transparent border border-gold/30 text-cream font-inter text-sm px-4 py-3 placeholder-gold/20 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-2">Contact Email *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-gold/30 text-cream font-inter text-sm px-4 py-3 placeholder-gold/20 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-2">Sacred Deity *</label>
              <select
                name="deity"
                value={formData.deity}
                onChange={handleChange}
                required
                className="w-full bg-ink border border-gold/30 text-cream font-inter text-sm px-4 py-3 focus:border-gold focus:outline-none transition-colors"
              >
                <option value="">Select the deity</option>
                {deityOptions.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-2">Approximate Age (years) *</label>
                <input
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 45"
                  min="1"
                  className="w-full bg-transparent border border-gold/30 text-cream font-inter text-sm px-4 py-3 placeholder-gold/20 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-2">Statue Size *</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  className="w-full bg-ink border border-gold/30 text-cream font-inter text-sm px-4 py-3 focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select size</option>
                  <option value="Small (under 30cm)">Small (under 30cm)</option>
                  <option value="Medium (30–60cm)">Medium (30–60cm)</option>
                  <option value="Large (over 60cm)">Large (over 60cm)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-2">Custodianship Tier *</label>
              <div className="grid grid-cols-3 gap-3">
                {tiers.map(tier => (
                  <label key={tier.name} className="cursor-pointer">
                    <input
                      type="radio"
                      name="tier"
                      value={tier.name}
                      checked={formData.tier === tier.name}
                      onChange={handleChange}
                      className="sr-only"
                      required
                    />
                    <div className={`border p-4 text-center transition-colors ${
                      formData.tier === tier.name
                        ? 'border-gold bg-gold/10'
                        : 'border-gold/20 hover:border-gold/40'
                    }`}>
                      <div className="text-gold font-playfair text-lg">{tier.name}</div>
                      <div className="text-gold/50 font-inter text-[10px]">{tier.price}/mo</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-2">Reason for Rehoming *</label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full bg-ink border border-gold/30 text-cream font-inter text-sm px-4 py-3 focus:border-gold focus:outline-none transition-colors"
              >
                <option value="">Select reason</option>
                <option value="Moving home">Moving home</option>
                <option value="Downsizing">Downsizing</option>
                <option value="No space">No space</option>
                <option value="Family member passed">Family member passed</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Photo upload — UI only */}
            <div>
              <label className="block text-gold/60 font-inter text-[10px] tracking-widest uppercase mb-2">Statue Photograph (Optional)</label>
              <div className="border-2 border-dashed border-gold/20 p-8 text-center hover:border-gold/40 transition-colors cursor-pointer">
                <div className="text-gold/30 font-playfair text-4xl mb-3">⊕</div>
                <div className="text-gold/40 font-inter text-xs">Click to upload or drag photo here</div>
                <div className="text-gold/25 font-inter text-[10px] mt-1">JPG, PNG up to 10MB</div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-ink font-inter text-xs tracking-widest uppercase font-medium py-5 hover:bg-gold-light transition-colors"
            >
              Submit for Sacred Custodianship
            </button>

            <p className="text-gold/25 font-inter text-[10px] text-center leading-relaxed">
              By submitting, you acknowledge that STH will contact you within 48 hours to arrange
              a respectful handover ceremony. No payment is required at this stage.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
