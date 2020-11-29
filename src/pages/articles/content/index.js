import React from "react"
import ReactMarkdown from 'react-markdown';
import ArticleTabbar from "./tabbar/index"
import CodeBlock from "./highlight/index"
import Comments from './comment/index'
import "./index.scss"

class ArticleContent extends React.Component {
  constructor(props) {
    super(props)
    this.idPoint = 0
  }

  HeadingRenderer = (props) => {
    return React.createElement('h' + props.level, { id: this.idPoint++ }, props.children)
  }

  shouldComponentUpdate(nextProps) {
    return false
  }
  render() {
    const { content, children } = this.props
    return (
      <main className="article-content">
        <section className="article-content__tabbar">
          <ArticleTabbar source={content} />
        </section>
        <section className="article-content__body" id="ab">
          <section className="article-content__body__text">
            {children}
            <ReactMarkdown source={content} escapeHtml={true} renderers={{ heading: this.HeadingRenderer, code: CodeBlock }} />
          </section>
          <Comments id={this.props.id} />
        </section>
      </main>

    )
  }
}




export default ArticleContent