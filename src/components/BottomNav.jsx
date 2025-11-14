import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/styles.css'

export default function BottomNav() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bottom-nav">
      <Link
        to="/dashboard"
        className={`nav-icon ${isActive('/dashboard') ? 'nav-icon-active' : ''}`}
        aria-label="Home"
      >
        <i className="fas fa-house"></i>
      </Link>
      <Link
        to="/courses"
        className={`nav-icon ${isActive('/courses') ? 'nav-icon-active' : ''}`}
        aria-label="Courses"
      >
        <i className="fas fa-graduation-cap"></i>
      </Link>
      <Link
        to="#"
        className={`nav-icon ${isActive('/tools') ? 'nav-icon-active' : ''}`}
        aria-label="Tools"
      >
        <i className="fas fa-wrench"></i>
      </Link>
      <Link
        to="/rooms"
        className={`nav-icon ${isActive('/rooms') ? 'nav-icon-active' : ''}`}
        aria-label="Rooms"
      >
        <i className="fas fa-door-open"></i>
      </Link>
      <Link
        to="#"
        className={`nav-icon ${isActive('/bookings') ? 'nav-icon-active' : ''}`}
        aria-label="Bookings"
      >
        <i className="fas fa-calendar-check"></i>
      </Link>
    </nav>
  )
}
