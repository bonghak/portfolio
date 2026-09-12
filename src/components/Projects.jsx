import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  return (
    <Section
      id="projects"
      index="03"
      label="Featured Projects"
      title="문제에서 출발한 프로젝트"
      description="각 프로젝트는 Problem → Analysis → Solution → Result 순서로 정리했습니다. 어떤 문제를 발견했고, 데이터로 어떻게 정의했으며, 무엇을 만들어 어떤 결과를 얻었는지에 초점을 맞췄습니다."
    >
      <div className="project-list">
        {featured.map((project, i) => (
          <Reveal key={project.id} variant="up">
            <ProjectCard project={project} number={i + 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
