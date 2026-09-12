import { useReveal } from '../hooks/useReveal.js'

/**
 * 스크롤 진입 시 페이드/슬라이드 인 되는 래퍼
 *
 * @param {'up'|'left'|'right'|'scale'|'none'} variant 등장 방향
 * @param {number} delay  ms 단위 지연 (stagger 용)
 * @param {string} as     렌더링할 태그 (기본 div)
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
