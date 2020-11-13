import React, { useState } from "react"
import "../sass/style.scss"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

import moment from "moment"

export default function Home({ data }) {
  const [filter, setFilter] = useState("")
  const [order, setOrder] = useState("DESC")

  const allPosts = data.allMarkdownRemark.edges
    .map(post => post.node)
    .sort((a, b) => a.frontmatter.date < b.frontmatter.date)

  const postsToShow = !filter
    ? allPosts
    : allPosts.filter(post =>
        post.frontmatter.title.toLowerCase().includes(filter.toLowerCase())
      )

  // if order is changed form ASC
  if (order === "ASC") postsToShow.reverse()

  return (
    <Layout>
      <div id="home">
        <Title />
        <Filter filter={filter} setFilter={setFilter} />
        <div className="flex-even">
          <PostCount count={postsToShow.length} />
          <OrderButtons order={order} setOrder={setOrder} />
        </div>

        {postsToShow.length ? (
          postsToShow.map(post => <Post key={post.id} post={post} />)
        ) : (
          <p>
            No Results...{" "}
            <span role="img" aria-label="sad">
              😓
            </span>
          </p>
        )}
      </div>
    </Layout>
  )
}

const Filter = ({ filter, setFilter }) => (
  <p id="filter">
    Filter: <input onChange={e => setFilter(e.target.value)} value={filter} />
    <button onClick={() => setFilter("")}>Clear</button>
  </p>
)

const OrderButtons = ({ order, setOrder }) => {
  const handleClick = () => {
    setOrder(order === "ASC" ? "DESC" : "ASC")
  }

  return (
    <div id="orderby">
      Order By:
      <button
        className={order === "ASC" ? "selected" : null}
        onClick={() => handleClick()}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <button
        className={order === "DESC" ? "selected" : null}
        onClick={() => handleClick()}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  )
}

const Title = () => <h1 className="title">UT Research Articles</h1>
const PostCount = ({ count }) => <h4>{count} Posts</h4>
const PostDate = ({ date }) => (
  <span> — {moment(date).format("MMMM Do YYYY")}</span>
)

const PostCategory = ({ category }) => {
  const categories = category.split("|")
  return <p className="category">{categories[0]}</p>
}

const Post = ({ post }) => {
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
    allMarkdownRemark {
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
