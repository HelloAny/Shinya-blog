import React from 'react'
import './index.scss'

const Input = (props) => {
  return (
    <main className="input" style={{ width: `${props.width}`, height: `${props.height}` }}>
      <section class="input__group">
        <input id={props.id} className={props.className} name={props.name} type={props.type} required />
        <span class="input__highlight"></span>
        <span class="input__bar"></span>
        <label>{props.placeholder}</label>
      </section>
    </main>
  )
}

export default Input 