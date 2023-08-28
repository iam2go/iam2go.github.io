import * as React from "react"
import { HiMiniMoon } from "react-icons/hi2"
import { TbSunFilled } from "react-icons/tb"
const Toggle = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input role="switch" type="checkbox" className="sr-only" />
      <span className="slider flex h-6 w-12 items-center rounded-full bg-black-950 p-0.5 duration-200">
        <span className="dot h-5 w-5 rounded-full bg-black-600 duration-200 z-10"></span>
        <span class="absolute font-medium text-xs uppercase right-1 text-amber-300">
          <HiMiniMoon size={18} />
        </span>
        <span class="absolute font-medium text-xs uppercase right-6.5 text-red-400">
          <TbSunFilled size={20} />
        </span>
      </span>
    </label>
  )
}
export default Toggle
