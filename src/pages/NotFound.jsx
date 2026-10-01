import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import '../styles/not-found.css'

export default function NotFound() {
  return (
    <>
      <section className="not-found">
        <Navbar />
        <div className="not-found__body">
          <h1 className="not-found__code">404</h1>
          <h2>The page you are looking for doesn&rsquo;t exist</h2>
          <p>Try to use a correct url or go back to homepage to start again</p>
          <Button as={Link} to="/">Back to Home</Button>
        </div>
      </section>
      <Footer />
    </>
  )
}
