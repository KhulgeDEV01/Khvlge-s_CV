import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {year} <span>Б.Батхүлэг</span> — React-аар бүтээсэн ❤️
        </p>

        <div className="footer-links">
          <a href="https://github.com/nickname379" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/khvlge-battulga-94250b407" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:bathvlegbattulga204@gmail.com" className="footer-link" aria-label="Имэйл">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
