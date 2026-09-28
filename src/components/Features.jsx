import growth from '../assets/images/growth-visual.png'
import creator from '../assets/images/creator-visual.png'
import { stats, benefits } from '../data.js'

export default function Features() {
  return (
    <section className="features" id="creators">
      <div className="features__row">
        <div className="features__text">
          <h2>Your Path to Professional<br />Growth Starts Here!</h2>
          <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
          <dl className="stats">
            {stats.map((s) => <div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>)}
          </dl>
        </div>
        <img src={growth} alt="Student learning a Figma course" className="features__img" />
      </div>
      <div className="features__row features__row--reverse">
        <img src={creator} alt="Creator dashboard with revenue cards" className="features__img" />
        <div className="features__text">
          <h2>Create &amp; Manage<br />Courses Easily.</h2>
          <p><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="checks">
            {benefits.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
