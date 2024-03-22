import { Link } from "gatsby"
import * as React from "react"
import useActiveId from "./hooks/useActiveId"

const indent = {
  h1: "pl-0",
  h2: "pl-4",
  h3: "pl-8",
}

const TableOfContents = ({ contents }) => {
  const renderList = (item, depth = 0, activeHeader) => {
    return (
      <>
        <li
          key={item.title}
          className={` my-3 transition-colors ${indent[`h${depth + 1}`]} ${
            activeHeader === item.url.slice(1)
              ? "text-accent-default font-semibold"
              : "text-text-default/60"
          }`}
        >
          <Link to={item.url}>{item.title}</Link>
        </li>
        {item?.items &&
          item.items.map(child => renderList(child, depth + 1, activeHeader))}
      </>
    )
  }

  const getHeaderTitle = contents => {
    return contents.reduce((titles, content) => {
      if (content.url) {
        titles.push(content.url.slice(1))
      }

      if (content.items) {
        titles.push(...getHeaderTitle(content.items))
      }
      return titles
    }, [])
  }

  const headerList = getHeaderTitle(contents.items)
  const activeHeader = useActiveId(headerList)
  return (
    <div className="hidden xl:block absolute top-28 bottom-0 left-full w-48 text-sm">
      <ul className="sticky top-28">
        {contents.items.map(item => renderList(item, 0, activeHeader))}
      </ul>
    </div>
  )
}
export default TableOfContents
