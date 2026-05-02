import { FiDownload } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CVDownload() {
  const ref = useScrollReveal()

  return (
    <section className="cv-section">
      <div ref={ref} className="cv-inner reveal">
        <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
        <h2 className="cv-title">CV татаж авах</h2>
        <p className="cv-desc">
          Боловсрол, төслүүд, ур чадвар болон туршлагын дэлгэрэнгүй мэдээллийг
          цэвэр, мэргэжлийн PDF форматаар татаж аваарай.
        </p>
        {/* public/ фолдерт cv.pdf файлаа оруулна уу */}
        <a
          href="/cv.pdf"
          download="Батхүлэг_CV.pdf"
          className="btn-cv"
          onClick={e => {
            fetch('/cv.pdf').then(r => {
              if (!r.ok) {
                e.preventDefault()
                alert('CV файл удахгүй нэмэгдэнэ. Надтай шууд холбоо барина уу!')
              }
            })
          }}
        >
          <FiDownload size={18} />
          CV татах (PDF)
        </a>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 16 }}>
          <code style={{ background: 'rgba(255,255,255,0.15)', padding: '2px 6px', borderRadius: 4 }}>cv.pdf</code> файлаа{' '}
          <code style={{ background: 'rgba(255,255,255,0.15)', padding: '2px 6px', borderRadius: 4 }}>public/</code> фолдерт хийгээрэй.
        </p>
      </div>
    </section>
  )
}
