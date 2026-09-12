import Reveal from './Reveal.jsx'

/**
 * 공통 섹션 래퍼 — 번호, 라벨(영문), 제목, 설명을 일관된 레이아웃으로 표시
 * 헤더는 스크롤 진입 시 페이드 인 됩니다.
 */
export default function Section({ id, index, label, title, description, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        <Reveal as="header" className="section-header">
          <div className="section-label">
            {index && <span className="section-index">{index}</span>}
            <span className="section-label-text">{label}</span>
          </div>
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-desc">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
