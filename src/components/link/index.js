import React from "react"
import { Link, NavLink } from "react-router-dom"
import { domotion } from "react-loading-transition"
import "./index.scss"


const HCLink = (props) => {
  const LinkComponent = {
    StyleLink: function StyleLink(props) {
      const { to, children, noframe, activeClassName, activeStyle, isActive } = props
      return <NavLink exact to={to} onClick={noframe ? null : domotion.bind(this, true)} activeClassName={activeClassName} activeStyle={activeStyle} isActive={isActive}>{children}</NavLink>
    },
    NormalLink: function NormalLink(props) {
      const { to, children, noframe } = props
      return <Link to={to} onClick={noframe ? null : domotion.bind(this, true)}>{children}</Link>
    }
  }
  return (
    <>
      {
        (props.activeClassName || props.activeStyle || props.isActive) ?
          <LinkComponent.StyleLink {...props} /> :
          <LinkComponent.NormalLink {...props} />
      }
    </>
  )
}

HCLink.defaultProps = {
  to: null,
  children: null,
  noframe: false,
  activeStyle: null,
  activeClassName: null,
  isActive: null
}

export default HCLink