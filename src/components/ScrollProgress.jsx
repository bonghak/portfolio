import { useEffect, useState } from 'react'

/** 화면 상단에 표시되는 스크롤 진행 바 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
}
