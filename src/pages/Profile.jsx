import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundBlur from '../components/BackgroundBlur'
import Toggle from '../components/Toggle'
import '../index.css'

export default function Profile() {
  const navigate = useNavigate()

  return (
    <>
      <BackgroundBlur />
      <div className="profile-body" style={{ position: 'relative', zIndex: 1 }}>
        <div className="profile-container">
          {/* Header */}
          <div className="profile-header">
            <button 
              className="back-button" 
              onClick={() => navigate('/dashboard')}
              aria-label="Back"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <h1 className="profile-title">My Profile</h1>
            <div className="header-icon-placeholder"></div>
          </div>

          <div className="divider"></div>

          {/* User Profile Card */}
          <div className="profile-user-card">
            <div className="profile-avatar">
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                <circle cx="19.5" cy="19.5" r="19.5" fill="rgba(255, 255, 255, 0.1)"/>
                <path d="M19.5 12C21.433 12 23 13.567 23 15.5C23 17.433 21.433 19 19.5 19C17.567 19 16 17.433 16 15.5C16 13.567 17.567 12 19.5 12ZM19.5 20.5C22.2614 20.5 24.5 22.7386 24.5 25.5V27H14.5V25.5C14.5 22.7386 16.7386 20.5 19.5 20.5Z" fill="white" fillOpacity="0.6"/>
              </svg>
            </div>
            <div className="profile-user-info">
              <h2 className="profile-name">Jane Cooper</h2>
              <p className="profile-status">User currently logged in</p>
            </div>
          </div>

          {/* User Account Card */}
          <div className="profile-section-card">
            <div className="profile-row">
              <span className="profile-label">User account</span>
              <span className="profile-value profile-value-gray">janeco444@uib.no</span>
            </div>
            <div className="profile-divider-line"></div>
            <div className="profile-row">
              <span className="profile-label">Infomedia group</span>
              <span className="profile-value profile-value-gray">MIX301</span>
            </div>
            <div className="profile-divider-line"></div>
            <div className="profile-row">
              <span className="profile-label">Phone number</span>
              <span className="profile-value">(603) 555-0123</span>
            </div>
            <div className="profile-divider-line"></div>
            <div className="profile-row">
              <span className="profile-label">IP adress</span>
              <span className="profile-value profile-value-gray">97.444.1.46</span>
            </div>
          </div>

          {/* Settings Card */}
          <div className="profile-section-card">
            <div className="profile-row">
              <span className="profile-label">Language</span>
              <span className="profile-value">ENG</span>
            </div>
            <div className="profile-divider-line"></div>
            <div className="profile-row">
              <span className="profile-label">Theme</span>
              <span className="profile-value">Dark Theme</span>
            </div>
          </div>

          {/* Notifications & Support Card */}
          <div className="profile-section-card">
            <div className="profile-row">
              <span className="profile-label">Push Notifications</span>
              <div className="profile-toggle-wrapper">
                <Toggle initialOn={true} />
              </div>
            </div>
            <div className="profile-divider-line"></div>
            <div className="profile-row">
              <span className="profile-label">Support</span>
              <div className="profile-icon-wrapper">
                <i className="fas fa-question-circle" style={{ fontSize: '20px', color: 'white' }}></i>
              </div>
            </div>
          </div>

          {/* Log Out Button */}
          <button className="button-component" onClick={() => navigate('/')} style={{ marginTop: '29px' }}>
            Log Out
          </button>
        </div>
      </div>
      <style>{`
        .profile-body {
          padding: 60px 24px 24px 24px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .profile-container {
          max-width: 345px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .profile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .back-button {
          width: 42.657px;
          height: 42.657px;
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 9.339px;
          opacity: 1 !important;
        }

        .back-button svg {
          width: 24px;
          height: 24px;
          stroke: white;
          stroke-width: 2;
          fill: none;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .profile-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin: 0;
          text-align: center;
        }

        .header-icon-placeholder {
          width: 42.66px;
          height: 42.66px;
        }

        .profile-user-card {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 17px 20px;
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;
        }

        .profile-avatar {
          width: 39px;
          height: 39px;
          flex-shrink: 0;
        }

        .profile-user-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .profile-name {
          font-size: 16px;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .profile-status {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .profile-section-card {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .profile-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .profile-label {
          font-size: 16px;
          font-weight: 400;
          color: white;
        }

        .profile-value {
          font-size: 16px;
          font-weight: 400;
          color: white;
          text-align: right;
        }

        .profile-value-gray {
          color: rgba(255, 255, 255, 0.6);
        }

        .profile-divider-line {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0;
        }

        .profile-toggle-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .profile-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

      `}</style>
    </>
  )
}

