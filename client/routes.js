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

const hue = degree => `hue-rotate(${degree}deg)`,
  brightness = percent => `brightness(${percent}%)`,
  translateY = amount => `translate3d(0, ${amount}px, 0)`

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      y: 0,
      negHalfY: 0,
      negQuarterY: 0,
      active: "active"
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const y = window.scrollY,
        negHalfY = -y / 2,
        negQuarterY = -y / 4,
        active = y > 70 ? "inactive" : "active"

      this.setState({ y, negHalfY, negQuarterY, active })
    })
  }
  render() {
    const { negHalfY, negQuarterY, y } = this.state
    return (
      <div>
        <Navbar active={this.state.active} />
        <div
          id="headshot"
          style={{
            filter: hue(negHalfY) + brightness(y > 0 ? 100 + y : 100),
            transform: translateY(negQuarterY)
          }}
        />
      </div>
    )
  }
}

export default Routes
