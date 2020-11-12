import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div id="layout">
      <header>
        <Link to="/" id="logo">
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/gerrgg/my-first-gatsby-site/tree/main/src"
        >
          Source Code
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/gerrgg/extract-articles#extract-articles"
        >
          How I Scraped the Articles
        </a>
      </header>
      {children}
    </div>
  )
}
