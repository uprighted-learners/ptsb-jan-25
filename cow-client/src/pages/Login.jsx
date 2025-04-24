import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")

  const nav = useNavigate()

  const handleLoginSubmit = () => {
    fetch(`http://localhost:4000/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then(
        (res) => {
          if (!res.ok) {
            throw new Error()
          }
          return res.json()
        }
        // This is where the cookie gets set! (But we don't have to handle it yet)
      )
      .then((data) => {
        if (data.token) {
          nav("/")
        } else {
          setAuthError(data.message)
          // surface error message to user
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <div id="auth-input-wrapper">
        <input
          type="text"
          placeholder="email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLoginSubmit}>Log in</button>
        {authError && <div className="auth-error">{authError}</div>}
      </div>
    </>
  )
}

export default Login
