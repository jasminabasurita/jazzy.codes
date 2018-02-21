import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: "active"
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) this.setState({ active: "inactive" })
      else this.setState({ active: "active" })
    })
  }
  render() {
    return (
      <nav className={this.state.active}>
        <h2>Jazzy.Codes</h2>
        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      </nav>
    )
  }
}

export default Navbar
