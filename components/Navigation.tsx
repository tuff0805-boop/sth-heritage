'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Overview' },
  { href: '/custodianship', label: 'Custodianship' },
  { href: '/shop', label: 'Heritage Shop' },
  { href: '/provenance', label: 'Provenance' },
  { href: '/revenue', label: 'Revenue Model' },
  { href: '/landscape', label: 'Landscape' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-gold text-2xl font-playfair leading-none">說</span>
          <div className="hidden sm:block">
            <div className="text-gold font-playfair text-sm tracking-widest leading-tight">SAY TIAN HNG</div>
            <div className="text-gold/50 font-inter text-[10px] tracking-[0.2em] uppercase">Est. 1841 · Singapore</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-xs font-inter tracking-widest uppercase transition-colors ${
                pathname === link.href
                  ? 'text-gold border-b border-gold'
                  : 'text-gold/60 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gold p-2"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-px bg-gold transition-all mb-1.5 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-px bg-gold transition-all mb-1.5 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-px bg-gold transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-ink border-t border-gold/20">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 text-xs font-inter tracking-widest uppercase border-b border-gold/10 ${
                pathname === link.href ? 'text-gold' : 'text-gold/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
