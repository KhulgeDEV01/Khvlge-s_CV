import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const left  = useScrollReveal()
  const right = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-grid">
          {/* Зүүн тал — текст */}
          <div ref={left} className="reveal">
            <p className="section-label">Миний тухай</p>
            <h2 className="section-title">
              Ирээдүйг бүтээж байна,<br />
              <span className="gradient-text">commit тутамд.</span>
            </h2>

            <div style={{ marginTop: 28 }} className="about-content">
              <p>
                Их Засаг Их Сургуульд Програм Хангамжийн Инженерчлэл чиглэлээр суралцдаг оюутан.
                Хурдан, найдвартай, цар хүрээтэй backend систем хийхэд дуртай.
                Инженерчлэл болон хиймэл оюун ухааны огтлолцлыг судлах сонирхолтой —
                нарийн төвөгтэй асуудлыг хэрэглэж болохуйц шийдэл болгон хувиргадаг.
              </p>
              <p>
                Node.js болон React Native ашиглан fullstack хөгжүүлэлт, өгөгдлийн сангийн
                дизайн, AI API интеграцийн практик туршлагатай. Цэвэр архитектур,
                уншихад хялбар код болон хөгжүүлэгчийн туршлагад онцгой анхаарал хандуулдаг.
              </p>
              <p>
                Зорилго минь: дэлхийн шилдэг технологийн компанид мэргэжлийн fullstack
                инженер болж, сая сая хэрэглэгчид нөлөөлөх бүтээгдэхүүн хийхэд хувь нэмэр оруулах.
              </p>
            </div>

            <div className="about-stats">
              {[
                { n: '1+',   label: 'Бодит Төсөл'       },
                { n: '5+',   label: 'Технологи'          },
                { n: '2027', label: 'Төгсөх Он'          },
                { n: '∞',    label: 'Суралцах Хүсэл'     },
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-number">{s.n}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Баруун тал — боловсролын карт */}
          <div ref={right} className="reveal reveal-delay-2">
            <div className="about-education-card">
              <div className="edu-header">
                <div className="edu-icon">🎓</div>
                <div>
                  <div className="edu-title">Их Засаг Их Сургууль</div>
                  <div className="edu-sub">Үндэсний Инженерийн Технологи</div>
                </div>
              </div>

              <div className="edu-items">
                {[
                  'Б.Sc. Програм Хангамжийн Инженерчлэл',
                  'Төгсөх он: 2027',
                  'Чиглэл: Backend & AI Систем',
                  'Идэвхтэй төсөл хийгч',
                ].map(item => (
                  <div key={item} className="edu-item">
                    <span className="edu-item-dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="about-goals">
                <h4>Ажил мэргэжлийн сонирхол</h4>
                {['Backend Инженерчлэл', 'Fullstack Хөгжүүлэлт', 'AI / ML Интеграц', 'API Дизайн', 'Нээлттэй Эх'].map(t => (
                  <span key={t} className="goal-tag">✦ {t}</span>
                ))}
              </div>

              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Одоогоор <strong style={{ color: 'var(--accent)' }}>дадлагын боломж</strong> болон
                  сонирхолтой төслүүдэд хамтран ажиллахад бэлэн байна.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
