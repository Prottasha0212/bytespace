// Category chips – used on the home page and on the Courses page
export default function FilterChips({ items, active, onChange, more = false, className = '' }) {
  return (
    <div className={`filters ${className}`} role="tablist">
      {items.map((f) => (
        <button key={f} role="tab" aria-selected={f === active} className={`chip ${f === active ? 'chip--active' : ''}`} onClick={() => onChange(f)}>{f}</button>
      ))}
      {more && <button className="chip chip--link">+ More</button>}
    </div>
  )
}
