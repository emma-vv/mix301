import React, { useState, useEffect } from 'react'
import '../styles/components.css'

const STORAGE_KEY = 'favorites'

// Helper functions to manage favorites in localStorage
const getFavorites = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  } catch (e) {
    console.error('Error loading favorites:', e)
    return {}
  }
}

const saveFavorite = (itemId, isStarred) => {
  try {
    const favorites = getFavorites()
    if (isStarred) {
      favorites[itemId] = true
    } else {
      delete favorites[itemId]
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  } catch (e) {
    console.error('Error saving favorite:', e)
  }
}

export default function StarButton({ itemId, initialStarred = false, onToggle }) {
  // Load initial state from localStorage if itemId is provided, otherwise use initialStarred
  const getInitialState = () => {
    if (itemId) {
      const favorites = getFavorites()
      return favorites[itemId] || false
    }
    return initialStarred
  }

  const [starred, setStarred] = useState(getInitialState)

  // Update state if initialStarred prop changes (for backward compatibility)
  useEffect(() => {
    if (!itemId) {
      setStarred(initialStarred)
    }
  }, [initialStarred, itemId])

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const newState = !starred
    setStarred(newState)
    
    // Save to localStorage if itemId is provided
    if (itemId) {
      saveFavorite(itemId, newState)
    }
    
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
