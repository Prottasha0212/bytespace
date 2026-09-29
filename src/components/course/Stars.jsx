export default function Stars({ count = 5, size = 16 }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 16 16" fill={i < count ? '#1a1a1a' : '#d9d9d9'}>
          <path d="M8 1l2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.5-4.3 2.5.9-5L1 6.2l5-.6L8 1Z" />
        </svg>
      ))}
    </span>
  )
}
