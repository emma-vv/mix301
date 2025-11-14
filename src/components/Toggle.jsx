import React, { useState } from 'react'
import '../styles/components.css'

export default function Toggle({ initialOn = true, onToggle }) {
  const [isOn, setIsOn] = useState(initialOn)

  const handleChange = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const newState = !isOn
    setIsOn(newState)
    if (onToggle) onToggle(newState)
  }

  return (
    <label className="toggle-switch">
      <input 
        type="checkbox" 
        checked={isOn} 
        onChange={handleChange}
      />
      <span className="toggle-slider"></span>
    </label>
  )
}

