import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import { toastManager } from "../utils/toast";
import "../index.css";

const toolData = {
  "canon-eos-2000d": {
    name: "Canon EOS 2000D",
    category: "Video",
    image: "",
  },
  "godox-ledp260c": {
    name: "Godox LEDP260C",
    category: "Light",
    image: "",
  },
  "rode-videomic-rycote": {
    name: "Rode VideoMic Rycote",
    category: "Sound",
    image: "",
  },
  "gopro-hero-11-black-mini": {
    name: "GoPro Hero 11 Black Mini",
    category: "Video",
    image: "",
  },
  "joby-gorillapod-500": {
    name: "Joby Gorillapod 500 Action mount",
    category: "Mount",
    image: "",
  },
  "hdmi-cable-10m": {
    name: "HDMI cable 10m",
    category: "Cable",
    image: "",
  },
  "sony-a7-iii": {
    name: "Sony A7 III",
    category: "Video",
    image: "",
  },
  "aputure-300d": {
    name: "Aputure 300D",
    category: "Light",
    image: "",
  },
  "shure-sm7b": {
    name: "Shure SM7B",
    category: "Sound",
    image: "",
  },
  "dji-mini-3-pro": {
    name: "DJI Mini 3 Pro",
    category: "Video",
    image: "",
  },
  "manfrotto-tripod": {
    name: "Manfrotto Tripod",
    category: "Mount",
    image: "",
  },
  "xlr-cable-5m": {
    name: "XLR Cable 5m",
    category: "Sound",
    image: "",
  },
  "canon-24-70mm-lens": {
    name: "Canon 24-70mm Lens",
    category: "Camera",
    image: "",
  },
  "neewer-led-panel": {
    name: "Neewer LED Panel",
    category: "Light",
    image: "",
  },
  "zoom-h6-recorder": {
    name: "Zoom H6 Recorder",
    category: "Sound",
    image: "",
  },
  "usb-c-cable-3m": {
    name: "USB-C Cable 3m",
    category: "IT",
    image: "",
  },
};

export default function ToolBookingConfirmation() {
  const navigate = useNavigate();
  const { toolId } = useParams();
  const hasShownToast = useRef(false);
  
  const tool = toolData[toolId] || {
    name: toolId ? toolId.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "Tool",
    category: "Equipment",
    image: "",
  };

  useEffect(() => {
    // Only show toast once, even if component re-renders (React StrictMode)
    if (!hasShownToast.current) {
      toastManager.success("Booking confirmed successfully!");
      hasShownToast.current = true;
    }
    
    // Mark that user has ever made a booking (prevents defaults from reappearing)
    localStorage.setItem('user_has_booked', 'true');
    
    // Dispatch event to update Dashboard booking count
    window.dispatchEvent(new CustomEvent('bookingConfirmed', { 
      detail: { toolId } 
    }));
  }, [toolId]);

  // Load booking details from localStorage
  const storageKey = `booking_${toolId}_selectedDates`;
  const getBookingDetails = () => {
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
          
          return {
            period: `${formatDate(startDate)} - ${formatDate(endDate)}`,
            pickup: `${formatDate(startDate)} 10:00 - 11:00`,
            return: `${formatDate(endDate)} 09:00 - 10:00`,
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
  };

  const bookingDetails = getBookingDetails();

  return (
    <>
      <BackgroundBlur />
      <div
        className="tool-booking-confirmation-body"
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
            <div style={{ width: "42.657px", height: "42.657px" }}></div>
            <h1 className="header-title">Booking Confirmed</h1>
            <button
              className="back-button back-button-visible"
              onClick={() => navigate("/tools")}
              aria-label="Close"
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
              <i className="fas fa-times" style={{ fontSize: "16px", color: "white" }}></i>
            </button>
          </div>

          {/* Divider */}
          <div className="divider" style={{ width: "100%", flexShrink: 0 }}></div>

          {/* Tool Image and Info */}
          <div className="booking-confirmation-tool-info">
            <div className="booking-confirmation-image">
              {/* Placeholder for tool image - you can replace this with actual image */}
              <div style={{
                width: "100%",
                height: "100%",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255, 255, 255, 0.3)",
                fontSize: "14px"
              }}>
                {tool.name}
              </div>
            </div>
            <h2 className="booking-confirmation-tool-name">{tool.name}</h2>
            <div className="booking-confirmation-category">
              <span>{tool.category}</span>
            </div>
          </div>

          {/* Booking Details Card */}
          <div className="booking-confirmation-card">
            {/* Booking Period */}
            <div className="booking-confirmation-item">
              <div className="booking-confirmation-icon">
                <i className="fas fa-calendar" style={{ fontSize: "24px", color: "white" }}></i>
              </div>
              <div className="booking-confirmation-text">
                <p className="booking-confirmation-label">Booking Period</p>
                <p className="booking-confirmation-description">
                  {bookingDetails.period}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="booking-confirmation-divider"></div>

            {/* Pickup */}
            <div className="booking-confirmation-item">
              <div className="booking-confirmation-icon">
                <i className="fas fa-calendar" style={{ fontSize: "24px", color: "white" }}></i>
              </div>
              <div className="booking-confirmation-text">
                <p className="booking-confirmation-label">Pickup</p>
                <p className="booking-confirmation-description">
                  {bookingDetails.pickup}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="booking-confirmation-divider"></div>

            {/* Return */}
            <div className="booking-confirmation-item">
              <div className="booking-confirmation-icon">
                <i className="fas fa-calendar" style={{ fontSize: "24px", color: "white" }}></i>
              </div>
              <div className="booking-confirmation-text">
                <p className="booking-confirmation-label">Return</p>
                <p className="booking-confirmation-description">
                  {bookingDetails.return}
                </p>
              </div>
            </div>
          </div>

          {/* View My Bookings Button */}
          <button 
            className="button-component booking-confirmation-view-button"
            onClick={() => navigate("/bookings")}
          >
            <span>View My Bookings</span>
            <i className="fas fa-arrow-right" style={{ fontSize: "14px", color: "white" }}></i>
          </button>
        </div>
      </div>
      <style>{`
        .tool-booking-confirmation-body {
          padding: 0;
        }

        .booking-confirmation-tool-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 19px;
          width: 175px;
          flex-shrink: 0;
        }

        .booking-confirmation-image {
          width: 175px;
          height: 162px;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .booking-confirmation-tool-name {
          font-size: 20px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          white-space: nowrap;
        }

        .booking-confirmation-category {
          background: rgba(193, 241, 90, 0.2);
          border: 1.352px solid rgba(193, 241, 90, 0.3);
          border-radius: 12px;
          padding: 0 12px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .booking-confirmation-category span {
          font-size: 12px;
          font-weight: 400;
          color: #c1f15a;
          white-space: nowrap;
        }

        .booking-confirmation-card {
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

        .booking-confirmation-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          width: 100%;
        }

        .booking-confirmation-icon {
          width: 35.96px;
          height: 35.96px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .booking-confirmation-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3.993px;
        }

        .booking-confirmation-label {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          white-space: nowrap;
        }

        .booking-confirmation-description {
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0;
          line-height: normal;
        }

        .booking-confirmation-divider {
          height: 0.993px;
          background: rgba(255, 255, 255, 0.15);
          width: 100%;
        }

        .booking-confirmation-view-button {
          margin-top: auto;
          width: 100%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
      `}</style>
    </>
  );
}

