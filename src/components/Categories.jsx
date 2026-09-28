import { categories } from '../data.js'
export default function Categories() {
  return (
    <section className="section categories">
      <h2 className="h2--sm">Explore Diverse Learning Paths at Bytespace</h2>
      <p className="section__lead">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p>
      <ul className="category-grid">
        {categories.map((c) => (
          <li key={c.name}><a href="#courses"><img src={c.icon} alt="" />{c.name}</a></li>
        ))}
      </ul>
    </section>
  )
}
