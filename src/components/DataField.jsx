import { useEffect, useRef } from 'react'

/**
 * Hero 배경 — 데이터 노드가 천천히 떠다니며 가까운 노드끼리 연결되는 캔버스
 * (Data / AI 느낌을 주는 은은한 네트워크 그래프)
 */
export default function DataField({ density = 0.00008, maxDist = 140 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    let nodes = []
    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1
    let running = true

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(24, Math.min(70, Math.round(w * h * density)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
        accent: Math.random() < 0.18, // 일부 노드는 밝은 블루
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t) => {
      if (!running) return
      ctx.clearRect(0, 0, w, h)

      // 연결선
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.28
            ctx.strokeStyle = `rgba(49, 130, 246, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // 노드
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < -10) n.x = w + 10
        if (n.x > w + 10) n.x = -10
        if (n.y < -10) n.y = h + 10
        if (n.y > h + 10) n.y = -10

        const pulse = 0.65 + 0.35 * Math.sin(t / 900 + n.phase)
        ctx.fillStyle = n.accent ? `rgba(100, 168, 255, ${0.95 * pulse})` : `rgba(49, 130, 246, ${0.85 * pulse})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * (n.accent ? 1.4 : 1), 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    // 화면 밖이면 애니메이션 정지 (성능)
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
      if (running) raf = requestAnimationFrame(draw)
      else cancelAnimationFrame(raf)
    })

    resize()
    io.observe(canvas)
    window.addEventListener('resize', resize)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [density, maxDist])

  return <canvas ref={canvasRef} className="data-field" aria-hidden="true" />
}
