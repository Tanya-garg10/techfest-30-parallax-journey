'use client'

import { useScrollPosition } from '@/hooks/useScrollPosition'

export function Footer() {
  const scrollY = useScrollPosition()
  const parallaxOffset = Math.max(0, (scrollY - 3800) * 0.3)

  return (
    <footer className="relative w-full bg-gradient-to-b from-background to-slate-950 border-t border-cyan-400/10 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div style={{ transform: `translateY(${parallaxOffset}px)` }} className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold glow-cyan mb-6">
            Join Us on This Journey
          </h3>
          
          <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
            Techfest celebrates innovation, collaboration, and the brilliant minds shaping our world. Whether you&apos;re here to learn, share, or be inspired—you&apos;re part of something extraordinary.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            {[
              { title: 'Connect', desc: 'Network with innovators' },
              { title: 'Create', desc: 'Build the future together' },
              { title: 'Inspire', desc: 'Share your vision' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-cyan-300 mb-2">{item.title}</div>
                <div className="text-sm text-cyan-200">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="py-8 border-t border-cyan-400/20">
            <p className="text-sm text-cyan-200 font-mono uppercase tracking-widest mb-4">
              Techfest 30th Anniversary
            </p>
            <p className="text-xs text-cyan-300/50">
              © 2026 Celebrating Three Decades of Innovation | Built with Vision and Code
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {typeof window !== 'undefined' && scrollY < window.innerHeight * 4 && (
        <div className="fixed bottom-8 right-8 font-mono text-xs text-cyan-400 opacity-50 pointer-events-none">
          {Math.round((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)}%
        </div>
      )}
    </footer>
  )
}
