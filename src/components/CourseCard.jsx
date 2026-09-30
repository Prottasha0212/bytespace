import avatars from '../assets/images/avatars-stack.png'
import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <article className="course">
      <Link to="/courses/build-digital-asset" className="course__link" aria-label={course.title} />
      <img src={course.image} alt={course.title} className="course__thumb" />
      <div className="course__head">
        <h3>{course.title}</h3>
        <span className="course__rating">{course.rating} <i>★</i></span>
      </div>
      <p className="course__author">by <Link to="/creators/purepearl-studio" className="course__author-link">{course.author}</Link></p>
      <div className="course__meta">
        <span className="pill">{course.level}</span>
        <img src={avatars} alt="Enrolled students" />
      </div>
      <p className="course__price"><b>${course.price}</b>/lifetime</p>
    </article>
  )
}
