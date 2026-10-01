import course1 from '../../assets/images/auth-course-1.png'
import course2 from '../../assets/images/auth-course-2.png'
import students from '../../assets/images/auth-students.png'
import spring from '../../assets/images/auth-spring.png'
import torus from '../../assets/images/auth-torus.png'
import cone from '../../assets/images/auth-cone.png'

// Decorative collage of course cards + 3D shapes (left side of Login / Signup)
export default function AuthShowcase() {
  return (
    <div className="showcase" aria-hidden="true">
      <img src={course2} alt="" className="showcase__course showcase__course--back" />
      <img src={course1} alt="" className="showcase__course showcase__course--front" />
      <img src={torus} alt="" className="showcase__torus" />
      <img src={cone} alt="" className="showcase__cone" />
      <img src={students} alt="" className="showcase__students" />
      <img src={spring} alt="" className="showcase__spring" />
    </div>
  )
}
