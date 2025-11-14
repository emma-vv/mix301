import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundBlur from '../components/BackgroundBlur'
import BottomNav from '../components/BottomNav'
import '../index.css'

export default function Dashboard() {
  return (
    <>
      <BackgroundBlur />
      <div className="dashboard-body" style={{ position: 'relative', zIndex: 1 }}>
        <div className="dashboard-container">
          {/* Calendar Card */}
          <div className="calendar-card">
            <div className="calendar-header">
              <h2 className="calendar-title">Oct, Week 42</h2>
              <div className="calendar-profile">
                <i className="fas fa-user" style={{ color: 'white', fontSize: '20px' }}></i>
              </div>
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
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
              </div>
            </div>
          </div>

          {/* Active Bookings Bar */}
          <div className="bookings-bar">
            <div className="bookings-left">
              <div className="bookings-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <span className="bookings-text">Active bookings</span>
            </div>
            <span className="bookings-count">5</span>
          </div>

          {/* Divider */}
          <div className="divider-line"></div>

          {/* Module Cards */}
          <div className="module-card-dashboard tools">
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
          </div>

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
          padding: 0 24px 24px 24px;
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

        .bookings-bar {
          border: 1px solid white;
          border-radius: 100px;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          background: transparent;
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
          margin: 24px 0;
        }

        .module-card-dashboard {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 24px;
          margin-bottom: 24px;
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
          width: 50.644px;
          height: 50.644px;
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .module-icon {
          width: 23.98px;
          height: 23.98px;
          color: white;
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
