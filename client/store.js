import axios from "axios"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
const middleware = applyMiddleware(thunkMiddleware)

const defaultState = {
  projects: [],
  presentations: [],
  articles: []
}

//Action Types
const GOT_PROJECTS = "GOT_PROJECTS",
  GOT_ABOUT_ME = "GOT_ABOUT_ME",
  GOT_PRESENTATIONS = "GOT_PRESENTATIONS",
  GOT_ARTICLES = "GOT_ARTICLES"

//Action Creators
const gotProjects = projects => ({
    type: GOT_PROJECTS,
    projects
  }),
  gotAboutMe = aboutMe => ({
    type: GOT_ABOUT_ME,
    aboutMe
  }),
  gotPresentations = presentations => ({
    type: GOT_PRESENTATIONS,
    presentations
  }),
  gotArticles = articles => ({
    type: GOT_ARTICLES,
    articles
  })
//Thunk Creators
export const fetchAllData = () => dispatch => {
  Promise.all([
    axios.get("/api/projects.json"),
    axios.get("/README.md"),
    axios.get("/api/presentations.json"),
    axios.get("/api/articles.json")
  ]).then(responses => {
    dispatch(gotProjects(responses[0].data))
    dispatch(gotAboutMe(responses[1].data))
    dispatch(gotPresentations(responses[2].data))
    dispatch(gotArticles(responses[3].data))
  })
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GOT_PROJECTS:
      return Object.assign({}, state, { projects: action.projects })
    case GOT_ABOUT_ME:
      return Object.assign({}, state, { aboutMe: action.aboutMe })
    case GOT_PRESENTATIONS:
      return Object.assign({}, state, { presentations: action.presentations })
    case GOT_ARTICLES:
      return Object.assign({}, state, { articles: action.articles })
    default:
      return state
  }
}

export default createStore(reducer, middleware)
