import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout.jsx'
import FormField from '../components/auth/FormField.jsx'
import Button from '../components/Button.jsx'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend in this assessment – just log the data.
    console.log('Signup data:', form)
  }

  return (
    <AuthLayout
      title="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="auth__eyebrow">Create an Account</p>
      <h1>Welcome to ByteSpace</h1>
      <form onSubmit={handleSubmit}>
        <FormField id="name" label="Full Name" type="text" placeholder="Jamie Davis" value={form.name} onChange={update} required />
        <FormField id="email" label="Email" type="email" placeholder="designer@example.com" value={form.email} onChange={update} required />
        <FormField id="password" label="Password" type="password" placeholder="********" minLength={8} value={form.password} onChange={update} required />
        <div className="auth__submit"><Button type="submit">Continue</Button></div>
      </form>
      <p className="auth__switch">Already have an account? <Link to="/login">Login</Link></p>
    </AuthLayout>
  )
}
