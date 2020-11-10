import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../sass/style.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div id="single">
        <h6 className="category">{post.frontmatter.category}</h6>
        <h1 className="title">{post.frontmatter.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
      }
    }
  }
`
