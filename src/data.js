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
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Creators', to: '/#creators' },
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

// Courses page (design shows 18 cards – the 6 sample courses repeated)
export const allCourses = [...courses, ...courses, ...courses]
export const searchFilters = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking']

// Course detail page (single sample course – Build Digital Asset)
import creatorAvatar from './assets/images/creator-avatar.png'
export const courseDetail = {
  title: 'Build Digital Asset: A Comprehensive Guide',
  subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
  author: 'purepearl studio',
  level: 'Intermediate',
  rating: '4.8 (172 reviews)',
  students: '199 Students',
  lessonsCount: '112 Lessons (24 hours)',
  price: 25,
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  lessons: [
    { n: '01', title: 'Introduction to Digital Assets', time: '12 mins' },
    { n: '02', title: 'Design Principles for Impacts', time: '21 mins' },
    { n: '03', title: 'Advanced Techniques in Digital Creation', time: '16 mins' },
  ],
  moreVideos: 99,
  includes: ['Learning Resources', 'Quality Lesson Videos', 'Certificate of Completion', 'Private Consultation'],
  keyPoints: ['Foundational Concepts', 'Design Principles Mastery', 'Advanced Techniques in Digital Creation', 'Project Showcase and Critique', 'Optimizing for Various Platforms', 'Digital Asset Management Best Practices', 'Monetization Strategies', 'Capstone Project: Building Your Portfolio'],
  creator: { name: 'PurePearl Studio', role: 'Professional Creator', avatar: creatorAvatar },
}

export const lessonModules = [
  { title: 'Module 1: Introduction to Digital Assets', text: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation." },
  { title: 'Module 2: Design Principles for Impact', text: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills." },
  { title: 'Module 4: User-Centric Design Strategies', text: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design." },
  { title: 'Module 5: Interactive Media and Engagement', text: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences." },
  { title: 'Module 6: Project Showcase and Critique', text: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence." },
  { title: 'Module 7: Optimizing Digital Assets for Various Platforms', text: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes." },
]
