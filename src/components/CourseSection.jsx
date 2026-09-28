import { useState } from 'react'
import CourseCard from './CourseCard.jsx'
import FilterChips from './FilterChips.jsx'
import { courses, filters } from '../data.js'

export default function CourseSection() {
  const [active, setActive] = useState('Featured')
  return (
    <section className="section courses" id="courses">
      <h2>Discover Your Passion,<br />Build Your Skills</h2>
      <p className="section__lead">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
      <FilterChips items={filters} active={active} onChange={setActive} more />
      <div className="course-grid">
        {courses.map((c) => <CourseCard key={c.title} course={c} />)}
      </div>
    </section>
  )
}
