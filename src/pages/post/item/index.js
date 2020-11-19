import React from "react"
import { HCLink } from "../../../components"
import { GMTToStr } from "../../../utils/utils"
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
              <section className="post-item__title">
                <HCLink to={`/article/${item.id}`}>
                  {item.attributes.title}
                </HCLink>
              </section>
              {item.attributes.pin ? <span className="post-item__top">置顶</span> : void 0}
              <section className="post-item__subline">
                <time className="post-item__subline__time">
                  {GMTToStr(item.attributes.ct)}
                </time >
                {
                  item.attributes.labels.map((item, index) => {
                    return (
                      <section key={index} className="post-item__subline__label">
                        {item}
                      </section>
                    )
                  })
                }

                {/* <HCLink to={`/article/${item.number}`}>
                  <section className="post-item__subline__read" onClick={this.triggerFrame}>
                    继续阅读
                    </section>
                </HCLink> */}
              </section>
              <article className="post-item__body">
                <div dangerouslySetInnerHTML={{ __html: item.attributes.thum }}></div>
              </article>

              { index !== mixIssues.length - 1 ? <hr /> : ""}
            </section>
          ))) : ""
        }

      </main >
    )
  }

}

export default PostItem