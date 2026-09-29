import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import CreatorCourseCard from '../components/CreatorCourseCard.jsx'
import { creatorProfile } from '../data.js'
import '../styles/creator-profile.css'

const Icon = ({ children }) => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

export default function CreatorProfile() {
  const [following, setFollowing] = useState(false)

  return (
    <div className="creator-page">
      <section className="creator-profile__hero">
        <Navbar />
        <div className="creator-profile__head">
          <div className="creator-profile__identity">
            <img src={creatorProfile.avatar} alt={creatorProfile.name} className="creator-profile__avatar" />
            <div>
              <div className="creator-profile__name-row">
                <h1>{creatorProfile.name}</h1>
                <span className="creator-profile__badge">Creator</span>
              </div>
              <p>{creatorProfile.role}</p>
            </div>
          </div>

          <div className="creator-profile__bio">
            <p>{creatorProfile.bio[0]}</p>
            <p>{creatorProfile.bio[1]}</p>
            <p>{creatorProfile.bio[2]}</p>
          </div>

          <div className="creator-profile__bottom">
            <div className="creator-profile__stats">
              <span><b>{creatorProfile.products}</b> Products</span>
              <span><b>{creatorProfile.followers}</b> Followers</span>
            </div>
            <button className="creator-profile__follow" onClick={() => setFollowing(!following)}>
              {following ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </section>

      <main className="creator-catalog">
        <div className="creator-toolbar">
          <div className="creator-toolbar__left">
            <button className="creator-tool"><Icon><path d="M2 3h16l-6 7v6l-4 1v-7L2 3Z" /></Icon>Filter</button>
            <button className="creator-tool"><Icon><path d="M4 16v-4M10 16V8M16 16V3" /></Icon>Level</button>
            <button className="creator-tool"><Icon><path d="m6 2 3 5H3l3-5Z" /><rect x="3" y="12" width="5" height="5" /><circle cx="14" cy="14.5" r="2.7" /></Icon>Category</button>
          </div>
          <button className="creator-tool"><Icon><path d="M2 5h16M2 10h10M2 15h5" /></Icon>Most relevant</button>
        </div>

        <div className="creator-course-grid">
          {creatorProfile.courses.map((course, index) => (
            <CreatorCourseCard key={`${course.title}-${index}`} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
