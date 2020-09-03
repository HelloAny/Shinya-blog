import React from "react"

import "./index.scss"


const Button = ({
    value,
    width,
    height,
    Style = {},
    onClick = () => { }
}) => {

    return (
        <div className="button-container">
            <div className="button__item" style={Style}>
                <span>{value}</span></div>
        </div >
    )
}


export default Button