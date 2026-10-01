// "Learning Progress 55%" card – used in the Hero-style float card and the Lesson tab
export default function ProgressCard({ percent = 55, className = '' }) {
  return (
    <div className={`progress-card ${className}`}>
      <p className="progress-card__label">Learning Progress</p>
      <p className="progress-card__value">{percent}%</p>
      <div className="progress-card__bar"><span style={{ width: `${percent}%` }} /></div>
    </div>
  )
}
