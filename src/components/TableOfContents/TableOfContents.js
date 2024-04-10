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
    const hasActiveChild = item.items?.some(
      child => activeHeader === child.url.slice(1)
    )
    const isActive = activeHeader === item.url.slice(1) || hasActiveChild
    return (
      <>
        <li
          key={item.title}
          className={`transition-colors tracking-tight leading-6 ${
            indent[`h${depth + 1}`]
          } ${
            isActive
              ? "text-accent-default font-semibold"
              : "text-text-default/60"
          } ${
            depth === 0
              ? "font-medium mt-[0.3rem]"
              : "fogitnt-normal mt-[0.1rem]"
          }`}
        >
          <Link to={item.url} className="flex items-start">
            {depth > 0 && (
              <svg
                width="3"
                height="24"
                viewBox="0 -9 3 24"
                className="mr-2 overflow-visible"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {item.title}
          </Link>
        </li>
        {isActive &&
          item.items?.map(child => renderList(child, depth + 1, activeHeader))}
      </>
    )
  }

  const getHeaderTitle = (contents = []) => {
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

  const headerList = getHeaderTitle(contents?.items)
  const activeHeader = useActiveId(headerList)
  return (
    <div className="hidden xl:block absolute top-28 bottom-0 left-full w-52 text-sm pl-2">
      <ul className="sticky top-28">
        {contents?.items.map(item => renderList(item, 0, activeHeader))}
      </ul>
    </div>
  )
}
export default TableOfContents
