import React from 'react'
import ReactDOM from 'react-dom'

import SnackContent from './item'
class Snack extends React.Component {
  constructor(props) {
    super(props)
    this.onClose = props.onClose
    this.el = document.getElementById('root')
    this.time = null
  }

  SnackItem = () => {
    return <section style={Styles.layout}><SnackContent {...this.props} /></section>
  }

  componentDidUpdate() {
    const { open, duration } = this.props
    if (open && duration && typeof duration === 'number') {
      if (this.time !== null) clearTimeout(this.time);
      this.time = setTimeout(() => {
        this.onClose()
      }, duration)
    }
  }


  render() {
    const { open } = this.props
    if (!open) {
      clearTimeout(this.time)
      return null
    }
    return ReactDOM.createPortal(this.SnackItem(), this.el)
  }
}

Snack.defaultProps = {
  open: false,
  message: "",
  duration: null
}

const Styles = {
  layout: {
    position: 'fixed',
    top: "10%",
    left: "50%",
    transition: "all 0.5s",
    transform: "translateX(-50%)",
    display: "flex",
    zIndex: "1400",
    alignItems: "center",
    justifyContent: "center"
  }
}

export default Snack