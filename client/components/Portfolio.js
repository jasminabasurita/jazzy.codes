import React from "react"
import { connect } from "react-redux"

const Portfolio = props => (
  <div id="portfolio">
    {props.items.length &&
      props.items.map(item => (
        <div
          className="portfolio-item"
          key={item.id}
          style={{
            background: `url(${item.imageUrl}) no-repeat`
          }}
        >
          <div className="item-overlay">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <a href={item.repo}>GitHub Repo</a>
            <a href={item.deploy}>Deployed Link</a>
          </div>
        </div>
      ))}
  </div>
)

const mapProjects = ({ projects }) => ({
    items: projects
  }),
  mapPresentations = ({ presentations }) => ({
    items: presentations
  }),
  mapArticles = ({ articles }) => ({
    items: articles
  })

export const Projects = connect(mapProjects)(Portfolio)
export const Presentations = connect(mapPresentations)(Portfolio)
export const Articles = connect(mapArticles)(Portfolio)
