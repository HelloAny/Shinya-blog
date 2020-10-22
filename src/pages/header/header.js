import React from "react"
import { HCLink } from "../../components"

import Button from "../../components/button/index"
import Card from "../../components/card/index"
import Logo from "../../assets/web/logo.png"
import Name from "../../assets/web/name.png"
// import Search from "../../assets/web/header/search.png"

import "./header.scss"

const Header = () => {

  const headerList = [{ name: "首页", link: "/" }, { name: "博文", link: "/blog" }]

  return (
    <header className="headers">
      <div className="headers__container" id="header">
        <div className="headers__container-bar">
          <div className="headers__container-bar-ln">
            <HCLink to="/">
              <Card>
                <div><img src={Logo} alt="logo" className="headers__container-bar-ln-img headers__container-bar-ln-logo" /></div>
                <div><img src={Name} alt="name" className="headers__container-bar-ln-img headers__container-bar-ln-name" /></div>
              </Card>
            </HCLink>
          </div>
          <div className="headers__container-bar-nav">
            <div className="headers__container-bar-nav-list">
              {
                headerList && headerList.map((item, index) => (
                  <span id="btn" key={index}>
                    <HCLink to={item.link} activeStyle={{
                      color: "#65beb4"
                    }}>
                      <Button className="headers__container-bar-nav-list-item" >{item.name}</Button>
                    </HCLink>
                  </span>
                ))
              }
            </div>
            {/* <Card>
              <div className="headers__container-bar-nav-img">
                <img src={Search} alt="search" className="headers__container-bar-nav-img-search" />
              </div>
            </Card> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)


