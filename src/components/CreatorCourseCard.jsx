import { Link } from 'react-router-dom'
import avatars from '../assets/images/avatars-stack.png'

export default function CreatorCourseCard({ course }) {
  return (
    <article className="creator-course-card">
      <Link to="/courses/build-digital-asset" className="creator-course-card__link" aria-label={course.title} />
      <div className="creator-course-card__image-wrap">
        <img src={course.image} alt={course.title} className="creator-course-card__image" />
      </div>
      <div className="creator-course-card__head">
        <h3>{course.title}</h3>
        <span>{course.rating} <i>★</i></span>
      </div>
      <p className="creator-course-card__author">by <Link to="/creators/purepearl-studio">{course.author}</Link></p>
      <div className="creator-course-card__meta">
        <span className="creator-course-card__level"><span className="creator-course-card__level-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <rect x="2" y="9" width="2.2" height="5" rx="0.7" fill="currentColor" />
              <rect x="6.9" y="6" width="2.2" height="8" rx="0.7" fill="currentColor" />
              <rect x="11.8" y="3" width="2.2" height="11" rx="0.7" fill="currentColor" />
            </svg>
          </span>{course.level}</span>
        <img src={avatars} alt="Enrolled students" />
      </div>
      <p className="creator-course-card__price"><b>${course.price}</b>/lifetime</p>
    </article>
  )
}
