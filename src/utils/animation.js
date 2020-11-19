import gsap from "gsap"

window.addEventListener("popstate", () => {
  invoke({ animation: "in" })
})

var vb1 = gsap.timeline()
export const play = () => {
  console.log("play触发")
  vb1.play()
}
const invoke = ({ animation }) => {
  console.log("invoke触发")
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
  var full = { y1: transition.height, y2: transition.height },
    point = { y1: transition.height, y2: transition.height }
  var pen = transition.getContext('2d')

  vb1.to(point, {
    keyframes: [{
      y2: 0, duration: 0.9, ease: "power2.inOut",
    }, {
      y1: 0, duration: 0.8, delay: -0.8, ease: "power2.inOut"
    }], onUpdate: frame, onUpdateParams: ["in"]
  }).to(full, {
    keyframes: [{
      y2: 0, duration: 0.9, ease: "power4.inOut",
    }, {
      y1: 0, duration: 0.8, delay: -0.8, ease: "power4.inOut"
    }], onUpdate: frame, onUpdateParams: ["out"]
  })
  function frame(event) {
    pen.clearRect(0, 0, transition.width, transition.height);
    pen.beginPath();
    if (event === "in") {

      pen.moveTo(0, point.y1);
      pen.quadraticCurveTo(transition.width * 2 / 3, point.y2, transition.width, point.y1)
      pen.lineTo(transition.width, transition.height);
      pen.lineTo(0, transition.height);

    } else if (event === "out") {
      pen.moveTo(0, 0);
      pen.lineTo(transition.width, 0);
      pen.lineTo(transition.width, full.y1)
      pen.quadraticCurveTo(transition.width * 2 / 3, full.y2, 0, full.y1)
    }
    pen.fillStyle = "#65beb4"
    pen.fill();
  }
  function complete() {
    vb1.pause()
  }
}



export default invoke