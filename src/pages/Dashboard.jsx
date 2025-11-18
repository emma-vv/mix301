import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BackgroundBlur from '../components/BackgroundBlur'
import BottomNav from '../components/BottomNav'
import { getAppDate, getWeekNumber, isAppDate } from '../utils/appDate'
import '../index.css'

export default function Dashboard() {
  const [activeBookingsCount, setActiveBookingsCount] = useState(0);

  // Calculate active bookings count from localStorage
  useEffect(() => {
    const calculateBookings = () => {
      let count = 0;
      
      // Count tool bookings from localStorage
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("booking_") && key.endsWith("_selectedDates")) {
          const saved = localStorage.getItem(key);
          if (saved) {
            try {
              const dateArray = JSON.parse(saved);
              if (dateArray.length > 0) {
                count++;
              }
            } catch (e) {
              console.error("Error parsing booking:", e);
            }
          }
        }
      });
      
      // Add default bookings if user has never booked before and has no real bookings
      const hasEverBooked = localStorage.getItem('user_has_booked') === 'true';
      if (count === 0 && !hasEverBooked) {
        count += 2; // Add 2 default tool bookings (canon-eos-2000d-default, godox-ledp260c-default)
      }
      
      // Add room bookings (static for now, but could be from localStorage)
      count += 3; // Data Lab 2, Seminar 1, Research Lab
      
      setActiveBookingsCount(count);
    };

    calculateBookings();
    
    // Reload when storage changes (for when bookings are added/removed)
    const handleStorageChange = () => {
      calculateBookings();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom booking events
    const handleBookingChange = () => {
      calculateBookings();
    };
    
    window.addEventListener('bookingCanceled', handleBookingChange);
    window.addEventListener('bookingConfirmed', handleBookingChange);
    
    // Check periodically for changes (since storage event only fires in other tabs)
    const interval = setInterval(calculateBookings, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('bookingCanceled', handleBookingChange);
      window.removeEventListener('bookingConfirmed', handleBookingChange);
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <BackgroundBlur />
      <div className="dashboard-body" style={{ position: 'relative', zIndex: 1 }}>
        <div className="dashboard-container">
          {/* Calendar Card */}
          <div className="calendar-card">
            <div className="calendar-header">
              <h2 className="calendar-title">
                {(() => {
                  const appDate = getAppDate();
                  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                  const weekNumber = getWeekNumber(appDate);
                  return `${monthNames[appDate.getMonth()]}, Week ${weekNumber}`;
                })()}
              </h2>
              <Link to="/profile" className="calendar-profile">
                <i className="fas fa-user" style={{ color: 'white', fontSize: '20px' }}></i>
              </Link>
            </div>
            <div className="calendar-inner">
              <div className="calendar-weekdays">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
              <div className="calendar-days">
                {(() => {
                  const appDate = getAppDate();
                  // Get the Monday of the week containing October 14th
                  const dayOfWeek = appDate.getDay();
                  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Monday is 1, Sunday is 0
                  const monday = new Date(appDate);
                  monday.setDate(appDate.getDate() + mondayOffset);
                  
                  // Generate 7 days starting from Monday
                  const days = [];
                  for (let i = 0; i < 7; i++) {
                    const day = new Date(monday);
                    day.setDate(monday.getDate() + i);
                    // Check if this is October 14th (full date match)
                    const isToday = isAppDate(day);
                    days.push({ date: day.getDate(), isToday });
                  }
                  return days.map((day, index) => (
                    <span key={index} style={{ position: 'relative' }}>
                      {day.isToday && (
                        <div className="calendar-day-today-overlay"></div>
                      )}
                      {day.date}
                    </span>
                  ));
                })()}
              </div>
            </div>
          </div>

          {/* Active Bookings Bar */}
          <Link to="/bookings" className="bookings-bar" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="bookings-left">
              <div className="bookings-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <span className="bookings-text">Active bookings</span>
            </div>
            <span className="bookings-count">{activeBookingsCount}</span>
          </Link>

          {/* Divider */}
          <div className="divider-line"></div>

          {/* Module Cards */}
          <Link to="/tools" className="module-card-dashboard tools">
            <div className="module-glow tools"></div>
            <div className="module-card-content">
              <div className="module-icon-wrapper">
                <i className="fas fa-wrench module-icon"></i>
              </div>
              <div className="module-text">
                <p className="module-name">Tools</p>
                <p className="module-desc">Access your toolkit and resources</p>
              </div>
              <i className="fas fa-chevron-right module-arrow"></i>
            </div>
          </Link>

          <Link to="/rooms" className="module-card-dashboard rooms">
            <div className="module-glow rooms"></div>
            <div className="module-card-content">
              <div className="module-icon-wrapper">
                <i className="fas fa-door-open module-icon"></i>
              </div>
              <div className="module-text">
                <p className="module-name">Rooms</p>
                <div className="module-desc">
                  <span>Browse available </span>
                  <span>meeting spaces</span>
                </div>
              </div>
              <i className="fas fa-chevron-right module-arrow"></i>
            </div>
          </Link>

          <Link to="/courses" className="module-card-dashboard courses">
            <div className="module-glow courses"></div>
            <div className="module-card-content">
              <div className="module-icon-wrapper">
                <i className="fas fa-graduation-cap module-icon"></i>
              </div>
              <div className="module-text">
                <p className="module-name">Courses</p>
                <div className="module-desc">
                  <span>Continue your learning </span>
                  <span>journey</span>
                </div>
              </div>
              <i className="fas fa-chevron-right module-arrow"></i>
            </div>
          </Link>
        </div>
      </div>
      <BottomNav />
      <style>{`
        .dashboard-body {
          padding: 0 24px 115px 24px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .dashboard-container {
          max-width: 345px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          margin: 0 auto;
        }

        .calendar-card {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 0 0 20px 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 60px 24px 24px;
          margin-bottom: 24px;
          width: 100%;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .calendar-title {
          font-size: 24px;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .calendar-profile {
          width: 39px;
          height: 39px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .calendar-profile:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .calendar-inner {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          padding: 24px;
          width: 297px;
        }

        .calendar-weekdays {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
        }

        .calendar-weekdays span {
          width: 19px;
          text-align: center;
        }

        .calendar-days {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        .calendar-days span {
          position: relative;
          display: inline-block;
          z-index: 1;
        }

        .calendar-day-today-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(163, 200, 97, 0.3);
          border: 1.352px solid #a3c861;
          z-index: 0;
          pointer-events: none;
        }

        .bookings-bar {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          height: 46px;
          width: 100%;
        }

        .bookings-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bookings-icon {
          width: 19px;
          height: 19px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bookings-text {
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        .bookings-count {
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        .divider-line {
          height: 0.993px;
          background: rgba(255, 255, 255, 0.15);
          width: 100%;
          margin: 12px 0 24px 0;
        }

        .module-card-dashboard {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 24px;
          margin-bottom: 12px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: block;
          width: 100%;
        }

        .module-card-dashboard:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .module-card-dashboard.rooms {
          min-height: 105px;
        }

        .module-card-dashboard.courses {
          min-height: 105px;
        }

        .module-card-content {
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .module-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .module-card-dashboard.tools .module-icon-wrapper {
          background: linear-gradient(to bottom, rgba(242, 186, 179, 0.4), rgba(242, 186, 179, 0.3));
          border: 1px solid rgba(242, 186, 179, 0.3);
        }

        .module-card-dashboard.rooms .module-icon-wrapper {
          background: linear-gradient(to bottom, rgba(194, 238, 99, 0.4), rgba(194, 238, 99, 0.3));
          border: 1px solid rgba(194, 238, 99, 0.3);
        }

        .module-card-dashboard.courses .module-icon-wrapper {
          background: linear-gradient(to bottom, rgba(107, 216, 227, 0.4), rgba(107, 216, 227, 0.3));
          border: 1px solid rgba(107, 216, 227, 0.3);
        }

        .module-icon {
          font-size: 20px;
          color: white;
        }

        .module-card-dashboard.tools .module-icon {
          color: rgba(242, 186, 179, 1);
        }

        .module-card-dashboard.rooms .module-icon {
          color: rgba(194, 238, 99, 1);
        }

        .module-card-dashboard.courses .module-icon {
          color: rgba(107, 216, 227, 1);
        }

        .module-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .module-name {
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0;
        }

        .module-desc {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .module-desc span {
          display: block;
        }

        .module-arrow {
          width: 19.987px;
          height: 19.987px;
          color: white;
          flex-shrink: 0;
        }

        .module-glow {
          position: absolute;
          width: 159.981px;
          height: 159.981px;
          border-radius: 45372000px;
          filter: blur(60px);
          opacity: 0.3;
          pointer-events: none;
        }

        .module-glow.tools {
          background: #f2bab3;
          left: 197px;
          top: -2px;
        }

        .module-glow.rooms {
          background: #c2ee63;
          left: 197px;
          top: -35px;
        }

        .module-glow.courses {
          background: #6bd8e3;
          left: 210px;
          top: -29px;
        }
      `}</style>
    </>
  )
}
