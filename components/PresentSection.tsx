'use client'

import { useScrollPosition } from '@/hooks/useScrollPosition'

export function PresentSection() {
  const scrollY = useScrollPosition()
  const parallaxOffset = Math.max(0, (scrollY - 1800) * 0.4)

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-background via-slate-900 to-background py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div style={{ transform: `translateY(${parallaxOffset}px)` }} className="mb-16">
          <div className="text-magenta-400 font-mono text-sm uppercase tracking-widest mb-4">Today&apos;s Reality</div>
          <h2 className="text-5xl md:text-6xl font-bold glow-magenta mb-4">
            THE PRESENT
            <span className="block text-2xl font-light text-magenta-300 mt-4">2026 - Today</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta-400 to-transparent mb-8" />
          <p className="text-lg text-magenta-100 max-w-2xl">
            We are living in an era of unprecedented technological advancement. AI, cloud computing, and global connectivity define our generation.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Artificial Intelligence',
              desc: 'AI systems process information at superhuman speeds',
              icon: '🤖',
              color: 'cyan',
            },
            {
              title: 'Cloud Computing',
              desc: 'Global infrastructure powers instant scalability',
              icon: '☁️',
              color: 'magenta',
            },
            {
              title: 'Global Networks',
              desc: '5G and beyond connect billions of devices',
              icon: '🌐',
              color: 'cyan',
            },
          ].map((feature, i) => (
            <div
              key={i}
              style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
              className={`p-6 rounded-lg border backdrop-blur-sm transition-all hover:scale-105 cursor-pointer ${
                feature.color === 'cyan'
                  ? 'border-cyan-400/30 bg-cyan-400/5 glow-box-cyan hover:glow-box-cyan'
                  : 'border-magenta-400/30 bg-magenta-400/5 glow-box-magenta hover:glow-box-magenta'
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${feature.color === 'cyan' ? 'text-cyan-300' : 'text-magenta-300'}`}>
                {feature.title}
              </h3>
              <p className="text-sm text-cyan-100">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }} className="glow-box-cyan rounded-lg border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-magenta-400/5 p-12">
          <h3 className="text-3xl font-bold text-cyan-300 mb-8 text-center">By The Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Users Online', value: '5.3B' },
              { label: 'Data Created Daily', value: '2.5EB' },
              { label: 'Devices Connected', value: '15B+' },
              { label: 'AI Models Active', value: '1000s' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-magenta-400 mb-2">{stat.value}</div>
                <div className="text-sm text-cyan-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
