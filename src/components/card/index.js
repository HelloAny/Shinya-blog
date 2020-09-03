import React from "react"
import { gsap } from "gsap"

import "./index.scss"

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.CardShake = React.createRef();
    }
    mouseMove = (e) => {
        const item = this.CardShake.current;
        var y =
            ((e.clientY -
                item.getBoundingClientRect().top -
                item.getBoundingClientRect().height / 2) /
                item.getBoundingClientRect().height) * 10;
        var x =
            ((e.clientX -
                item.getBoundingClientRect().left -
                item.getBoundingClientRect().width / 2) /
                item.getBoundingClientRect().width) * 10;
        // const rate =
        //     item.getBoundingClientRect().width /
        //     item.getBoundingClientRect().height;
        // var deg = x * y < 0 ? -1 : 1;
        gsap.to(item, {
            duration: 1.5,
            ease: "expo",
            x: x * 4,
            y: y * 3,
            rotationX: y * 2,
            rotationY: x * 2
        });
    }

    mouseLeave = (e) => {
        const item = this.CardShake.current;
        item.addEventListener("mouseleave", function (e) {
            gsap.to(item, {
                duration: 1.5,
                ease: "elastic",
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0
            });
        });
    }


    render() {
        return (
            <div className="card" id="card__shake" ref={this.CardShake} onMouseMove={this.mouseMove} onMouseLeave={this.mouseLeave}>
                {this.props.children}
            </div>
        )
    }

}

export default Card