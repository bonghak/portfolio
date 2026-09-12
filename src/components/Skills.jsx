import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Core Skills"
      title="문제 해결에 사용하는 기술"
      description="데이터 분석과 AI로 문제를 정의하고, 웹 서비스로 해결책을 구현하며, 컨테이너와 클라우드로 운영합니다."
    >
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.category}
            as="article"
            className={`card card-hover skill-card accent-${group.accent}`}
            variant="up"
            delay={i * 90}
          >
            <div className="skill-card-head">
              <span className="skill-bar" aria-hidden="true" />
              <h3>{group.category}</h3>
            </div>
            <p className="skill-desc">{group.description}</p>
            <ul className="chip-list">
              {group.items.map((item) => (
                <li key={item} className="chip chip-hover">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
