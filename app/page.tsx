import { HeroSection } from '@/components/HeroSection'
import { PastSection } from '@/components/PastSection'
import { PresentSection } from '@/components/PresentSection'
import { FutureSection } from '@/components/FutureSection'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="w-full bg-background text-foreground overflow-hidden">
      <HeroSection />
      <PastSection />
      <PresentSection />
      <FutureSection />
      <Footer />
    </main>
  )
}
