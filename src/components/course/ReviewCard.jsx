import Stars from './Stars.jsx'

export default function ReviewCard({ name, role, time, rating, avatar, text }) {
  return (
    <article className="review-card">
      <header>
        <img src={avatar} alt={name} />
        <div><b>{name}</b><span>{role}</span></div>
        <time>{time}</time>
      </header>
      <Stars count={rating} />
      <p>{text}</p>
    </article>
  )
}
