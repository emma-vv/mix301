import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import { toastManager } from "../utils/toast";
import { getAppDate, isAppDate } from "../utils/appDate";
import "../index.css";

const toolData = {
  "canon-eos-2000d": {
    name: "Canon EOS 2000D",
  },
};

export default function ToolBookingCalendar() {
  const navigate = useNavigate();
  const { toolId } = useParams();
  const location = useLocation();
  
  // Check if this is an edit booking (from edit button) or a new booking
  const isEditBooking = new URLSearchParams(location.search).get('edit') === 'true';
  
  // Get booking data from location state (if coming from BookingDetail)
  const bookingFromState = location.state;
  
  // Get storage key for this tool (memoized to avoid unnecessary re-renders)
  const storageKey = useMemo(() => `booking_${toolId}_selectedDates`, [toolId]);
  const currentDateKey = useMemo(() => `booking_${toolId}_currentDate`, [toolId]);
  
  // Default to October 14th (app base date)
  const getDefaultDate = () => {
    return getAppDate();
  };
  
  const [currentDate, setCurrentDate] = useState(() => {
    // For new bookings, always default to October (app base date)
    if (!isEditBooking) {
      return getDefaultDate();
    }
    // For edit bookings, try to load saved date, otherwise default to October
    const key = `booking_${toolId}_currentDate`;
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const date = new Date(saved);
        if (!isNaN(date.getTime())) {
          return date;
        }
      }
    } catch (e) {
      console.error("Error loading saved current date:", e);
    }
    return getDefaultDate();
  });
  
  const [selectedDates, setSelectedDates] = useState(() => {
    const key = `booking_${toolId}_selectedDates`;
    
    // If this is a new booking (not edit), clear saved dates
    if (!isEditBooking) {
      localStorage.removeItem(key);
      return new Set();
    }
    
    // If editing, load saved dates
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const dateArray = JSON.parse(saved);
        return new Set(dateArray);
      }
    } catch (e) {
      console.error("Error loading saved dates:", e);
    }
    return new Set();
  });
  
  // Clear dates on mount if this is a new booking
  useEffect(() => {
    if (!isEditBooking) {
      setSelectedDates(new Set());
      localStorage.removeItem(storageKey);
    }
  }, [isEditBooking, storageKey]);
  
  const [startDate, setStartDate] = useState(null);
  
  // Save selected dates to localStorage whenever they change
  useEffect(() => {
    if (selectedDates.size > 0) {
      const dateArray = Array.from(selectedDates);
      localStorage.setItem(storageKey, JSON.stringify(dateArray));
    } else {
      localStorage.removeItem(storageKey);
    }
  }, [selectedDates, storageKey]);
  
  // Save current date to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(currentDateKey, currentDate.toISOString());
  }, [currentDate, currentDateKey]);

  const tool = toolData[toolId] || toolData["canon-eos-2000d"];

  // Example booked dates - in real app, this would come from API
  // Using current year dynamically
  const currentYear = new Date().getFullYear();
  const bookedDates = useMemo(() => {
    const dates = new Set();
    
    // Helper to add date ranges
    const addDateRange = (year, month, startDay, endDay) => {
      for (let day = startDay; day <= endDay; day++) {
        dates.add(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
      }
    };
    
    // September booked dates
    addDateRange(currentYear, 9, 5, 7); // Sep 5-7
    addDateRange(currentYear, 9, 12, 14); // Sep 12-14
    dates.add(`${currentYear}-09-20`); // Sep 20
    dates.add(`${currentYear}-09-25`); // Sep 25
    addDateRange(currentYear, 9, 28, 30); // Sep 28-30
    
    // October booked dates (more extensive)
    dates.add(`${currentYear}-10-03`); // Oct 3
    dates.add(`${currentYear}-10-07`); // Oct 7
    addDateRange(currentYear, 10, 8, 12); // Oct 8-12
    dates.add(`${currentYear}-10-15`); // Oct 15
    dates.add(`${currentYear}-10-19`); // Oct 19
    addDateRange(currentYear, 10, 20, 26); // Oct 20-26
    dates.add(`${currentYear}-10-27`); // Oct 27
    dates.add(`${currentYear}-10-31`); // Oct 31
    
    // November booked dates
    addDateRange(currentYear, 11, 1, 3); // Nov 1-3
    dates.add(`${currentYear}-11-08`); // Nov 8
    addDateRange(currentYear, 11, 11, 13); // Nov 11-13
    dates.add(`${currentYear}-11-18`); // Nov 18
    addDateRange(currentYear, 11, 22, 24); // Nov 22-24
    dates.add(`${currentYear}-11-28`); // Nov 28
    dates.add(`${currentYear}-11-30`); // Nov 30
    
    // December booked dates
    addDateRange(currentYear, 12, 1, 5); // Dec 1-5
    dates.add(`${currentYear}-12-10`); // Dec 10
    addDateRange(currentYear, 12, 15, 17); // Dec 15-17
    dates.add(`${currentYear}-12-20`); // Dec 20
    addDateRange(currentYear, 12, 23, 25); // Dec 23-25
    dates.add(`${currentYear}-12-28`); // Dec 28
    dates.add(`${currentYear}-12-31`); // Dec 31
    
    return dates;
  }, [currentYear]);

  const formatDateKey = (date) => {
    return date.toISOString().split("T")[0];
  };

  const isDateBooked = (date) => {
    return bookedDates.has(formatDateKey(date));
  };

  const isDateSelected = (date) => {
    return selectedDates.has(formatDateKey(date));
  };

  const isDateInRange = (date) => {
    if (selectedDates.size < 2) return false;
    const dates = Array.from(selectedDates).sort();
    const dateKey = formatDateKey(date);
    const startKey = dates[0];
    const endKey = dates[dates.length - 1];
    return dateKey > startKey && dateKey < endKey;
  };

  const handleDateClick = (date) => {
    const dateKey = formatDateKey(date);

    // Don't allow clicking on booked dates - show notification
    if (isDateBooked(date)) {
      const dateStr = date.toLocaleDateString("en-US", { 
        weekday: "short", 
        month: "short", 
        day: "numeric" 
      });
      toastManager.error(`Cannot select ${dateStr} - this date is already booked`);
      return;
    }

    // If clicking on a selected date, deselect it and all dates in range
    if (isDateSelected(date)) {
      const newSelected = new Set(selectedDates);
      
      // If we have a range, remove all dates in the range
      if (selectedDates.size > 1) {
        const dates = Array.from(selectedDates).sort();
        const start = new Date(dates[0]);
        const end = new Date(dates[dates.length - 1]);
        
        // Remove all dates from start to end
        const current = new Date(start);
        while (current <= end) {
          newSelected.delete(formatDateKey(new Date(current)));
          current.setDate(current.getDate() + 1);
        }
      } else {
        // Single date, just remove it
        newSelected.delete(dateKey);
      }
      
      setSelectedDates(newSelected);
      setStartDate(null);
      return;
    }

    // If no date selected yet, select this one
    if (selectedDates.size === 0) {
      setSelectedDates(new Set([dateKey]));
      setStartDate(date);
      return;
    }

    // If we have one date selected, create a range
    if (selectedDates.size === 1) {
      const firstDateKey = Array.from(selectedDates)[0];
      const firstDate = new Date(firstDateKey);
      const secondDate = date;
      
      // Determine start and end dates
      const start = firstDate < secondDate ? new Date(firstDate) : new Date(secondDate);
      const end = firstDate < secondDate ? new Date(secondDate) : new Date(firstDate);
      
      // Add all dates in range (excluding booked dates)
      const newSelected = new Set();
      const current = new Date(start);
      while (current <= end) {
        const currentKey = formatDateKey(new Date(current));
        if (!isDateBooked(new Date(current))) {
          newSelected.add(currentKey);
        }
        current.setDate(current.getDate() + 1);
      }
      
      setSelectedDates(newSelected);
      setStartDate(null);
      return;
    }

    // If we have a range selected, start a new selection
    setSelectedDates(new Set([dateKey]));
    setStartDate(date);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    // Adjust Monday as first day (0 = Monday, 6 = Sunday)
    const adjustedStartingDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;
    
    const days = [];
    
    // Add previous month's days
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = adjustedStartingDay - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthDays - i));
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    // Add next month's days to fill the grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    
    return days;
  };

  const changeMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getMonthName = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const days = getDaysInMonth(currentDate);
  const isCurrentMonth = (date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const hasSelection = selectedDates.size > 0;

  return (
    <>
      <BackgroundBlur />
      <div
        className="tool-booking-calendar-body"
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
          }}
        >
          {/* Header */}
          <div className="header">
            <button
              className="back-button back-button-visible"
              onClick={() => {
                // If we came from BookingDetail (has booking state), go back to booking detail
                if (bookingFromState && bookingFromState.id) {
                  navigate(`/bookings/${bookingFromState.id}`, {
                    state: bookingFromState
                  });
                } else {
                  // Otherwise, go back to tool detail
                  navigate(`/tools/${toolId}`);
                }
              }}
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
            <h1 className="header-title">{tool.name}</h1>
            <div style={{ width: "42.66px", height: "42.66px" }}></div>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Calendar */}
          <div className="booking-calendar-container">
            <div className="booking-calendar">
              {/* Month Navigation */}
              <div className="calendar-month-nav">
                <button
                  className="calendar-nav-arrow"
                  onClick={() => changeMonth(-1)}
                  aria-label="Previous month"
                >
                  <i className="fas fa-chevron-left" style={{ fontSize: "8px" }}></i>
                </button>
                <span className="calendar-month-name">
                  {getMonthName(currentDate)}
                </span>
                <button
                  className="calendar-nav-arrow"
                  onClick={() => changeMonth(1)}
                  aria-label="Next month"
                >
                  <i className="fas fa-chevron-right" style={{ fontSize: "8px" }}></i>
                </button>
              </div>

              {/* Weekdays */}
              <div className="calendar-weekdays">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>

              {/* Divider */}
              <div className="calendar-divider"></div>

              {/* Calendar Grid */}
              <div className="calendar-grid-wrapper">
                <div className="calendar-grid">
                  {days.map((day, index) => {
                    const isBooked = isDateBooked(day);
                    const isSelected = isDateSelected(day);
                    const inRange = isDateInRange(day);
                    const isCurrentMonthDay = isCurrentMonth(day);
                    const isToday = isAppDate(day) && isCurrentMonthDay && !isBooked && !isSelected;

                    return (
                      <div key={index} className="calendar-day-wrapper">
                        {isBooked && isCurrentMonthDay && (
                          <div className="booked-day-overlay"></div>
                        )}
                        {isSelected && (
                          <div className="selected-single-overlay"></div>
                        )}
                        {isToday && (
                          <div className="today-overlay"></div>
                        )}
                        <button
                          className={`calendar-day ${isBooked ? "booked" : ""} ${
                            isSelected ? "selected" : ""
                          } ${inRange && !isSelected ? "in-range" : ""} ${
                            !isCurrentMonthDay ? "other-month" : ""
                          }`}
                          onClick={() => handleDateClick(day)}
                        >
                          {day.getDate()}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="calendar-legend">
              <div className="calendar-divider"></div>
              <div className="legend-items">
                <div className="legend-item">
                  <div className="legend-dot legend-dot-unavailable"></div>
                  <span>Unavailable</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot legend-dot-selected"></div>
                  <span>Selected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Select Date Text */}
          <p className="booking-select-text">Select Your Booking Date(s)</p>

          {/* Next Button */}
          <button
            className={`button-component ${!hasSelection ? "non-active" : ""}`}
            disabled={!hasSelection}
            onClick={() => {
              if (hasSelection) {
                // Validate that selected dates don't conflict with booked dates
                const selectedArray = Array.from(selectedDates);
                const hasConflict = selectedArray.some(dateKey => {
                  const date = new Date(dateKey);
                  return isDateBooked(date);
                });
                
                if (hasConflict) {
                  toastManager.error("Selected dates include booked dates. Please choose different dates.");
                  return;
                }
                
                navigate(`/tools/${toolId}/booking-pickup`);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
      <style>{`
        .tool-booking-calendar-body {
          padding: 0;
        }

        .booking-calendar-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .booking-calendar {
          background: rgba(255, 255, 255, 0.05);
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .calendar-month-nav {
          background: rgba(255, 255, 255, 0.05);
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9.34px;
        }

        .calendar-nav-arrow {
          width: 8px;
          height: 16px;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .calendar-month-name {
          font-size: 16px;
          font-weight: 600;
          color: white;
          white-space: nowrap;
        }

        .calendar-weekdays {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        .calendar-weekdays span {
          flex: 1;
          text-align: center;
        }

        .calendar-divider {
          height: 0.993px;
          background: rgba(255, 255, 255, 0.15);
          width: 100%;
        }

        .calendar-grid-wrapper {
          position: relative;
          width: 100%;
          box-sizing: border-box;
          max-width: 100%;
          overflow: hidden;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 20px;
          position: relative;
          width: 100%;
          max-width: 100%;
        }

        .calendar-day-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 32px;
        }

        .booked-day-overlay {
          position: absolute;
          background: rgba(254, 66, 66, 0.4);
          border: 1.35px solid rgba(254, 66, 66, 0.05);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .selected-single-overlay {
          position: absolute;
          background: rgba(163, 200, 97, 0.3);
          border: 1.352px solid #a3c861;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .today-overlay {
          position: absolute;
          background: rgba(163, 200, 97, 0.3);
          border: 1.352px solid #a3c861;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }


        .calendar-day {
          background: transparent;
          border: none;
          color: white;
          font-size: 16px;
          font-weight: 400;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          min-width: 32px;
          min-height: 32px;
          max-width: 32px;
          max-height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
          position: relative;
          z-index: 2;
          margin: 0 auto;
          flex-shrink: 0;
        }

        .calendar-day.other-month {
          color: rgba(255, 255, 255, 0.4);
        }

        .calendar-day.booked {
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
        }

        .calendar-day.selected {
          background: transparent;
          border: none;
          color: white;
          border-radius: 50%;
        }

        /* When in a range, remove all styling from the day button itself */
        .calendar-day.selected.range-start,
        .calendar-day.selected.range-end,
        .calendar-day.selected.range-middle {
          background: transparent;
          border: none;
          border-radius: 50%;
        }
        
        /* Single selected date (not in range) should show as circle */
        .calendar-day.selected:not(.range-start):not(.range-end):not(.range-middle) {
          background: rgba(163, 200, 97, 0.3);
          border: 1.352px solid #a3c861;
        }

        .calendar-day.in-range {
          background: transparent;
          border: none;
          color: white;
        }

        .calendar-day:not(.booked):not(.selected):not(.in-range):hover {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .calendar-legend {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .legend-items {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 7.986px;
        }

        .legend-dot {
          width: 11.98px;
          height: 11.98px;
          border-radius: 50%;
        }

        .legend-dot-unavailable {
          background: #fe4242;
        }

        .legend-dot-selected {
          border: 1.352px solid #a3c861;
          background: transparent;
        }

        .legend-item span {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
        }

        .booking-select-text {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          margin: 0;
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}

