export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-200">Introducing</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Launch your SaaS faster</h1>
            <p className="mt-4 text-lg text-slate-600">A modern starter that handles the boring parts so you can focus on your product. Clean UI, blazing fast backend, and built-in lead capture.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition">Start free</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 ring-1 ring-slate-200 hover:bg-slate-50 transition">See features</a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=1" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=2" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=3" />
              </div>
              <p><span className="font-semibold">1,200+</span> makers already building</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl p-6">
              <img className="rounded-lg" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop" alt="Product screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
