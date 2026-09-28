// Small line icons for the "This course include" list
export default function IncludeIcon({ name }) {
  const common = { width: 20, height: 20, viewBox: '0 0 20 20', fill: 'none', stroke: 'var(--blue)', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const paths = {
    resources: <path d="M2 5.5h5l1.5 2H18v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11Z" />,
    video: <><rect x="2" y="5" width="11" height="10" rx="1.5" /><path d="m17 8-4 2 4 2V8Z" /></>,
    certificate: <><rect x="2" y="3" width="13" height="10" rx="1.5" /><path d="M6 17l2.5-2 2.5 2v-4H6v4Z" /><circle cx="8.5" cy="8" r="1.6" /></>,
    consult: <><path d="M4 10a4 4 0 1 1 8 0" /><path d="M2 10v2a2 2 0 0 0 2 2h1v-4H2Z" /><path d="M18 10v2a2 2 0 0 1-2 2h-1v-4h3Z" /><path d="M13 16.5c0 1-1.3 1.5-3 1.5s-3-.5-3-1.5" /></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}
