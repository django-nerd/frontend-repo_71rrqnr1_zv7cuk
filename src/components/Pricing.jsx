export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$0', period: '/mo', features: ['100 tasks', 'Community support', 'Basic analytics'], cta: 'Get started' },
    { name: 'Pro', price: '$29', period: '/mo', features: ['Unlimited tasks', 'Priority support', 'Advanced analytics'], cta: 'Start trial', highlighted: true },
    { name: 'Scale', price: '$99', period: '/mo', features: ['Everything in Pro', 'SLA + SSO', 'Dedicated support'], cta: 'Contact sales' },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free, upgrade when you grow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-6 ${p.highlighted ? 'border-slate-900 shadow-lg' : 'border-slate-200'} bg-white`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                {p.highlighted && <span className="text-xs font-medium bg-slate-900 text-white px-2 py-1 rounded">Popular</span>}
              </div>
              <div className="mt-4 flex items-baseline gap-1 text-slate-900">
                <div className="text-4xl font-bold">{p.price}</div>
                <div className="text-slate-500">{p.period}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 transition ${p.highlighted ? 'bg-slate-900 text-white hover:bg-slate-800' : 'ring-1 ring-slate-200 text-slate-900 hover:bg-slate-50'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
