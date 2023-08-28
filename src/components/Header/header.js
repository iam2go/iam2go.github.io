import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import NavBar from "./NavBar"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="bg-black-800 absolute top-0 left-0 w-full h-48">
      <div className="max-w-5xl h-full mx-auto flex flex-col justify-center items-center gap-3 relative">
        <StaticImage
          className="bio-avatar justify-center"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/profile.jpeg"
          width={60}
          height={60}
          quality={95}
          alt="Profile picture"
        />
        <Link to="/">
          <h1 className="text-white tracking-wide">{title}</h1>
        </Link>
        <NavBar />
      </div>
    </div>
  )
}

export default Header
