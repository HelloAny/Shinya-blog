import React from "react"
// import { gsap } from "gsap"
import { domotion } from "react-loading-transition"
import { Snack } from '../../components'
import User from "./user/index"


import "./home.scss"


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  componentDidMount() {
    domotion(false)
  }

  onClose = () => {
    this.setState(state => ({
      open: true
    }))
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }


  render() {
    return (
      <main className="body">
        <section className="body__wrapper">
          <section className="body__wrapper-main">
            <section className="body__wrapper-main-user">
              <User />
            </section>
            <section className="body__wrapper-main-thum" onClick={this.onClose.bind(this)}>
              <img src="https://pic.amikara.com/2020-11-16-emile-seguin-R9OueKOtGGU-unsplash.jpg" alt="" />
            </section>
            <Snack open={this.state.open} onClose={this.handleClose.bind(this)} duration={2000}>
              <section>弹窗</section>
            </Snack>
          </section>

          <section className="body__wrapper-ICP" >
            <span className="body__wrapper-ICP-design">© 2019-2020 Shinya Blog. All rights reserved. Made with <span className="body__wrapper-ICP-design-heart">❤</span>  by The <span className="ICP-design-user">AmiKara</span> Design </span>
            <span className="body__wrapper-ICP-icp"> | 浙ICP备19035018号-2 |</span>
          </section>
        </section >
      </main >
    )
  }


}


export default Home