const TABS = ['About', 'Lesson', 'Reviews']

export default function CourseTabs({ active, onChange }) {
  return (
    <div className="tabs" role="tablist">
      {TABS.map((t) => (
        <button key={t} role="tab" aria-selected={t === active} className={`chip ${t === active ? 'chip--active' : ''}`} onClick={() => onChange(t)}>{t}</button>
      ))}
    </div>
  )
}
