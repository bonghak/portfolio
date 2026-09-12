import { useEffect, useRef, useState } from 'react'

/**
 * 요소가 뷰포트에 들어오면 visible 을 true 로 바꿔주는 훅 (한 번만 실행)
 * @param {object} options IntersectionObserver 옵션
 */
export function useReveal(options = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 애니메이션 축소 설정 사용자는 즉시 표시
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, options)

    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, visible]
}
