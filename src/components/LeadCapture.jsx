import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function LeadCapture() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      if (!res.ok) throw new Error('Failed to submit. Please try again.')
      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section id="cta" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Start your free trial</h3>
            <p className="mt-3 text-slate-600">Tell us a bit about you and we’ll reach out with access and onboarding resources.</p>
            <div className="mt-6 text-sm text-slate-500">No credit card required • Cancel anytime</div>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required value={form.name} onChange={update} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required value={form.email} onChange={update} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input name="company" value={form.company} onChange={update} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows={3} value={form.message} onChange={update} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
            </div>

            <button disabled={status==='loading'} className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition disabled:opacity-60">
              {status==='loading' ? 'Submitting...' : 'Request access'}
            </button>

            {status==='success' && (
              <p className="mt-3 text-sm text-green-600">Thanks! Well be in touch shortly.</p>
            )}
            {status==='error' && (
              <p className="mt-3 text-sm text-red-600">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
