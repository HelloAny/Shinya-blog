import React from "react"
import { useParams } from "react-router-dom"
import ArticleContent from "./content/index"
import useFetch from "../../hooks/fetch"
import { ISSUESINDEX } from "../../actions/issues"
import { Loading } from "../../components"

import "./articles.scss"

const Articles = ({ show }) => {
  let { number } = useParams();
  const { data } = useFetch(ISSUESINDEX({
    number: parseInt(number)
  }))
  return (
    <div className="article">
      {data ? (
        <article className="article-container">
          <ArticleContent content={data.body}>
            <header className="article-container__header">{data.title}</header>
            <time className="article-container__time">{data.createdAt.split("T")[0]}</time>
          </ArticleContent>
        </article>
      ) : "<Loading />"}
    </div>
  )
}




export default Articles