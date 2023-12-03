import { Link, navigate } from "gatsby"
import React from "react"
const TagBox = ({ children }) => {
  return <div className="flex gap-1.5 my-3">{children}</div>
}

const Tag = ({ text }) => {
  return (
    <Link to={`/tags/${text}`}>
      <div className="text-text-default px-4 font-normal text-opacity-80 bg-background-primary bg-opacity-30 border-text-default border border-opacity-20 rounded-2xl text-xs  leading-6 hover:bg-accent-default hover:bg-opacity-50 hover:border-accent-default cursor-pointer transition ">
        {text}
      </div>
    </Link>
  )
}

export { TagBox, Tag }
