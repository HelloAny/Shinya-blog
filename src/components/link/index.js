import React from "react"
import gsap from "gsap"
import { useHistory, Link } from "react-router-dom"
import "./index.scss"

const HCLink = ({ to, children }) => {
  let history = useHistory()

  window.addEventListener("popstate", () => {
    invoke()
  })
  const invoke = (browerListener) => {
    const transition = document.getElementById("pageTransition");
    if (!transition) {
      return
    }
    transition.style.position = "absolute"
    transition.style.top = "0"
    transition.width = document.documentElement.clientWidth
    transition.height = document.documentElement.clientHeight
    transition.style.width = document.documentElement.clientWidth + "px"
    transition.style.height = document.documentElement.clientHeight + "px"
    var pen = transition.getContext('2d')
    var full = { x1: 0, x2: 0, a: 0, b: 400 },
      point = { x1: 0, x2: 0, x3: 0, y1: 400 }
    var vb1 = gsap.timeline()
    vb1.to(point, {
      keyframes: [{
        x3: transition.width, y1: transition.height / 3, duration: 0.5, ease: "power2.inOut",
      }, {
        x2: transition.width, duration: 0.4, delay: -0.4, ease: "power2.inOut"
      }, {
        x1: transition.width, duration: 0.4, delay: -0.4, ease: "power2.inOut"
      }], onUpdate: animation1
    })
      .to(full, {
        keyframes: [{
          a: transition.width, b: transition.height / 3, duration: 0.5, ease: "power4.inOut",
        }, {
          x1: transition.width, duration: 0.4, delay: -0.4, ease: "power4.inOut"
        }, {
          x2: transition.width, duration: 0.4, delay: -0.4, ease: "power2.inOut"
        }], onUpdate: animation2, onComplete: clearCanvas
      })
    function animation1() {
      pen.clearRect(0, 0, transition.width, transition.height);
      pen.beginPath();
      pen.moveTo(0, 0);
      pen.lineTo(point.x1, 0);
      pen.quadraticCurveTo(point.x3, point.y1, point.x2, transition.height)
      pen.lineTo(0, transition.height);
      pen.fillStyle = "#65beb4"
      pen.fill();
    }
    function clearCanvas() {
      // pen = null
    }
    // function BrowerChange() {
    //   browerListener === -1 ? history.goBack() : 
    // }
    function animation2() {
      pen.clearRect(0, 0, transition.width, transition.height);
      pen.beginPath();
      pen.moveTo(transition.width, 0);
      pen.lineTo(transition.width, transition.height);
      pen.lineTo(full.x2, transition.height)
      pen.quadraticCurveTo(full.a, full.b, full.x1, 0)
      pen.fillStyle = "#65beb4"
      pen.fill();
    }
  }
  return (
    <main>
      <section onClick={invoke}>
        <Link to={to}>
          {children}
        </Link>
      </section>
    </main>
  )
}

export default HCLink