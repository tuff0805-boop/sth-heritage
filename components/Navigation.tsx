'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const mainLinks = [
  { href: '/', label: 'Overview' },
  { href: '/custodianship', label: 'Custodianship' },
  { href: '/shop', label: 'Heritage Shop' },
  { href: '/provenance', label: 'Provenance' },
  { href: '/revenue', label: 'Revenue Model' },
  { href: '/landscape', label: 'Landscape' },
]

const researchLinks = [
  { href: '/roadmap', label: 'Roadmap', sub: 'Implementation timeline' },
  { href: '/personas', label: 'Personas', sub: 'Customer segments' },
  { href: '/pestle', label: 'PESTLE', sub: 'Macro-environment analysis' },
  { href: '/mythology', label: 'Mythology', sub: 'Deity encyclopedia' },
  { href: '/storyteller', label: 'AI Storyteller', sub: 'Provenance generator' },
  { href: '/tracker', label: 'Tracker', sub: 'Custodianship dashboard' },
]

const analysisLinks = [
  { href: '/risks', label: 'Risk Matrix', sub: 'Six risks & mitigations' },
  { href: '/comparable', label: 'Royal Selangor', sub: 'Comparable case study' },
  { href: '/financials', label: 'Financials', sub: 'Sensitivity analysis' },
  { href: '/theory', label: 'Theory', sub: 'Academic frameworks' },
]

const researchHrefs = researchLinks.map(l => l.href)
const analysisHrefs = analysisLinks.map(l => l.href)

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 4l4 4 4-4" />
    </svg>
  )
}

function DesktopDropdown({
  label, links, isActive, isOpen, onOpen, onClose, onToggle,
}: {
  label: string
  links: { href: string; label: string; sub: string }[]
  isActive: boolean
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}) {
  const pathname = usePathname()
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        onClick={onToggle}
        className={`flex items-center gap-1.5 px-3 py-2 text-xs font-inter tracking-widest uppercase transition-colors ${
          isActive || isOpen ? 'text-gold' : 'text-gold/60 hover:text-gold'
        }`}
      >
        {label}
        <Chevron open={isOpen} />
      </button>
      {isOpen && (
        <div
          className="absolute top-full right-0 mt-1 w-56 bg-ink border border-gold/30 shadow-2xl z-50"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <div className="py-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex flex-col px-5 py-3 transition-colors border-b border-gold/10 last:border-0 ${
                  pathname === link.href ? 'bg-gold/10' : 'hover:bg-gold/5'
                }`}
              >
                <span className={`font-inter text-xs tracking-widest uppercase ${pathname === link.href ? 'text-gold' : 'text-gold/70'}`}>
                  {link.label}
                </span>
                <span className="font-inter text-[10px] text-gold/30 mt-0.5">{link.sub}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false)
  const [mobileAnalysisOpen, setMobileAnalysisOpen] = useState(false)
  const [openDesktop, setOpenDesktop] = useState<'research' | 'analysis' | null>(null)
  const pathname = usePathname()
  const timeouts = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  const isResearchActive = researchHrefs.includes(pathname)
  const isAnalysisActive = analysisHrefs.includes(pathname)

  function makeHoverHandlers(key: 'research' | 'analysis') {
    return {
      onOpen: () => {
        if (timeouts.current[key]) clearTimeout(timeouts.current[key])
        setOpenDesktop(key)
      },
      onClose: () => {
        timeouts.current[key] = setTimeout(() => {
          setOpenDesktop(prev => prev === key ? null : prev)
        }, 120)
      },
      onToggle: () => setOpenDesktop(prev => prev === key ? null : key),
    }
  }

  const researchHandlers = makeHoverHandlers('research')
  const analysisHandlers = makeHoverHandlers('analysis')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="text-gold text-2xl font-playfair leading-none">說</span>
          <div className="hidden sm:block">
            <div className="text-gold font-playfair text-sm tracking-widest leading-tight">SAY TIAN HNG</div>
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.2em] uppercase">Est. 1841 · Singapore</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-xs font-inter tracking-widest uppercase transition-colors whitespace-nowrap ${
                pathname === link.href
                  ? 'text-gold border-b border-gold'
                  : 'text-gold/60 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <DesktopDropdown
            label="Research"
            links={researchLinks}
            isActive={isResearchActive}
            isOpen={openDesktop === 'research'}
            {...researchHandlers}
          />
          <DesktopDropdown
            label="Analysis"
            links={analysisLinks}
            isActive={isAnalysisActive}
            isOpen={openDesktop === 'analysis'}
            {...analysisHandlers}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => { setMobileOpen(v => !v); setMobileResearchOpen(false); setMobileAnalysisOpen(false) }}
          className="lg:hidden text-gold p-2"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-px bg-gold transition-all mb-1.5 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-px bg-gold transition-all mb-1.5 ${mobileOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-px bg-gold transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-ink border-t border-gold/20 max-h-[80vh] overflow-y-auto">
          {mainLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-4 text-xs font-inter tracking-widest uppercase border-b border-gold/10 ${
                pathname === link.href ? 'text-gold' : 'text-gold/60'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Research accordion */}
          <button
            onClick={() => setMobileResearchOpen(v => !v)}
            className={`w-full flex items-center justify-between px-6 py-4 text-xs font-inter tracking-widest uppercase border-b border-gold/10 ${
              isResearchActive ? 'text-gold' : 'text-gold/60'
            }`}
          >
            <span>Research</span>
            <Chevron open={mobileResearchOpen} />
          </button>
          {mobileResearchOpen && (
            <div className="bg-gold/5 border-b border-gold/10">
              {researchLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => { setMobileOpen(false); setMobileResearchOpen(false) }}
                  className={`flex items-center justify-between pl-10 pr-6 py-3.5 border-b border-gold/5 last:border-0 ${
                    pathname === link.href ? 'text-gold' : 'text-gold/50'
                  }`}
                >
                  <span className="font-inter text-xs tracking-widest uppercase">{link.label}</span>
                  <span className="font-inter text-[9px] text-gold/30">{link.sub}</span>
                </Link>
              ))}
            </div>
          )}

          {/* Analysis accordion */}
          <button
            onClick={() => setMobileAnalysisOpen(v => !v)}
            className={`w-full flex items-center justify-between px-6 py-4 text-xs font-inter tracking-widest uppercase border-b border-gold/10 ${
              isAnalysisActive ? 'text-gold' : 'text-gold/60'
            }`}
          >
            <span>Analysis</span>
            <Chevron open={mobileAnalysisOpen} />
          </button>
          {mobileAnalysisOpen && (
            <div className="bg-gold/5 border-b border-gold/10">
              {analysisLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => { setMobileOpen(false); setMobileAnalysisOpen(false) }}
                  className={`flex items-center justify-between pl-10 pr-6 py-3.5 border-b border-gold/5 last:border-0 ${
                    pathname === link.href ? 'text-gold' : 'text-gold/50'
                  }`}
                >
                  <span className="font-inter text-xs tracking-widest uppercase">{link.label}</span>
                  <span className="font-inter text-[9px] text-gold/30">{link.sub}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
