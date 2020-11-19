import React from "react"
import './index.scss'

class HeaderExtend extends React.Component {

  render() {
    return (
      <main className="extend">
        <section className="extend__container">
          <section className="extend__container-main">
            <section className="extend__container-main-shinya">
              <section className="extend__container-main-shinya-title">
                ABOUT SHINYA
              </section>
              <section className="extend__container-main-shinya-content">
                Shinya是一个基于React搭建的一个个人博客，没有采用Hexo或Gatsby静态框架，博客建立的初衷是为了实战React技术，但是在建立之后，发现项目的规模越发庞大，自己在每一处细节上
                都没办法能做到开源项目里那么优秀，所以目前一直是在进行优化，也希望有一天能够有更多的小伙伴能用上Shinya。
              </section>
            </section>
            <section className="extend__container-main-amikara">
              <section className="extend__container-main-amikara-title">
                ABOUT ME
              </section>
              <section className="extend__container-main-amikara-content">
                我是一名来自杭州的大三学生，入坑前端两年，目前在学习React，希望能通过这个博客认识更多小伙伴。
              </section>
            </section>
          </section>
        </section>
      </main>
    )
  }
}

export default HeaderExtend