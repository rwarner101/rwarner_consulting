import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Build the Team',
	description: 
	  'Define a recruitinng strategy, that includes sourcing candidates that raise the bar, and defines repeatable hiring frameworks.',
    tags: ['Recruiting strategy', 'Candidate Sourcing', 'Hiring Frameworks'],
  },
  {
    title: 'Develop Leaders',
	description:
	  'Leadership mentoring that includes helping engineers and new manager coaching increasing the team effectiveness.',
    tags: ['Mentoring', 'Leadership Practices', 'Team Effectiveness'],
  },
  {
    title: 'Scale the Organization',
    description:
      'Define and implement the Engineering process and establish quality delivery practices that feed the organizational design.',
    tags: ['Planning', 'Delivery', 'Quality'],
  }
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
