import React from "react"
import "./index.scss"


const Transition = (props) => {
  console.log(props.children)
  return (
    <section>
      {props.children}
    </section>
  )
}

export default Transition