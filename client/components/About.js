import React from "react"
import { connect } from "react-redux"
import Markdown from "react-markdown"

const grayscale = percent => `grayscale(${percent}%)`,
  contrast = percent => `contrast(${percent}%)`,
  translateY = amount => `translate3d(0, ${amount}px, 0)`

const About = props => {
  const { thirdY, negQuarterY } = props
  return (
    <div>
      <div
        id="underlay"
        style={{
          transform: translateY(negQuarterY),
          backgroundColor: `rgba(130, 58, 111, ${thirdY / 100})`
        }}
      >
        <div
          id="headshot"
          style={{
            filter:
              grayscale(thirdY) + contrast(thirdY > 100 ? 200 : 100 + thirdY)
          }}
        >
          <div id="profiles">
            <a href="https://github.com/jasminabasurita">
              <img src="/icons/github.svg" />
            </a>
            <a href="https://linkedin.com/in/jasmina-jacquelina">
              <img src="/icons/linkedin.svg" />
            </a>
            <a href="mailto:jasminejacquelin@gmail.com">
              <img src="/icons/mail.svg" />
            </a>
          </div>
        </div>
      </div>
      <div id="hero">
        <div>
          <Markdown source={props.aboutMe} />
        </div>
      </div>
    </div>
  )
}

const mapState = ({ aboutMe }) => ({ aboutMe })

export default connect(mapState)(About)
