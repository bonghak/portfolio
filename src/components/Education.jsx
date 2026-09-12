import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { education } from '../data/education.js'

export default function Education() {
  const { degree, trainings } = education
  return (
    <Section id="education" index="05" label="Education" title="전공과 데이터 관련 교육">
      <div className="edu-grid">
        {/* 학위 */}
        <Reveal as="article" className="card card-hover edu-degree" variant="up">
          <p className="card-label">Major</p>
          <h3>{degree.major}</h3>
          <p className="edu-school">
            {degree.school}
            {degree.period && <span className="sep">·</span>}
            {degree.period}
          </p>
          <p className="edu-sub">주요 과목</p>
          <ul className="course-list">
            {degree.courses.map((c, i) => (
              <li key={c.name} className="stagger-item" style={{ '--i': i }}>
                <span>{c.name}</span>
                {c.grade && <code className="grade">{c.grade}</code>}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* 추가 교육 */}
        <div className="edu-trainings">
          <Reveal as="p" className="card-label" variant="up" delay={100}>
            Additional Training
          </Reveal>
          {trainings.map((t, i) => (
            <Reveal key={t.id} as="article" className="card card-hover training-card" variant="up" delay={160 + i * 120}>
              <div className="training-head">
                <h3>{t.title}</h3>
                <span className="training-hours">{t.hours}시간</span>
              </div>
              <p className="training-provider">{t.provider}</p>
              <ul className="chip-list">
                {t.topics.map((topic) => (
                  <li key={topic} className="chip chip-soft">
                    {topic}
                  </li>
                ))}
              </ul>
              {t.note && <p className="training-note">{t.note}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
