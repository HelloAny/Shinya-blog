import React from "react"
import marked from "marked"
import hljs from "highlight.js"
import ArticleTabbar from "./tabbar/index"
import "./index.scss"


const ArticleContent = ({ content, children }) => {
  var nav = []
  const renderer = new marked.Renderer();
  renderer.heading = function (text, level) {
    nav.push({ level: level, text: text })
    return `<h${level} id="${text}">${text}</h${level}>`;
  };
  marked.setOptions({
    renderer,
    highlight: code => {
      return hljs.highlightAuto(code).value;
    },
    breaks: true, //允许回车换行（该选项要求 gfm 为true）
    smartLists: true, //使用比原生markdown更时髦的列表
  });
  return (
    <main className="article-content">
      <section className="article-content__tabbar">
        <ArticleTabbar nav={nav} />
      </section>
      <section className="article-content__body" >
        <section className="article-content__body__text">
          {children}
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </section>
      </section>
    </main>

  )
}

export default ArticleContent