import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            <span className="brand-glow">
              <span className="italic">rjw</span>Consulting
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-300">
            Build the engineering team your business needs next.
          </p>
          <p className="max-w-2xl text-base leading-8 text-stone-400">
            Practical consulting for recruiting, interview design, development
            process, and early mentorship from a software leader with 25+ years
            in development and 15+ years leading high performance teams.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-amber-200"
            href="#contact"
          >
            Start a conversation
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
