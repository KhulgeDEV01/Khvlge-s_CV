import { FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CONTACTS = [
  {
    icon: <FiMail />,
    label: 'Имэйл',
    value: 'bathvlegbattulga204@gmail.com',
    href: 'mailto:bathvlegbattulga204@gmail.com',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/nickname379',
    href: 'https://github.com/nickname379',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'khvlge-battulga',
    href: 'https://www.linkedin.com/in/khvlge-battulga-94250b407',
  },
]

export default function Contact() {
  const left  = useScrollReveal()
  const right = useScrollReveal()

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={left} className="reveal">
          <p className="section-label">Холбоо барих</p>
          <h2 className="section-title">
            Хамт гайхалтай зүйл<br />
            <span className="gradient-text">бүтээцгээе.</span>
          </h2>
          <p className="section-subtitle">
            Дадлага, хамтын ажиллагаа эсвэл зүгээр ярилцахаар болсон —
            холбоо барихад үргэлж бэлэн байна.
          </p>
        </div>

        <div className="contact-grid">
          {/* Зүүн тал — холбоо барих карт */}
          <div ref={right} className="reveal reveal-delay-1 contact-cards">
            {CONTACTS.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">{c.icon}</div>
                <div>
                  <div className="contact-card-label">{c.label}</div>
                  <div className="contact-card-value">{c.value}</div>
                </div>
                <FiArrowRight className="contact-card-arrow" />
              </a>
            ))}
          </div>

          {/* Баруун тал — боломжтой байдал */}
          <div className="reveal reveal-delay-2 contact-availability">
            <div className="avail-header">
              <span className="avail-dot" />
              <span className="avail-title">Одоо боломжтой байна</span>
            </div>
            <p className="avail-desc">
              Туршлагатай инженерүүдийн хажууд ажиллан хөгжиж,
              утга учиртай бүтээгдэхүүн хийхэд хувь нэмэр оруулах
              дадлага болон junior хөгжүүлэгчийн ажлын байрыг идэвхтэй хайж байна.
            </p>
            <div className="avail-tags">
              {['Дадлага', 'Junior Dev', 'Fullstack', 'Backend', 'Зайнаас / Оффис'].map(t => (
                <span key={t} className="avail-tag">{t}</span>
              ))}
            </div>
            <a
              href="mailto:bathvlegbattulga204@gmail.com"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <FiMail size={16} />
              Имэйл илгээх
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
