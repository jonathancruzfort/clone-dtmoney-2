import React from "react"

export default ({ title, icon, value, bgColor }) => {
  return (
    <div className={`flex flex-col font-roboto p-8 rounded-lg shadow-md w-84 ${bgColor || "bg-[rgb(50,50,56)]"}`}>
      <div className="flex items-center justify-between text-base font-normal">
        <span className="text-[rgb(196,196,204)]">{title}</span>
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <span className="text-white text-[32px] font-semibold mt-2">{value}</span>
    </div>
  )
}

