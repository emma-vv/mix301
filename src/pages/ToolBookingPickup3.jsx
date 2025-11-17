import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import BottomNav from "../components/BottomNav";
import "../index.css";

export default function ToolBookingPickup3() {
  const navigate = useNavigate();
  const { toolId } = useParams();

  return (
    <>
      <BackgroundBlur />
      <div
        className="tool-booking-pickup3-body"
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
              className="step-indicator step-completed"
              onClick={() => navigate(`/tools/${toolId}/booking-pickup`)}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-check" style={{ fontSize: "16px", color: "white" }}></i>
            </div>
            <div className="step-connector"></div>
            <div 
              className="step-indicator step-completed"
              onClick={() => navigate(`/tools/${toolId}/booking-pickup-2`)}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-check" style={{ fontSize: "16px", color: "white" }}></i>
            </div>
            <div className="step-connector"></div>
            <div 
              className="step-indicator step-active"
              onClick={() => navigate(`/tools/${toolId}/booking-pickup-3`)}
              style={{ cursor: "pointer" }}
            >
              <span>3</span>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="booking-pickup3-content">
            <h2 className="booking-pickup3-title">Booking Summary</h2>

            {/* Information Card */}
            <div className="booking-pickup3-card">
              {/* Booking Period Item */}
              <div className="booking-pickup3-item">
                <div className="booking-pickup3-icon">
                  <i className="fas fa-calendar" style={{ fontSize: "24px", color: "white" }}></i>
                </div>
                <div className="booking-pickup3-text">
                  <p className="booking-pickup3-label">Booking Period</p>
                  <p className="booking-pickup3-description">
                    Mon Oct 27 - Wed Oct 29
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="booking-pickup3-divider"></div>

              {/* Pickup Item */}
              <div className="booking-pickup3-item">
                <div className="booking-pickup3-icon">
                  <i className="fas fa-calendar" style={{ fontSize: "24px", color: "white" }}></i>
                </div>
                <div className="booking-pickup3-text">
                  <p className="booking-pickup3-label">Pickup</p>
                  <p className="booking-pickup3-description">
                    Mon Oct 27 10:00 - 11:00
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="booking-pickup3-divider"></div>

              {/* Return Item */}
              <div className="booking-pickup3-item">
                <div className="booking-pickup3-icon">
                  <i className="fas fa-calendar" style={{ fontSize: "24px", color: "white" }}></i>
                </div>
                <div className="booking-pickup3-text">
                  <p className="booking-pickup3-label">Return</p>
                  <p className="booking-pickup3-description">
                    Wed Oct 29 09:00 - 10:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="booking-pickup3-buttons">
            {/* Edit Booking Details Button */}
            <button 
              className="button-component booking-pickup3-edit-button"
              onClick={() => navigate(`/tools/${toolId}/booking-calendar?edit=true`)}
            >
              <span>Edit Booking Details</span>
              <i className="fas fa-pencil" style={{ fontSize: "12px", color: "#f1215d" }}></i>
            </button>

            {/* Confirm Booking Button */}
            <button 
              className="button-component booking-pickup3-confirm-button"
              onClick={() => navigate(`/tools/${toolId}/booking-confirmation`)}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
      <style>{`
        .tool-booking-pickup3-body {
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

        .booking-pickup3-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          width: 100%;
          flex: 1;
          margin: auto 0;
        }

        .booking-pickup3-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          white-space: nowrap;
        }

        .booking-pickup3-card {
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

        .booking-pickup3-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          width: 100%;
        }

        .booking-pickup3-icon {
          width: 35.96px;
          height: 35.96px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .booking-pickup3-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3.993px;
        }

        .booking-pickup3-label {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          white-space: nowrap;
        }

        .booking-pickup3-description {
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0;
          line-height: normal;
        }

        .booking-pickup3-divider {
          height: 0.993px;
          background: rgba(255, 255, 255, 0.15);
          width: 100%;
        }

        .booking-pickup3-buttons {
          display: flex;
          flex-direction: column;
          gap: 29px;
          width: 100%;
          margin-top: auto;
          flex-shrink: 0;
        }

        .booking-pickup3-edit-button {
          background: rgba(241, 33, 93, 0.15) !important;
          border: 1.35px solid #f1215d !important;
          color: #f1215d !important;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.2) inset !important;
        }

        .booking-pickup3-edit-button:hover:not(:disabled) {
          background: rgba(241, 33, 93, 0.25) !important;
        }

        .booking-pickup3-edit-button span {
          color: #f1215d !important;
        }

        .booking-pickup3-confirm-button {
          width: 100%;
        }
      `}</style>
    </>
  );
}

