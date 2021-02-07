import React from "react";
// import useFetch from "../../hooks/fetch"
import { domotion } from "react-loading-transition";
import PostItems from "./item/index";
import Footer from "../footer/footer";
import { Loading } from "../../components";
import { withActivation } from "react-activation";
import { connect } from "react-redux";
import * as actions from "../../actions/post";
import "./post.scss";

const PAGENUM = 4;

@connect((state) => state.post, actions)
@withActivation
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: true,
    };
    this._moreIssues = this._moreIssues.bind(this);
  }
  componentDidActivate() {
    this.props.postList.length !== 0 && domotion(false);
  }
  componentDidMount() {
    this.props.dispatchPostQuantity();
    this.props
      .dispatchPostList({ limit: PAGENUM, select: ["-article"] })
      .then((res) => {
        domotion(false);
      });
  }

  _moreIssues = () => {
    const { pageIndex } = this.props;
    this.setState(
      {
        reload: false,
      },
      () => {
        this.props
          .dispatchPostReload({
            skip: pageIndex * 4,
            limit: PAGENUM,
            select: ["-article"],
          })
          .then((res) => {
            this.setState({
              reload: true,
            });
          });
      }
    );
  };
  render() {
    const { postList, more } = this.props;
    const { reload } = this.state;
    return (
      <main className="post">
        {postList.length ? (
          <>
            <>
              <PostItems item={postList} />
              <section className="post-clickMore">
                <span className="post-clickMore-curtain">
                  {reload ? (
                    more ? (
                      <span className="post-clickMore-curtain-text">
                        --------大坏蛋，人家已经被你榨干了啦QAQ--------
                      </span>
                    ) : (
                      <span
                        onClick={this._moreIssues}
                        className="post-clickMore-curtain-btn"
                      >
                        MORE
                      </span>
                    )
                  ) : (
                    <Loading
                      className="post-loading"
                      height={70}
                      width={70}
                      animation="loading2"
                    />
                  )}
                </span>
              </section>
            </>
            <section className="post-ICP">
              <Footer />
            </section>
          </>
        ) : (
          <Loading />
        )}
      </main>
    );
  }
}

export default Post;
