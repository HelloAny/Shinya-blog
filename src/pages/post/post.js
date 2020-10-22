import React from "react"
import { ISSUESLIST, ISSUESMORE } from "../../actions/issues"
// import useFetch from "../../hooks/fetch"
import { domotion } from "react-loading-transition"
import PostItems from "./item/index"
import Footer from "../footer/footer"
import { Loading } from "../../components"
import { withActivation } from 'react-activation'
import "./post.scss"


@withActivation
class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      noway: false,
      reload: true
    }
    this._moreIssues = this._moreIssues.bind(this)
  }
  componentDidActivate() {
    this.state.data.length !== 0 &&
      domotion(false)
  }
  componentDidMount() {
    ISSUESLIST({ last: 3 }).then(res => {
      console.log("res", res)
      this.setState({
        data: res.data
      }, () => {
        domotion(false)
      })
    })
  }

  _moreIssues = () => {
    const { data } = this.state
    const cursor = data[data.length - 1].cursor
    this.setState({
      reload: false
    }, () => {
      ISSUESMORE({ last: 3, before: cursor }).then(res => {
        this.setState({
          data: data.concat(res.data),
          noway: res.noway
        }, () => {
          this.setState({
            reload: true
          })
        })
      })
    })
  }
  render() {
    const { data, reload, noway } = this.state
    return (
      <main className="post">
        {
          data.length ?
            <>
              <section className="post">
                <PostItems item={data} />
                <section className="post-clickMore">
                  <span className="post-clickMore-curtain">{reload ? (noway ? <span className="post-clickMore-curtain-text">--------大坏蛋，人家已经被你榨干了啦QAQ--------</span> : <span onClick={this._moreIssues} className="post-clickMore-curtain-btn">MORE</span>) : <Loading className="post-loading" height={70} width={70} animation="loading2" />}</span>
                </section>
              </section>
              <section className="post-ICP">
                <Footer />
              </section>
            </>
            : <Loading />
        }
      </main >
    )
  }

}

export default Post