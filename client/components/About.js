import React from "react"

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
          <div id="overlay" style={{}} />
        </div>
      </div>
      <div id="hero">
        <div>
          <h1>Hi, I'm Jazzy!</h1>
          <p>
            Five years ago I fell in love with Arch Linux and started hacking
            mine and my friends computers. I rapidly fell down a rabbit hole of
            config files, documentation, and what seemed like an endless cycle
            of breaking and fixing my build (thankfully it ended!).
          </p>
          <p>
            For years I listened to the impostor syndrome in my head and sought
            out a passion for the culinary arts instead of computers. Then, one
            year ago, that all changed. An NPR segment about the evolution of
            the tech industry finally flipped a switch and I knew that the only
            way to pursue my goals were to start incorporating the emerging
            technologies into everything I did. I got home and immediately
            kicked into research mode, started studying Ruby, discovered Grace
            Hopper and knew that I wouldn’t stop until I was a developer.
          </p>
          <p>
            Now, as a software engineer, I look to implement my skills in
            solving real world problems whenever I can. I strongly believe in
            the advancements that programming can offer in the way that we learn
            and grow as people. When I’m not programming I love hiking,
            kayaking, snowshoeing, gardening, playing accordion, and playing
            with my three dogs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
