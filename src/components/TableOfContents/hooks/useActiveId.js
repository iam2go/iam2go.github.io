import React, { useState, useEffect, useRef } from "react"

function useActiveHeader(headers) {
  const [activeHeader, setActiveHeader] = useState(headers[0])
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHeader(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    headers.forEach(header => {
      const target = document.getElementById(header)
      if (target) {
        observer.current.observe(target)
      }
    })
    return () => {
      observer.current.disconnect()
    }
  }, [headers])

  return activeHeader
}

export default useActiveHeader
