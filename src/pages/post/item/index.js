import React from "react"
import { HCLink } from "../../../components"
// import { GMTToStr } from "../../../utils/utils"
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

              <hr />
              <section className="post-item__title">
                <HCLink to={`/article/${item.id}`}>
                  {item.attributes.title}
                </HCLink>
              </section>
              {item.attributes.pin ? <span className="post-item__top">置顶</span> : void 0}

              <article className="post-item__body">
                <div dangerouslySetInnerHTML={{ __html: item.attributes.thum }}></div>
              </article>
              <section className="post-item__subline">
                {/* <time className="post-item__subline__time">
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
                } */}

                <HCLink to={`/article/${item.id}`}>
                  <section className="post-item__subline__read">
                    继续阅读
                    </section>
                </HCLink>
              </section>
            </section>
          ))) : ""
        }

      </main >
    )
  }

}

export default PostItem