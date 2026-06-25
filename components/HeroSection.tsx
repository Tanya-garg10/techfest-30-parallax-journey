'use client'

import { useScrollPosition } from '@/hooks/useScrollPosition'

export function HeroSection() {
  const scrollY = useScrollPosition()

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-slate-900 flex items-center justify-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 240, 255, 0.1) 25%, rgba(0, 240, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.1) 75%, rgba(0, 240, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 240, 255, 0.1) 25%, rgba(0, 240, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.1) 75%, rgba(0, 240, 255, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Parallax elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{
        transform: `translateY(${scrollY * 0.5}px)`,
      }}>
        <div className="text-center z-10 max-w-4xl px-4">
          <div className="mb-4 inline-block">
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Welcome to</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-cyan leading-tight">
            TECHFEST
            <span className="block text-2xl md:text-4xl font-light mt-2 text-cyan-300">30th ANNIVERSARY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cyan-100 mb-8 font-light">
            Journey Through Three Decades of Technological Revolution
          </p>

          <div className="flex items-center justify-center gap-2 text-cyan-400 animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-sm font-mono">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            animation: `float ${3 + i}s ease-in-out infinite`,
          }}
        />
      ))}
    </section>
  )
}
