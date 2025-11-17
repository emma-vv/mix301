import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import { toastManager } from "../utils/toast";
import "../index.css";

export default function BookingDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  
  // Get booking data from location state or use defaults
  const booking = location.state || {
    id: "canon-eos-2000d",
    name: "Canon EOS 2000D",
    type: "tool",
    dateRange: "Mon Oct 27 - Wed Oct 29",
    category: "Video",
    additionalNotes: "Includes: DSLR camera, 2 lenses (24-70mm, 50mm), tripod, memory cards, battery pack.",
  };

  // Format booking period from dateRange
  const formatBookingPeriod = (dateRange) => {
    return dateRange || "Mon Oct 27 - Wed Oct 29";
  };

  return (
    <>
      <BackgroundBlur />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
        }}
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
          }}
        >
          {/* Header */}
          <div className="header" style={{ width: "100%", flexShrink: 0 }}>
            <button
              className="back-button back-button-visible"
              onClick={() => navigate("/bookings")}
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
            <h1 className="header-title">My Booking</h1>
            <button
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
              aria-label="Info"
              onClick={() => setIsInfoModalOpen(true)}
            >
              <i className="fas fa-info-circle" style={{ color: "white", fontSize: "20px" }}></i>
            </button>
          </div>

          {/* Divider */}
          <div className="divider" style={{ width: "100%", flexShrink: 0 }}></div>

          {/* Product Display */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "19px",
              alignItems: "center",
              width: "175px",
            }}
          >
            {/* Product Image */}
            <div
              style={{
                width: "175px",
                height: "162px",
                borderRadius: "20px",
                overflow: "hidden",
                background: "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  color: "rgba(255, 255, 255, 0.3)",
                }}
              >
                <i className="fas fa-camera"></i>
              </div>
            </div>

            {/* Product Name */}
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "white",
                textAlign: "center",
                margin: 0,
              }}
            >
              {booking.name}
            </h2>

            {/* Category Badge */}
            <div
              style={{
                background: "rgba(193, 241, 90, 0.2)",
                border: "1.352px solid rgba(193, 241, 90, 0.3)",
                borderRadius: "12px",
                padding: "0 12px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#c1f15a",
                }}
              >
                {booking.category || "Video"}
              </span>
            </div>
          </div>

          {/* Booking Period Card */}
          <div
            style={{
              width: "100%",
              border: "1.352px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              padding: "24px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              {/* Calendar Icon */}
              <div
                style={{
                  width: "35.96px",
                  height: "35.96px",
                  borderRadius: "10px",
                  background: "rgba(101, 33, 241, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i
                  className="fas fa-calendar"
                  style={{ fontSize: "20px", color: "white" }}
                ></i>
              </div>

              {/* Booking Period Info */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3.993px",
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "rgba(255, 255, 255, 0.6)",
                    margin: 0,
                  }}
                >
                  Booking Period
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "white",
                    margin: 0,
                  }}
                >
                  {formatBookingPeriod(booking.dateRange)}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Notes Card */}
          <div
            style={{
              width: "100%",
              border: "1.352px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              padding: "24px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3.993px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.6)",
                  margin: 0,
                }}
              >
                Additional Notes
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "white",
                  margin: 0,
                }}
              >
                {booking.additionalNotes || "Includes: DSLR camera, 2 lenses (24-70mm, 50mm), tripod, memory cards, battery pack."}
              </p>
            </div>
          </div>

          {/* Edit Booking Button */}
          <button
            className="button-component"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
            onClick={() => {
              // Navigate to edit booking (calendar page with edit=true)
              navigate(`/tools/${booking.id}/booking-calendar?edit=true`, {
                state: booking,
              });
            }}
          >
            <span>Edit Booking</span>
            <i className="fas fa-pencil" style={{ fontSize: "12px" }}></i>
          </button>

          {/* Cancel Booking Button */}
          <button
            style={{
              width: "100%",
              height: "56px",
              borderRadius: "16px",
              border: "1.35px solid #f1215d",
              background: "rgba(241, 33, 93, 0.15)",
              color: "#f1215d",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              boxShadow: "0px 1px 2px 0px inset rgba(255, 255, 255, 0.2)",
            }}
            onClick={() => setIsCancelModalOpen(true)}
          >
            <span>Cancel Booking</span>
            <i className="fas fa-trash" style={{ fontSize: "12px" }}></i>
          </button>
        </div>
      </div>

      {/* Cancel Booking Confirmation Modal */}
      {isCancelModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(101, 33, 241, 0.03)",
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "24px",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsCancelModalOpen(false);
            }
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "24px",
              width: "100%",
              maxWidth: "345px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
            }}
          >
            {/* Title */}
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "white",
                textAlign: "center",
                margin: 0,
                width: "217px",
              }}
            >
              Are you sure you want to cancel this booking?
            </h2>

            {/* Yes, Cancel Booking Button */}
            <button
              className="button-component"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
              onClick={() => {
                // Only remove booking from localStorage if it's not a default booking
                if (booking.id && !booking.isDefault) {
                  const storageKey = `booking_${booking.id}_selectedDates`;
                  localStorage.removeItem(storageKey);
                  
                  // Also remove currentDate storage for this booking
                  const currentDateKey = `booking_${booking.id}_currentDate`;
                  localStorage.removeItem(currentDateKey);
                  
                  toastManager.success("Booking cancelled successfully");
                  
                  // Dispatch custom event to trigger reload on MyBookings page
                  window.dispatchEvent(new CustomEvent('bookingCanceled', { 
                    detail: { bookingId: booking.id }
                  }));
                } else {
                  toastManager.info("This booking cannot be cancelled");
                }
                
                // Navigate back to bookings page
                setTimeout(() => {
                  navigate("/bookings");
                }, 300);
              }}
            >
              <span>Yes, Cancel Booking</span>
            </button>

            {/* No, Don't Cancel Booking Button */}
            <button
              style={{
                width: "100%",
                height: "56px",
                borderRadius: "16px",
                border: "1.35px solid #f1215d",
                background: "rgba(241, 33, 93, 0.15)",
                color: "#f1215d",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                boxShadow: "0px 1px 2px 0px inset rgba(255, 255, 255, 0.2)",
              }}
              onClick={() => setIsCancelModalOpen(false)}
            >
              <span>No, Don't Cancel Booking</span>
            </button>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {isInfoModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(101, 33, 241, 0.03)",
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "24px",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsInfoModalOpen(false);
            }
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "24px",
              width: "100%",
              maxWidth: "345px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "42.657px", height: "42.657px" }}></div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "white",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                {booking.name}
              </h2>
              <button
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
                onClick={() => setIsInfoModalOpen(false)}
                aria-label="Close"
              >
                <i className="fas fa-times" style={{ color: "white", fontSize: "16px" }}></i>
              </button>
            </div>

            {/* Content */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "white",
                textAlign: "center",
                margin: 0,
                width: "100%",
              }}
            >
              You can download a PDF document with manual on how to use the {booking.name} Camera.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "white",
                textAlign: "center",
                margin: 0,
                width: "100%",
              }}
            >
              You can also download its specifications.
            </p>

            {/* Download Manual Button */}
            <button
              className="button-component"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
              onClick={() => {
                // Handle download manual
                console.log("Download manual");
              }}
            >
              <span>Download Manual</span>
              <i className="fas fa-download" style={{ fontSize: "12px" }}></i>
            </button>

            {/* Download Specifications Button */}
            <button
              className="button-component"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
              onClick={() => {
                // Handle download specifications
                console.log("Download specifications");
              }}
            >
              <span>Download Specifications</span>
              <i className="fas fa-download" style={{ fontSize: "12px" }}></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

