import { FiGithub, FiCheck } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FEATURED = {
  title: 'E-unelgee',
  subtitle: 'AI ашигласан тээврийн хэрэгслийн гэмтлийн үнэлгээний систем',
  desc: 'Хиймэл оюун ухаан болон том хэмжээний өгөгдлийн дүн шинжилгээ ашиглан тээврийн хэрэгслийн осолд учирсан гэмтлийг зайнаас үнэлдэг цогц онлайн систем. Удаан, үнэтэй гар аргын үзлэгийг хурдан, нарийвчлалтай үнэлгээгээр солино.',
  features: [
    'Anthropic API ашиглан AI-д суурилсан гэмтлийн үнэлгээний систем',
    'Node.js дээр бүтээсэн RESTful backend API, PostgreSQL өгөгдлийн сантай',
    'React Native & Expo ашигласан кросс-платформ мобайл аппликейшн',
    'Бодит цагийн зургийн дүн шинжилгээ ба гэмтлийн дэлгэрэнгүй тайлан',
  ],
  stack: ['Node.js', 'PostgreSQL', 'React Native', 'Expo', 'Anthropic AI', 'REST API'],
  github: 'https://github.com/Sugaraa1/e-unelgee',
}

export default function Projects() {
  const header   = useScrollReveal()
  const featured = useScrollReveal()

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div ref={header} className="reveal">
          <p className="section-label">Төслүүд</p>
          <h2 className="section-title">Би юу бүтээсэн бэ</h2>
          <p className="section-subtitle">
            Эхнээс нь зохион бүтээж, хөгжүүлж, хэрэглэгчдэд хүргэсэн бодит аппликейшнууд.
          </p>
        </div>

        <div className="projects-grid">
          {/* Онцлох төсөл */}
          <div ref={featured} className="project-featured reveal reveal-delay-1">
            <div className="project-featured-glow" />

            <div className="project-top-row">
              <span className="project-featured-tag">⭐ Онцлох Төсөл</span>
            </div>

            <div className="project-header">
              <h3 className="project-title gradient-text">{FEATURED.title}</h3>
            </div>

            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 12, marginTop: -8 }}>
              {FEATURED.subtitle}
            </p>

            <p className="project-desc">{FEATURED.desc}</p>

            <div className="project-features">
              {FEATURED.features.map(f => (
                <div key={f} className="project-feature">
                  <FiCheck className="project-feature-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="project-stack">
              {FEATURED.stack.map(s => (
                <span key={s} className="stack-badge">{s}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={FEATURED.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                <FiGithub size={15} /> GitHub-д үзэх
              </a>
            </div>
          </div>

          {/* Удахгүй нэмэгдэх */}
          <div className="projects-more reveal reveal-delay-2">
            <div style={{ fontSize: 32, marginBottom: 12 }}>🚧</div>
            <strong>Дараагийн төслүүд хийгдэж байна</strong>
            GitHub дээр миний туршилт, хэрэгслүүд болон хувь нэмрүүд байгаа.
            Цаашид илүү олон төсөл нэмэгдэнэ.
            <div style={{ marginTop: 20 }}>
              <a
                href="https://github.com/nickname379"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <FiGithub size={14} />
                GitHub дээр бүгдийг харах
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
