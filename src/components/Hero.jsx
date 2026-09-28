import Navbar from './Navbar.jsx'
import SearchBar from './SearchBar.jsx'
import shapes from '../assets/images/hero-shapes.png'
import ellipse from '../assets/images/hero-ellipse.png'
import man from '../assets/images/hero-man.png'
import progress from '../assets/images/card-progress.png'
import students from '../assets/images/card-students.png'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img src={shapes} alt="" className="hero__shapes" />
      <Navbar />
      <div className="hero__content">
        <h1>Get Access to Hundreds<br />Courses Available</h1>
        <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <SearchBar />
      </div>
      <div className="hero__stage">
        <img src={ellipse} alt="" className="hero__ellipse" />
        <img src={man} alt="Smiling student with a laptop" className="hero__man" />
        <span className="hero__tag">UI/UX Design<small>200 Courses · 1000+ Students</small></span>
        <img src={progress} alt="Learning progress 55%" className="float-card hero__progress" />
        <img src={students} alt="2K+ happy students" className="float-card hero__students" />
      </div>
    </section>
  )
}
