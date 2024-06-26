import React, { useCallback, useEffect, useState } from "react"
import { IoMdMoon } from "@react-icons/all-files/io/IoMdMoon"
import { HiSun } from "@react-icons/all-files/hi/HiSun"
const ThemeSwitch = () => {
  const [theme, setTheme] = useState(
    typeof window === "object" ? window.__theme : "light"
  )

  const toggle = useCallback(() => {
    const updatedTheme = theme === "light" ? "dark" : "light"

    const themeChangeEvent = new Event("themeChange")
    window.dispatchEvent(themeChangeEvent)

    window.__setPreferredTheme(updatedTheme)
  }, [theme])

  useEffect(() => {
    if (typeof window === "object") {
      setTheme(window.__theme)
    }

    window.__onThemeChange = newTheme => {
      setTheme(newTheme)
    }
  }, [])
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        role="switch"
        type="checkbox"
        className="switch sr-only"
        checked={theme === "light"}
        onChange={toggle}
      />
      <span className="slider flex h-6 w-12 items-center rounded-full bg-background-primary p-0.5 duration-200">
        <span className="dot h-5 w-5 rounded-full bg-background-sub duration-200 z-10 transform"></span>
        <span className="absolute font-medium text-xs right-1 text-accent-default">
          <IoMdMoon size={18} />
        </span>
        <span className="absolute font-medium text-xs right-6.5 text-accent-default">
          <HiSun size={20} />
        </span>
      </span>
    </label>
  )
}
export default ThemeSwitch
