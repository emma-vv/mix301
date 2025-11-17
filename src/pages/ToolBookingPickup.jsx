import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import BottomNav from "../components/BottomNav";
import "../index.css";

export default function ToolBookingPickup() {
  const navigate = useNavigate();
  const { toolId } = useParams();

  return (
    <>
      <BackgroundBlur />
      <div
        className="tool-booking-pickup-body"
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
              onClick={() => navigate(`/tools/${toolId}/booking-calendar`)}
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

          {/* Step Indicators */}
          <div className="step-indicators-container">
            <div 
              className="step-indicator step-active"
              onClick={() => navigate(`/tools/${toolId}/booking-pickup`)}
              style={{ cursor: "pointer" }}
            >
              <span>1</span>
            </div>
            <div className="step-connector"></div>
            <div 
              className="step-indicator step-inactive"
              onClick={() => navigate(`/tools/${toolId}/booking-pickup-2`)}
              style={{ cursor: "pointer" }}
            >
              <span>2</span>
            </div>
            <div className="step-connector"></div>
            <div 
              className="step-indicator step-inactive"
              onClick={() => navigate(`/tools/${toolId}/booking-pickup-3`)}
              style={{ cursor: "pointer" }}
            >
              <span>3</span>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="booking-pickup-content">
            <h2 className="booking-pickup-title">Pickup and Technical Check</h2>

            {/* Information Card */}
            <div className="booking-pickup-card">
              {/* Pickup Item */}
              <div className="booking-pickup-item">
                <div className="booking-pickup-icon">
                  <i className="fas fa-calendar" style={{ fontSize: "24px", color: "white" }}></i>
                </div>
                <div className="booking-pickup-text">
                  <p className="booking-pickup-label">Pickup</p>
                  <p className="booking-pickup-description">
                    Mon Oct 27 10:00 - 11:00 at Media City Bergen.
                  </p>
                  <p className="booking-pickup-note">
                    Storage is unstaffed outside of 09:00 - 11:00.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="booking-pickup-divider"></div>

              {/* Technical Check Item */}
              <div className="booking-pickup-item">
                <div className="booking-pickup-icon">
                  <i className="fas fa-clipboard-check" style={{ fontSize: "24px", color: "white" }}></i>
                </div>
                <div className="booking-pickup-text">
                  <p className="booking-pickup-label">Technical Check</p>
                  <p className="booking-pickup-description">
                    Check equipment immediately after pickup. Report faults before 11:30.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="button-component booking-pickup-next-button"
            onClick={() => navigate(`/tools/${toolId}/booking-pickup-2`)}
          >
            Next
          </button>
        </div>
      </div>
      <BottomNav />
      <style>{`
        .tool-booking-pickup-body {
          padding: 0;
        }

        .step-indicators-container {
          display: flex;
          gap: 0;
          align-items: center;
          width: 100%;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-indicator {
          width: 47.982px;
          height: 47.982px;
          border-radius: 16px;
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 400;
          color: white;
          flex-shrink: 0;
          position: relative;
          background: rgba(101, 33, 241, 0.15);
        }

        .step-indicator.step-active {
          background: #6521f1;
          color: white;
        }

        .step-indicator.step-inactive {
          background: rgba(101, 33, 241, 0.15);
          color: rgba(255, 255, 255, 0.4);
        }

        .step-indicator.step-completed {
          background: rgba(101, 33, 241, 0.15);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-connector {
          width: 47.982px;
          height: 1.986px;
          background: rgba(101, 33, 241, 0.3);
          flex-shrink: 0;
        }

        .booking-pickup-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          width: 100%;
          flex: 1;
          margin: auto 0;
        }

        .booking-pickup-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          white-space: nowrap;
        }

        .booking-pickup-card {
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

        .booking-pickup-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          width: 100%;
        }

        .booking-pickup-icon {
          width: 35.96px;
          height: 35.96px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .booking-pickup-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3.993px;
        }

        .booking-pickup-label {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          white-space: nowrap;
        }

        .booking-pickup-description {
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0;
          line-height: normal;
        }

        .booking-pickup-note {
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0;
          line-height: normal;
        }

        .booking-pickup-divider {
          height: 0.993px;
          background: rgba(255, 255, 255, 0.15);
          width: 100%;
        }

        .booking-pickup-next-button {
          margin-top: auto;
          width: 100%;
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}

