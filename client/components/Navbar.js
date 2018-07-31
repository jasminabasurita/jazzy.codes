import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClick: ""
    }
    this.handleMenu = this.handleMenu.bind(this)
    this.exitMenu = this.exitMenu.bind(this)
  }

  handleMenu() {
    const menuClick = this.state.menuClick === "" ? "clicked" : ""
    this.setState({ menuClick })
  }

  exitMenu() {
    this.setState({ menuClick: "" })
  }

  render() {
    const props = this.props
    return (
      <nav className={props.active}>
        <h2>Jazzy.Codes</h2>
        <div className={this.state.menuClick}>
          <button id="menu-bars" onClick={this.handleMenu}>
            <img src="/icons/hamburger.svg" />
          </button>
          <NavLink
            to="/about"
            activeClassName="current"
            onClick={this.exitMenu}
          >
            <button className="navButton">
              <h3>About</h3>
            </button>
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="current"
            onClick={this.exitMenu}
          >
            <button className="navButton">
              <h3>Projects</h3>
            </button>
          </NavLink>
          <NavLink
            to="/presentations"
            activeClassName="current"
            onClick={this.exitMenu}
          >
            <button className="navButton">
              <h3>Presentations</h3>
            </button>
          </NavLink>
          <NavLink
            to="/articles"
            activeClassName="current"
            onClick={this.exitMenu}
          >
            <button className="navButton">
              <h3>Articles</h3>
            </button>
          </NavLink>
          <a href="/Jasmina_Jacquelina.pdf">
            <button className="navButton">
              <h3>Resume</h3>
            </button>
          </a>
        </div>
      </nav>
    )
  }
}
export default Navbar
