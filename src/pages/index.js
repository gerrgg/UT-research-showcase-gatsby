import React, { useState } from "react"
import "../sass/style.scss"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import moment from "moment"

export default function Home({ data }) {
  const [filter, setFilter] = useState("")
  const allPosts = data.allMarkdownRemark.edges.map(post => post.node)

  const postsToShow = !filter
    ? allPosts
    : allPosts.filter(post =>
        post.frontmatter.title.toLowerCase().includes(filter.toLowerCase())
      )

  return (
    <Layout>
      <div id="home">
        <Title />
        <Filter filter={filter} setFilter={setFilter} />
        <PostCount count={postsToShow.length} />
        {postsToShow.map(post => {
          return <Post key={post.id} post={post} />
        })}
      </div>
    </Layout>
  )
}

const Filter = ({ filter, setFilter }) => (
  <p>
    Filter: <input onChange={e => setFilter(e.target.value)} value={filter} />
    <button onClick={() => setFilter("")}>Clear</button>
  </p>
)

const Title = () => <h1 className="title">UT Research Articles</h1>
const PostCount = ({ count }) => <h4>{count} Posts</h4>
const PostDate = ({ date }) => (
  <span> — {moment(date).format("MMM Do YYYY")}</span>
)

const PostCategory = ({ category }) => {
  const categories = category.split("|")
  return <p className="category">{categories[0]}</p>
}

const Post = ({ post }) => {
  console.log(post.frontmatter)
  return (
    <div className="blog">
      <Link to={post.fields.slug}>
        <h3>
          {post.frontmatter.title} <PostDate date={post.frontmatter.date} />
        </h3>
        <p>{post.excerpt}</p>

        <div className="postmeta">
          <p className="timeToRead">{post.timeToRead} minute read</p>
          <PostCategory category={post.frontmatter.category} />
        </div>
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
            date
            category
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
