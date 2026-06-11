function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-300">
        {eyebrow}
      </p>
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-stone-300">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
