import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { certificates } from '../data/certificates.js'

export default function Certificates() {
  return (
    <Section id="certificates" index="06" label="Certificates" title="자격증">
      <ul className="cert-grid">
        {certificates.map((c, i) => (
          <Reveal key={c.name} as="li" className="card card-hover cert-card" variant="scale" delay={i * 80}>
            <span className={`cert-category cat-${c.category.toLowerCase().replace(/\s+/g, '-')}`}>
              {c.category}
            </span>
            <h3>{c.name}</h3>
            {c.fullName && <p className="cert-full">{c.fullName}</p>}
            <p className="cert-issuer">
              {c.issuer}
              {c.date && <span className="sep">·</span>}
              {c.date}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
