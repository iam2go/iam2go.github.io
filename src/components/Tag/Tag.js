import React from "react"
const TagBox = ({ children }) => {
  return <div className="flex gap-1.5 my-3">{children}</div>
}

const Tag = ({ text }) => {
  return (
    <div className="text-text-default px-4 bg-background-primary rounded-2xl text-xs  font-light leading-6 hover:bg-accent-soft cursor-pointer transition">
      {text}
    </div>
  )
}

export { TagBox, Tag }
