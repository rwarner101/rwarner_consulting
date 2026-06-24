import SectionHeading from './SectionHeading'

const includedItems = [
  'Hiring process review',
  'Interview process assessment',
  'Leadership capability assessment',
  'Engineering process review',
]

const deliverables = [
  'Findings report',
  'Recommendations',
  '90-day action plan',
]

const bestFor = [
  'Growing engineering organizations',
  'Leadership transitions',
  'Teams preparing for significant hiring',
  'Organizations experiencing execution challenges',
]

function Assessment() {
  return (
    <section id="assessment" className="scroll-mt-28 space-y-8">
      <SectionHeading
        eyebrow="Assessment"
        title="Engineering Team Scaling Assessment"
        description="A focused assessment designed to help growing organizations improve hiring, leadership effectiveness, and engineering execution."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-[1.75rem] border border-stone-800 bg-stone-900/50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
            Includes
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-300">
            {includedItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-amber-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-stone-800 bg-stone-900/50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
            Deliverables
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-300">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-amber-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-stone-800 bg-stone-900/50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
            Best For
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-300">
            {bestFor.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-amber-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Assessment
