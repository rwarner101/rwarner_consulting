import SectionHeading from './SectionHeading'

const focusAreas = [
  'Recruiting strategy and talent acquisition',
  'Structured interview process design',
  'Engineering development processes and delivery practices',
  'Leadership development and mentorship',
  'Team scaling and organizational effectiveness',
  'These engagements are particularly valuable for organizations experiencing rapid growth, leadership transitions, or significant hiring expansion.',
]

const experienceHighlights = [
  '25+ years in software engineering',
  '15+ years leading engineering teams',
  'Former Amazon Engineering Manager',
  'Built and scaled high-performing engineering organizations',
  'Developed hiring frameworks and interview processes',
  'Mentored engineers, managers, and technical leaders',
]

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 rounded-[2rem] border border-stone-800 bg-stone-900/40 p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="About"
          title="Experienced engineering leadership, applied where it matters most"
          description="Warner Engineering Advisory helps growing organizations build high-performing engineering teams through effective hiring, leadership development, and scalable engineering practices."
        />

        <div className="space-y-5 text-base leading-8 text-stone-300">
          <p>
            As organizations grow, informal hiring, ad hoc management, and
            inconsistent development practices can begin to limit execution.
            Warner Engineering Advisory helps establish the people, processes,
            and leadership foundations needed to support sustainable growth.
          </p>
          <p>
            Robert Warner brings more than 25 years of software engineering
            experience and more than 15 years leading engineering organizations.
            His work is grounded in the practical realities of building software,
            hiring exceptional talent, developing leaders, and creating
            engineering cultures that deliver results.
          </p>

          <div className="space-y-4 pt-2">
            <p className="font-medium text-stone-100">
              Engagements focus on the foundations of effective engineering
              organizations:
            </p>
            <ul className="space-y-3 text-sm leading-7 text-stone-300">
              {focusAreas.map((area) => (
                <li key={area} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-amber-300" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 border-t border-stone-800 pt-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-300">
            About Robert
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            Former Amazon Engineering Manager
          </h3>
          <p className="max-w-xl text-base leading-7 text-stone-300">
		    Robert has led engineering teams and organizations at Amazon, FICO, ID Analytics, 
		    and Teradata building software, developing engineering talent, 
		    and improve execution at scale.  
          </p>
        </div>

        <div className="rounded-3xl border border-stone-800 bg-stone-950/40 p-6">
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-100">
            Experience Highlights
          </h4>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-stone-300 sm:grid-cols-2">
            {experienceHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-amber-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
