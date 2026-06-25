'use client'

import { useScrollPosition } from '@/hooks/useScrollPosition'

export function PastSection() {
  const scrollY = useScrollPosition()
  const parallaxOffset = Math.max(0, (scrollY - 800) * 0.4)

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-slate-900 via-background to-background py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header with parallax */}
        <div style={{ transform: `translateY(${parallaxOffset}px)` }} className="mb-16">
          <div className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4">The Foundation</div>
          <h2 className="text-5xl md:text-6xl font-bold glow-cyan mb-4">
            THE PAST
            <span className="block text-2xl font-light text-cyan-200 mt-4">1990s - 2000s</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent mb-8" />
          <p className="text-lg text-cyan-100 max-w-2xl">
            From dial-up connections to the dawn of the digital revolution. These decades laid the groundwork for everything that came after.
          </p>
        </div>

        {/* Timeline content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left content */}
          <div style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }} className="space-y-6">
            <div className="border-l-2 border-magenta-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-magenta-400 mb-2">1995</h3>
              <p className="text-cyan-100">The Web Goes Mainstream</p>
              <p className="text-sm text-cyan-200 mt-2">The first websites launched, HTML was born, and the internet started transforming commerce and communication forever.</p>
            </div>

            <div className="border-l-2 border-cyan-400 pl-6 py-4">
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">2000</h3>
              <p className="text-cyan-100">The Dot-Com Era</p>
              <p className="text-sm text-cyan-200 mt-2">A period of explosive internet growth, startups, and the birth of online retail that would reshape the global economy.</p>
            </div>

            <div className="border-l-2 border-cyan-300 pl-6 py-4">
              <h3 className="text-2xl font-bold text-cyan-200 mb-2">2005</h3>
              <p className="text-cyan-100">Mobile Revolution Begins</p>
              <p className="text-sm text-cyan-200 mt-2">Smartphones started emerging, social media was born, and the way we connect fundamentally changed.</p>
            </div>
          </div>

          {/* Right visual */}
          <div style={{ transform: `translateY(${parallaxOffset * 1.2}px)` }} className="relative h-96 glow-box-magenta rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex items-end justify-center border border-magenta-500/30">
            <div className="space-y-2 text-center w-full">
              <div className="text-6xl font-bold text-magenta-400">↑</div>
              <p className="text-cyan-100 font-mono">Connection Speed</p>
              <div className="flex items-end justify-center gap-1 h-32 mt-6">
                {[20, 35, 15, 50, 25, 60, 40].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-cyan-400 to-magenta-400 rounded-t opacity-60 hover:opacity-100 transition-opacity"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
