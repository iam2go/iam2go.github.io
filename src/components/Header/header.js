import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import NavBar from "./NavBar"

const Header = ({ location, title }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath

  return (
    <div className="bg-background-sub/50 left-0 w-full h-48 sticky top-[-8rem] backdrop-blur-sm">
      <div className="h-48 max-w-5xl  mx-auto flex flex-col justify-center items-center gap-3 relative">
        <StaticImage
          className="bio-avatar justify-center rounded-full"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/profile.jpeg"
          width={60}
          height={60}
          quality={95}
          alt="Profile picture"
        />
        <div className="h-16 sticky max-w-5xl w-full mx-auto top-0 py-4">
          <Link to="/">
            <h1 className=" tracking-wide text-center">{title}</h1>
          </Link>
          <NavBar />
        </div>
      </div>
    </div>
  )
}

export default Header
