import React from "react"
import gsap from "gsap"
import PropTypes from 'prop-types';
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollToPlugin);
}
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
      navList: initNavList,
      objItem: [],

    }
  }
  componentDidMount() {
    this._getItemHeight()
    document.getElementById("anchor").addEventListener("scroll", this._navScroll)
  }

  componentWillUnmount() {
    document.getElementById("anchor").removeEventListener("scroll", this._navScroll)
  }

  _changeHash = (spot) => {
    // document.getElementById("anchor").removeEventListener("scroll", this._navScroll)
    this.state.objItem.forEach((k, v) => {
      document.getElementById(`list-${k.id}`).classList.remove('acTabbar__main-text-hl')
    });
    document.getElementById(`list-${spot}`).classList.add('acTabbar__main-text-hl')
    gsap.to(document.getElementById("anchor"), {
      duration: 0,
      scrollTo: {
        y: this.state.objItem[spot].top,
      }
    })
  }

  //获取元素高度
  _getItemHeight = () => {
    const objItem = []
    this.state.navList.forEach((item, index) => {
      objItem.push({
        id: index,
        top: document.getElementById(index).getBoundingClientRect().top
      })
    })
    this.setState({ objItem })
  }

  //高亮元素
  domainHl = top => {
    this.state.objItem.forEach((item, index) => {
      if (document.getElementById(item.id) && item.top < top) {
        document.getElementById(`list-${item.id}`).classList.add('acTabbar__main-text-hl');
        this.state.objItem.forEach((k, v) => {
          if (item.id !== k.id) {
            document.getElementById(`list-${k.id}`).classList.remove('acTabbar__main-text-hl');
          }
        });
      }
    });
  }

  //滚动高亮
  _navScroll = e => {
    var timeout = null
    if (timeout !== null)
      clearTimeout(timeout);
    timeout = setTimeout(() => {
      this.domainHl(e.target.scrollTop)
    }, 300);
  }


  render() {
    return (
      <nav className="acTabbar">
        {
          this.state.navList.map((item, index) => {
            let ns = ""
            for (let i = 1; i < item.level; i++) {
              ns += ""
            }
            return (
              <section className="acTabbar__main" key={index} onClick={this._changeHash.bind(this, index)}>
                <section id={`list-${index}`} className={"acTabbar__main-text"}>{ns + item.text}</section>
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