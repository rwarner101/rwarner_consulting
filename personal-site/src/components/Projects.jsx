import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Recruiting',
    description:
      'Clarify the roles you need, define a consistent hiring bar, and build a practical recruiting motion that attracts the right engineering talent.',
    tags: ['Role definition', 'Hiring bar', 'Pipeline'],
  },
  {
    title: 'Interview Process',
    description:
      'Design interview loops, rubrics, and decision practices informed by more than 100 interviews at Amazon alone.',
    tags: ['Interview loops', 'Rubrics', 'Calibration'],
  },
  {
    title: 'Development Process',
    description:
      'Implement lightweight planning, delivery, and feedback rituals that help teams execute with focus while preserving engineering quality.',
    tags: ['Planning', 'Delivery', 'Quality'],
  },
  {
    title: 'Initial Mentorship',
    description:
      'Support managers, technical leads, and early team members as they establish expectations, communication habits, and leadership practices.',
    tags: ['Managers', 'Tech leads', 'Coaching'],
  },
]

function Projects() {
  return (
    <section id="services" className="scroll-mt-28 space-y-10">
      <SectionHeading
        eyebrow="Services"
        title="Build the operating system for a high performance engineering team"
        description="Focused consulting for the moments when hiring quality, team process, and leadership habits have to mature quickly."
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
