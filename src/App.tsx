import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { HowItWorks } from './sections/HowItWorks'
import { Pricing } from './sections/Pricing'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  )
}
