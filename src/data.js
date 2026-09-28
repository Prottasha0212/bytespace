import c1 from './assets/images/course-1.png'
import c2 from './assets/images/course-2.png'
import c3 from './assets/images/course-3.png'
import c4 from './assets/images/course-4.png'
import c5 from './assets/images/course-5.png'
import c6 from './assets/images/course-6.png'
import k1 from './assets/images/cat-1.png'
import k2 from './assets/images/cat-2.png'
import k3 from './assets/images/cat-3.png'
import k4 from './assets/images/cat-4.png'
import k5 from './assets/images/cat-5.png'
import k6 from './assets/images/cat-6.png'
import a1 from './assets/images/avatar-1.png'
import a2 from './assets/images/avatar-2.png'
import a3 from './assets/images/avatar-3.png'
import b1 from './assets/images/brand-1.png'
import b2 from './assets/images/brand-2.png'
import b3 from './assets/images/brand-3.png'
import b4 from './assets/images/brand-4.png'
import b5 from './assets/images/brand-5.png'

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Courses', href: '#courses' },
  { label: 'Creators', href: '#creators' },
]

export const brands = [b1, b2, b3, b4, b5]

export const filters = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking']

const base = { lessons: 17, duration: '2 hours 16 mins', comments: 59, rating: 4.5, author: 'purepearl studio', level: 'Beginner', price: 25 }
export const courses = [
  { ...base, title: 'Learn Figma from Basic', image: c1 },
  { ...base, title: 'Build Digital Asset', image: c2 },
  { ...base, title: 'the Power of Big Data', image: c3 },
  { ...base, title: 'Balancing Productivity and Life', image: c4 },
  { ...base, title: 'Mastering Money Management', image: c5 },
  { ...base, title: 'From Idea to Startup Success', image: c6 },
]

export const categories = [
  { name: 'Design', icon: k1 }, { name: 'Development', icon: k2 }, { name: 'IT & Software', icon: k3 },
  { name: 'Business', icon: k4 }, { name: 'Marketing', icon: k5 }, { name: 'Photography', icon: k6 },
]

export const stats = [{ value: '12K', label: 'Students' }, { value: '70+', label: 'Courses' }, { value: '16', label: 'Creators' }]
export const benefits = ['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community']

export const testimonials = [
  { name: 'Sarah M.', role: 'Enthusiastic Learner', avatar: a1, quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."' },
  { name: 'James L.', role: 'Lifelong Learner', avatar: a2, quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."' },
  { name: 'Alex B.', role: 'Inspired Creator', avatar: a3, quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."' },
]

export const footerColumns = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]
