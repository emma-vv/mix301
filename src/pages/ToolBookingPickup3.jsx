import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import "../index.css";

export default function ToolBookingPickup3() {
  const navigate = useNavigate();
  const { toolId } = useParams();
  const [isConfirming, setIsConfirming] = useState(false);

  // Load booking details from localStorage
  const bookingDetails = useMemo(() => {
    const storageKey = `booking_${toolId}_selectedDates`;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
          const dateArray = JSON.parse(saved).sort();
          if (dateArray.length > 0) {
            // Parse dates properly to avoid timezone issues
            const startDateParts = dateArray[0].split('-');
            const endDateParts = dateArray[dateArray.length - 1].split('-');
            const startDate = new Date(parseInt(startDateParts[0]), parseInt(startDateParts[1]) - 1, parseInt(startDateParts[2]));
            const endDate = new Date(parseInt(endDateParts[0]), parseInt(endDateParts[1]) - 1, parseInt(endDateParts[2]));
          
          const formatDate = (date) => {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate().toString().padStart(2, '0')}`;
          };
          
          const formatDateWithTime = (date, time) => {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate().toString().padStart(2, '0')} ${time}`;
          };
          
          return {
            period: `${formatDate(startDate)} - ${formatDate(endDate)}`,
            pickup: formatDateWithTime(startDate, "10:00 - 11:00"),
            return: formatDateWithTime(endDate, "09:00 - 10:00"),
          };
        }
      }
    } catch (e) {
      console.error("Error loading booking details:", e);
    }
    // Default values if no booking found
    return {
      period: "Mon Oct 27 - Wed Oct 29",
      pickup: "Mon Oct 27 10:00 - 11:00",
      return: "Wed Oct 29 09:00 - 10:00",
    };
  }, [toolId]);

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
                    {bookingDetails.period}
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
                    {bookingDetails.pickup}
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
                    {bookingDetails.return}
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
              className={`button-component booking-pickup3-confirm-button ${isConfirming ? "button-loading" : ""}`}
              disabled={isConfirming}
              onClick={() => {
                setIsConfirming(true);
                // Simulate booking confirmation delay for realism
                setTimeout(() => {
                  navigate(`/tools/${toolId}/booking-confirmation`);
                }, 800);
              }}
            >
              <span>{isConfirming ? "Confirming..." : "Confirm Booking"}</span>
            </button>
          </div>
        </div>
      </div>
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
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(1);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }

        .step-indicator:active {
          transform: scale(0.92);
          transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-indicator.step-active {
          background: linear-gradient(135deg, #6521f1 0%, #7B3FF2 100%);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(101, 33, 241, 0.5);
          border-color: rgba(255, 255, 255, 0.3);
          animation: stepPulse 2s ease-in-out infinite;
        }

        @keyframes stepPulse {
          0%, 100% {
            box-shadow: 0 4px 16px rgba(101, 33, 241, 0.5);
          }
          50% {
            box-shadow: 0 4px 20px rgba(101, 33, 241, 0.7);
          }
        }

        .step-indicator.step-inactive {
          background: rgba(101, 33, 241, 0.15);
          color: rgba(255, 255, 255, 0.4);
        }

        .step-indicator.step-completed {
          background: linear-gradient(135deg, rgba(163, 200, 97, 0.8) 0%, rgba(193, 241, 90, 0.8) 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: stepComplete 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-color: rgba(163, 200, 97, 0.5);
        }

        @keyframes stepComplete {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .step-connector {
          width: 47.982px;
          height: 1.986px;
          background: rgba(101, 33, 241, 0.3);
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .step-connector::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .step-indicator.step-active ~ .step-connector,
        .step-indicator.step-completed ~ .step-connector {
          background: rgba(101, 33, 241, 0.5);
        }

        .step-indicator.step-active ~ .step-connector::after,
        .step-indicator.step-completed ~ .step-connector::after {
          left: 100%;
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

