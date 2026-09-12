import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  const { about } = profile
  return (
    <Section id="about" index="01" label="About Me" title={about.heading}>
      <div className="about-grid">
        <Reveal className="about-text" variant="up" delay={80}>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal as="aside" className="about-principles card card-hover" variant="left" delay={160}>
          <p className="card-label">How I Work</p>
          <ol className="principle-list">
            {about.principles.map((pr, i) => (
              <li key={pr.title} className="stagger-item" style={{ '--i': i }}>
                <span className="principle-index">0{i + 1}</span>
                <div>
                  <strong>{pr.title}</strong>
                  <p>{pr.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
