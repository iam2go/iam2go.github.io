import React from "react"
const TagBox = ({ children }) => {
  return <div className="flex gap-3 mb-3">{children}</div>
}

const Tag = ({ text }) => {
  return (
    <div className="text-sm text-accent-default font-medium leading-6 cursor-pointer transition">
      #{text}
    </div>
  )
}

export { TagBox, Tag }
