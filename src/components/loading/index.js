import React from "react"
import Lottie from 'react-lottie';
import "./index.scss"
import loading1 from '../../assets/loading1.json'
import loading2 from '../../assets/loading2.json'

const Loading = (props) => {
  const animationData = { loading1, loading2 }
  const { animation, width, height, className } = props
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation ? animationData[animation] : loading1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <figure className={className ? className : "hc-loading"}>
      <Lottie options={defaultOptions}
        height={height ? height : 400}
        width={width ? width : 400}
        isStopped={props.show ? true : false}
        isPaused={props.show ? true : false} />
    </figure>
  )
}

export default Loading