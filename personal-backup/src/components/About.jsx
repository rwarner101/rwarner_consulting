import SectionHeading from './SectionHeading'

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 grid gap-8 rounded-[2rem] border border-stone-800 bg-stone-900/40 p-8 md:grid-cols-[0.9fr_1.1fr]"
    >
      <SectionHeading
        eyebrow="About"
        title="A flexible space to tell your story"
        description="Use this section to introduce who you are, what you care about, and the kind of work you want to attract."
      />

      <div className="space-y-5 text-base leading-8 text-stone-300">
        <p>
          A strong personal site usually feels direct and human. Instead of listing
          everything, focus on the through-line that connects your experience,
          interests, and the way you like to work.
        </p>
        <p>
          Because this content lives in its own component, you can grow it into a
          richer section later with a portrait, timeline, resume highlights, or a
          short manifesto without cluttering the rest of the page.
        </p>
      </div>
    </section>
  )
}

export default About
