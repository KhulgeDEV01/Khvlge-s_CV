import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const ROLES = [
  'Fullstack Хөгжүүлэгч',
  'Backend Инженер',
  'AI Дурлагч',
  'Программ Хийдэг',
]

export default function Hero() {
  const [roleIdx, setRoleIdx]     = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const target = ROLES[roleIdx]

    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70)
      return () => clearTimeout(t)
    }
    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }
  }, [displayed, deleting, roleIdx])

  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-inner">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Дадлага болон төсөлд нэгдэхэд бэлэн
        </div>

        <h1 className="hero-name">
          <span className="gradient-text">Б.Батхүлэг</span>
        </h1>

        <p className="hero-role">
          <span>{displayed}</span>
          <span style={{ color: 'var(--accent)', opacity: 0.8, animation: 'pulse 1s infinite' }}>|</span>
        </p>

        <p className="hero-desc">
          Програм хангамжийн оюутан. <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Цар хүрээтэй backend систем</strong>,
          цэвэр API болон <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>AI суурилсан аппликейшн</strong>{' '}
          бүтээхэд дуртай — бодит асуудлыг технологиор шийдэх зорилготой.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            Төслүүдийг үзэх
            <FiArrowDown size={15} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Холбоо барих
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/nickname379"
            target="_blank" rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/khvlge-battulga-94250b407"
            target="_blank" rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:bathvlegbattulga204@gmail.com"
            className="hero-social-link"
            aria-label="Имэйл"
          >
            <FiMail />
          </a>
        </div>
      </div>

      {/* Floating code decoration */}
      <div className="hero-code-block">
        <div className="code-line"><span className="code-num">1</span><span className="code-comment">// developer.js</span></div>
        <div className="code-line"><span className="code-num">2</span><span></span></div>
        <div className="code-line"><span className="code-num">3</span><span><span className="code-keyword">const </span><span className="code-var">developer</span><span className="code-punct"> = {'{'}</span></span></div>
        <div className="code-line"><span className="code-num">4</span><span>&nbsp;&nbsp;<span className="code-var">name</span><span className="code-punct">: </span><span className="code-string">"Батхүлэг"</span><span className="code-punct">,</span></span></div>
        <div className="code-line"><span className="code-num">5</span><span>&nbsp;&nbsp;<span className="code-var">role</span><span className="code-punct">: </span><span className="code-string">"Fullstack Dev"</span><span className="code-punct">,</span></span></div>
        <div className="code-line"><span className="code-num">6</span><span>&nbsp;&nbsp;<span className="code-var">stack</span><span className="code-punct">: [</span><span className="code-string">"Node"</span><span className="code-punct">, </span><span className="code-string">"React"</span><span className="code-punct">, </span><span className="code-string">"AI"</span><span className="code-punct">],</span></span></div>
        <div className="code-line"><span className="code-num">7</span><span>&nbsp;&nbsp;<span className="code-var">available</span><span className="code-punct">: </span><span className="code-keyword">true</span><span className="code-punct">,</span></span></div>
        <div className="code-line"><span className="code-num">8</span><span><span className="code-punct">{'}'}</span><span className="code-punct">;</span></span></div>
        <div className="code-line"><span className="code-num">9</span><span></span></div>
        <div className="code-line"><span className="code-num">10</span><span><span className="code-fn">hire</span><span className="code-punct">(</span><span className="code-var">developer</span><span className="code-punct">);</span> <span className="code-comment">// ✓</span></span></div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>доош</span>
      </div>
    </section>
  )
}
