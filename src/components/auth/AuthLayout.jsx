import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-mark.png'
import AuthShowcase from './AuthShowcase.jsx'
import '../../styles/auth.css'

// Shared shell for Login & Signup: blue grid background, intro text, showcase and a white form card.
export default function AuthLayout({ title, text, children }) {
  return (
    <main className="auth">
      <div className="auth__inner">
        <Link to="/" className="auth__logo"><img src={logo} alt="ByteSpace home" /></Link>
        <section className="auth__intro">
          <h2>{title}</h2>
          <p>{text}</p>
          <AuthShowcase />
        </section>
        <section className="auth__card">{children}</section>
      </div>
    </main>
  )
}
