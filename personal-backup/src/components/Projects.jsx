import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Portfolio Case Study',
    description:
      'A detailed write-up that walks through the problem, process, and final outcome behind one of your best projects.',
    tags: ['Design', 'Storytelling', 'Case Study'],
  },
  {
    title: 'Product Landing Page',
    description:
      'A polished marketing page with strong messaging, responsive layout, and thoughtful visual hierarchy.',
    tags: ['Frontend', 'Responsive', 'UI'],
  },
  {
    title: 'Interactive Side Project',
    description:
      'A smaller experiment that shows curiosity, range, and the kind of ideas you explore on your own.',
    tags: ['React', 'Creative Code', 'Prototype'],
  },
]

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 space-y-10">
      <SectionHeading
        eyebrow="Projects"
        title="Show the work you want to be hired for"
        description="Keep this section focused on a few strong examples and make each project easy to scan."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
