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

  const Logo = () => {
    const title = data.site.siteMetadata.title.split(" ")

    return (
      <Link to={`/`}>
        <h3 className="logo">
          <span>
            {title[0]} {title[1]}
          </span>{" "}
          {title[2]}
        </h3>
      </Link>
    )
  }

  return (
    <div id="layout">
      <header>
        <Logo />
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
