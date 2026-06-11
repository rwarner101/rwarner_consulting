import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 grid gap-8 rounded-[2rem] border border-stone-800 bg-stone-900/40 p-8 md:grid-cols-[1fr_auto] md:items-end"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Make it easy for people to reach out"
        description="A simple call to action is often all you need. Add your real email, scheduling link, or social profile here."
      />

      <a
        className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-amber-200"
        href="mailto:hello@example.com"
      >
        hello@example.com
      </a>
    </section>
  )
}

export default Contact
