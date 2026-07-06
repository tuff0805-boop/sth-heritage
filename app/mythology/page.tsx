'use client'

import { useState, useMemo } from 'react'

const DOMAINS = ['All', 'Protection', 'Wealth', 'Compassion', 'Justice', 'Youth'] as const
type Domain = typeof DOMAINS[number]

const deities = [
  {
    id: 1,
    name: 'Guan Yu',
    chinese: '關羽',
    domains: ['Protection', 'Wealth'] as Domain[],
    origin: 'Real historical figure — Han Dynasty general (160–220 AD), deified after death by popular consensus across the military, merchant, and law-enforcement communities of China.',
    symbolism: [
      'Red face — loyalty, righteousness, and martial courage',
      'Green robe — military virtue and the brotherhood of warriors',
      'Green Dragon Crescent Blade — the weapon that never struck an unjust blow',
      'Long black beard — the mark of a man who lived long enough to earn wisdom',
    ],
    whyCommission: 'Business protection, home security, the sealing of oaths of brotherhood. Revered simultaneously by the police force and, historically, by triad societies — a testament to his position as the god of absolute loyalty rather than absolute allegiance.',
    craftNote: 'One of STH\'s most requested commissions. The full statue requires 3–5 days. The red facial paint is applied last — considered the most sacred moment of the entire carving process, when the deity is said to enter the wood.',
    story: 'Guan Yu was a warrior of such honour that even his enemies respected him. When captured by Cao Cao — the most powerful warlord of his age — he refused to betray his oath of brotherhood to Liu Bei. He rode a thousand li to return to his sworn brother, single-handedly passing through five military passes and slaying six generals who barred his path. His loyalty was not strategic. It was absolute. Death did not end it — it completed it. When he was finally taken and executed, the people who had known him built shrines. Within generations, the Emperor recognised what the people already knew: Guan Yu had not died. He had ascended.',
    dark: true,
  },
  {
    id: 2,
    name: 'Guan Yin',
    chinese: '觀音',
    domains: ['Compassion', 'Protection'] as Domain[],
    origin: 'Bodhisattva Avalokitesvara, originally male in Indian Buddhism, gradually transformed into a maternal feminine form in East Asian tradition. The most universally beloved deity in the Sinosphere — revered across Buddhist, Taoist, and folk religious traditions without distinction.',
    symbolism: [
      'White robes — purity and the refusal to be stained by worldly suffering',
      'Willow branch — the instrument of healing, its leaves applied to the afflicted',
      'Vase of pure water — the vessel of compassion, always full, never exhausted',
      'Lotus throne — enlightenment rising unstained from the mud of the world',
    ],
    whyCommission: 'Protection of children, healing of illness, comfort in grief, and the protection of those who travel by sea. She is called upon at births and at deathbeds — at every threshold where human beings need something beyond human power.',
    craftNote: 'The most commonly commissioned deity at STH. The white paint requires multiple careful coats — any impurity shows immediately against white. The flowing robes are considered the most technically demanding carving element, requiring the craftsman to suggest the weight of fabric in immovable wood.',
    story: 'Guan Yin heard the cries of all suffering beings and made a vow: she would not enter the final peace of nirvana until every last soul was freed from suffering. This is a vow without end. She appears wherever compassion is needed — to sailors whose boats are breaking apart in typhoons, to mothers in the agony of childbirth, to the grieving who have lost what cannot be replaced. She does not judge who deserves her mercy. She offers it universally, the way rain falls — on the righteous and the unrighteous alike. Her name means: She Who Hears the Sounds of the World.',
    dark: false,
  },
  {
    id: 3,
    name: 'Tu Di Gong',
    chinese: '土地公',
    domains: ['Protection', 'Wealth'] as Domain[],
    origin: 'Deified local official from the Zhou Dynasty who became the protector of neighbourhoods and villages. The most intimate of all Chinese deities — he does not rule vast celestial domains but the immediate soil under your feet, the specific neighbourhood where you live and work.',
    symbolism: [
      'Friendly elderly man — approachability, the warmth of a trusted elder',
      'Red and gold robes — official status, earthly authority transformed into divine protection',
      'Gold ingot — the tangible promise of prosperity for those he watches over',
      'Long white beard — wisdom accumulated across countless lifetimes of watching over communities',
    ],
    whyCommission: 'Placed at home entrances and business fronts for protection and prosperity. He is the first deity a new business owner installs, and the last one removed when a business closes. Neighbourhood festivals and annual thanksgivings centre on his altar.',
    craftNote: 'The most approachable deity in physical appearance — but that friendliness is technically the most challenging thing to carve. Happiness in wood must be genuine rather than forced. A smile that looks wrong at any angle will be wrong forever.',
    story: 'Tu Di Gong was once a humble government official in the mortal world who spent his own salary to buy food for the poor people in his district. He asked nothing in return. When he died — old, poor, and at peace — the Jade Emperor looked down from heaven and saw what this man had done with his brief life. He had tended a small corner of the world with extraordinary care. The Emperor made him protector of all local places — the neighbourhood guardian who knows every face, every family, every crop, every argument, every reconciliation. The most intimate of gods: the one who lives where the people live.',
    dark: true,
  },
  {
    id: 4,
    name: 'Mazu',
    chinese: '媽祖',
    domains: ['Protection'] as Domain[],
    origin: 'Lin Mo — a real historical figure from Fujian Province (960–987 AD), a fisherman\'s daughter who demonstrated the ability to predict storms and guide sailors home safely. Deified by Fujian fishing communities and carried across every coast that Chinese sailors reached, including Singapore.',
    symbolism: [
      'Imperial empress robes in red and gold — the highest celestial rank, granted posthumously by the Qing Emperor',
      'Seated throne — permanence, authority, the stillness at the eye of the storm',
      'Thousand-Mile Eye — the general who can see danger at any distance',
      'Wind-Ear — the general who hears distress calls across the ocean',
    ],
    whyCommission: 'Protection for those who travel by sea, coastal fishing communities, the entire Hokkien diaspora for whom the sea has always been both livelihood and threat. Commission requests at STH peak before major sea voyages and the start of fishing seasons.',
    craftNote: 'Highly significant for Singapore\'s Hokkien community, whose ancestors crossed the South China Sea to reach the island. The two flanking generals — Thousand-Mile Eye and Wind-Ear — are the most distinctive elements of any Mazu commission and require exceptional carving skill to render expressively at scale.',
    story: 'As a child, Lin Mo fell into a trance while her mother was weaving. In the trance, she saw her father\'s boat breaking apart in a storm and her brothers drowning. She seized the boats and pulled them to safety in her vision. When she woke — her mother\'s cry breaking the trance — her father\'s boat had indeed been saved, though one brother was lost. She spent the rest of her short life guiding sailors. After her death at 27, sailors across the South China Sea began reporting a figure in red who appeared in the rigging during storms and guided their vessels home. The Qing Emperor, after she guided the imperial fleet safely through a typhoon, declared her Empress of Heaven — the highest celestial rank a mortal woman had ever received.',
    dark: false,
  },
  {
    id: 5,
    name: 'Nezha',
    chinese: '哪吒',
    domains: ['Protection', 'Justice', 'Youth'] as Domain[],
    origin: 'Born of the Li family through miraculous birth, Nezha is the eternal divine child — killed himself to free his parents from punishment for his actions, then reborn from lotus flowers by his teacher Taiyi Zhenren. He is one of the most beloved deities among younger generations.',
    symbolism: [
      'Universe Ring (red armband) — cosmic power contained in the form of a child',
      'Fire Wheels — movement, speed, and mastery over the element that both destroys and transforms',
      'Fire-Tipped Spear — precision justice, the weapon that strikes only what deserves to be struck',
      'Red belly-band — the mark of his lotus rebirth, worn in eternal childhood',
    ],
    whyCommission: 'Protection of children, youthful energy for new ventures and businesses, justice in disputes. He is particularly popular with younger generations who find in his story of rebellion and self-sacrifice a mirror for their own values.',
    craftNote: 'Nezha poses the greatest technical challenge of any STH commission. His Fire Wheels — thin, delicate, conveying motion in static wood — are the most demanding carved element in the entire STH repertoire. A single miscalculation in the depth of cut will crack the wheel.',
    story: 'Nezha was born after three and a half years of pregnancy as a glowing ball of flesh that unrolled to reveal a lotus-born child of impossible power. As a boy, he killed the Dragon King\'s son who had been terrorising innocent fishermen — and faced the Dragon King\'s divine wrath. To spare his parents the punishment for his actions, Nezha returned his body to them: flesh to his mother, bones to his father. He ceased to exist. His teacher Taiyi Zhenren built him a new body from lotus flowers and fire, and restored his life. Reborn, Nezha was no longer bound by filial duty to the parents he had freed. He answered only to justice. He remains forever a child — and forever more powerful than any adult.',
    dark: true,
  },
  {
    id: 6,
    name: 'Cai Shen',
    chinese: '財神',
    domains: ['Wealth'] as Domain[],
    origin: 'Several historical figures merged over centuries into the single God of Wealth — a deity so fundamental to Chinese commercial life that virtually every business in the Sinosphere maintains his image. His worship peaks at Chinese New Year, when businesses across Asia conduct the annual wealth invocation.',
    symbolism: [
      'Black or gold face — authority and the weight of accumulated fortune',
      'Gold robes — prosperity made visible, the physical form of abundance',
      'Gold ingot — the purest symbol of material wealth in Chinese material culture',
      'Black tiger mount — the subjugation of danger in service of prosperity',
    ],
    whyCommission: 'Business openings, Chinese New Year prosperity rituals, financial luck across all ventures. The most requested commission in January and February before the Lunar New Year. Gold paint — the most expensive material in the STH palette — is the defining medium of every Cai Shen.',
    craftNote: 'STH\'s most seasonally concentrated commission. Gold paint costs significantly more than all other pigments and is applied with the finest brushes in the workshop. The gold ingot held in Cai Shen\'s hand must be carved with particular precision — it is the centrepiece of the composition.',
    story: 'Cai Shen is not one god but many — the accumulated wealth-consciousness of a civilisation that understood, long before economists, that prosperity is not accidental. It is cultivated. It is invited. It requires a proper host. He appears in black face because he began as a military deity before wealth claimed him as its embodiment. He rides a black tiger because those who master great wealth master great danger. His ingot is not a reward for virtue — it is a promise available to any business that treats prosperity with the seriousness it deserves. He is the god of those who work hard and plan carefully.',
    dark: false,
  },
  {
    id: 7,
    name: 'Er Lang Shen',
    chinese: '二郎神',
    domains: ['Justice', 'Protection'] as Domain[],
    origin: 'Nephew of the Jade Emperor, Er Lang Shen is one of the most powerful warriors in the celestial pantheon — the general who defeated the Monkey King Sun Wukong in direct combat when all others had failed. His third eye sees through every deception.',
    symbolism: [
      'Third eye on forehead — the ability to perceive truth beyond all illusion and deception',
      'Celestial hound — loyalty and the relentless pursuit of those who flee justice',
      'Lotus lantern — illumination, the light that reveals what darkness conceals',
      'Three-pointed double-edged sword — a weapon of absolute precision, designed to cut with perfect accuracy',
    ],
    whyCommission: 'Protection against deception and fraud, justice in legal disputes, exorcism of evil spirits. Particularly revered in legal and commercial contexts where protection against dishonest actors is required.',
    craftNote: 'The third eye is the defining and most distinctive element of any Er Lang Shen commission. It must be rendered with absolute precision — too large and it dominates the face uncomfortably; too small and it loses its authority. The celestial hound at his feet is the second most technically demanding element.',
    story: 'When the Monkey King Sun Wukong had defeated every celestial general the Jade Emperor sent against him and declared himself equal to heaven itself, only one warrior was willing to meet him. Er Lang Shen descended from his mountain with his celestial hound and his three-pointed sword. Their battle shook the earth. It was not strength that decided it but perception — Er Lang Shen\'s third eye saw through every transformation, every deception, every illusion the Monkey King deployed. He is the god of truth in a world full of shape-shifters. His third eye never closes. It never looks away.',
    dark: true,
  },
  {
    id: 8,
    name: 'Four Heavenly Kings',
    chinese: '四大天王',
    domains: ['Protection'] as Domain[],
    origin: 'Buddhist guardian deities of the four cardinal directions, stationed at the gates of heaven and the entrances of every major temple. Adopted into Chinese folk religion as the supreme protectors of sacred space — no important space is left unguarded.',
    symbolism: [
      'Vaisravana (North) — holds a pagoda and serpent: the weight of divine authority and the power over hidden things',
      'Virudhaka (South) — holds a sword: the active force of growth, cutting through what obstructs',
      'Dhritarashtra (East) — holds a lute: harmony, the vibration that balances all things',
      'Virupaksha (West) — holds a serpent and pearl: sight that penetrates illusion, wisdom that cannot be stolen',
    ],
    whyCommission: 'Temple guardian installations, protection of corporate headquarters and important spaces. Almost always commissioned as a complete set of four — commissioning only one or two is considered incomplete. The most substantial commission STH undertakes.',
    craftNote: 'A complete Four Heavenly Kings set is STH\'s largest commission in both physical scale and time investment. Each king must be distinct in posture, expression, and accoutrements while maintaining visual harmony as a group. Historically, these took months to complete. Today, each king requires a minimum of 2 weeks.',
    story: 'At the four corners of heaven stand four generals who have stood their posts since before memory. They are not the most powerful beings in the celestial hierarchy — but they are perhaps the most reliable. They do not question their assignment. They do not sleep. Vaisravana in the north holds a pagoda that contains the weight of the world\'s stored virtue. Virudhaka in the south swings his sword at whatever would obstruct right growth. Dhritarashtra in the east plucks a lute whose harmonics hold the eastern sky in perfect balance. Virupaksha in the west holds a serpent and a pearl: the serpent knows every hidden path, and the pearl contains all the wisdom the west has accumulated. Together, they define the protected space — the boundary between what is sacred and what is not.',
    dark: false,
  },
]

export default function MythologyPage() {
  const [search, setSearch] = useState('')
  const [domain, setDomain] = useState<Domain>('All')

  const filtered = useMemo(() => {
    return deities.filter(d => {
      const matchSearch = search === '' ||
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.chinese.includes(search) ||
        d.domains.some(dom => dom.toLowerCase().includes(search.toLowerCase()))
      const matchDomain = domain === 'All' || d.domains.includes(domain)
      return matchSearch && matchDomain
    })
  }, [search, domain])

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-ink py-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-5 select-none pointer-events-none">
          <span className="font-playfair text-[18rem] text-gold leading-none">神</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-gold/60 font-inter text-[10px] tracking-[0.3em] uppercase mb-6">Knowledge Preservation</div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-6">
            Deity Mythology<br />
            <span className="text-gold italic">Encyclopedia</span>
          </h1>
          <div className="gold-rule w-24 mb-8" />
          <p className="text-gold/50 font-inter text-sm leading-relaxed max-w-2xl mb-6">
            A living record of STH&apos;s craft knowledge — 184 years of sacred artistry, preserved for future generations.
          </p>
          <p className="text-gold/30 font-inter text-xs leading-relaxed max-w-2xl border border-gold/10 p-4 bg-gold/5">
            This encyclopedia was developed as part of STH Heritage Collective&apos;s knowledge preservation initiative.
            As Singapore&apos;s last surviving traditional effigy maker, STH&apos;s craft knowledge represents irreplaceable
            cultural heritage that must be documented regardless of commercial outcome.
          </p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="bg-parchment border-b border-gold/10 py-8 px-6 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sth-grey text-sm">⌕</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search deities, domains, symbols…"
              className="w-full pl-10 pr-4 py-3 bg-cream border border-parchment font-inter text-sm text-ink placeholder-sth-grey/50 focus:border-gold focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {DOMAINS.map(d => (
              <button
                key={d}
                onClick={() => setDomain(d)}
                className={`px-4 py-2 font-inter text-[10px] tracking-widest uppercase transition-colors border ${
                  domain === d
                    ? 'bg-ink text-gold border-ink'
                    : 'bg-transparent text-sth-grey border-sth-grey/30 hover:border-ink hover:text-ink'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Deity cards */}
      <section className="bg-background py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-sth-grey font-inter text-sm">
              No deities found for &ldquo;{search}&rdquo;
            </div>
          ) : (
            <div className="space-y-8">
              {filtered.map((deity) => (
                <div
                  key={deity.id}
                  className={`border relative overflow-hidden ${
                    deity.dark
                      ? 'bg-ink border-gold/20'
                      : 'bg-cream border-parchment'
                  }`}
                >
                  {/* Chinese character watermark */}
                  <div className={`absolute top-0 right-0 font-playfair text-[14rem] leading-none select-none pointer-events-none translate-x-8 -translate-y-4 ${deity.dark ? 'text-gold/5' : 'text-ink/5'}`}>
                    {deity.chinese[0]}
                  </div>

                  <div className="relative z-10 p-8 lg:p-12">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                      <div>
                        <div className="flex items-baseline gap-5 mb-3">
                          <h2 className={`font-playfair text-4xl ${deity.dark ? 'text-cream' : 'text-ink'}`}>{deity.name}</h2>
                          <span className={`font-playfair text-3xl ${deity.dark ? 'text-gold/40' : 'text-sth-grey/40'}`}>{deity.chinese}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {deity.domains.map(d => (
                            <span
                              key={d}
                              className={`font-inter text-[9px] tracking-widest uppercase px-3 py-1 border ${
                                deity.dark
                                  ? 'border-gold/30 text-gold/60'
                                  : 'border-sth-grey/30 text-sth-grey'
                              }`}
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8`}>
                      {/* Origin */}
                      <div>
                        <div className={`font-inter text-[9px] tracking-widest uppercase mb-3 ${deity.dark ? 'text-gold/40' : 'text-sth-grey/60'}`}>Origin</div>
                        <p className={`font-inter text-xs leading-relaxed ${deity.dark ? 'text-gold/50' : 'text-sth-grey'}`}>{deity.origin}</p>
                      </div>

                      {/* Symbolism */}
                      <div>
                        <div className={`font-inter text-[9px] tracking-widest uppercase mb-3 ${deity.dark ? 'text-gold/40' : 'text-sth-grey/60'}`}>Sacred Symbolism</div>
                        <ul className="space-y-2">
                          {deity.symbolism.map((s, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className={`text-gold shrink-0 mt-0.5 text-xs`}>—</span>
                              <span className={`font-inter text-xs leading-relaxed ${deity.dark ? 'text-gold/50' : 'text-sth-grey'}`}>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Why commissioned */}
                      <div>
                        <div className={`font-inter text-[9px] tracking-widest uppercase mb-3 ${deity.dark ? 'text-gold/40' : 'text-sth-grey/60'}`}>Why Devotees Commission</div>
                        <p className={`font-inter text-xs leading-relaxed ${deity.dark ? 'text-gold/50' : 'text-sth-grey'}`}>{deity.whyCommission}</p>
                      </div>
                    </div>

                    {/* Craftsman's note */}
                    <div className={`mb-8 p-5 border-l-4 border-gold ${deity.dark ? 'bg-gold/5' : 'bg-parchment'}`}>
                      <div className={`font-inter text-[9px] tracking-widest uppercase mb-2 ${deity.dark ? 'text-gold/50' : 'text-gold'}`}>
                        ✦ Craftsman&apos;s Note — STH Workshop
                      </div>
                      <p className={`font-playfair text-sm italic leading-relaxed ${deity.dark ? 'text-gold/60' : 'text-ink'}`}>
                        {deity.craftNote}
                      </p>
                    </div>

                    {/* Mythology story */}
                    <div>
                      <div className={`font-inter text-[9px] tracking-widest uppercase mb-4 ${deity.dark ? 'text-gold/40' : 'text-sth-grey/60'}`}>The Mythology</div>
                      <blockquote className={`font-playfair text-lg italic leading-relaxed ${deity.dark ? 'text-cream' : 'text-ink'}`}>
                        {deity.story}
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
