import React from "react"
import { gsap } from "gsap"
import * as actions from '../../actions/oapi'
import { connect } from 'react-redux'
import { domotion } from "react-loading-transition"
import User from "./user/index"


import "./home.scss"

@connect(state => state.oapi, actions)
class Home extends React.Component {
  componentDidMount() {
    this.props.dispatchJRSC()
    domotion(false)
    gsap.from(".body__wrapper-main-thum", { x: 150, opacity: 0, delay: 0.3 })
  }
  render() {
    console.log(this.props.jrsc)
    return (
      <main className="body">
        <section className="body__wrapper">
          <section className="body__wrapper-main">
            <section className="body__wrapper-main-user">
              <User jrsc={this.props.jrsc} />
            </section>
            <section className="body__wrapper-main-thum">
              <img src="https://pic.amikara.com/2020-11-16-emile-seguin-R9OueKOtGGU-unsplash.jpg" alt="" />
            </section>
          </section>
        </section >
      </main >
    )
  }


}


export default Home