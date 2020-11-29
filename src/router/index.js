
import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { LoadTransition, LoadMotion, domotion } from "react-loading-transition"
import KeepAlive, { AliveScope } from 'react-activation'
import Header from '../pages/header/header';
import Home from "../pages/home/home"
import Post from "../pages/post/post"
import Articles from "../pages/articles/articles"
import Error from "../pages/404/404"
import Load from "./load"
import "./index.scss"

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/blog', name: 'Blog', Component: Post },
  { path: `/article/:id`, name: 'Article', Component: Articles },
  { path: '*', name: "Error", Component: Error }
]

const Routes = (props) => {
  window.addEventListener("popstate", () => {
    domotion(true)
  })
  const componentSwitch = (path, Component, props) => {
    switch (path) {
      case `/blog`:
        return (
          <main id="blog">
            <KeepAlive saveScrollPosition="#anchor">
              <Component {...props} />
            </KeepAlive>
          </main>
        );
      default:
        return <Component {...props} />

    }
  }
  const routesList = () => {
    let visible = []
    return routes.map(({ path, Component }, index) => (
      <Route key={path} exact path={path}>
        {
          (props) => {
            visible.push(props.match)
            if (index === routes.length - 1) {
              props.match = visible.filter(el => el).length >= 2 ? null : props.match
            }
            return (
              <LoadMotion in={props.match != null} timeout={1500}>
                {
                  componentSwitch(path, Component, props)
                }
              </LoadMotion>
            )
          }
        }
      </Route >
    ))
  }
  return (
    <LoadTransition loadNode={Load}>
      {routesList()}
    </LoadTransition >
  )
}

class Root extends React.Component {
  componentDidMount() {
    document.body.removeChild(document.getElementById('Loading'))
  }

  scroll = (e) => {
    console.log(e.target)
  }
  render() {
    return (
      <Router>
        <AliveScope>
          <main className="main_container" id="anchor">
            <Header />
            <Routes />
          </main>
        </AliveScope>
      </Router>
    );
  }
}


export default Root
