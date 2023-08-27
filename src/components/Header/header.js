import * as React from "react"
import { Link } from "gatsby"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="bg-black absolute top-0 left-0 w-full h-48">
      <div className="max-w-5xl h-full mx-auto">
        <h1 className="text-white ">{title}</h1>
      </div>
    </div>
  )
}

export default Header
