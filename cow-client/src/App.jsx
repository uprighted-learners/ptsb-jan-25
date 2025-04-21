import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { useEffect, useState } from "react"
import "./App.css"

import BreedInfo from "./pages/BreedInfo"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="breed/:breedId" element={<BreedInfo />}></Route>
      <Route path="404" element="nice try bro" />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
