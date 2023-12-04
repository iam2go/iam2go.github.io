import React from "react"
import { Highlight } from "prism-react-renderer"
import "../../styles/codeblock.css"
import theme from "./theme"

let highlightStart = false
const highlightClassName = "highlight-line"

const highlightLine = (lineArray, lineProps) => {
  let shouldExclude = false

  lineArray.forEach((line, i) => {
    const content = line.content

    // "highlight-line"
    if (content.replace(/\s/g, "").includes("//highlight-line")) {
      lineProps.className = `${lineProps.className} ${highlightClassName}`
      line.content = content
        .replace("// highlight-line", "")
        .replace("//highlight-line", "")
    }

    // Stop highlighting
    if (!!highlightStart && content.replace(/\s/g, "") === "//highlight-end") {
      highlightStart = false
      shouldExclude = true
    }

    // from "highlight-start"
    if (content.replace(/\s/g, "") === "//highlight-start") {
      highlightStart = true
      shouldExclude = true
    }
  })

  // and "highlight-end"
  if (!!highlightStart) {
    lineProps.className = `${lineProps.className} ${highlightClassName}`
  }

  return shouldExclude
}

export const CodeBlock = ({ children }) => {
  const className = children.props.className || ""
  const language = /language-(\w+)/.exec(className || "")?.[1] || "jsx"
  const code = children.props.children

  return (
    <Highlight language={language} theme={theme} code={code}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className}  bg-background-syntax text-text-synta overflow-x-auto`}
        >
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i })
            const shouldExclude = highlightLine(line, lineProps)
            return !shouldExclude ? (
              <div {...lineProps} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ) : null
          })}
        </pre>
      )}
    </Highlight>
  )
}
