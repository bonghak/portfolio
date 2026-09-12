import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const { contact } = profile
  const links = [
    contact.github && { label: 'GitHub', href: contact.github },
    contact.linkedin && { label: 'LinkedIn', href: contact.linkedin },
    contact.blog && { label: 'Blog', href: contact.blog },
  ].filter(Boolean)

  return (
    <Section id="contact" index="07" label="Contact" title="함께 문제를 해결할 기회를 기다립니다">
      <Reveal className="contact-card card" variant="scale">
        <p className="contact-message">{contact.message}</p>
        <div className="contact-actions">
          <a href={`mailto:${contact.email}`} className="btn btn-primary btn-glow">
            {contact.email}
          </a>
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
              {l.label} ↗
            </a>
          ))}
        </div>
        {contact.location && <p className="contact-location">{contact.location}</p>}
      </Reveal>
    </Section>
  )
}
