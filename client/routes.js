import React, { Component } from "react"
import { Navbar } from "./components"

// function processScroll() {
//   const y = window.scrollY,
//     negHalfY = -y / 2,
//     negThirdY = -y / 3,
//     negQuarterY = -y / 4
//   if (y > innerHeight) return
//   headshot.style.filter = hue(negHalfY)
//   hero.style.filter = brightness(y > 0 ? 100 + y : 100)
//   hero.style.transform = translateY(px(negQuarterY))
//   hi.style.filter = invert(y)
//   hi.style.transform = translateY(px(negQuarterY))
//   hi.style.textShadow = `${negQuarterY}px ${negThirdY}px 0 rgba(200, 255, 200, 0.7),
//            0                 ${negThirdY}px 0 #FDF4F999,
//            ${-negQuarterY}px ${negThirdY}px 0 rgba(200, 255, 200, 0.7)`
// }

const hue = degree => `hue-rotate(${degree}deg)`

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      negHalfY: 0
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const y = window.scrollY,
        negHalfY = -y / 2
      this.setState({ negHalfY })
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div id="headshot" style={{ filter: hue(this.state.negHalfY) }} />
      </div>
    )
  }
}

export default Routes
