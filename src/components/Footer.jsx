import logo from '../assets/images/logo-dark.png'
import { footerColumns } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__news">
          <img src={logo} alt="ByteSpace" />
          <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit" className="btn btn--lime">Search</button>
          </form>
          <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
        </div>
        <div className="footer__cols">
          {footerColumns.map((col, i) => (
            <ul key={i}>{col.map((l) => <li key={l}><a href="#top">{l}</a></li>)}</ul>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <span>@ 2023 ByteSpace. All rights reserved.</span>
        <span><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a><a href="#top">Cookies Settings</a></span>
      </div>
    </footer>
  )
}
