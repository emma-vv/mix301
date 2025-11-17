import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import BottomNav from "../components/BottomNav";
import "../index.css";

export default function ToolBookingGuide() {
  const navigate = useNavigate();
  const { toolId } = useParams();

  return (
    <>
      <BackgroundBlur />
      <div
        className="tool-booking-guide-body"
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
            paddingBottom: "115px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
            minHeight: "calc(100vh - 175px)",
          }}
        >
          {/* Header */}
          <div className="header" style={{ width: "100%", flexShrink: 0 }}>
            <button
              className="back-button back-button-visible"
              onClick={() => navigate(-1)}
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
            <h1 className="header-title">Booking guide</h1>
            <div style={{ width: "42.66px", height: "42.66px" }}></div>
          </div>

          {/* Divider */}
          <div className="divider" style={{ width: "100%", flexShrink: 0 }}></div>

          {/* Main Content - Centered */}
          <div className="booking-guide-content">
            <h2 className="booking-guide-title">Before You Proceed to Booking</h2>

            {/* Information Card */}
            <div className="booking-guide-card">
              {/* First Item */}
              <div className="booking-guide-item">
                <div className="booking-guide-icon">
                  <i className="fas fa-calendar" style={{ fontSize: "24px", color: "white" }}></i>
                </div>
                <div className="booking-guide-text">
                  <p className="booking-guide-label">Book in Advance</p>
                  <p className="booking-guide-description">
                    Bookings must be made no later than the day before pickup.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="booking-guide-divider"></div>

              {/* Second Item */}
              <div className="booking-guide-item">
                <div className="booking-guide-icon">
                  <i className="fas fa-calendar" style={{ fontSize: "24px", color: "white" }}></i>
                </div>
                <div className="booking-guide-text">
                  <p className="booking-guide-label">Booking Length</p>
                  <p className="booking-guide-description">
                    You can only book a tool for two weeks at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Proceed to Booking Button */}
          <button 
            className="button-component booking-proceed-button"
            onClick={() => navigate(`/tools/${toolId}/booking-calendar`)}
          >
            Proceed to Booking
          </button>
        </div>
      </div>
      <BottomNav />
      <style>{`
        .tool-booking-guide-body {
          padding: 0;
        }

        .booking-guide-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          width: 100%;
          flex: 1;
          margin: auto 0;
        }

        .booking-guide-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          white-space: nowrap;
        }

        .booking-guide-card {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 24px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .booking-guide-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          width: 100%;
        }

        .booking-guide-icon {
          width: 35.96px;
          height: 35.96px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .booking-guide-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3.993px;
        }

        .booking-guide-label {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          white-space: nowrap;
        }

        .booking-guide-description {
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0;
          line-height: normal;
        }

        .booking-guide-divider {
          height: 0.993px;
          background: rgba(255, 255, 255, 0.15);
          width: 100%;
        }

        .booking-proceed-button {
          margin-top: auto;
          width: 100%;
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}

