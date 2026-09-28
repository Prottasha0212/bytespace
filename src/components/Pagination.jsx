const Arrow = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={dir === 'prev' ? 'm11 3-6 6 6 6' : 'm7 3 6 6-6 6'} /></svg>
)

export default function Pagination({ page, total, onChange }) {
  return (
    <nav className="pagination" aria-label="Pagination">
      <button className="pagination__arrow" aria-label="Previous page" disabled={page === 1} onClick={() => onChange(page - 1)}><Arrow dir="prev" /></button>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button key={n} className={`pagination__num ${n === page ? 'is-current' : ''}`} aria-current={n === page ? 'page' : undefined} onClick={() => onChange(n)}>{n}</button>
      ))}
      <button className="pagination__arrow" aria-label="Next page" disabled={page === total} onClick={() => onChange(page + 1)}><Arrow dir="next" /></button>
    </nav>
  )
}
