import heroImage from '../assets/hero.png'

const bookingUrl = 'https://calendar.app.google/c5jxAadN8NwfM92G7'

function Hero() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div className="space-y-4">
        <div className="space-y-4">
          <p className="max-w-2xl text-lg leading-8 text-stone-300">
            Growing engineering organizations eventually reach a point where
            informal hiring, ad hoc management, and inconsistent development
            practices begin to limit growth.
          </p>
          <p className="max-w-2xl text-base leading-8 text-stone-400">
            I help organizations establish the people, processes, and leadership
            needed to build effective engineering teams through structured
            recruiting, interview process design, leadership development, and
            scalable delivery practices.
          </p>
          <p className="max-w-2xl text-base leading-8 text-stone-400">
            The result is stronger hiring decisions, more capable leaders, and
            engineering organizations that can grow without sacrificing quality,
            culture, or execution.
          </p>
          <p className="max-w-2xl text-base leading-8 text-stone-400">
            25+ years in software engineering • 15+ years leading engineering
            teams.
          </p>
          <p className="max-w-2xl text-base leading-8 text-stone-400">
            Former Amazon engineering leader.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-amber-200"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Schedule a consultation
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-stone-700 px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-stone-500 hover:bg-stone-900"
            href="#services"
          >
            View services
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-8 shadow-2xl shadow-stone-950/40 backdrop-blur">
        <img
          className="mx-auto mb-8 w-full max-w-56"
          src={heroImage}
          alt="Layered engineering platform illustration"
        />
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-300">
          Advisory focus
        </p>
        <ul className="mt-6 space-y-4 text-sm leading-7 text-stone-300">
          <li>Recruiting systems that raise the bar without slowing the business down.</li>
          <li>Interview loops shaped by 100+ Amazon interviews and senior hiring experience.</li>
          <li>Development practices that create focus, accountability, and durable delivery.</li>
          <li>Initial mentorship for managers, technical leads, and growing teams.</li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
