import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = props => (
  <nav className={props.active}>
    <h2>Jazzy.Codes</h2>
    <div>
      <NavLink to="/">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </div>
  </nav>
)

export default Navbar
