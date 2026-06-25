import SectionHeading from './SectionHeading'

const bookingUrl = 'https://calendar.app.google/c5jxAadN8NwfM92G7'

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 grid gap-8 rounded-[2rem] border border-stone-800 bg-stone-900/40 p-8 md:grid-cols-[1fr_auto] md:items-end"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Ready to strengthen your engineering team?"
        description="Let's discuss your hiring practices, leadership development, and engineering processes."
      />

      <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
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
          href="mailto:robert@warnerengineeringadvisory.com"
        >
          Email Robert
        </a>
      </div>
    </section>
  )
}

export default Contact
