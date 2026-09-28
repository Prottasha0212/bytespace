import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout.jsx'
import FormField from '../components/auth/FormField.jsx'
import SocialLogin from '../components/auth/SocialLogin.jsx'
import Button from '../components/Button.jsx'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend in this assessment – just log the data.
    console.log('Login data:', form)
  }

  return (
    <AuthLayout
      title="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="auth__eyebrow">Sign In</p>
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <FormField id="email" label="Email" type="email" placeholder="designer@example.com" value={form.email} onChange={update} required />
        <FormField id="password" label="Password" type="password" placeholder="********" value={form.password} onChange={update} required />
        <div className="auth__submit"><Button type="submit">Sign In</Button></div>
      </form>
      <SocialLogin />
      <p className="auth__switch">New user? <Link to="/signup">Create an account</Link></p>
    </AuthLayout>
  )
}
