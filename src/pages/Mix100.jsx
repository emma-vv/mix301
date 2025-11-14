import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundBlur from '../components/BackgroundBlur'
import StarButton from '../components/StarButton'
import '../index.css'

export default function Mix100() {
  const navigate = useNavigate()

  return (
    <>
      <BackgroundBlur />
      <div className="course-detail-body" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="header">
            <button className="back-button back-button-visible" onClick={() => navigate('/courses')} aria-label="Back">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <h1 className="header-title">MIX100</h1>
            <StarButton initialStarred={true} />
          </div>

          <div className="divider"></div>

          {/* Course Information Button */}
          <button className="course-info-button">
            <i className="fas fa-info-circle" style={{ width: '20px', height: '20px', color: 'white' }}></i>
            <span className="course-info-button-text">Course information</span>
            <i className="fas fa-chevron-down chevron-icon"></i>
          </button>

          {/* Upcoming Activities Section */}
          <div style={{ marginTop: '24px' }}>
            <h2 className="section-title">Upcoming activities</h2>
            <div className="activity-card">
              <div className="activity-card-glow"></div>
              <div className="activity-header">
                <h3 className="activity-title">Workshop</h3>
                <div className="status-badge status-upcoming">Upcoming</div>
              </div>
              <div className="activity-details">
                <div className="activity-date-time">
                  <span>Tue Oct 14</span>
                  <span>08:15 - 10:00</span>
                </div>
                <a href="#" className="seminar-link">
                  <span>Seminar 1</span>
                  <i className="fas fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
            <button className="view-all-button">
              <i
                className="fas fa-chevron-left"
                style={{
                  transform: 'rotate(270deg) scaleY(-1)',
                  width: '8px',
                  height: '16px',
                  color: 'white',
                }}
              ></i>
              <span className="view-all-button-text">6 upcoming activities</span>
              <i
                className="fas fa-chevron-right"
                style={{
                  transform: 'rotate(270deg)',
                  width: '8px',
                  height: '16px',
                  color: 'white',
                }}
              ></i>
            </button>
          </div>

          {/* Past Activities Section */}
          <div style={{ marginTop: '24px' }}>
            <h2 className="section-title">Past activities</h2>
            <div className="activity-card">
              <div className="activity-card-glow"></div>
              <div className="activity-header">
                <h3 className="activity-title">Workshop</h3>
                <div className="status-badge status-completed">Completed</div>
              </div>
              <div className="activity-details">
                <div className="activity-date-time">
                  <span>Tue Aug 12</span>
                  <span>08:15 - 10:00</span>
                </div>
                <a href="#" className="seminar-link">
                  <span>Seminar 1</span>
                  <i className="fas fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
            <button className="view-all-button">
              <i
                className="fas fa-chevron-left"
                style={{
                  transform: 'rotate(270deg) scaleY(-1)',
                  width: '8px',
                  height: '16px',
                  color: 'white',
                }}
              ></i>
              <span className="view-all-button-text">View all past activities</span>
              <i
                className="fas fa-chevron-right"
                style={{
                  transform: 'rotate(270deg)',
                  width: '8px',
                  height: '16px',
                  color: 'white',
                }}
              ></i>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .course-detail-body {
          padding-bottom: 24px;
        }
      `}</style>
    </>
  )
}
