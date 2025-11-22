import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg"></div>
            <span className="font-semibold text-slate-800">YourSaaS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#cta" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition">Get Started</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center p-2 rounded-md text-slate-700 hover:bg-white/60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/70">
          <div className="px-4 py-3 space-y-3">
            <a href="#features" className="block">Features</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#contact" className="block">Contact</a>
            <a href="#cta" className="block">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
