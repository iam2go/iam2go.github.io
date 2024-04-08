import React, { useState, useEffect } from "react"
import Giscus from "@giscus/react"

const Comment = () => {
  const [theme, setTheme] = useState(
    (typeof window === "object" && window.__theme) || "light"
  )
  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    window.addEventListener("themeChange", handleThemeChange)
    return () => {
      window.removeEventListener("themeChange", handleThemeChange)
    }
  }, [])
  return (
    <Giscus
      id="comments"
      repo="iam2go/iam2go.github.io"
      repoId="R_kgDOK8VsQg"
      category="Comments"
      categoryId="DIC_kwDOK8VsQs4CegwS"
      mapping="pathname"
      //   term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme === "light" ? "noborder_light" : "noborder_gray"}
      lang="ko"
      loading="lazy"
    />
  )
}
export default Comment
