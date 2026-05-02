import { useState, useEffect } from 'react'
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi'

const LINKS = [
  { label: 'Миний тухай', href: '#about'    },
  { label: 'Ур чадвар',   href: '#skills'   },
  { label: 'Төслүүд',     href: '#projects' },
  { label: 'Холбоо',      href: '#contact'  },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else          document.body.style.overflow = ''
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-bracket">{'<'}</span>
            <span className="logo-name">Батхүлэг</span>
            <span className="logo-bracket">{' />'}</span>
          </a>

          <ul className="navbar-links">
            {LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(d => !d)}
              aria-label="Харанхуй горим"
              title={darkMode ? 'Цайвар горим' : 'Харанхуй горим'}
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Цэс"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
