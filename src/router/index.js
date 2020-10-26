
import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { LoadTransition, LoadMotion, domotion } from "react-loading-transition"
import KeepAlive from 'react-activation'
import { AliveScope } from 'react-activation'
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
  { path: `/article/:number`, name: 'Article', Component: Articles },
  { path: '*', name: "Error", Component: Error }
]

const Routes = (props) => {
  window.addEventListener("popstate", () => {
    domotion(true)
  })
  const componentSwitch = (path, Component, props) => {
    switch (path) {
      case `/blog`:
        return (<KeepAlive>
          <main className="main_container" id="page">
            <Component {...props} />
          </main>
        </KeepAlive>);
      default:
        return <main className="main_container" id="page">
          <Component {...props} />
        </main>
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
    <LoadTransition loadNode={Load} delay={600}>
      {
        routesList()
      }
    </LoadTransition >
  )
}

const Root = () => {
  return (
    <div className="root">
      <Router >
        <AliveScope>
          <Header></Header>
          <Routes />
        </AliveScope>
      </Router>
    </div>
  );
}

export default Root
