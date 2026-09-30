import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Button from './Button.jsx'
import { creatorProfile as p } from '../data.js'

export default function CreatorProfileHero() {
  const [following, setFollowing] = useState(false)
  return (
    <section className="creator-hero">
      <Navbar />
      <div className="creator-hero__body">
        <img src={p.avatar} alt={p.name} className="creator-hero__avatar" />
        <div className="creator-hero__info">
          <h1>{p.name}<span className="pill pill--lime">Creator</span></h1>
          <p className="creator-hero__tagline">{p.tagline}</p>
        </div>
      </div>
      {p.bio.map((line, i) => <p key={i} className="creator-hero__bio">{line}</p>)}
      <div className="creator-hero__row">
        <div className="creator-hero__stats">
          <span className="badge"><b>{p.products}</b> Products</span>
          <span className="badge"><b>{p.followers}</b> Followers</span>
        </div>
        <Button onClick={() => setFollowing((f) => !f)}>{following ? 'Following' : 'Follow'}</Button>
      </div>
    </section>
  )
}
