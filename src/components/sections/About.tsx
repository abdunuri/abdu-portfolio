'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/data'

const stats = [
  { value: '100%', label: 'Upwork Job Score' },
  { value: '4.0', label: 'GPA at HiLCoE' },
  { value: '6+', label: 'Live Projects' },
  { value: '2+', label: 'Years Building' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="scroll-mt-24 py-24 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-cyan/60 tracking-widest uppercase">03. About</span>
              <div className="flex-1 h-px bg-border max-w-[80px]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-text mb-6">
              Who I <span className="gradient-text">Am</span>
            </h2>

            <div className="space-y-4 font-body text-text-muted leading-relaxed">
              <p>
                I'm a Software Engineering student at{' '}
                <span className="text-text font-medium">HiLCoE School of Computer Science & Technology</span>{' '}
                based in Addis Ababa, Ethiopia. I transferred in 2025 as a second-year student and finished my first semester with a 4.0 GPA.
              </p>
              <p>
                My work focuses on building practical software that solves real problems — from bakery operations platforms and event discovery tools to Telegram bots and browser automation systems. I enjoy working close to the problem, understanding the workflow, and turning it into clean, usable software.
              </p>
              <p>
                Most of my projects come from real business needs. Not tutorial clones. I care about the gap between "this works on my machine" and "this is running in a real bakery right now."
              </p>
              <p className="font-mono text-sm text-cyan/60 pt-2">
                {'// Student + builder + freelance-capable developer + real product owner'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan text-bg font-display font-semibold text-sm rounded-xl hover:bg-cyan-dim transition-all"
              >
                Get in Touch
              </a>
              <a
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-border-2 hover:border-cyan/40 text-text-muted hover:text-text font-body text-sm rounded-xl transition-all"
              >
                View Upwork Profile
              </a>
            </div>
          </div>

          {/* Right — stats + info card */}
          <div className="space-y-4">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass border border-border rounded-2xl p-5 text-center group hover:border-cyan/30 transition-all"
                >
                  <div className="font-display font-extrabold text-3xl gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Info card */}
            <div className="glass border border-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-text-dim">location</span>
                <span className="font-body text-text-muted">{siteConfig.location}</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-text-dim">education</span>
                <span className="font-body text-text-muted text-right">HiLCoE · BSc SWE</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-text-dim">status</span>
                <span className="inline-flex items-center gap-1.5 font-body text-cyan text-xs font-medium">
                  <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
                  Open to opportunities
                </span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-text-dim">open_to</span>
                <span className="font-body text-text-muted text-right text-xs">Remote · Local · Freelance</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-text-dim">building</span>
                <a href="https://gagari.app" target="_blank" rel="noopener noreferrer" className="font-mono text-violet-bright text-xs hover:text-violet transition-colors">
                  gagari.app ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
