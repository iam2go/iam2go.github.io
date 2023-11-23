import React from "react"
const TagBox = ({ children }) => {
  return <div className="flex gap-1.5 my-3">{children}</div>
}

const Tag = ({ text }) => {
  return (
    <div className="text-text-default px-4 bg-background-primary bg-opacity-30 border-text-default border border-opacity-20 rounded-2xl text-xs  font-light leading-6 hover:bg-accent-default hover:bg-opacity-50 hover:border-accent-default cursor-pointer transition">
      {text}
    </div>
  )
}

export { TagBox, Tag }
