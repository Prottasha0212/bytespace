import Stars from './Stars.jsx'
import { ratingSummary } from '../../data.js'

export default function RatingSummary() {
  return (
    <div className="rating-summary">
      <div className="rating-summary__score">
        <p>Ratings</p>
        <b>{ratingSummary.average}</b>
      </div>
      <ul className="rating-summary__bars">
        {ratingSummary.breakdown.map((b) => (
          <li key={b.stars}>
            <span className="rating-summary__track"><span style={{ width: `${b.pct}%` }} /></span>
            <Stars count={5} size={14} />
            <span className="rating-summary__count">{b.count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
