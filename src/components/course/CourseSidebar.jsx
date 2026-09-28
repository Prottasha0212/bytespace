import Button from '../Button.jsx'
import IncludeIcon from './IncludeIcon.jsx'
import { courseDetail as c } from '../../data.js'

export default function CourseSidebar() {
  return (
    <aside className="course-sidebar">
      <h3>{c.lessonsCount}</h3>
      <ol className="lesson-list">
        {c.lessons.map((l) => (
          <li key={l.n}>
            <span className="lesson-list__n">{l.n}</span>
            <span className="lesson-list__title">{l.title}</span>
            <span className="lesson-list__time">{l.time}</span>
          </li>
        ))}
      </ol>
      <p className="course-sidebar__more">{c.moreVideos} more videos</p>
      <p className="course-sidebar__cta-text">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <p className="course-sidebar__price"><b>${c.price}</b>/lifetime</p>
      <Button className="course-sidebar__enroll">Enroll Now</Button>

      <h4>This course include</h4>
      <ul className="includes">
        {[['resources', c.includes[0]], ['video', c.includes[1]], ['certificate', c.includes[2]], ['consult', c.includes[3]]].map(([icon, label]) => (
          <li key={label}><IncludeIcon name={icon} />{label}</li>
        ))}
      </ul>

      <div className="creator-card">
        <img src={c.creator.avatar} alt={c.creator.name} />
        <div><b>{c.creator.name}</b><span>{c.creator.role}</span></div>
      </div>
      <p className="course-sidebar__cta-text">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <button className="btn-outline">See Full Profile</button>
    </aside>
  )
}
