import React from "react"
import "./index.scss"

const Background = (props) => {
  const { image } = props
  return (
    <main className="background">
      <section className="background__container">
        <figure className="background__container-image">
          <img src={image ? image : "http://www.amikara.com/uy70p.jpg"} alt="" />
        </figure>
      </section>
    </main>
  )
}

export default React.memo(Background)