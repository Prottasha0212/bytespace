import Button from './Button.jsx'
import bg from '../assets/images/cta-bg.png'

export default function CreatorCTA() {
  return (
    <section className="cta" style={{ backgroundImage: `url(${bg})` }}>
      <h2>Unlock Your Potential as a<br />Creator with ByteSpace</h2>
      <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
      <Button as="a" href="/signup">Join as Creator</Button>
    </section>
  )
}
