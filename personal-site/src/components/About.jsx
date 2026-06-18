import SectionHeading from './SectionHeading'

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 grid gap-8 rounded-[2rem] border border-stone-800 bg-stone-900/40 p-8 md:grid-cols-[0.9fr_1.1fr]"
    >
      <SectionHeading
        eyebrow="About"
        title="Experienced engineering leadership, applied where it matters most"
        description="Warner Engineering Advisory helps growing organizations build strong engineering teams, reliable hiring practices, and development habits that scale."
      />

      <div className="space-y-5 text-base leading-8 text-stone-300">
        <p>
          Robert Warner brings more than 25 years of software development
          experience and more than 15 years leading high performance engineering
          teams. The work is grounded in the realities of building software,
          hiring strong people, and giving teams the structure they need to move
          quickly with confidence.
        </p>
        <p>
          Engagements focus on the foundations that make teams effective:
          recruiting strategy, interview process design, development process,
          and hands-on mentorship during the early stages of team growth.
        </p>
      </div>
    </section>
  )
}

export default About
