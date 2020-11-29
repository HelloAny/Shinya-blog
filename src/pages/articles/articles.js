import React from "react"
import ArticleContent from "./content/index"
import { domotion } from "react-loading-transition"
import { Loading } from "../../components"
import * as actions from "../../actions/article"
import { connect } from "react-redux"
import { GMTToStr } from "../../utils/utils"
import Footer from "../footer/footer"
import "./articles.scss"

@connect(state => state.article, actions)
class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false
    }
  }
  componentDidMount() {
    const id = this.props.match ? this.props.match.params.id : 1
    this.props.dispatchArticleIndex({ equal: '_id', equalVal: id }).then(res => {
      domotion(false)
      this.setState({ loading: true })
    })
  }



  render() {
    const { articleInfo } = this.props
    const { loading } = this.state
    const id = this.props.match ? this.props.match.params.id : 1
    return (
      <div className="article">
        {loading ? (
          <>
            <article className="article-container" >
              <ArticleContent id={id} content={articleInfo.attributes.article}>
                <header className="article-container__header">{articleInfo.attributes.title}</header>
                <time className="article-container__time">{GMTToStr(articleInfo.attributes.ct)}</time>
              </ArticleContent>
            </article>
            <section className="article-container-ICP">
              <Footer />
            </section>
          </>
        ) : <Loading />}
      </div>
    )
  }

}




export default Articles