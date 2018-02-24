import React, { Component } from "react"
import { Route } from "react-router-dom"
import { Navbar, About, Projects } from "./components"

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      y: 0,
      thirdY: 0,
      negQuarterY: 0,
      active: "active"
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const y = window.scrollY,
        thirdY = y / 3,
        negQuarterY = -y / 4,
        active = y > 70 ? "inactive" : "active"

      this.setState({ y, thirdY, negQuarterY, active })
    })
  }

  render() {
    return (
      <div>
        <Navbar active={this.state.active} />
        <Route
          exact
          path="/"
          render={routeProps => <About {...routeProps} {...this.state} />}
        />
        <Route path="/projects" component={Projects} />
      </div>
    )
  }
}

export default Routes
