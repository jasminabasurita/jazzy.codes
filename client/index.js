import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { HashRouter as Router } from "react-router-dom"
import Routes from "./Routes"
import store, { fetchAllData } from "./store"

store.dispatch(fetchAllData())
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
)
