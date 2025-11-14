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
      <i 
        className={starred ? 'fas fa-star star-icon' : 'far fa-star star-icon'}
        style={{ 
          color: 'white',
          fontSize: '20px'
        }}
      ></i>
    </button>
  )
}
