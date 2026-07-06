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

const researchHrefs = researchLinks.map(l => l.href)

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const pathname = usePathname()
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isResearchActive = researchHrefs.includes(pathname)

  function openDropdown() {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setDesktopDropdownOpen(true)
  }

  function scheduleClose() {
    hoverTimeout.current = setTimeout(() => setDesktopDropdownOpen(false), 120)
  }

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

          {/* Research dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              onClick={() => setDesktopDropdownOpen(v => !v)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-inter tracking-widest uppercase transition-colors ${
                isResearchActive || desktopDropdownOpen
                  ? 'text-gold'
                  : 'text-gold/60 hover:text-gold'
              }`}
            >
              Research
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 4l4 4 4-4" />
              </svg>
            </button>

            {desktopDropdownOpen && (
              <div
                className="absolute top-full right-0 mt-1 w-56 bg-ink border border-gold/30 shadow-2xl"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                <div className="py-1">
                  {researchLinks.map((link, i) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDesktopDropdownOpen(false)}
                      className={`flex flex-col px-5 py-3 transition-colors border-b border-gold/10 last:border-0 ${
                        pathname === link.href
                          ? 'bg-gold/10'
                          : 'hover:bg-gold/5'
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
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => { setMobileOpen(v => !v); setMobileResearchOpen(false) }}
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
        <div className="lg:hidden bg-ink border-t border-gold/20">
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
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${mobileResearchOpen ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 4l4 4 4-4" />
            </svg>
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
        </div>
      )}
    </nav>
  )
}
