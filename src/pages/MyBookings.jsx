import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import BottomNav from "../components/BottomNav";
import "../index.css";

// Tool data mapping
const toolData = {
  "canon-eos-2000d": {
    name: "Canon EOS 2000D",
    icon: "fa-wrench",
  },
  "godox-ledp260c": {
    name: "Godox LEDP260C",
    icon: "fa-wrench",
  },
  "rode-videomic-rycote": {
    name: "Rode VideoMic Rycote",
    icon: "fa-wrench",
  },
  "gopro-hero-11-black-mini": {
    name: "GoPro Hero 11 Black Mini",
    icon: "fa-wrench",
  },
  "joby-gorillapod-500": {
    name: "Joby Gorillapod 500 Action mount",
    icon: "fa-wrench",
  },
  "hdmi-cable-10m": {
    name: "HDMI cable 10m",
    icon: "fa-wrench",
  },
  "sony-a7-iii": {
    name: "Sony A7 III",
    icon: "fa-wrench",
  },
  "aputure-300d": {
    name: "Aputure 300D",
    icon: "fa-wrench",
  },
  "shure-sm7b": {
    name: "Shure SM7B",
    icon: "fa-wrench",
  },
  "dji-mini-3-pro": {
    name: "DJI Mini 3 Pro",
    icon: "fa-wrench",
  },
  "manfrotto-tripod": {
    name: "Manfrotto Tripod",
    icon: "fa-wrench",
  },
  "xlr-cable-5m": {
    name: "XLR Cable 5m",
    icon: "fa-wrench",
  },
  "canon-24-70mm-lens": {
    name: "Canon 24-70mm Lens",
    icon: "fa-wrench",
  },
  "neewer-led-panel": {
    name: "Neewer LED Panel",
    icon: "fa-wrench",
  },
  "zoom-h6-recorder": {
    name: "Zoom H6 Recorder",
    icon: "fa-wrench",
  },
  "usb-c-cable-3m": {
    name: "USB-C Cable 3m",
    icon: "fa-wrench",
  },
};

// Room data mapping
const roomData = {
  "data-lab-2": {
    name: "Data Lab 2",
    icon: "fa-door-open",
  },
  "seminar-1": {
    name: "Seminar 1",
    icon: "fa-door-open",
  },
  "research-lab": {
    name: "Research Lab",
    icon: "fa-door-open",
  },
};

export default function MyBookings() {
  const navigate = useNavigate();
  const location = useLocation();
  const [toolBookings, setToolBookings] = useState([]);
  const [roomBookings, setRoomBookings] = useState([]);
  const [isPastOpen, setIsPastOpen] = useState(false);
  
  // Example past bookings
  const pastBookings = [
    {
      id: "past-tool-1",
      name: "Canon EOS 2000D",
      icon: "fa-wrench",
      type: "tool",
      dateRange: "Sep 15 - Sep 20",
    },
    {
      id: "past-tool-2",
      name: "Godox LEDP260C",
      icon: "fa-wrench",
      type: "tool",
      dateRange: "Sep 05 - Sep 10",
    },
    {
      id: "past-tool-3",
      name: "Rode VideoMic Rycote",
      icon: "fa-wrench",
      type: "tool",
      dateRange: "Aug 28 - Sep 02",
    },
    {
      id: "past-room-1",
      name: "Seminar 1",
      icon: "fa-door-open",
      type: "room",
      dateRange: "Sep 10 14:00 - 15:30",
    },
    {
      id: "past-room-2",
      name: "Data Lab 2",
      icon: "fa-door-open",
      type: "room",
      dateRange: "Sep 05 10:00 - 11:00",
    },
    {
      id: "past-room-3",
      name: "Research Lab",
      icon: "fa-door-open",
      type: "room",
      dateRange: "Aug 30 16:00 - 17:00",
    },
  ];
  
  // Force background update when content expands/collapses
  useEffect(() => {
    const updateBackground = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          void document.body.offsetHeight;
          window.dispatchEvent(new Event('resize', { bubbles: true }));
          window.dispatchEvent(new Event('scroll', { bubbles: true }));
        });
      });
    };

    updateBackground();
    const timeoutId1 = setTimeout(updateBackground, 50);
    const timeoutId2 = setTimeout(updateBackground, 150);
    const timeoutId3 = setTimeout(updateBackground, 250);
    const timeoutId4 = setTimeout(updateBackground, 400);
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      clearTimeout(timeoutId4);
    };
  }, [isPastOpen]);

  // Load bookings from localStorage
  const loadBookings = useCallback(() => {
    const allBookings = [];
    
    // Check localStorage for all tool bookings
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("booking_") && key.endsWith("_selectedDates")) {
        const toolId = key.replace("booking_", "").replace("_selectedDates", "");
        const saved = localStorage.getItem(key);
        
        if (saved) {
          try {
              const dateArray = JSON.parse(saved).sort();
              if (dateArray.length > 0) {
                // Parse dates properly to avoid timezone issues
                const startDateParts = dateArray[0].split('-');
                const endDateParts = dateArray[dateArray.length - 1].split('-');
                const startDate = new Date(parseInt(startDateParts[0]), parseInt(startDateParts[1]) - 1, parseInt(startDateParts[2]));
                const endDate = new Date(parseInt(endDateParts[0]), parseInt(endDateParts[1]) - 1, parseInt(endDateParts[2]));
              
              const formatDateShort = (date) => {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return `${months[date.getMonth()]} ${date.getDate().toString().padStart(2, '0')}`;
              };
              
              const tool = toolData[toolId] || { name: toolId, icon: "fa-wrench" };
              
              // Get category from tool name (first category from equipment list)
              const getCategory = (toolName) => {
                const categoryMap = {
                  "Canon EOS 2000D": "Video",
                  "Godox LEDP260C": "Light",
                  "Rode VideoMic Rycote": "Sound",
                  "GoPro Hero 11 Black Mini": "Video",
                  "Joby Gorillapod 500 Action mount": "Mount",
                  "HDMI cable 10m": "Cable",
                  "Sony A7 III": "Video",
                  "Aputure 300D": "Light",
                  "Shure SM7B": "Sound",
                  "DJI Mini 3 Pro": "Video",
                  "Manfrotto Tripod": "Mount",
                  "XLR Cable 5m": "Sound",
                  "Canon 24-70mm Lens": "Camera",
                  "Neewer LED Panel": "Light",
                  "Zoom H6 Recorder": "Sound",
                  "USB-C Cable 3m": "IT",
                };
                return categoryMap[toolName] || "Equipment";
              };
              
              // Get additional notes from tool name
              const getAdditionalNotes = (toolName) => {
                const notesMap = {
                  "Canon EOS 2000D": "Includes: DSLR camera, 2 lenses (24-70mm, 50mm), tripod, memory cards, battery pack.",
                  "Godox LEDP260C": "Includes: LED light panel, power adapter, carrying case, diffuser panel.",
                  "Rode VideoMic Rycote": "Includes: Shotgun microphone, windshield, shock mount, XLR cable.",
                  "GoPro Hero 11 Black Mini": "Includes: Action camera, waterproof housing, mounting accessories, USB-C cable.",
                  "Joby Gorillapod 500 Action mount": "Includes: Flexible tripod, action camera mount, carrying case.",
                  "HDMI cable 10m": "High-speed HDMI cable, 10 meters length, supports 4K resolution.",
                  "Sony A7 III": "Includes: Mirrorless camera body, battery, charger, USB cable, strap.",
                  "Aputure 300D": "Includes: LED light, power supply, remote control, carrying case.",
                  "Shure SM7B": "Includes: Dynamic microphone, XLR cable, shock mount, pop filter.",
                  "DJI Mini 3 Pro": "Includes: Drone, remote controller, batteries, charger, propellers, carrying case.",
                  "Manfrotto Tripod": "Includes: Carbon fiber tripod, ball head, quick release plate, carrying bag.",
                  "XLR Cable 5m": "Professional XLR cable, 5 meters, balanced audio connection.",
                  "Canon 24-70mm Lens": "Includes: EF 24-70mm f/2.8L lens, lens cap, lens hood, carrying case.",
                  "Neewer LED Panel": "Includes: LED light panel, dimmer control, power adapter, color filters.",
                  "Zoom H6 Recorder": "Includes: Portable audio recorder, XLR inputs, SD card, USB cable, windscreen.",
                  "USB-C Cable 3m": "USB-C to USB-C cable, 3 meters, fast charging and data transfer.",
                };
                return notesMap[toolName] || "No additional information available.";
              };
              
              allBookings.push({
                id: toolId,
                name: tool.name,
                icon: tool.icon,
                type: "tool",
                dateRange: `${formatDateShort(startDate)} - ${formatDateShort(endDate)}`,
                startDate: startDate,
                category: getCategory(tool.name),
                additionalNotes: getAdditionalNotes(tool.name),
              });
            }
          } catch (e) {
            console.error("Error parsing booking:", e);
          }
        }
      }
    });
    
    // Sort by start date (most recent first)
    allBookings.sort((a, b) => b.startDate - a.startDate);
    
    // Separate tools and rooms
    const tools = allBookings.filter(b => b.type === "tool");
    
    // Check if user has ever made a booking (check for any booking history marker)
    // We'll use a flag in localStorage to track if user has ever created a booking
    const hasEverBooked = localStorage.getItem('user_has_booked') === 'true';
    
    // Check if we have any real bookings (from localStorage) right now
    const hasRealBookings = tools.length > 0;
    
    // Add example room bookings (these would come from localStorage or API in real app)
    // For now, we'll add them as static data
    const exampleRoomBookings = [
      {
        id: "data-lab-2",
        name: "Data Lab 2",
        icon: "fa-door-open",
        type: "room",
        dateRange: "Oct 14 14:00 - 15:30",
      },
      {
        id: "seminar-1",
        name: "Seminar 1",
        icon: "fa-door-open",
        type: "room",
        dateRange: "Oct 15 16:00 - 17:00",
      },
      {
        id: "research-lab",
        name: "Research Lab",
        icon: "fa-door-open",
        type: "room",
        dateRange: "Oct 16 10:00 - 11:00",
      },
    ];
    
    // Only add default tool bookings if:
    // 1. There are NO real bookings right now
    // 2. AND the user has NEVER made a booking before (first time user)
    // This prevents defaults from reappearing after user removes all bookings
    if (!hasRealBookings && !hasEverBooked) {
      // Add two default bookings only for first-time users with no bookings
      tools.push({
        id: "canon-eos-2000d-default",
        name: "Canon EOS 2000D",
        icon: "fa-wrench",
        type: "tool",
        dateRange: "Mon Oct 27 - Wed Oct 29",
        category: "Video",
        additionalNotes: "Includes: DSLR camera, 2 lenses (24-70mm, 50mm), tripod, memory cards, battery pack.",
        startDate: new Date(),
        isDefault: true, // Mark as default so it can't be canceled
      });
      tools.push({
        id: "godox-ledp260c-default",
        name: "Godox LEDP260C",
        icon: "fa-wrench",
        type: "tool",
        dateRange: "Mon Oct 18 - Fri Oct 22",
        category: "Light",
        additionalNotes: "Includes: LED light panel, power adapter, carrying case.",
        startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        isDefault: true, // Mark as default so it can't be canceled
      });
    }
    
    setToolBookings(tools);
    setRoomBookings(exampleRoomBookings);
  }, []);

  // Reload bookings when location changes or when bookingCanceled event is dispatched
  useEffect(() => {
    loadBookings();
  }, [location.pathname, loadBookings]);

  // Listen for booking canceled events
  useEffect(() => {
    const handleBookingCanceled = () => {
      loadBookings();
    };
    
    window.addEventListener('bookingCanceled', handleBookingCanceled);
    return () => {
      window.removeEventListener('bookingCanceled', handleBookingCanceled);
    };
  }, [loadBookings]);

  return (
    <>
      <BackgroundBlur />
      <div
        className="my-bookings-body"
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
            <h1 className="header-title">My Bookings</h1>
            <div style={{ width: "42.66px", height: "42.66px" }}></div>
          </div>

          {/* Divider */}
          <div className="divider" style={{ width: "100%", flexShrink: 0 }}></div>

          {/* Bookings Content */}
          <div className="my-bookings-content" style={{ width: "100%" }}>
            {/* Tools Section */}
            {toolBookings.length === 0 && roomBookings.length === 0 ? (
              <div className="empty-state">
                <i className="fas fa-calendar-times"></i>
                <h3>No active bookings</h3>
                <p>Start by booking a tool or room</p>
              </div>
            ) : (
              <>
            {toolBookings.length > 0 && (
              <>
                <h2 className="my-bookings-section-title">Tools</h2>
                <div className="my-bookings-list">
                  {toolBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="my-bookings-item my-bookings-item-tool"
                      onClick={() => navigate(`/bookings/${booking.id}`, { state: { ...booking, isDefault: booking.isDefault || false } })}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="my-bookings-item-glow my-bookings-item-glow-tool"></div>
                      <div className="my-bookings-item-icon">
                        <i className={`fas ${booking.icon}`} style={{ fontSize: "24px", color: "#ffb89d" }}></i>
                      </div>
                      <div className="my-bookings-item-content">
                        <p className="my-bookings-item-name">{booking.name}</p>
                        <div className="my-bookings-item-date">
                          <i className="fas fa-calendar" style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)" }}></i>
                          <span>{booking.dateRange}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Rooms Section */}
            {roomBookings.length > 0 && (
              <>
                <h2 className="my-bookings-section-title" style={{ marginTop: toolBookings.length > 0 ? "20px" : "0" }}>
                  Rooms
                </h2>
                <div className="my-bookings-list">
                  {roomBookings.map((booking) => (
                    <div key={booking.id} className="my-bookings-item my-bookings-item-room">
                      <div className="my-bookings-item-glow my-bookings-item-glow-room"></div>
                      <div className="my-bookings-item-icon">
                        <i className={`fas ${booking.icon}`} style={{ fontSize: "24px", color: "#c1f15a" }}></i>
                      </div>
                      <div className="my-bookings-item-content">
                        <p className="my-bookings-item-name">{booking.name}</p>
                        <div className="my-bookings-item-date">
                          <i className="fas fa-calendar" style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)" }}></i>
                          <span>{booking.dateRange}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            </>
            )}

            {/* View All Past Activities Button */}
            <button 
              className="info-card-button my-bookings-view-all-button"
              onClick={() => setIsPastOpen(!isPastOpen)}
            >
              <div style={{ width: '20px', height: '20px' }}></div>
              <span className="info-card-text">View all past bookings</span>
              <i 
                className={`fas fa-chevron-${isPastOpen ? 'up' : 'down'}`}
                style={{ color: 'white' }}
              ></i>
            </button>
            
            {/* Past Activities Expandable */}
            <div className={`activities-expandable ${isPastOpen ? 'expanded-open' : 'expanded-closed'}`}>
              {pastBookings.map((booking) => (
                <div key={booking.id} className={`my-bookings-item ${booking.type === 'tool' ? 'my-bookings-item-tool' : 'my-bookings-item-room'} my-bookings-item-past`}>
                  <div className={`my-bookings-item-glow ${booking.type === 'tool' ? 'my-bookings-item-glow-tool' : 'my-bookings-item-glow-room'}`}></div>
                  <div className="my-bookings-item-icon">
                    <i className={`fas ${booking.icon}`} style={{ fontSize: "24px", color: booking.type === 'tool' ? "#ffb89d" : "#c1f15a" }}></i>
                  </div>
                  <div className="my-bookings-item-content">
                    <p className="my-bookings-item-name">{booking.name}</p>
                    <div className="my-bookings-item-date">
                      <i className="fas fa-calendar" style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)" }}></i>
                      <span>{booking.dateRange}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
      <style>{`
        .my-bookings-body {
          padding: 0;
        }

        .my-bookings-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .my-bookings-section-title {
          font-size: 16px;
          font-weight: 600;
          color: white;
          margin: 0;
          text-align: left;
          width: 100%;
        }

        .my-bookings-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .my-bookings-item {
          position: relative;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(242, 186, 179, 0.12));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 12px 16px;
          display: flex;
          gap: 12px;
          align-items: center;
          overflow: hidden;
        }

        .my-bookings-item-glow {
          position: absolute;
          width: 97px;
          height: 97px;
          border-radius: 50%;
          filter: blur(48px);
          opacity: 0.3;
          pointer-events: none;
        }

        .my-bookings-item-glow-tool {
          background: linear-gradient(to bottom, rgba(255, 184, 157, 0.8), rgba(245, 160, 132, 0.8));
          left: -11px;
          top: -14px;
        }

        .my-bookings-item-glow-room {
          background: linear-gradient(to bottom, rgba(193, 241, 90, 0.8), rgba(168, 212, 68, 0.8));
          left: -78.97px;
          top: -28.99px;
        }

        .my-bookings-item-icon {
          width: 39.97px;
          height: 39.97px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .my-bookings-item-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5.979px;
          position: relative;
          z-index: 1;
        }

        .my-bookings-item-name {
          font-size: 16px;
          font-weight: 600;
          color: white;
          margin: 0;
          white-space: nowrap;
        }

        .my-bookings-item-date {
          display: flex;
          align-items: center;
          gap: 5.979px;
          height: 18px;
        }

        .my-bookings-item-date span {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
        }

        .my-bookings-view-all-button {
          margin-top: 20px;
        }

        .activities-expandable {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: max-height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease, margin-top 0.3s ease;
          will-change: max-height, opacity;
          contain: layout;
          box-sizing: border-box;
        }

        .activities-expandable.expanded-open {
          max-height: 5000px;
          opacity: 1;
          margin-top: 20px;
          overflow: visible;
        }

        .activities-expandable.expanded-closed {
          max-height: 0;
          opacity: 0;
          margin-top: 0;
          overflow: hidden;
        }

        .my-bookings-item-past {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.25s ease 0.05s, transform 0.25s ease 0.05s;
          will-change: opacity, transform;
        }

        .activities-expandable.expanded-open .my-bookings-item-past {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}

