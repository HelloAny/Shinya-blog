import React from "react"
import ReactMarkdown from 'react-markdown';
import ArticleTabbar from "./tabbar/index"
import CodeBlock from "./highlight/index"
import "./index.scss"

class ArticleContent extends React.Component {
  constructor(props) {
    super(props)
    this.idPoint = 0
  }

  HeadingRenderer = (props) => {
    return React.createElement('h' + props.level, { id: this.idPoint++ }, props.children)
  }
  render() {
    const { content, children } = this.props
    return (
      <main className="article-content">
        <section className="article-content__tabbar">
          <ArticleTabbar source={content} />
        </section>
        <section className="article-content__body" >
          <section className="article-content__body__text">
            {children}
            <ReactMarkdown source={content} escapeHtml={false} renderers={{ heading: this.HeadingRenderer, code: CodeBlock }} />
          </section>
        </section>
      </main>

    )
  }
}




export default ArticleContent