'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/data'

const contactLinks = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    primary: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/abdunuri',
    href: siteConfig.links.github,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    primary: false,
  },
  {
    label: 'Telegram',
    value: '@ANBU_H',
    href: siteConfig.links.telegram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    primary: false,
  },
  {
    label: 'Upwork',
    value: 'View Profile',
    href: siteConfig.links.upwork,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
      </svg>
    ),
    primary: false,
  },
  {
    label: 'Fiverr',
    value: 'View Gigs',
    href: siteConfig.links.fiverr,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.73c.17-.906.483-1.302 1.094-1.302.623 0 .636.641.636.641v.661zM5.36 10.303H3.76l-.012.038-1.402 4.484-.505-4.522H0l1.016 6.48-.006.018c-.11.258-.373.37-.697.37H0v1.5h.902c.85 0 1.588-.355 1.985-1.092l3.55-8.776H5.36zm12.45.434c-.574-.483-1.496-.583-2.148-.583-.84 0-1.596.138-2.074.355l.273 1.29c.432-.186 1.06-.3 1.607-.3.773 0 1.205.268 1.205.921v.172a8.68 8.68 0 0 0-.897-.044c-1.486 0-2.918.518-2.918 2.13 0 1.24.857 1.908 2.015 1.908.78 0 1.406-.289 1.82-.89h.045l.135.743h1.57a23.69 23.69 0 0 1-.101-2.3v-1.91c0-1.003-.247-1.95-.532-1.492zm-.783 4.26a1.09 1.09 0 0 1-1.003.618c-.513 0-.792-.283-.792-.735 0-.618.51-.893 1.293-.893.17 0 .352.015.502.044v.966zm5.498-4.927h-1.688v6.313h1.688v-6.313zm4.282 0h-1.546v-1.44l-1.687.504v.936h-.945v1.31h.945v2.95c0 1.77.672 2.34 2.03 2.34.397 0 .789-.09 1.04-.19l-.033-1.312c-.152.044-.395.074-.588.074-.465 0-.761-.28-.761-.888v-2.974h1.545V10.07z"/>
      </svg>
    ),
    primary: false,
  },
  {
    label: 'NURSAD TECH',
    value: 'nursad.tech',
    href: siteConfig.links.nursadTech,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    primary: false,
  },
]

export default function Contact() {
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
    <section id="contact" ref={ref} className="scroll-mt-24 py-24 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px bg-border w-16" />
            <span className="font-mono text-xs text-cyan/60 tracking-widest uppercase">06. Contact</span>
            <div className="h-px bg-border w-16" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-text mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="font-body text-text-muted max-w-xl mx-auto text-lg leading-relaxed">
            Have a project, internship, or developer role where I can build real software? Let's talk.
          </p>
        </div>

        {/* CTA block */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="glass border border-border rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.04] to-violet/[0.04] pointer-events-none" />
            <div className="relative z-10">
              <p className="font-body text-text-muted mb-6 leading-relaxed">
                I'm currently open to freelance projects, remote internships, junior developer roles, and local opportunities in Addis Ababa. I work close to the problem and care about shipping real software.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-bg font-display font-bold text-base rounded-xl hover:bg-cyan-dim transition-all glow-cyan hover:scale-[1.02] active:scale-[0.98]"
              >
                Send me an email
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 group
                ${link.primary
                  ? 'glass-strong border-cyan/30 text-cyan hover:border-cyan/60 hover:bg-cyan/5'
                  : 'glass border-border text-text-muted hover:border-cyan/25 hover:text-text'
                }`}
            >
              <span className={`shrink-0 ${link.primary ? 'text-cyan' : 'text-text-dim group-hover:text-cyan transition-colors'}`}>
                {link.icon}
              </span>
              <div className="min-w-0">
                <div className="font-display font-semibold text-sm leading-tight">{link.label}</div>
                <div className="font-mono text-xs text-text-dim truncate mt-0.5">{link.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
