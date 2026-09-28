import { testimonials } from '../data.js'

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="testimonials__head">
        <h2>Discover What Our<br />Community Is Saying</h2>
        <p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <figure key={t.name} className="testimonial">
            <img src={t.avatar} alt={t.name} />
            <figcaption><b>{t.name}</b><span>{t.role}</span></figcaption>
            <blockquote>{t.quote}</blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}
