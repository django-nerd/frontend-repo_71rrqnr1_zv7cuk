import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import LeadCapture from './components/LeadCapture'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <LeadCapture />
      </main>
      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} YourSaaS, Inc.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
            <a href="mailto:hello@example.com" className="text-slate-600 hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
