export default function Features() {
  const items = [
    { title: 'Built-in Auth', desc: 'Ready-to-extend auth foundation to secure your app.' },
    { title: 'Fast API', desc: 'Backend powered by FastAPI with instant data endpoints.' },
    { title: 'MongoDB Ready', desc: 'Persistence by default so your data actually sticks.' },
    { title: 'Responsive UI', desc: 'Tailwind-powered components that look great everywhere.' },
    { title: 'Analytics Hooks', desc: 'Track signups and conversions from day one.' },
    { title: 'Email Capture', desc: 'Convert visitors with a polished lead form.' },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything you need to ship</h2>
          <p className="mt-3 text-slate-600">Production-ready foundation so you can focus on your unique value.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 mb-4" />
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
