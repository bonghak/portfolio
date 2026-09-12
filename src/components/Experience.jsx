import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { experiences } from '../data/experience.js'

export default function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      label="Experience"
      title="현장에서 문제를 발견한 경험"
      description="시스템을 운영하고 업무를 처리하면서, 반복되는 일과 데이터가 쌓이는 지점을 관찰했습니다."
    >
      <ol className="timeline">
        {experiences.map((exp, i) => (
          <Reveal key={exp.id} as="li" className="timeline-item" variant="left" delay={i * 120}>
            <div className="timeline-marker" aria-hidden="true" />
            <article className="card card-hover timeline-card">
              <div className="timeline-head">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="timeline-org">
                    {exp.organization}
                    {exp.type && <span className="sep">·</span>}
                    {exp.type}
                  </p>
                </div>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <p className="timeline-summary">{exp.summary}</p>
              <ul className="duty-list">
                {exp.duties.map((d, j) => (
                  <li key={d} className="stagger-item" style={{ '--i': j }}>
                    {d}
                  </li>
                ))}
              </ul>
              {exp.highlight && (
                <p className="timeline-highlight stagger-item" style={{ '--i': exp.duties.length }}>
                  <span className="highlight-tag">Insight</span>
                  {exp.highlight}
                  {exp.relatedProject && (
                    <>
                      {' '}
                      <a href={`#project-${exp.relatedProject}`}>관련 프로젝트 ↓</a>
                    </>
                  )}
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
