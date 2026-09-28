export default function SearchBar() {
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()} role="search">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#6b7280" strokeWidth="2"><circle cx="8" cy="8" r="6"/><path d="m13 13 5 5"/></svg>
      <input type="text" placeholder="Course, topic, creator" aria-label="Search courses" />
      <button type="submit" className="btn btn--lime">Search</button>
    </form>
  )
 }


