import React, { useState } from 'react'
import '../styles/components.css'

export default function StarButton({ initialStarred = false, onToggle }) {
  const [starred, setStarred] = useState(initialStarred)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const newState = !starred
    setStarred(newState)
    if (onToggle) onToggle(newState)
  }

  return (
    <button
      className="star-button star-button-component"
      aria-label={starred ? 'Unstar' : 'Star'}
      onClick={handleClick}
    >
      <svg
        className="star-icon"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: starred ? 1 : 0.3 }}
      >
        {starred ? (
          <path
            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
            fill="white"
          />
        ) : (
          <path
            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        )}
      </svg>
    </button>
  )
}
