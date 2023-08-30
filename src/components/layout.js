import * as React from "react"
import { Link } from "gatsby"
import Header from "./Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div data-is-root-path={isRootPath}>
      {/* <header className="global-header">{header}</header> */}
      <Header location={location} title={title} />
      <main className="max-w-5xl h-full mx-auto ">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
