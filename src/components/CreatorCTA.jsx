import bg from '../assets/images/cta-bg.png'

export default function CreatorCTA() {
  return (
    <section
      className="cta"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      aria-label="Creator CTA"
    />
  )
}