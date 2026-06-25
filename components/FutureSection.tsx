'use client'

import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useState } from 'react'

export function FutureSection() {
  const scrollY = useScrollPosition()
  const parallaxOffset = Math.max(0, (scrollY - 2800) * 0.4)
  const [activeVision, setActiveVision] = useState<'ai' | 'quantum' | 'neural'>('ai')

  const visions = {
    ai: {
      title: 'Artificial Super Intelligence',
      desc: 'By 2054, AI systems will surpass human intelligence in all domains, becoming our partners in solving humanity&apos;s greatest challenges.',
      items: [
        'Autonomous problem-solving systems',
        'Personalized medicine & healthcare',
        'Climate solutions & sustainability',
      ],
    },
    quantum: {
      title: 'Quantum Computing Era',
      desc: 'Quantum computers will unlock processing power unimaginable today, solving problems that would take classical computers millennia.',
      items: [
        'Drug discovery acceleration',
        'Financial modeling & analysis',
        'Material science breakthroughs',
      ],
    },
    neural: {
      title: 'Neural Integration',
      desc: 'Brain-computer interfaces will blur the lines between human and machine, augmenting our cognitive abilities directly.',
      items: [
        'Direct brain-machine communication',
        'Memory enhancement & backup',
        'Instant knowledge access',
      ],
    },
  }

  const current = visions[activeVision]

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-background via-background to-slate-900 py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div style={{ transform: `translateY(${parallaxOffset}px)` }} className="mb-16">
          <div className="text-yellow-400 font-mono text-sm uppercase tracking-widest mb-4">What Awaits Us</div>
          <h2 className="text-5xl md:text-6xl font-bold text-yellow-300 mb-4">
            THE FUTURE
            <span className="block text-2xl font-light text-yellow-200 mt-4">2026 - 2056 and Beyond</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-transparent mb-8" />
          <p className="text-lg text-yellow-100 max-w-2xl">
            The next 30 years will bring transformations we can barely imagine. Here are three possible futures taking shape today.
          </p>
        </div>

        {/* Vision selector */}
        <div className="flex flex-wrap gap-4 mb-12">
          {(Object.keys(visions) as Array<keyof typeof visions>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveVision(key)}
              className={`px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all ${
                activeVision === key
                  ? 'bg-yellow-400 text-slate-900 shadow-lg shadow-yellow-400/50'
                  : 'border border-yellow-400/30 text-yellow-300 hover:border-yellow-400'
              }`}
            >
              {visions[key].title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Vision content */}
        <div style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }} className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-yellow-300">{current.title}</h3>
            <p className="text-lg text-yellow-100 leading-relaxed">{current.desc}</p>
            <div className="space-y-3 pt-6 border-t border-yellow-400/30">
              <p className="text-sm font-mono text-yellow-200 uppercase tracking-widest">Key Developments:</p>
              {current.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-yellow-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual representation */}
          <div className="relative h-96 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/10 border border-yellow-400/30 p-8 flex flex-col items-center justify-center glow-box-cyan">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Animated rings */}
              {[1, 2, 3].map((ring) => (
                <div
                  key={ring}
                  className="absolute rounded-full border border-yellow-400/40"
                  style={{
                    width: `${100 + ring * 50}px`,
                    height: `${100 + ring * 50}px`,
                    animation: `spin ${8 + ring * 2}s linear infinite`,
                    animationDirection: ring % 2 === 0 ? 'reverse' : 'normal',
                  }}
                />
              ))}
              
              {/* Center element */}
              <div className="relative z-10 text-6xl animate-pulse">
                {activeVision === 'ai' && '🧠'}
                {activeVision === 'quantum' && '⚛️'}
                {activeVision === 'neural' && '🔌'}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }} className="text-center">
          <p className="text-lg text-yellow-100 mb-6">
            The future isn&apos;t predetermined—it&apos;s something we build together.
          </p>
          <p className="text-sm text-yellow-200 font-mono uppercase tracking-widest">
            Let&apos;s shape tomorrow, today.
          </p>
        </div>
      </div>
    </section>
  )
}
