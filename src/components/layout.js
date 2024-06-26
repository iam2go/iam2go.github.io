import * as React from "react"
import Header from "./Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div data-is-root-path={isRootPath}>
      {/* <header className="global-header">{header}</header> */}
      <Header location={location} title={title} />
      <main className="max-w-4xl h-full mx-auto relative">{children}</main>
      <footer className="text-center text-xs text-text-default mt-14 mb-10">
        © {new Date().getFullYear()}, <i>leego</i>
      </footer>
    </div>
  )
}

export default Layout
