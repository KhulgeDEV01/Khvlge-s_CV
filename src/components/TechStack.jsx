import { useRef, useEffect } from 'react'

const GROUPS = [
  {
    label: 'Програмчлалын хэл',
    type: 'lang',
    items: [
      { icon: '🌐', name: 'HTML5'      },
      { icon: '🎨', name: 'CSS3'       },
      { icon: '⚡', name: 'JavaScript' },
      { icon: '🎯', name: 'Dart'       },
    ],
  },
  {
    label: 'Фреймворк & Ажиллах орчин',
    type: 'frame',
    items: [
      { icon: '💚', name: 'Node.js'      },
      { icon: '📱', name: 'React Native' },
      { icon: '🦋', name: 'Flutter'      },
      { icon: '📦', name: 'Expo'         },
    ],
  },
  {
    label: 'Өгөгдлийн сан',
    type: 'db',
    items: [
      { icon: '🐘', name: 'PostgreSQL' },
      { icon: '🐬', name: 'MySQL'      },
      { icon: '🍃', name: 'MongoDB'    },
    ],
  },
  {
    label: 'Хэрэгсэл & Платформ',
    type: 'tool',
    items: [
      { icon: '🔀', name: 'Git'         },
      { icon: '🐙', name: 'GitHub'      },
      { icon: '🤖', name: 'Anthropic AI'},
      { icon: '🚀', name: 'REST API'    },
    ],
  },
]

const BADGE_LABEL = { lang: 'хэл', frame: 'фреймворк', db: 'өгөгдлийн сан', tool: 'хэрэгсэл' }

function TechGroup({ group, delay }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el) } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal reveal-delay-${delay}`}>
      <div className="tech-group-label">{group.label}</div>
      <div className="tech-items">
        {group.items.map(item => (
          <div key={item.name} className="tech-card">
            <span className="tech-icon">{item.icon}</span>
            <span>{item.name}</span>
            <span className={`tech-card-badge badge-${group.type}`}>
              {BADGE_LABEL[group.type]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el) } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <p className="section-label">Техникийн ур чадвар</p>
          <h2 className="section-title">Ашигладаг технологиуд</h2>
          <p className="section-subtitle">
            Бодит аппликейшн зохион бүтээх, хийж бүтээх, хэрэглэгчдэд хүргэхэд
            ашигладаг технологиудын цуглуулга.
          </p>
        </div>

        <div className="tech-groups">
          {GROUPS.map((group, i) => (
            <TechGroup key={group.label} group={group} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
