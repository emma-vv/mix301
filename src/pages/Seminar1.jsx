import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import BottomNav from "../components/BottomNav";
import StarButton from "../components/StarButton";
import "../index.css";

export default function Seminar1() {
  const navigate = useNavigate();
  const [isRoomInfoOpen, setIsRoomInfoOpen] = useState(false);

  // Example bookings for today
  const bookings = [
    {
      id: 1,
      title: "MIX100 Workshop",
      startTime: "08:00",
      endTime: "10:00",
      gradientFrom: "rgba(193,241,90,0.8)",
      gradientTo: "rgba(168,212,68,0.8)",
      shadow: "rgba(193,241,90,0.38)",
    },
    {
      id: 2,
      title: "JOU100 Lecture",
      startTime: "10:00",
      endTime: "12:00",
      gradientFrom: "rgba(168,164,232,0.8)",
      gradientTo: "rgba(137,132,212,0.8)",
      shadow: "rgba(168,164,232,0.38)",
    },
    {
      id: 3,
      title: "OJU304 Workshop",
      startTime: "14:00",
      endTime: "16:00",
      gradientFrom: "rgba(217,155,179,0.8)",
      gradientTo: "rgba(193,125,154,0.8)",
      shadow: "rgba(217,155,179,0.38)",
    },
  ];

  // Calculate position and height for booking blocks
  // Based on Figma: each booking is 98px height, positioned at specific offsets
  const getBookingStyle = (startTime, endTime) => {
    const [startHour, startMin] = startTime.split(":").map(Number);
    
    // Each hour is approximately 110px spacing
    const hourHeight = 110;
    const startPosition = (startHour - 8) * hourHeight + (startMin / 60) * hourHeight;
    
    // All bookings are 98px height according to Figma
    return {
      top: `${startPosition}px`,
      height: `98px`,
    };
  };

  // Time markers from 08:00 to 22:00 with exact positions from Figma
  const timeMarkers = [
    { time: "08:00", top: 15.32 },
    { time: "09:00", top: 70.32 },
    { time: "10:00", top: 125.32 },
    { time: "11:00", top: 180.32 },
    { time: "12:00", top: 235.32 },
    { time: "13:00", top: 290.32 },
    { time: "14:00", top: 345.32 },
    { time: "15:00", top: 400.32 },
    { time: "16:00", top: 455.32 },
    { time: "17:00", top: 510.32 },
    { time: "18:00", top: 565.32 },
    { time: "20:00", top: 620.32 },
    { time: "21:00", top: 675.32 },
    { time: "22:00", top: 730.32 },
  ];

  // Horizontal lines at each time marker position
  // Lines extend from left (after time markers) to right

  return (
    <>
      <BackgroundBlur />
      <div
        className="seminar1-body"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "345px",
            margin: "0 auto",
            paddingTop: "60px",
            paddingBottom: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
          }}
        >
          {/* Header */}
          <div className="header" style={{ width: "100%", flexShrink: 0 }}>
            <button
              className="back-button back-button-visible"
              onClick={() => navigate("/rooms")}
              aria-label="Back"
              style={{
                width: "42.657px",
                height: "42.657px",
                border: "1.352px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <h1 className="header-title">Seminar 1</h1>
            <StarButton itemId="seminar1" initialStarred={false} />
          </div>

          {/* Divider */}
          <div className="divider" style={{ width: "100%", flexShrink: 0 }}></div>

          {/* Book This Room Button */}
          <button className="button-component" style={{ width: "100%" }}>
            Book This Room
          </button>

          {/* Room Information and Date Selector Group */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Room Information Button */}
            <button
              className="info-card-button"
              onClick={() => setIsRoomInfoOpen(!isRoomInfoOpen)}
              style={{ width: "100%" }}
            >
              <div style={{ width: "20px", height: "20px" }}></div>
              <span className="info-card-text">Room information</span>
              <i
                className={`fas fa-chevron-${isRoomInfoOpen ? "up" : "down"}`}
                style={{ color: "white" }}
              ></i>
            </button>

            {/* Room Information Expandable */}
            <div
              className={`info-card-expanded ${
                isRoomInfoOpen ? "expanded-open" : "expanded-closed"
              }`}
            >
              <div className="info-card-content">
                {/* Room type */}
                <div className="info-row">
                  <span className="info-label">Room type</span>
                  <span className="info-value">Seminar room</span>
                </div>
                <div className="info-divider"></div>
                
                {/* Room capacity */}
                <div className="info-row">
                  <span className="info-label">Room capacity</span>
                  <span className="info-value">20 spots</span>
                </div>
                <div className="info-divider"></div>
                
                {/* Location */}
                <div className="info-row">
                  <span className="info-label">Location</span>
                  <a href="#" className="info-link" onClick={(e) => e.preventDefault()}>
                    View on Mazemap
                  </a>
                </div>
                <div className="info-divider"></div>
                
                {/* Tools */}
                <div className="info-row">
                  <span className="info-label">Tools</span>
                  <span className="info-value">Laptop connection</span>
                </div>
                <div className="info-row" style={{ marginTop: "0", paddingTop: "0" }}>
                  <span className="info-label" style={{ visibility: "hidden" }}>Tools</span>
                  <span className="info-value">Projector</span>
                </div>
              </div>
            </div>

            {/* Date Selector */}
            <div
              className="seminar1-date-selector"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "9.34px 11.33px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1.352px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "14px",
                height: "43px",
              }}
            >
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Previous day"
            >
              <i className="fas fa-chevron-left" style={{ fontSize: "8px" }}></i>
            </button>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
                textAlign: "center",
              }}
            >
              Today
            </span>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Next day"
            >
              <i className="fas fa-chevron-right" style={{ fontSize: "8px" }}></i>
            </button>
            </div>
          </div>

          {/* Schedule Grid */}
          <div
            className="seminar1-schedule-container"
            style={{
              position: "relative",
              width: "100%",
              height: "760px", // Based on last time marker at 730.32px + small padding
              isolation: "isolate",
            }}
          >
            {/* Time Markers - using exact positions from Figma */}
            {timeMarkers.map((marker) => (
              <div
                key={marker.time}
                style={{
                  position: "absolute",
                  left: "0",
                  top: `${marker.top}px`,
                  transform: "translateY(-50%)",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "white",
                  width: "30.712px",
                }}
              >
                {marker.time}
              </div>
            ))}

            {/* Booking Blocks - using exact positions from Figma */}
            {bookings.map((booking) => {
              // Exact top positions from Figma
              let topPosition = "0px";
              if (booking.id === 1) {
                // MIX100 Workshop - at 12.32px from top
                topPosition = "12.32px";
              } else if (booking.id === 2) {
                // JOU100 Lecture - at 122.32px from top
                topPosition = "122.32px";
              } else if (booking.id === 3) {
                // OJU304 Workshop - at 342.68px from top
                topPosition = "342.68px";
              }
              
              return (
                <div
                  key={booking.id}
                  className="seminar1-booking-block"
                  style={{
                    position: "absolute",
                    left: "59.38px",
                    top: topPosition,
                    height: "98px",
                    width: "285.623px",
                    borderRadius: "10px",
                    background: `linear-gradient(to bottom, ${booking.gradientFrom}, ${booking.gradientTo})`,
                    boxShadow: `0px 0px 10.8px 2px ${booking.shadow}`,
                    padding: "16px 15.28px",
                    display: "flex",
                    alignItems: "flex-start",
                    zIndex: 100,
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "white",
                      margin: 0,
                    }}
                  >
                    {booking.title}
                  </p>
                </div>
              );
            })}

            {/* Horizontal Lines - rendered after booking blocks so they appear behind */}
            {timeMarkers.map((marker) => (
              <div
                key={`line-${marker.time}`}
                style={{
                  position: "absolute",
                  left: "59.38px",
                  top: `${marker.top}px`,
                  width: "calc(100% - 59.38px)",
                  height: "0.993px",
                  background: "rgba(255, 255, 255, 0.15)",
                  transform: "translateY(-50%)",
                  zIndex: -1,
                  pointerEvents: "none",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
      <style>{`
        .seminar1-body {
          padding: 0;
        }

        .seminar1-date-selector button:hover {
          opacity: 0.8;
        }

        .info-card-expanded {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity 0.3s ease, margin-top 0.3s ease;
          will-change: max-height, opacity;
          contain: layout;
          width: 100%;
        }

        .info-card-expanded.expanded-open {
          max-height: 1000px;
          opacity: 1;
          margin-top: 24px;
        }

        .info-card-expanded.expanded-closed {
          max-height: 0;
          opacity: 0;
          margin-top: 0;
          margin-bottom: 0;
          padding: 0;
        }

        .info-card-content {
          background: rgba(255, 255, 255, 0.05);
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          padding: 20px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          width: 100%;
        }

        .info-label {
          font-size: 16px;
          font-weight: 400;
          color: white;
          flex: 1;
        }

        .info-value {
          font-size: 16px;
          font-weight: 400;
          color: white;
          text-align: right;
          white-space: nowrap;
        }

        .info-link {
          font-size: 16px;
          font-weight: 400;
          color: white;
          text-decoration: underline;
          text-align: right;
          white-space: nowrap;
          cursor: pointer;
        }

        .info-link:hover {
          opacity: 0.8;
        }

        .info-divider {
          height: 0.993px;
          width: 100%;
          background: rgba(255, 255, 255, 0.15);
          margin: 0;
        }
      `}</style>
    </>
  );
}

