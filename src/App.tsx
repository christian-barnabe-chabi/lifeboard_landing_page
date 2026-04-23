import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { HowItWorks } from './sections/HowItWorks'
import { Pricing } from './sections/Pricing'
import { Footer } from './sections/Footer'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'
import { DataDeletion } from './pages/DataDeletion'
import { DataExport } from './pages/DataExport'
import { Refund } from './pages/Refund'

function Home() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/legal/data-deletion" element={<DataDeletion />} />
        <Route path="/legal/data-export" element={<DataExport />} />
        <Route path="/legal/refund" element={<Refund />} />
      </Routes>
    </BrowserRouter>
  )
}
