import React from "react"
import Lottie from 'react-lottie';
import "./index.scss"
import animationData from '../../assets/loading.json'

const Loading = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <figure className="hc-loading">
      <Lottie options={defaultOptions}
        height={400}
        width={400}
        isStopped={props.show ? true : false}
        isPaused={props.show ? true : false} />
    </figure>
  )
}

export default Loading