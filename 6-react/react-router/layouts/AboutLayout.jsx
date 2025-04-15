import { NavLink, Outlet } from "react-router-dom"

function AboutLayout() {
  return (
    <div id="about-wrapper">
      <nav id="about-nav">
        <NavLink to="." end>
          Our Story
        </NavLink>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="staff">Staff</NavLink>
      </nav>
      <article>
        <Outlet />
      </article>
    </div>
  )
}

export default AboutLayout
