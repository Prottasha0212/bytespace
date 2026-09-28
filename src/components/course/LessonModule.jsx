const VideoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="11" height="10" rx="1.5" /><path d="m17 8-4 2 4 2V8Z" />
  </svg>
)

export default function LessonModule({ title, text }) {
  return (
    <li className="lesson-module">
      <span className="lesson-module__icon"><VideoIcon /></span>
      <div><h3>{title}</h3><p>{text}</p></div>
    </li>
  )
}
