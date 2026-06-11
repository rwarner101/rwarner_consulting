function Hero() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Build a personal site with reusable sections from day one.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-300">
            This homepage is now organized into standalone Hero, About, Projects,
            and Contact components so it is much easier to customize as your site grows.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            className="rounded-full bg-amber-300 px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-amber-200"
            href="#projects"
          >
            View projects
          </a>
          <a
            className="rounded-full border border-stone-700 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-stone-500 hover:bg-stone-900"
            href="#contact"
          >
            Contact section
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-8 shadow-2xl shadow-stone-950/40 backdrop-blur">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-300">
          Homepage sections
        </p>
        <ul className="mt-6 space-y-4 text-sm leading-7 text-stone-300">
          <li>Hero introduces your value and gives visitors a next step.</li>
          <li>About shares your voice, background, and strengths.</li>
          <li>Projects highlights the work you want people to remember.</li>
          <li>Contact gives one clear path for reaching out.</li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
