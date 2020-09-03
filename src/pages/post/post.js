import React from "react"
import { ISSUESLIST } from "../../actions/issues"
import useFetch from "../../hooks/fetch"
import PostItem from "./item/index"
import { Loading } from "../../components"
import "./post.scss"

const Post = ({ show }) => {
  const { data } = useFetch(ISSUESLIST({
    first: 3,
  }))
  return (
    <main className="post">
      {
        data ?
          <section id="post">
            <PostItem item={data} ></PostItem>
          </section>
          : <Loading />
      }
    </main >
  )
}

export default Post