import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import CourseTabs from '../components/course/CourseTabs.jsx'
import CourseSidebar from '../components/course/CourseSidebar.jsx'
import { courseDetail as c, lessonModules, reviews } from '../data.js'
import LessonModule from '../components/course/LessonModule.jsx'
import ProgressCard from '../components/ProgressCard.jsx'
import RatingSummary from '../components/course/RatingSummary.jsx'
import ReviewCard from '../components/course/ReviewCard.jsx'
import FilterChips from '../components/FilterChips.jsx'
import video from '../assets/images/course-video.png'
import sneak1 from '../assets/images/sneak-1.png'
import sneak2 from '../assets/images/sneak-2.png'
import sneak3 from '../assets/images/sneak-3.png'
import sneak4 from '../assets/images/sneak-4.png'
import '../styles/course-detail.css'

export default function CourseDetail() {
  const [tab, setTab] = useState('About')
  const [ratingFilter, setRatingFilter] = useState('All rating')
  const ratingOptions = ['All rating', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1']
  return (
    <>
      <section className="course-hero">
        <Navbar />
        <div className="course-hero__head">
          <div>
            <h1>{c.title}</h1>
            <p className="course-hero__subtitle">{c.subtitle}</p>
            <p className="course-hero__author">by <a href="#creators">{c.author}</a></p>
            <div className="course-hero__badges">
              <span className="badge"><IconLevel />{c.level}</span>
              <span className="badge"><IconStar />{c.rating}</span>
              <span className="badge"><IconUsers />{c.students}</span>
            </div>
          </div>
          <button className="btn btn--lime course-hero__share"><IconShare />Share</button>
        </div>
        <div className="course-hero__grid">
          <img src={video} alt={`${c.title} preview video`} className="course-hero__video" />
          <CourseSidebar />
        </div>
      </section>

      <main className="course-body">
        <CourseTabs active={tab} onChange={setTab} />
        {tab === 'About' && (
          <>
            <h2>Description</h2>
            {c.description.map((p, i) => <p key={i} className="course-body__p">{p}</p>)}

            <h2>Sneak Peak</h2>
            <div className="sneak-grid">
              {[sneak1, sneak2, sneak3, sneak4].map((s, i) => <img key={i} src={s} alt={`Course preview ${i + 1}`} />)}
            </div>

            <h2>Key Points</h2>
            <ul className="checks">
              {c.keyPoints.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </>
        )}

        {tab === 'Lesson' && (
          <>
            <h2>Explore the Modules</h2>
            <p className="course-body__p">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>

            <h2>Lesson List</h2>
            <ul className="lesson-modules">
              {lessonModules.map((m) => <LessonModule key={m.title} {...m} />)}
            </ul>

            <h2>Lesson Content</h2>
            <p className="course-body__p">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>

            <h2>Lesson Progress Tracking</h2>
            <p className="course-body__p">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
            <ProgressCard percent={55} className="progress-card--wide" />
          </>
        )}

        {tab === 'Reviews' && (
          <>
            <h2>What Learners Are Saying</h2>
            <p className="course-body__p">Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>

            <RatingSummary />

            <h2>Individual Reviews:</h2>
            <FilterChips items={ratingOptions} active={ratingFilter} onChange={setRatingFilter} className="filters--left" />
            <div className="review-list">
              {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

function IconLevel() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 13V9M8 13V4M13 13V7" /></svg> }
function IconStar() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.5-4.3 2.5.9-5L1 6.2l5-.6L8 1Z" /></svg> }
function IconUsers() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="6" cy="5" r="2.2" /><path d="M1.5 13c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" /><circle cx="12" cy="6" r="1.8" /><path d="M10.5 9.3c1.9.3 3 1.5 3 3.7" /></svg> }
function IconShare() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12.5" cy="3.5" r="1.8" /><circle cx="3.5" cy="8" r="1.8" /><circle cx="12.5" cy="12.5" r="1.8" /><path d="m5.1 7 5.8-3.1M5.1 9l5.8 3.1" /></svg> }
