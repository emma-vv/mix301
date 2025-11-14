import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundBlur from '../components/BackgroundBlur'
import BottomNav from '../components/BottomNav'
import StarButton from '../components/StarButton'
import '../index.css'

export default function Rooms() {
  const [starred, setStarred] = useState({
    seminar1: true,
    seminar2: true,
    datalab1: false,
    datalab2: false,
    researchlab: false,
    editorialroom: false,
    meetingroom1: false,
    meetingroom2: true,
    sujoseminar: false,
    framsyn: false,
    grouproom1: false,
    grouproom2: false,
    studioinfomedia: false,
    soundstudio: false,
    sound1: false,
    sound2: false,
    post1: false,
    post2: false,
    post3: false,
    post4: false,
    workshop: false,
  })

  return (
    <>
      <BackgroundBlur />
      <div className="rooms-body" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '345px', margin: '0 auto', paddingTop: '60px', paddingBottom: '115px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
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

          {/* Seminar 1 */}
          <div className="module-card">
            <div className="card-glow glow-mix"></div>
            <div className="card-glow glow-jou"></div>
            <div className="module-header">
              <h2 className="module-title">Seminar 1</h2>
              <StarButton
                initialStarred={starred.seminar1}
                onToggle={(starred) => setStarred(prev => ({ ...prev, seminar1: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.61px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.62px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.37px' }}></div>
              <div className="time-line" style={{ left: '221.99px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '147.99px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '221.99px', height: '24px', top: '0.03px' }}></div>
              <Link
                to="/mix100"
                className="event-block event-mix clickable-event"
                style={{ left: '18px', top: '24px', width: '129px' }}
              >
                MIX100
              </Link>
              <div className="event-block event-jou" style={{ left: '166.99px', top: '24.03px', width: '129px' }}>
                JOU100
              </div>
            </div>
          </div>

          {/* Seminar 2 */}
          <div className="module-card">
            <div className="card-glow glow-mix" style={{ left: '94px', top: '34px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Seminar 2</h2>
              <StarButton
                initialStarred={starred.seminar2}
                onToggle={(starred) => setStarred(prev => ({ ...prev, seminar2: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '148px', height: '25px', top: '69px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '94px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '94px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '25px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '94px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '297px', height: '94px', top: '0.03px' }}></div>
              <div className="event-block event-mix" style={{ left: '82px', top: '25px', width: '129px' }}>
                MIX204
              </div>
            </div>
          </div>

          {/* Data Lab 1 */}
          <div className="module-card">
            <div className="card-glow glow-tvp" style={{ left: '31px', top: '30.03px' }}></div>
            <div className="card-glow glow-jou" style={{ left: '184px', top: '30.03px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Data Lab 1</h2>
              <StarButton
                initialStarred={starred.datalab1}
                onToggle={(starred) => setStarred(prev => ({ ...prev, datalab1: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '0.03px' }}></div>
              <div className="event-block event-tvp" style={{ left: '18px', top: '24px', width: '129px' }}>
                TVP100
              </div>
              <div className="event-block event-jou" style={{ left: '167px', top: '24.03px', width: '129px' }}>
                JOU204
              </div>
            </div>
          </div>

          {/* Data Lab 2 */}
          <div className="module-card">
            <div className="card-glow glow-man" style={{ left: '22px', top: '19.97px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Data Lab 2</h2>
              <StarButton
                initialStarred={starred.datalab2}
                onToggle={(starred) => setStarred(prev => ({ ...prev, datalab2: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '92px', top: '0px' }}></div>
              <div className="event-block event-man" style={{ left: '18px', top: '24px', width: '129px' }}>
                MAN301
              </div>
            </div>
          </div>

          {/* Research Lab */}
          <div className="module-card">
            <div className="card-glow glow-sujo" style={{ left: '32px', top: '19.92px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Research Lab</h2>
              <StarButton
                initialStarred={starred.researchlab}
                onToggle={(starred) => setStarred(prev => ({ ...prev, researchlab: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '92px', top: '0px' }}></div>
              <div className="event-block event-ujo" style={{ left: '18px', top: '23.95px', width: '129px' }}>
                UJO301
              </div>
            </div>
          </div>

          {/* Editorial Room */}
          <div className="module-card">
            <div className="card-glow glow-tvp" style={{ left: '8px', top: '-8.13px' }}></div>
            <div className="card-glow glow-tvp" style={{ left: '157px', top: '-8.13px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Editorial Room</h2>
              <StarButton
                initialStarred={starred.editorialroom}
                onToggle={(starred) => setStarred(prev => ({ ...prev, editorialroom: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '148px', height: '24px', top: '68.1px' }}></div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.39px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.33px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0.31px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.33px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '25px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '0.1px' }}></div>
              <div className="event-block event-tvp" style={{ left: '18px', top: '23.9px', width: '278px' }}>
                TVP204
              </div>
            </div>
          </div>

          {/* Meeting Room 1 */}
          <div className="module-card">
            <div className="card-glow glow-booking" style={{ left: '-30px', top: '-7.49px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Meeting Room 1</h2>
              <StarButton
                initialStarred={starred.meetingroom1}
                onToggle={(starred) => setStarred(prev => ({ ...prev, meetingroom1: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '92px', top: '0px' }}></div>
              <div className="event-block event-booking" style={{ left: '18px', top: '24.54px', width: '74px' }}>
                Booking
              </div>
            </div>
          </div>

          {/* Meeting Room 2 */}
          <div className="module-card">
            <div className="card-glow glow-booking" style={{ left: '24px', top: '33.34px' }}></div>
            <div className="card-glow glow-booking" style={{ left: '184px', top: '30.34px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Meeting Room 2</h2>
              <StarButton
                initialStarred={starred.meetingroom2}
                onToggle={(starred) => setStarred(prev => ({ ...prev, meetingroom2: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.61px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.62px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.37px' }}></div>
              <div className="time-line" style={{ left: '221.99px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '147.99px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '221.99px', height: '24px', top: '0.03px' }}></div>
              <div className="event-block event-booking" style={{ left: '18px', top: '24.48px', width: '74px' }}>
                Booking
              </div>
              <div className="event-block event-booking" style={{ left: '167px', top: '24.48px', width: '74px' }}>
                Booking
              </div>
            </div>
          </div>

          {/* SUJO Seminar Room */}
          <div className="module-card">
            <div className="card-glow glow-booking" style={{ left: '21px', top: '24px' }}></div>
            <div className="module-header">
              <h2 className="module-title">SUJO Seminar Room</h2>
              <StarButton
                initialStarred={starred.sujoseminar}
                onToggle={(starred) => setStarred(prev => ({ ...prev, sujoseminar: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '92px', top: '0.14px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '92px', top: '0px' }}></div>
            </div>
          </div>

          {/* Framsyn */}
          <div className="module-card">
            <div className="card-glow glow-booking" style={{ left: '21px', top: '24px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Framsyn</h2>
              <StarButton
                initialStarred={starred.framsyn}
                onToggle={(starred) => setStarred(prev => ({ ...prev, framsyn: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '92px', top: '0px' }}></div>
              <div className="event-block event-booking" style={{ left: '18px', top: '24.63px', width: '129px' }}>
                INFO100
              </div>
            </div>
          </div>

          {/* Group Room 1 */}
          <div className="module-card">
            <div className="module-header">
              <h2 className="module-title">Group Room 1</h2>
              <StarButton
                initialStarred={starred.grouproom1}
                onToggle={(starred) => setStarred(prev => ({ ...prev, grouproom1: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.16px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '92px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.1px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.1px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '92px', top: '0.08px' }}></div>
            </div>
          </div>

          {/* Group Room 2 */}
          <div className="module-card">
            <div className="card-glow glow-booking" style={{ left: '156px', top: '29.82px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Group Room 2</h2>
              <StarButton
                initialStarred={starred.grouproom2}
                onToggle={(starred) => setStarred(prev => ({ ...prev, grouproom2: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '222px', height: '23px', top: '68.85px' }}></div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.39px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '92px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.33px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.33px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '0.85px' }}></div>
              <div className="event-block event-booking" style={{ left: '185px', top: '25.15px', width: '74px' }}>
                Booking
              </div>
            </div>
          </div>

          {/* Studio Infomedia */}
          <div className="module-card">
            <div className="card-glow glow-booking" style={{ left: '24px', top: '24.46px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Studio Infomedia</h2>
              <StarButton
                initialStarred={starred.studioinfomedia}
                onToggle={(starred) => setStarred(prev => ({ ...prev, studioinfomedia: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '92px', top: '0px' }}></div>
              <div className="event-block event-booking" style={{ left: '18px', top: '24.63px', width: '129px' }}>
                INFO100
              </div>
            </div>
          </div>

          {/* Sound Studio */}
          <div className="module-card">
            <div className="card-glow glow-booking" style={{ left: '24px', top: '33.29px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Sound Studio</h2>
              <StarButton
                initialStarred={starred.soundstudio}
                onToggle={(starred) => setStarred(prev => ({ ...prev, soundstudio: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '92px', top: '0px' }}></div>
              <div className="event-block event-booking" style={{ left: '18px', top: '24.63px', width: '129px' }}>
                INFO100
              </div>
            </div>
          </div>

          {/* Sound 1 */}
          <div className="module-card">
            <div className="card-glow glow-tvp" style={{ left: '24px', top: '33.24px' }}></div>
            <div className="card-glow glow-tvp" style={{ left: '171px', top: '33.24px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Sound 1</h2>
              <StarButton
                initialStarred={starred.sound1}
                onToggle={(starred) => setStarred(prev => ({ ...prev, sound1: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '147px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '24px', top: '0.38px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '0.38px' }}></div>
              <div className="event-block event-tvp" style={{ left: '18px', top: '24.38px', width: '277px' }}>
                TVP204
              </div>
            </div>
          </div>

          {/* Sound 2 */}
          <div className="module-card">
            <div className="card-glow glow-tvp" style={{ left: '24px', top: '33.24px' }}></div>
            <div className="card-glow glow-tvp" style={{ left: '171px', top: '33.24px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Sound 2</h2>
              <StarButton
                initialStarred={starred.sound2}
                onToggle={(starred) => setStarred(prev => ({ ...prev, sound2: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '147px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '24px', top: '0.38px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '0.38px' }}></div>
              <div className="event-block event-tvp" style={{ left: '18px', top: '24.38px', width: '277px' }}>
                TVP204
              </div>
            </div>
          </div>

          {/* Post 1 */}
          <div className="module-card">
            <div className="card-glow glow-tvp" style={{ left: '24px', top: '33.24px' }}></div>
            <div className="card-glow glow-tvp" style={{ left: '171px', top: '33.24px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Post 1</h2>
              <StarButton
                initialStarred={starred.post1}
                onToggle={(starred) => setStarred(prev => ({ ...prev, post1: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '147px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '24px', top: '0.38px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '0.38px' }}></div>
              <div className="event-block event-tvp" style={{ left: '18px', top: '24.38px', width: '277px' }}>
                TVP204
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="module-card">
            <div className="card-glow glow-tvp" style={{ left: '24px', top: '33.24px' }}></div>
            <div className="card-glow glow-tvp" style={{ left: '171px', top: '33.24px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Post 2</h2>
              <StarButton
                initialStarred={starred.post2}
                onToggle={(starred) => setStarred(prev => ({ ...prev, post2: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '147px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '24px', top: '0.38px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '0.38px' }}></div>
              <div className="event-block event-tvp" style={{ left: '18px', top: '24.38px', width: '277px' }}>
                TVP204
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="module-card">
            <div className="card-glow glow-tvp" style={{ left: '24px', top: '33.24px' }}></div>
            <div className="card-glow glow-tvp" style={{ left: '171px', top: '33.24px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Post 3</h2>
              <StarButton
                initialStarred={starred.post3}
                onToggle={(starred) => setStarred(prev => ({ ...prev, post3: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '147px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '24px', top: '0.38px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '0.38px' }}></div>
              <div className="event-block event-tvp" style={{ left: '18px', top: '24.38px', width: '277px' }}>
                TVP204
              </div>
            </div>
          </div>

          {/* Post 4 (Sound) */}
          <div className="module-card">
            <div className="card-glow glow-tvp" style={{ left: '24px', top: '33.24px' }}></div>
            <div className="card-glow glow-tvp" style={{ left: '171px', top: '33.24px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Post 4 (Sound)</h2>
              <StarButton
                initialStarred={starred.post4}
                onToggle={(starred) => setStarred(prev => ({ ...prev, post4: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '147px', height: '24px', top: '68.38px' }}></div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '24px', top: '0.38px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '24px', top: '0.38px' }}></div>
              <div className="event-block event-ujo" style={{ left: '18px', top: '24.38px', width: '277px' }}>
                UJO350
              </div>
            </div>
          </div>

          {/* Workshop */}
          <div className="module-card">
            <div className="card-glow glow-jou" style={{ left: '0px', top: '-0.77px' }}></div>
            <div className="module-header">
              <h2 className="module-title">Workshop</h2>
              <StarButton
                initialStarred={starred.workshop}
                onToggle={(starred) => setStarred(prev => ({ ...prev, workshop: starred }))}
              />
            </div>
            <div className="schedule-grid">
              <div className="time-marker" style={{ left: '7.59px' }}>08:00</div>
              <div className="time-marker" style={{ left: '81.6px' }}>09:00</div>
              <div className="time-marker" style={{ left: '155.62px' }}>10:00</div>
              <div className="time-marker" style={{ left: '229.63px' }}>11:00</div>
              <div className="time-line" style={{ left: '296px', height: '92px', top: '0.08px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '68.03px' }}></div>
              <div className="time-line" style={{ left: '74px', height: '24px', top: '0px' }}></div>
              <div className="time-line" style={{ left: '0px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '148px', height: '92px', top: '0.03px' }}></div>
              <div className="time-line" style={{ left: '222px', height: '92px', top: '0px' }}></div>
              <div className="event-block event-jou" style={{ left: '18px', top: '24.63px', width: '129px' }}>
                JOU250
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  )
}
