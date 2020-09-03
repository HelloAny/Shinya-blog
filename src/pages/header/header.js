import React, { useEffect } from "react"
import { Link } from "react-router-dom"



import Button from "../../components/button/index"
import Card from "../../components/card/index"
import Logo from "../../assets/web/logo.png"
import Name from "../../assets/web/name.png"
import Search from "../../assets/web/header/search.png"

import "./header.scss"

const Header = () => {
  useEffect(() => {
  });

  const btnStyle = {
    width: "100px",
    height: "50px",
    border: "none",
    borderRadius: "0",
    marginRight: "60px",
    fontWeight: "300",
    fontSize: "1.8rem"
  }

  return (
    <header className="headers">
      <div className="headers__container" id="header">
        <div className="headers__container-bar">
          <div className="headers__container-bar-ln">
            <Link to="/">
              <Card>
                <div><img src={Logo} alt="logo" className="headers__container-bar-ln-img headers__container-bar-ln-logo" /></div>
                <div><img src={Name} alt="name" className="headers__container-bar-ln-img headers__container-bar-ln-name" /></div>
              </Card>
            </Link>
          </div>
          <div className="headers__container-bar-nav">
            <div className="headers__container-bar-nav-list">
              <span className="headers__container-bar-nav-list-item" id="btn">
                <Button Style={btnStyle} value="摄影"></Button>
              </span>
              <span className="headers__container-bar-nav-list-item" id="btn">
                <Button Style={btnStyle} value="实验室"></Button>
              </span>
            </div>
            <Card>
              <div className="headers__container-bar-nav-img">
                <img src={Search} alt="search" className="headers__container-bar-nav-img-search" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)


