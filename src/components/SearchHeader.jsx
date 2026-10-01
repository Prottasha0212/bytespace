import Navbar from './Navbar.jsx'

export default function SearchHeader({ query, onQuery }) {
  return (
    <section className="page-hero">
      <Navbar />
      <h1>Find Your Next Course</h1>
      <form className="course-search" onSubmit={(e) => e.preventDefault()} role="search">
        <label className="course-search__box">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6b7280" strokeWidth="2"><circle cx="8" cy="8" r="6"/><path d="m13 13 5 5"/></svg>
          <input type="search" placeholder="Search" value={query} onChange={(e) => onQuery(e.target.value)} aria-label="Search courses" />
        </label>
        <label className="course-search__type">
          <select aria-label="Search in" defaultValue="Courses"><option>Courses</option><option>Creators</option></select>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 4 5 5 5-5"/></svg>
        </label>
      </form>
    </section>
  )
}
