import React from "react"
import ReactMarkdown from 'react-markdown';
import ArticleTabbar from "./tabbar/index"
import javascript from 'highlight.js/lib/languages/javascript';
import hljs from 'highlight.js/lib/core';
import "./index.scss"

class ArticleContent extends React.Component {
  constructor(props) {
    super(props)
    this.idPoint = 0
    this.highlightNode = React.createRef()
  }

  componentDidMount() {
    hljs.registerLanguage('javascript', javascript);
    this.highlightNode.current && hljs.highlightBlock(this.highlightNode.current)
  }

  HeadingRenderer = (props) => {
    return React.createElement('h' + props.level, { id: this.idPoint++ }, props.children)
  }

  CodeRenderer = (props) => {
    return (
      <pre>
        <code ref={this.highlightNode} className={`language-javascript`}>
          {props.value}
        </code>
      </pre>
    )
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
            <ReactMarkdown source={content} escapeHtml={false} renderers={{ heading: this.HeadingRenderer, code: this.CodeRenderer }} />
          </section>
        </section>
      </main>

    )
  }
}




export default ArticleContent