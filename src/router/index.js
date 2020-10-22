
import React from "react";
import {
  BrowserRouter as Router,
  Route,
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
  { path: '/error', name: 'Error', Component: Error }
]

const Routes = (props) => {
  window.addEventListener("popstate", () => {
    domotion(true)
  })
  return (
    <LoadTransition loadNode={Load} delay={600}>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {
            (props) => {
              return (
                <LoadMotion in={props.match != null} timeout={1500}>
                  {
                    path === `/blog` ?
                      <KeepAlive>
                        <main className="main_container" id="page">
                          <Component {...props} />
                        </main>
                      </KeepAlive> :
                      <main className="main_container" id="page">
                        <Component {...props} />
                      </main>
                  }
                </LoadMotion>
              )
            }
          }
        </Route >
      ))
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
