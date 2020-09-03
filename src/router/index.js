
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import gsap from "gsap";
import Header from '../pages/header/header';
import Home from "../pages/home/home"
import Post from "../pages/post/post"
import Articles from "../pages/articles/articles"
import Error from "../pages/404/404"

import "./index.scss"
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/blog', name: 'Blog', Component: Post },
  { path: `/article/:number`, name: 'Article', Component: Articles },
  { path: '/error', name: 'Error', Component: Error }
]

const Routes = (done) => {
  const location = useLocation()
  return (
    <TransitionGroup>
      {/* <Switch location={location}> */}
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={400}
              classNames="page"
              id="page"
              unmountOnExit={true}
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
      {/* </Switch> */}
    </TransitionGroup>
  )
}

const Root = () => {
  return (
    <div className="root">
      <Router>
        <Header></Header>
        <main className="main_container">
          <Routes />
          <canvas className="canvas" id="pageTransition"></canvas>
        </main>
      </Router>

    </div>

  );
}

export default Root



  // let history = useHistory()
  // history.block(e => {
  //   console.log(e)
  // })
  // const [pop, setPop] = useState(null)
  // const transition = useRef(null);
  // const invoke = () => {
  //   if (!transition.current) {
  //     return
  //   }
  //   transition.current.style.position = "absolute"
  //   transition.current.style.top = "calc(80px + 50 * ((100vw - 320px)/ 1360))"
  //   transition.current.width = document.documentElement.clientWidth
  //   transition.current.height = document.documentElement.clientHeight - 80
  //   var pen = transition.current.getContext('2d')
  //   var point = { x1: 0, x2: 0, x3: 0, y1: 400 },
  //     full = { x1: 0, x2: 0, a: 0, b: 400 }
  //   var vb1 = gsap.timeline()
  //   vb1.to(point, {
  //     keyframes: [{
  //       x3: transition.width, y1: transition.height / 3, duration: 0.5, ease: "power2.inOut",
  //     }, {
  //       x1: transition.width, duration: 0.4, delay: -0.4, ease: "power2.inOut"
  //     }, {
  //       x2: transition.width, duration: 0.4, delay: -0.4, ease: "power2.inOut"
  //     }], onUpdate: animation1, onComplete: clearCanvas
  //   })
  //     .to(full, {
  //       keyframes: [{
  //         a: transition.current.width, b: transition.current.height / 3, duration: 0.5, ease: "power4.inOut",
  //       }, {
  //         x1: transition.current.width, duration: 0.4, delay: -0.4, ease: "power4.inOut"
  //       }, {
  //         x2: transition.current.width, duration: 0.4, delay: -0.4, ease: "power2.inOut"
  //       }], onUpdate: animation2, onComplete: clearCanvas
  //     })
  //   function animation1() {
  //     pen.clearRect(0, 0, transition.width, transition.height);
  //     pen.beginPath();
  //     pen.moveTo(0, 0);
  //     pen.lineTo(point.x1, 0);
  //     pen.quadraticCurveTo(point.x3, point.y1, point.x2, transition.height)
  //     pen.lineTo(0, transition.height);
  //     pen.fillStyle = "#65beb4"
  //     pen.fill();
  //   }
  //   function clearCanvas() {
  //     pen = null
  //   }
  //   function animation2() {
  //     pen.clearRect(0, 0, transition.current.width, transition.current.height);
  //     pen.beginPath();
  //     pen.moveTo(transition.current.width, 0);
  //     pen.lineTo(transition.current.width, transition.current.height);
  //     pen.lineTo(full.x2, transition.current.height)
  //     pen.quadraticCurveTo(full.a, full.b, full.x1, 0)
  //     pen.fillStyle = "#65beb4"
  //     pen.fill();
  //   }
  // }


  // useEffect(() => {
  //   if (transition.current && pop && pop !== "/") {
  //     invoke()
  //   }
  //   // eslint-disable-next-line
  // }, [pop])
