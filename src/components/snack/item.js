import React from 'react'
import gsap from 'gsap'
import './item.scss'

class SnackContent extends React.Component {

  componentDidMount() {
    const { open, duration } = this.props
    if (open && duration && typeof duration === 'number') {
      gsap.timeline().fromTo(document.getElementById("snack_id"), { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.3 })
        .to(document.getElementById("snack_id"), { opacity: 0, scale: 0.8, delay: duration / 1000 - 0.6 })
    }
  }


  render() {
    const {
      children,
      message,
    } = this.props
    return (
      <>
        <section className="snack_inner" id="snack_id">
          <section className="snack_content">{children || message}</section>
        </section>
      </>
    )
  }
}

// const Styles = {
//   inner: {
//     minWidth: "288px",
//     backgroundColor: "rgb(50, 50, 50)",
//     color: "#fff",
//     display: "flex",
//     padding: "6px 16px",
//     flexGrow: "1",
//     flexWrap: "wrap",
//     fontSize: "0.875rem",
//     alignItems: "center",
//     fontWeight: "400",
//     lineHeight: "1.43",
//     borderRadius: "4px",
//     letterSpacing: "0.01071em",
//     boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
//   }
// }

export default SnackContent