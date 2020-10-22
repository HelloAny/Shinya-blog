import React from "react"
import gsap from "gsap"
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollToPlugin);
}
const ROLL_SPEED = 700 //滚动速度

class ArticleTabbar extends React.Component {
  constructor(props) {
    super(props)
    let initNavList = props.source.match(/#+\s{1}([^\s]+)/g).map((item, index) => {
      let level = item.split(/\s/)[0].length
      let text = item.split(/\s/)[1]

      let hl = index === 0 ? true : false
      return { level, text, hl }
    })
    this.state = {
      navList: initNavList
    }
  }
  componentDidMount() {
    /**！！！性能警告⚠️！！！*/
    document.getElementById("page").addEventListener("scroll", this._navScroll())
  }

  componentWillUnmount() {
    document.getElementById("page").removeEventListener("scroll", this._navScroll())
  }

  _changeHash = (spot) => {
    let finalDuration = Math.abs(document.getElementById(spot).getBoundingClientRect().top) / ROLL_SPEED
    this._navHightlight(spot) //点击高亮
    gsap.to(document.getElementById("page"), {
      duration: finalDuration,
      scrollTo: {
        y: document.getElementById(spot),
        offsetY: 20
      }, ease: "power4.out"
    })
  }
  //高亮代码
  _navHightlight = rest => {
    this.setState((state) => ({
      navList: state.navList.map((item, index) => {
        index === rest ? item.hl = true : item.hl = false
        return item
      })
    }))
  }
  //滚动高亮
  _navScroll = (e) => {
    var timeout = null
    return () => {
      if (timeout !== null)
        clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.state.navList.forEach((item, index) => {
          if (document.getElementById(index) && document.getElementById(index).getBoundingClientRect().top <= (50 + document.getElementById("header").getBoundingClientRect().height) && document.getElementById(index).getBoundingClientRect().top >= (-20 + document.getElementById("header").getBoundingClientRect().height)) {
            this._navHightlight(index)
            return
          }
        });
      }, 100);
    }
  }


  render() {
    return (
      <nav className="acTabbar">
        {
          this.state.navList.map((item, index) => {
            let ns = ""
            for (let i = 1; i < item.level; i++) {
              ns += "&nbsp;&nbsp;&nbsp;"
            }
            return (
              <section className="acTabbar__main" key={index} onClick={this._changeHash.bind(this, index)}>
                <ReactMarkdown className={(item.hl ? "acTabbar__main-text-hl " : " ") + "acTabbar__main-text"} source={ns + item.text} />
              </section>
            )
          })
        }
      </nav>
    )
  }

}

ArticleTabbar.defaultProps = {
  source: '',
  ease: 'power1.out',
  className: '',
  offset: 30,
  navItemClick: true,
  limitRoll: 0,
  onComplete: () => { }
}

ArticleTabbar.propTypes = {
  source: PropTypes.string,
  ease: PropTypes.string,
  className: PropTypes.string,
  offset: PropTypes.number,
  onComplete: PropTypes.func,
  navItemClick: PropTypes.bool,
  limitRoll: PropTypes.number
}


export default ArticleTabbar