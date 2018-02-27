import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = props => (
  <nav className={props.active}>
    <h2>Jazzy.Codes</h2>
    <div>
      <NavLink to="/about" activeClassName="current">
        <button>
          <h3>About</h3>
        </button>
      </NavLink>
      <NavLink to="/projects" activeClassName="current">
        <button>
          <h3>Projects</h3>
        </button>
      </NavLink>
      <NavLink to="/presentations" activeClassName="current">
        <button>
          <h3>Presentations</h3>
        </button>
      </NavLink>
      <NavLink to="/articles" activeClassName="current">
        <button>
          <h3>Articles</h3>
        </button>
      </NavLink>
      <a href="/Jasmina_Jacquelina.pdf">
        <button>
          <h3>Resume</h3>
        </button>
      </a>
    </div>
  </nav>
)

export default Navbar
