import * as React from "react"
import { Link } from "gatsby"
import { FaHouse } from "react-icons/fa6"
import ThemeSwitch from "./ThemeSwitch"

const NavBar = () => {
  return (
    <div className="flex items-center absolute bottom-4 right-5 w-64 justify-around text-text-default">
      <Link to="/">
        <FaHouse size={20} className="text-accent-default" />
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
