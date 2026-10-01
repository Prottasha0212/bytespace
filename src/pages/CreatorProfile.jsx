import CreatorProfileHero from '../components/CreatorProfileHero.jsx'
import FilterToolbar from '../components/FilterToolbar.jsx'
import CourseCard from '../components/CourseCard.jsx'
import Footer from '../components/Footer.jsx'
import { courses } from '../data.js'
import '../styles/creator-profile.css'

export default function CreatorProfile() {
  return (
    <>
      <CreatorProfileHero />
      <main className="creator-courses">
        <FilterToolbar />
        <div className="course-grid">
          {courses.map((c) => <CourseCard key={c.title} course={c} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}
