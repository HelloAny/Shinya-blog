import React from "react"
import ArticleContent from "./content/index"
import { ISSUESINDEX } from "../../actions/issues"
import { domotion } from "react-loading-transition"
import { Loading } from "../../components"
import Footer from "../footer/footer"


import "./articles.scss"

class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false,
      doTransform: false,
      position: null,
      color: null,
    }
  }
  componentDidMount() {
    const number = this.props.match ? this.props.match.params.number : 1
    ISSUESINDEX({ number: typeof number === 'number' ? number : parseInt(number) }).then(res => {
      this.setState({
        data: res.data
      }, () => {
        domotion(false)
        this.setState({ loading: true })
      })
    }).catch(e => {
      console.error(e)
    })
  }
  onTransitionWillStart(data) {
    if (!data.clickedItemData) {
      // Default animate position if user goto this page directly
      this.setState({
        doTransform: true,
        position: { top: 0, left: 0, height: '100%', width: 10 },
        color: 'gray',
      });
      return;
    }
    console.log("onTransitionWillStart")
    this.setState({
      doTransform: true,
      position: data.clickedItemData.position,
      color: data.clickedItemData.color,
    });
  }

  onTransitionDidEnd() {
    // Do your stuff here
  }

  transitionManuallyStart() {
    this.setState({
      position: {
        top: 0,
        height: '100%',
        left: 0,
        right: 0,
      },
      doTransform: true,
    });
  }

  transitionManuallyStop() {
    this.setState({
      doTransform: false,
    });
  }

  render() {
    const { data, loading } = this.state
    return (
      <div className="article">
        {loading ? (
          <>
            <article className="article-container" >
              <ArticleContent content={data.body}>
                <header className="article-container__header">{data.title}</header>
                <time className="article-container__time">{data.createdAt.split("T")[0]}</time>
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