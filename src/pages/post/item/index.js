import React from "react"
import { HCLink } from "../../../components"
import "./index.scss"

class PostItem extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      doTransform: false,
      position: null,
      color: null,
    };
  }

  render() {
    const { item: mixIssues } = this.props
    return (
      <main className="post-item">
        {
          mixIssues ? (mixIssues.map((item, index) => (
            <section className="post-item__container" key={index}>
              <section className="post-item__title" onClick={this.triggerFrame}>
                <HCLink to={`/article/${item.number}`}>
                  {item.title}
                </HCLink>
              </section>
              {item.pinned ? <span className="post-item__top">置顶</span> : void 0}
              <article className="post-item__body">
                {item.comments.nodes.length !== 0 ? item.comments.nodes[0].bodyText : "无简介"}
              </article>
              <section className="post-item__subline">
                <time className="post-item__subline__time">
                  {item.createdAt.split("T")[0]}
                </time >
                {
                  item.labels.nodes.map((item, index) => {
                    return (
                      <section key={index} className="post-item__subline__label" style={{ background: `#${item.color}` }}>
                        {item.name}
                      </section>
                    )
                  })
                }

                <HCLink to={`/article/${item.number}`}>
                  <section className="post-item__subline__read" onClick={this.triggerFrame}>
                    继续阅读
                    </section>
                </HCLink>
              </section>
              {index !== mixIssues.length - 1 ? <hr /> : ""}
            </section>
          ))) : ""
        }

      </main >
    )
  }

}

export default PostItem