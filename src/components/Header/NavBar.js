import * as React from "react"
import { Link } from "gatsby"
import { RiHome4Fill } from "@react-icons/all-files/ri/RiHome4Fill"
import ThemeSwitch from "./ThemeSwitch"

const NavBar = () => {
  return (
    <div className="flex items-center absolute bottom-4 w-64 justify-around text-text-default md:right-4">
      <Link to="/">
        <RiHome4Fill size={20} className="text-accent-default" />
      </Link>
      <Link to="/tags">
        <h3>Tags</h3>
      </Link>
      <Link to="/about">
        <h3>About</h3>
      </Link>
      <ThemeSwitch />
    </div>
  )
}

export default NavBar
