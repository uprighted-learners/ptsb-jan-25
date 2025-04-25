import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../App"

function Auth({ logInMode }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")
  const { setToken } = useContext(UserContext)
  const nav = useNavigate()

  const logIn = () => {
    fetch(`http://localhost:4000/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error()
        }
        return res.json()
        // This is where the cookie gets set! (But we don't have to handle it here)
      })
      .then((data) => {
        if (data.token) {
          setToken(data.token)
          nav("/")
        } else {
          // surface error message to user
          setAuthError(data.message)
        }
      })
      .catch((err) => console.error(err))
  }

  const handleRegister = () => {
    fetch(`http://localhost:4000/auth/register`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error()
        }
        logIn()
      })
      .catch((err) => {
        setAuthError(err.message)
      })
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
        {logInMode ? (
          <button onClick={logIn}>Log in</button>
        ) : (
          <button onClick={handleRegister}>Sign up</button>
        )}

        {authError && <div className="auth-error">{authError}</div>}
        {logInMode ? (
          <Link to="/signup">create account</Link>
        ) : (
          <Link to="/login">already signed up? log in</Link>
        )}
      </div>
    </>
  )
}

export default Auth
