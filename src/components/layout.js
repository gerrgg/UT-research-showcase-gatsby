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
        <Link to={`/`}>
          <h3 className="logo">{data.site.siteMetadata.title}</h3>
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/gerrgg/my-first-gatsby-site/tree/main/src"
        >
          Source Code
        </a>
        <Link to="/how-i-scraped-articles/">How I Scraped the Articles</Link>
      </header>
      {children}
    </div>
  )
}
