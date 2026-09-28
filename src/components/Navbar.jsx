import logo from '../assets/images/logo-white.png'
import { navLinks } from '../data.js'

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#top"><img src={logo} alt="ByteSpace" className="navbar__logo" /></a>
      <nav className="navbar__links" aria-label="Main">
        {navLinks.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
      </nav>
      <div className="navbar__actions">
        <a href="/login">Sign In</a>
        <a href="/signup">Join Us</a>
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-label="Cart"><path d="M2 5h12l1 12H1L2 5Z"/><path d="M5 7V4a3 3 0 0 1 6 0v3"/></svg>
      </div>
    </header>
  )
}
