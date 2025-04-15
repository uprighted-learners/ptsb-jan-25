/* 

React Router creates the illusion of a multi-page application
while still loading the app as a Single Page Application

The user experiences different pages with different URLs, 
but under the hood React is still just swapping out components, 
not making new HTTP requests on page loads

*/

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import AboutLayout from "../layouts/AboutLayout"
import AppLayout from "../layouts/AppLayout"

import About from "../pages/About"
import Contact from "../pages/Contact"
import FAQ from "../pages/FAQ"
import Home from "../pages/Home"
import Staff from "../pages/Staff"

import { useState } from "react"
import "./App.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutLayout />}>
        <Route index element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="staff" element={<Staff />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
