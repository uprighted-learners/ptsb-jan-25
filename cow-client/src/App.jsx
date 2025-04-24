import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { createContext, useState } from "react"
import "./App.css"

import BreedInfo from "./pages/BreedInfo"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="breed/:breedId" element={<BreedInfo />}></Route>
      <Route path="404" element="nice try bro" />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
    </Route>
  )
)

const getCookieValue = (keyName) => {
  try {
    const value = document.cookie
      .split(";")
      .find((s) => s.includes(keyName))
      .split("=")[1]
    return value
  } catch {
    return null
  }
}

const getUserFromToken = () => {
  try {
    const token = getCookieValue("auth_token")
    const payload = jwtDecode(token)
    return payload.user
  } catch {
    return null
  }
}
export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(getUserFromToken())
  const [token, setToken] = useState(getCookieValue("auth_token"))

  return (
    <UserContext.Provider value={{ user, token, setToken }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}

export default App
