
import React, { createContext, useState, useEffect } from 'react'
import { PINNEDISSUES } from "../actions/issues"

export const BlogContext = new createContext()

export const BlogProvider = props => {
  let [blog, setBlog] = useState()
  // eslint-disable-next-line
  let [isLoad, setIsLoad] = useState(false)
  useEffect(() => {
    const fetchIssues = async () => {
      const { issues: { edges } } = await PINNEDISSUES({
        payload: {
          first: 2,
          after: null
        }
      })
      setBlog(edges.map(item => item.node))
    }
    fetchIssues()
  }, [isLoad])
  return (
    <BlogContext.Provider value={{ blog, setBlog }}>
      {props.children}
    </BlogContext.Provider>
  )
}


export const BlogConsumer = BlogContext.Consumer
