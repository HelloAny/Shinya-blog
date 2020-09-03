import React, { useState } from "react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./index.scss"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollToPlugin);
  // gsap.core.globals("ScrollTrigger", ScrollTrigger)
}
const ROLL_SPEED = 700 //滚动速度

const ArticleTabbar = ({ nav }) => {
  const [navList, setNavList] = useState(nav.map((item, index) => {
    index === 0 ? item.hl = true : item.hl = false
    return item
  }))
  const _changeHash = (spot) => {
    let finalDuration = Math.abs(document.getElementById(spot).getBoundingClientRect().top) / ROLL_SPEED
    _navHightlight(spot) //点击高亮
    gsap.to(document.getElementById("page"), {
      duration: finalDuration,
      scrollTo: {
        y: document.getElementById(spot),
        offsetY: 50
      }, ease: "power4.out"
    })
  }
  //高亮代码
  const _navHightlight = rest => {
    setNavList(navList => navList.map(item => {
      item.text === rest ? item.hl = true : item.hl = false
      return item
    }))
  }
  //滚动高亮
  const _navScroll = () => {
    var timeout = null
    return () => {
      if (timeout !== null)
        clearTimeout(timeout);
      timeout = setTimeout(() => {
        nav.forEach(item => {
          if (document.getElementById(item.text) && document.getElementById(item.text).getBoundingClientRect().top <= (50 + document.getElementById("header").getBoundingClientRect().height) && document.getElementById(item.text).getBoundingClientRect().top >= (-20 + document.getElementById("header").getBoundingClientRect().height)) {
            _navHightlight(item.text)
            return
          }
        });
      }, 300);
    }
  }
  /**！！！性能警告⚠️！！！*/
  document.getElementById("page").addEventListener("scroll", _navScroll())


  return (
    <nav className="acTabbar">
      {
        navList.map((item, index) => {
          let ns = ""
          for (let i = 1; i < item.level; i++) {
            ns += "&nbsp;&nbsp;"
          }
          return (
            <section className="acTabbar__main" key={index}>
              <div onClick={_changeHash.bind(this, item.text)} className={(item.hl ? "acTabbar__main-text-hl " : "") + "acTabbar__main-text"} dangerouslySetInnerHTML={{ __html: ns + item.text }} />
            </section>
          )
        })
      }
    </nav>
  )
}

export default ArticleTabbar