import { brands } from '../data.js'
export default function BrandStrip() {
  return (
    <section className="brands" aria-label="Partners">
      {brands.map((src, i) => <img key={i} src={src} alt="Partner logo" />)}
    </section>
  )
}
