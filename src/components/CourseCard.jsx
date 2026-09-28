import avatars from '../assets/images/avatars-stack.png'

export default function CourseCard({ course }) {
  return (
    <article className="course">
      <img src={course.image} alt={course.title} className="course__thumb" />
      <div className="course__head">
        <h3>{course.title}</h3>
        <span className="course__rating">{course.rating} <i>★</i></span>
      </div>
      <p className="course__author">by <a href="#creators">{course.author}</a></p>
      <div className="course__meta">
        <span className="pill">{course.level}</span>
        <img src={avatars} alt="Enrolled students" />
      </div>
      <p className="course__price"><b>${course.price}</b>/lifetime</p>
    </article>
  )
}
