'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/data'

const roles = [
  'Full-Stack Developer',
  'Automation Engineer',
  'Telegram Bot Builder',
  'SaaS Product Builder',
  'Web Scraping Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length)
          setTyping(true)
        }, 0)
        return () => clearTimeout(t)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-violet/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan/[0.03] blur-[80px] pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-20 right-24 w-2 h-2 rounded-full bg-cyan opacity-60 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 left-20 w-1.5 h-1.5 rounded-full bg-violet-bright opacity-50 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-32 right-32 w-1 h-1 rounded-full bg-cyan opacity-40 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-48 left-16 w-2 h-2 rounded-full bg-violet opacity-30 animate-float" style={{ animationDelay: '2s' }} />

      <div className={`relative z-10 w-full max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Availability badge */}
        <div className="inline-flex max-w-full items-center justify-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan/20 mb-8 group hover:border-cyan/40 transition-colors">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-slow" />
          <span className="font-mono text-xs text-cyan/90 tracking-wider leading-relaxed">
            {siteConfig.availability}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6">
          <span className="block text-text">Hi, I'm</span>
          <span className="block gradient-text text-glow-cyan mt-1">
            Abdulaziz Nuri
          </span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center justify-center gap-2 mb-6 h-10 px-2">
          <span className="font-mono text-sm text-text-dim">&gt;</span>
          <span className="font-mono text-sm sm:text-lg text-cyan font-medium w-full max-w-[18rem] sm:min-w-[280px] sm:max-w-none text-left truncate">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-cyan ml-0.5 animate-blink" />
          </span>
        </div>

        {/* Tagline */}
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-text max-w-2xl mx-auto mb-4 leading-snug text-balance">
          {siteConfig.tagline}
        </p>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          {siteConfig.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-bg font-display font-semibold text-sm rounded-xl hover:bg-cyan-dim transition-all glow-cyan hover:scale-[1.02] active:scale-[0.98]"
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 glass border border-border-2 text-text font-display font-semibold text-sm rounded-xl hover:border-cyan/40 hover:text-cyan transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact Me
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-text-muted font-body text-sm rounded-xl hover:text-text transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Currently building */}
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-lg glass border border-violet/20">
          <span className="font-mono text-xs text-text-dim">currently_building</span>
          <span className="w-1 h-4 bg-border-2" />
          <span className="font-mono text-xs text-violet-bright font-medium text-balance">{siteConfig.currentlyBuilding}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="font-mono text-xs text-text-dim">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-border-2 to-transparent" />
      </div>
    </section>
  )
}
