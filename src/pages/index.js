import React from "react"
import "../sass/style.scss"
import { rhythm } from "../utils/typography"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div id="home">
        <Title />
        <PostCount count={data.allMarkdownRemark.totalCount} />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post node={node} />
        ))}
      </div>
    </Layout>
  )
}

const Title = () => <h1 className="title">Amazing Pandas Eating Things</h1>
const PostCount = ({ count }) => <h4>{count} Posts</h4>

const Post = ({ node }) => {
  return (
    <div className="blog" key={node.id}>
      <Link to={node.fields.slug}>
        <h3>
          {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
        </h3>
        <p>{node.excerpt}</p>
      </Link>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
