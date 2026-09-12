import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]
const SECTION_IDS = NAV_ITEMS.map((i) => i.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 메뉴가 열린 상태에서 화면이 넓어지면 자동으로 닫기
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="22" height="22">
              <path
                className="brand-line"
                d="M8 22 L13 14 L18 19 L24 9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="9" r="2.5" fill="#a5c9ff" />
            </svg>
          </span>
          <span className="brand-text">{profile.name}</span>
        </a>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : ''}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
