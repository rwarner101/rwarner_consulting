function ProjectCard({ title, description, tags }) {
  return (
    <article className="rounded-[1.75rem] border border-stone-800 bg-stone-900/50 p-6 transition hover:-translate-y-1 hover:border-stone-700">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="text-sm leading-7 text-stone-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
