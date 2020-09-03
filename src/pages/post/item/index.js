import React from "react"
import { Card, HCLink } from "../../../components"
import "./index.scss"

const PostItem = (props) => {
  const mixIssues = props.item
  return (
    <main className="post-item">
      {
        mixIssues ? (mixIssues.map((item, index) => (
          <section key={index}>
            <section className="post-item__title">
              <HCLink to={`/article/${item.number}`}>
                {item.title}
              </HCLink>
            </section>
            {item.pinned ? <span className="post-item__top">置顶</span> : void 0}
            <article className="post-item__body">
              {item.comments.nodes[0].bodyText}
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
              <Card >
                <HCLink to={`/article/${item.number}`}>
                  <section className="post-item__subline__read">
                    继续阅读
                  </section>
                </HCLink>
              </Card>
            </section>
            {index !== mixIssues.length - 1 ? <hr /> : ""}
          </section>
        ))) : ""
      }

    </main >
  )
}

export default PostItem