import React from "react"

const hue = degree => `hue-rotate(${degree}deg)`,
  brightness = percent => `brightness(${percent}%)`,
  grayscale = percent => `grayscale(${percent}%)`,
  contrast = percent => `contrast(${percent}%)`,
  translateY = amount => `translate3d(0, ${amount}px, 0)`

const About = props => {
  const { y, thirdY, negQuarterY } = props
  return (
    <div>
      <div
        id="overlay"
        style={{
          transform: translateY(negQuarterY),
          backgroundColor: `rgba(122, 0, 153, ${thirdY / 100})`
        }}
      >
        <div
          id="headshot"
          style={{
            filter:
              grayscale(thirdY) + contrast(thirdY > 100 ? 200 : 100 + thirdY)
          }}
        />
      </div>
      <div id="hero">
        <h1>Hello World</h1>
      </div>
    </div>
  )
}

export default About
