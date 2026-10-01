import { useState } from 'react'
import SearchHeader from '../components/SearchHeader.jsx'
import FilterToolbar from '../components/FilterToolbar.jsx'
import FilterChips from '../components/FilterChips.jsx'
import CourseCard from '../components/CourseCard.jsx'
import Pagination from '../components/Pagination.jsx'
import Footer from '../components/Footer.jsx'
import { allCourses, searchFilters } from '../data.js'
import '../styles/courses.css'

export default function Courses() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Featured')
  const [page, setPage] = useState(1)

  const results = allCourses.filter((c) => c.title.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <>
      <SearchHeader query={query} onQuery={setQuery} />
      <main className="catalog">
        <FilterToolbar />
        <FilterChips items={searchFilters} active={category} onChange={setCategory} className="filters--left" />
        {results.length ? (
          <div className="course-grid">
            {results.map((c, i) => <CourseCard key={`${c.title}-${i}`} course={c} />)}
          </div>
        ) : (
          <p className="catalog__empty">No courses match “{query}”. Try a different keyword.</p>
        )}
        <Pagination page={page} total={5} onChange={setPage} />
      </main>
      <Footer />
    </>
  )
}
