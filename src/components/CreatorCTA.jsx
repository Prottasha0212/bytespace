import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import shapes from '../assets/images/hero-shapes.png'

export default function CreatorCTA() {
  return (
    <section className="cta">
      <img src={shapes} alt="" className="cta__shapes" />
      <h2>Unlock Your Potential as a<br />Creator with ByteSpace</h2>
      <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
      <Button as={Link} to="/signup">Join as Creator</Button>
    </section>
  )
}
