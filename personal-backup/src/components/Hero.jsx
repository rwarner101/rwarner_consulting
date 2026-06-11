function Hero() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Robert Warner
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-300">
		   Senior engineering Leader. Former Amazon. I build and scale systems,
		   teams, and cost-efficient infrastructure.
          </p>
		</div>
      </div>

      <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-8 shadow-2xl shadow-stone-950/40 backdrop-blur">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-300">
          Homepage sections
        </p>
        <ul className="mt-6 space-y-4 text-sm leading-7 text-stone-300">
		{/*
          <li>15+ years leading high-performing teams and 25+ years in software engineering.</li>
          <li>Proven track record of building and scaling engineering organizations.</li>
		  {*/}
          <li>Expert in aligning engineering strategy with business outcomes.</li>
          <li>Experienced in AWS, distributed systems, and data platforms.</li> 
        </ul>
      </div>
    </section>
  )
}

export default Hero
