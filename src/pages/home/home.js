import React, { useEffect } from "react"
// import { gsap } from "gsap"
import Background from "./background/index"
import User from "./user/index"
import "./home.scss"


const Home = ({ show }) => {
  useEffect(() => {
    // const wrapperGsap = gsap.timeline()
    // const blogGsap = gsap.timeline()
    // wrapperGsap.to(".body__blog", { scale: 0.9, duration: 0.5, zIndex: -1 })
    //   .to(".body__blog", { display: "none", delay: 1 })
    // blogGsap.from(".body__wrapper", { y: "20vh", zIndex: 1, position: "absolute", opacity: 0, delay: 0.3, duration: 1 })
    //   .to(".body__wrapper", { y: 0, opacity: 1, scale: 1, ease: "power1", display: "block", })
    //   .to(".body__wrapper", { position: "relative" })
  }, [])


  return (
    <main className="body">
      <section className="body__wrapper">
        <section className="body__wrapper-user">
          <User />
        </section>
        <section className="body__wrapper-background">
          <Background />
        </section>
      </section>
      <canvas className="canvas" id="canvas"></canvas>
    </main>
  )

}


export default Home