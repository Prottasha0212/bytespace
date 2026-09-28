import { useState } from 'react'
import CourseCard from './CourseCard.jsx'
import { courses, filters } from '../data.js'

export default function CourseSection() {
  const [active, setActive] = useState('Featured')
  return (
    <section className="section courses" id="courses">
      <h2>Discover Your Passion,<br />Build Your Skills</h2>
      <p className="section__lead">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
      <div className="filters" role="tablist">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={f === active} className={`chip ${f === active ? 'chip--active' : ''}`} onClick={() => setActive(f)}>{f}</button>
        ))}
        <button className="chip chip--link">+ More</button>
      </div>
      <div className="course-grid">
        {courses.map((c) => <CourseCard key={c.title} course={c} />)}
      </div>
    </section>
  )
}
