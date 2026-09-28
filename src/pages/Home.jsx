import Hero from '../components/Hero.jsx'
import BrandStrip from '../components/BrandStrip.jsx'
import CourseSection from '../components/CourseSection.jsx'
import Categories from '../components/Categories.jsx'
import Features from '../components/Features.jsx'
import CreatorCTA from '../components/CreatorCTA.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <CourseSection />
      <Categories />
      <Features />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </>
  )
}
