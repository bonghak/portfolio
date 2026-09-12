import { profile } from '../data/profile.js'
import DataField from './DataField.jsx'

const FLOW = ['Problem', 'Analysis', 'Solution', 'Result']

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <DataField />

      <div className="container hero-inner">
        <p className="hero-eyebrow hero-enter" style={{ '--i': 0 }}>
          <span className="dot dot-pulse" />
          {profile.role}
        </p>

        <h1 className="hero-title hero-enter" style={{ '--i': 1 }}>
          업무의 문제를
          <br />
          <span className="accent-gradient accent-animated">데이터와 기술</span>로
          <br />
          해결하는 개발자
        </h1>

        <p className="hero-intro hero-enter" style={{ '--i': 2 }}>
          {profile.intro}
        </p>

        <div className="hero-actions hero-enter" style={{ '--i': 3 }}>
          <a href="#projects" className="btn btn-primary btn-glow">
            프로젝트 보기
          </a>
          <a href="#contact" className="btn btn-ghost">
            연락하기
          </a>
        </div>

        <ul className="hero-keywords hero-enter" style={{ '--i': 4 }} aria-label="핵심 키워드">
          {profile.keywords.map((k) => (
            <li key={k}>
              <code>{k}</code>
            </li>
          ))}
        </ul>

        {/* Problem → Analysis → Solution → Result: 일하는 방식 요약 */}
        <div className="hero-flow hero-enter" style={{ '--i': 5 }} aria-label="문제 해결 방식">
          {FLOW.map((step, i) => (
            <div key={step} className="hero-flow-step" style={{ '--i': i }}>
              <span className="hero-flow-label">{step}</span>
              {i < FLOW.length - 1 && (
                <span className="hero-flow-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="hero-scroll-hint" aria-label="아래로 스크롤">
        <span />
      </a>
    </section>
  )
}
