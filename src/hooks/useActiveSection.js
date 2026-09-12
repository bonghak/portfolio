import { useEffect, useState } from 'react'

/**
 * 현재 뷰포트 중앙에 가장 가까운 섹션의 id 를 반환 (내비게이션 활성 표시용)
 * @param {string[]} ids 섹션 id 목록
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return active
}
