// BackgroundStars.js
import React from "react"
import "./BackgroundStars.css"

const BackgroundStars = () => {
  return (
    <div className="stars">
      {Array.from({ length: 50 }).map((_, index) => (
        <div className="star" key={index}></div>
      ))}
    </div>
  )
}

export default BackgroundStars
