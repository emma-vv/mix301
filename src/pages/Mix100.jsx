import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundBlur from '../components/BackgroundBlur'
import StarButton from '../components/StarButton'
import '../index.css'

export default function Mix100() {
  const navigate = useNavigate()
  const [isCourseInfoOpen, setIsCourseInfoOpen] = useState(false)
  const [isUpcomingOpen, setIsUpcomingOpen] = useState(false)
  const [isPastOpen, setIsPastOpen] = useState(false)

  const upcomingActivities = [
    { date: "Tue Oct 14", time: "08:15 - 10:00", location: "Seminar 1" },
    { date: "Tue Oct 21", time: "08:15 - 10:00", location: "Redaksjonsrommet" },
    { date: "Tue Oct 28", time: "08:15 - 10:00", location: "Seminar 1" },
    { date: "Tue Nov 04", time: "08:15 - 10:00", location: "Seminar 1" },
    { date: "Tue Nov 11", time: "08:15 - 10:00", location: "Seminar 1" },
    { date: "Tue Nov 18", time: "08:15 - 10:00", location: "Seminar 1" },
  ]

  const pastActivities = [
    { date: "Tue Aug 12", time: "08:15 - 10:00", location: "Seminar 1" },
    { date: "Tue Aug 05", time: "08:15 - 10:00", location: "Seminar 1" },
    { date: "Tue Jul 29", time: "08:15 - 10:00", location: "Seminar 1" },
  ]

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
          <div>
            <button 
              className="info-card-button"
              onClick={() => setIsCourseInfoOpen(!isCourseInfoOpen)}
            >
              <div style={{ width: '20px', height: '20px' }}></div>
              <span className="info-card-text">Course information</span>
              <i 
                className={`fas fa-chevron-${isCourseInfoOpen ? 'up' : 'down'}`}
                style={{ color: 'white' }}
              ></i>
            </button>
            <div 
              className={`info-card-expanded ${isCourseInfoOpen ? 'expanded-open' : 'expanded-closed'}`}
            >
              <div className="info-card-content">
                <div className="info-item">
                  <span className="info-label">Exam</span>
                  <span className="info-value">Assignment due</span>
                </div>
                <div className="info-item">
                  <span className="info-value">Tue Dec 02</span>
                </div>
                <div className="divider" style={{ margin: '10px 0' }}></div>
                <div className="info-item">
                  <span className="info-label">Links</span>
                  <div className="info-links">
                    <a href="#" className="info-link">MittUiB page</a>
                    <a href="#" className="info-link">UiB.no description</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Activities Section */}
          <div className="activities-section" style={{ marginTop: '24px' }}>
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
            <button 
              className="info-card-button activities-toggle-button"
              onClick={() => setIsUpcomingOpen(!isUpcomingOpen)}
            >
              <div style={{ width: '20px', height: '20px' }}></div>
              <span className="info-card-text">{upcomingActivities.length} upcoming activities</span>
              <i 
                className={`fas fa-chevron-${isUpcomingOpen ? 'up' : 'down'}`}
                style={{ color: 'white' }}
              ></i>
            </button>
            <div className={`activities-expandable ${isUpcomingOpen ? 'expanded-open' : 'expanded-closed'}`}>
              {upcomingActivities.slice(1).map((activity, index) => (
                <div key={index} className="activity-card activity-card-expandable">
                  <div className="activity-card-glow"></div>
                  <div className="activity-header">
                    <h3 className="activity-title">Workshop</h3>
                    <div className="status-badge status-upcoming">Upcoming</div>
                  </div>
                  <div className="activity-details">
                    <div className="activity-date-time">
                      <span>{activity.date}</span>
                      <span>{activity.time}</span>
                    </div>
                    <a href="#" className="seminar-link">
                      <span>{activity.location}</span>
                      <i className="fas fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Activities Section */}
          <div className="activities-section" style={{ marginTop: '24px' }}>
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
            <button 
              className="info-card-button activities-toggle-button"
              onClick={() => setIsPastOpen(!isPastOpen)}
            >
              <div style={{ width: '20px', height: '20px' }}></div>
              <span className="info-card-text">View all past activities</span>
              <i 
                className={`fas fa-chevron-${isPastOpen ? 'up' : 'down'}`}
                style={{ color: 'white' }}
              ></i>
            </button>
            <div className={`activities-expandable ${isPastOpen ? 'expanded-open' : 'expanded-closed'}`}>
              {pastActivities.slice(1).map((activity, index) => (
                <div key={index} className="activity-card activity-card-expandable">
                  <div className="activity-card-glow"></div>
                  <div className="activity-header">
                    <h3 className="activity-title">Workshop</h3>
                    <div className="status-badge status-completed">Completed</div>
                  </div>
                  <div className="activity-details">
                    <div className="activity-date-time">
                      <span>{activity.date}</span>
                      <span>{activity.time}</span>
                    </div>
                    <a href="#" className="seminar-link">
                      <span>{activity.location}</span>
                      <i className="fas fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .course-detail-body {
          padding: 60px 24px 24px 24px;
        }

        .activities-section {
          display: flex;
          flex-direction: column;
        }

        .activities-toggle-button {
          margin-top: 20px;
        }

        .info-card-expanded {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
        }

        .info-card-expanded.expanded-open {
          max-height: 500px;
          opacity: 1;
          margin-top: 24px;
        }

        .info-card-expanded.expanded-closed {
          max-height: 0;
          opacity: 0;
          margin-top: 0;
        }

        .activities-expandable {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: max-height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
        }

        .activities-expandable.expanded-open {
          max-height: 2000px;
          opacity: 1;
          margin-top: 20px;
        }

        .activities-expandable.expanded-closed {
          max-height: 0;
          opacity: 0;
          margin-top: 0;
        }

        .activity-card-expandable {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .activities-expandable.expanded-open .activity-card-expandable {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}
