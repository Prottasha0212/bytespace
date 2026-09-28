import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

// Login / Signup (bonus) pages will be added here as new <Route>s.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
