/**
 * Problem → Analysis → Solution → Result 구조로 프로젝트를 표시하는 카드
 */
const STEPS = [
  { key: 'problem', label: 'Problem', accent: 'amber' },
  { key: 'analysis', label: 'Analysis', accent: 'cyan' },
  { key: 'solution', label: 'Solution', accent: 'violet' },
  { key: 'result', label: 'Result', accent: 'lime' },
]

export default function ProjectCard({ project, number }) {
  return (
    <article className="project card card-glow" id={`project-${project.id}`}>
      {/* 헤더 */}
      <header className="project-head">
        <div className="project-meta">
          <span className="project-number">{String(number).padStart(2, '0')}</span>
          <span className="project-type">{project.type}</span>
          {project.period && <span className="project-period">{project.period}</span>}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="chip-list">
          {project.tags.map((t) => (
            <li key={t} className="chip chip-soft">
              {t}
            </li>
          ))}
        </ul>
      </header>

      {/* Problem → Analysis → Solution → Result */}
      <ol className="pasr">
        {STEPS.map((step, stepIndex) => {
          const data = project[step.key]
          if (!data) return null
          return (
            <li key={step.key} className={`pasr-step stagger-item accent-${step.accent}`} style={{ '--i': stepIndex }}>
              <div className="pasr-label">
                <span className="pasr-dot" aria-hidden="true" />
                {step.label}
              </div>
              <div className="pasr-body">
                <h4>{data.title}</h4>
                <p>{data.body}</p>

                {data.points && (
                  <ul className="pasr-points">
                    {data.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}

                {data.pipeline && (
                  <div className="pipeline" aria-label="구현 흐름">
                    {data.pipeline.map((node, i, arr) => (
                      <span key={node} className="pipeline-item stagger-item" style={{ '--i': i + 3 }}>
                        <code className="pipeline-node">{node}</code>
                        {i < arr.length - 1 && (
                          <span className="pipeline-arrow" aria-hidden="true">
                            →
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                )}

                {data.metrics && (
                  <div className="metrics">
                    {data.metrics.map((m, i) => (
                      <div key={m.label} className="metric stagger-item" style={{ '--i': i + 3 }}>
                        <span className="metric-value">{m.value}</span>
                        <span className="metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ol>

      {/* 기술 스택 (상세가 있는 경우) */}
      {project.stack && (
        <div className="project-stack">
          <p className="card-label">Tech Stack</p>
          <dl className="stack-list">
            {Object.entries(project.stack).map(([layer, items]) => (
              <div key={layer} className="stack-row">
                <dt>{layer}</dt>
                <dd>{items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* 나의 역할 */}
      {project.roles && (
        <div className="project-roles">
          <p className="card-label">My Role</p>
          <ul className="role-list">
            {project.roles.map((r, i) => (
              <li key={r} className="stagger-item" style={{ '--i': i + 4 }}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 핵심 메시지 */}
      <footer className="project-foot">
        <blockquote className="project-message">“{project.message}”</blockquote>
        {(project.links?.github || project.links?.demo) && (
          <div className="project-links">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                GitHub ↗
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                Demo ↗
              </a>
            )}
          </div>
        )}
      </footer>
    </article>
  )
}
