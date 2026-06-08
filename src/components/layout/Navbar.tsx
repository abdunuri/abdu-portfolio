'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/data'

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3 shadow-[0_1px_0_rgba(0,212,255,0.08)]' : 'py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight group"
        >
          <span className="gradient-text">AN</span>
          <span className="text-text-muted font-mono text-sm ml-0.5 group-hover:text-cyan transition-colors">_</span>
          <span className="text-text-dim font-mono text-xs">BU</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-body text-text-muted hover:text-text transition-colors rounded-lg hover:bg-surface relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-body text-text-muted hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-body font-medium bg-cyan text-bg rounded-lg hover:bg-cyan-dim transition-colors glow-cyan"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-text-muted hover:text-text"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <div className={`w-5 h-px bg-current mt-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-px bg-current mt-1.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-strong border-t border-border mt-1 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-text-muted hover:text-cyan font-body text-sm transition-colors rounded-lg hover:bg-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-border">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-center text-sm font-medium bg-cyan text-bg rounded-lg"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
