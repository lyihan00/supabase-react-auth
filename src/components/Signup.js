import { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from '../contexts/Auth'

export function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState(null)

  // Get signUp function from the auth context
  const { signUp } = useAuth()

  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password })

    if (error) return setError(error)

    history.push('/')
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>{error && JSON.stringify(error)}</div>

        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
      </form>

      <br/>

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  )
}