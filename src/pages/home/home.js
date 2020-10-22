import React from "react"
// import Background from "./background/index"
import { domotion } from "react-loading-transition"
import User from "./user/index"

// import { ICP } from "../../components"
import "./home.scss"


class Home extends React.Component {
  componentDidMount() {
    domotion(false)
  }

  render() {
    return (
      <main className="body">
        <section className="body__wrapper">
          <section className="body__wrapper--n">
            <section className=""></section>
            <section className="body__wrapper--1 body__wrapper--m"></section>
            <section className="body__wrapper--2 body__wrapper--m"></section>
            <section className="body__wrapper--3 body__wrapper--m"></section>
            <section className="body__wrapper--4 body__wrapper--m"></section>
            <section className="body__wrapper--5 body__wrapper--m"></section>
            <section className="body__wrapper--s body__wrapper--6"></section>
            <section className="body__wrapper--s body__wrapper--7"></section>
            <section className="body__wrapper--s body__wrapper--8"></section>
            <section className="body__wrapper--s body__wrapper--9"></section>
            <section className="body__wrapper--s body__wrapper--10"></section>
            <section className="body__wrapper--s body__wrapper--11"></section>
            <section className="body__wrapper--s body__wrapper--12"></section>
            <section className="body__wrapper--s body__wrapper--13"></section>
            <section className="body__wrapper-user">
              <User />
            </section>
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