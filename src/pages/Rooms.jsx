import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundBlur from '../components/BackgroundBlur'
import BottomNav from '../components/BottomNav'
import StarButton from '../components/StarButton'
import '../index.css'

export default function Rooms() {
  const [starred, setStarred] = useState({
    seminar1: false,
    seminar2: false,
    datalab1: false,
  })

  return (
    <>
      <BackgroundBlur />
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '115px' }}>
        <div className="header">
          <button className="back-button" aria-label="Back" style={{ opacity: 0 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="header-title">Media City Bergen</h1>
          <div className="header-icon"></div>
        </div>

        <div className="divider"></div>

        {/* Seminar 1 Card */}
        <div className="module-card">
          <div className="module-header">
            <h2 className="module-title">Seminar 1</h2>
            <StarButton
              initialStarred={starred.seminar1}
              onToggle={(starred) => setStarred(prev => ({ ...prev, seminar1: starred }))}
            />
          </div>
          <div className="schedule-grid seminar1-grid">
            <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
            <div className="time-marker" style={{ left: '81.6px' }}>10:00</div>
            <div className="time-marker" style={{ left: '155.61px' }}>12:00</div>
            <div className="time-marker" style={{ left: '229.62px' }}>14:00</div>
            <div className="time-line" style={{ left: '7.59px', height: '92px' }}></div>
            <div className="time-line" style={{ left: '81.6px', height: '92px' }}></div>
            <div className="time-line" style={{ left: '155.61px', height: '92px' }}></div>
            <div className="time-line" style={{ left: '229.62px', height: '92px' }}></div>
            <Link
              to="/mix100"
              className="event-block event-mix clickable-event"
              style={{
                left: '18px',
                top: '24px',
                width: '129px',
              }}
            >
              MIX
            </Link>
            <div
              className="event-block event-jou"
              style={{
                left: '166.99px',
                top: '24.03px',
                width: '129px',
              }}
            >
              JOU
            </div>
          </div>
        </div>

        {/* Seminar 2 Card */}
        <div className="module-card">
          <div className="module-header">
            <h2 className="module-title">Seminar 2</h2>
            <StarButton
              initialStarred={starred.seminar2}
              onToggle={(starred) => setStarred(prev => ({ ...prev, seminar2: starred }))}
            />
          </div>
          <div className="schedule-grid seminar2-grid">
            <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
            <div className="time-marker" style={{ left: '81.6px' }}>10:00</div>
            <div className="time-marker" style={{ left: '155.61px' }}>12:00</div>
            <div className="time-marker" style={{ left: '229.62px' }}>14:00</div>
            <div className="time-line" style={{ left: '7.59px', height: '94px' }}></div>
            <div className="time-line" style={{ left: '81.6px', height: '94px' }}></div>
            <div className="time-line" style={{ left: '155.61px', height: '94px' }}></div>
            <div className="time-line" style={{ left: '229.62px', height: '94px' }}></div>
            <div
              className="event-block event-tvp"
              style={{
                left: '18px',
                top: '0px',
                width: '129px',
              }}
            >
              TVP
            </div>
            <div
              className="event-block event-jou"
              style={{
                left: '82px',
                top: '0px',
                width: '129px',
              }}
            >
              JOU
            </div>
            <div
              className="event-block event-mix"
              style={{
                left: '166px',
                top: '0px',
                width: '129px',
              }}
            >
              MIX
            </div>
          </div>
        </div>

        {/* Data Lab 1 Card */}
        <div className="module-card">
          <div className="module-header">
            <h2 className="module-title">Data Lab 1</h2>
            <StarButton
              initialStarred={starred.datalab1}
              onToggle={(starred) => setStarred(prev => ({ ...prev, datalab1: starred }))}
            />
          </div>
          <div className="schedule-grid datalab1-grid">
            <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
            <div className="time-marker" style={{ left: '81.6px' }}>10:00</div>
            <div className="time-marker" style={{ left: '155.61px' }}>12:00</div>
            <div className="time-marker" style={{ left: '229.62px' }}>14:00</div>
            <div className="time-line" style={{ left: '7.59px', height: '92px' }}></div>
            <div className="time-line" style={{ left: '81.6px', height: '92px' }}></div>
            <div className="time-line" style={{ left: '155.61px', height: '92px' }}></div>
            <div className="time-line" style={{ left: '229.62px', height: '92px' }}></div>
            <div
              className="event-block event-man"
              style={{
                left: '18px',
                top: '0px',
                width: '129px',
              }}
            >
              MAN
            </div>
            <div
              className="event-block event-jou"
              style={{
                left: '82px',
                top: '0px',
                width: '129px',
              }}
            >
              JOU
            </div>
            <div
              className="event-block event-tvp"
              style={{
                left: '166px',
                top: '0px',
                width: '129px',
              }}
            >
              TVP
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  )
}
