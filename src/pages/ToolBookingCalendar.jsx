import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import BottomNav from "../components/BottomNav";
import "../index.css";

const toolData = {
  "canon-eos-2000d": {
    name: "Canon EOS 2000D",
  },
};

export default function ToolBookingCalendar() {
  const navigate = useNavigate();
  const { toolId } = useParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState(new Set());
  const [startDate, setStartDate] = useState(null);

  const tool = toolData[toolId] || toolData["canon-eos-2000d"];

  // Example booked dates - in real app, this would come from API
  // Using current year dynamically
  const currentYear = new Date().getFullYear();
  const bookedDates = new Set([
    // Single booked days
    `${currentYear}-10-03`,
    `${currentYear}-10-07`,
    `${currentYear}-10-15`,
    `${currentYear}-10-19`,
    `${currentYear}-10-27`,
    // Booked periods
    `${currentYear}-10-08`,
    `${currentYear}-10-09`,
    `${currentYear}-10-10`,
    `${currentYear}-10-11`,
    `${currentYear}-10-12`,
    `${currentYear}-10-20`,
    `${currentYear}-10-21`,
    `${currentYear}-10-22`,
    `${currentYear}-10-23`,
    `${currentYear}-10-24`,
    `${currentYear}-10-25`,
    `${currentYear}-10-26`,
  ]);

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
    return dateKey >= dates[0] && dateKey <= dates[dates.length - 1];
  };

  const handleDateClick = (date) => {
    const dateKey = formatDateKey(date);

    // Don't allow clicking on booked dates
    if (isDateBooked(date)) return;

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
      const firstDate = new Date(Array.from(selectedDates)[0]);
      const secondDate = date;
      
      // Determine start and end dates
      const start = firstDate < secondDate ? firstDate : secondDate;
      const end = firstDate < secondDate ? secondDate : firstDate;
      
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
                    
                    // Determine position in range for styling
                    const dates = Array.from(selectedDates).sort();
                    let rangePosition = "none";
                    if (selectedDates.size > 1) {
                      const dateKey = formatDateKey(day);
                      const sortedDates = dates;
                      const dateIndex = sortedDates.indexOf(dateKey);
                      if (dateIndex !== -1) {
                        if (dateIndex === 0) {
                          rangePosition = "start";
                        } else if (dateIndex === sortedDates.length - 1) {
                          rangePosition = "end";
                        } else {
                          rangePosition = "middle";
                        }
                      } else if (inRange) {
                        // Check if this date is between selected dates
                        const startDate = new Date(sortedDates[0]);
                        const endDate = new Date(sortedDates[sortedDates.length - 1]);
                        if (day >= startDate && day <= endDate) {
                          rangePosition = "middle";
                        }
                      }
                    }

                    // Check if this day is part of a booked range
                    let bookedRangeClass = "";
                    if (isBooked && isCurrentMonthDay) {
                      const dateKey = formatDateKey(day);
                      // Check if previous/next days are also booked
                      const prevDay = new Date(day);
                      prevDay.setDate(day.getDate() - 1);
                      const nextDay = new Date(day);
                      nextDay.setDate(day.getDate() + 1);
                      const prevBooked = bookedDates.has(formatDateKey(prevDay)) && isCurrentMonth(prevDay);
                      const nextBooked = bookedDates.has(formatDateKey(nextDay)) && isCurrentMonth(nextDay);
                      
                      if (prevBooked && nextBooked) {
                        bookedRangeClass = "booked-middle";
                      } else if (prevBooked) {
                        bookedRangeClass = "booked-end";
                      } else if (nextBooked) {
                        bookedRangeClass = "booked-start";
                      } else {
                        bookedRangeClass = "booked-single";
                      }
                    }

                    return (
                      <div key={index} className="calendar-day-wrapper">
                        {isBooked && isCurrentMonthDay && (
                          <div className={`booked-day-overlay ${bookedRangeClass}`}></div>
                        )}
                        {isSelected && selectedDates.size === 1 && (
                          <div className="selected-single-overlay"></div>
                        )}
                        {(isSelected || inRange) && selectedDates.size > 1 && (
                          <div className={`selected-range-day-overlay ${rangePosition}`}></div>
                        )}
                        <button
                          className={`calendar-day ${isBooked ? "booked" : ""} ${
                            isSelected ? "selected" : ""
                          } ${inRange && !isSelected ? "in-range" : ""} ${
                            !isCurrentMonthDay ? "other-month" : ""
                          }`}
                          onClick={() => handleDateClick(day)}
                          disabled={isBooked}
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
          >
            Next
          </button>
        </div>
      </div>
      <BottomNav />
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
          height: 39px;
          z-index: 0;
          pointer-events: none;
          left: 50%;
          transform: translateX(-50%);
        }

        .booked-day-overlay.booked-single {
          width: 39px;
          border-radius: 50%;
        }

        .booked-day-overlay.booked-start {
          width: calc(100% + 10px);
          left: 50%;
          border-radius: 4.5372e7px 0 0 4.5372e7px;
          transform: translateX(calc(-50% - 10px));
        }

        .booked-day-overlay.booked-middle {
          width: calc(100% + 20px);
          left: 50%;
          border-radius: 0;
          transform: translateX(-50%);
        }

        .booked-day-overlay.booked-end {
          width: calc(100% + 10px);
          left: 50%;
          border-radius: 0 4.5372e7px 4.5372e7px 0;
          transform: translateX(calc(-50% + 10px));
        }

        .selected-single-overlay {
          position: absolute;
          background: rgba(163, 200, 97, 0.3);
          border: 1.352px solid #a3c861;
          width: 39px;
          height: 39px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .selected-range-day-overlay {
          position: absolute;
          background: rgba(163, 200, 97, 0.3);
          border: 1.352px solid #a3c861;
          height: 39px;
          z-index: 0;
          pointer-events: none;
          left: 50%;
          top: 50%;
          transform: translateY(-50%);
        }

        .selected-range-day-overlay.range-start {
          width: calc(100% + 10px);
          border-radius: 4.5372e7px 0 0 4.5372e7px;
          transform: translate(calc(-50% - 10px), -50%);
        }

        .selected-range-day-overlay.range-middle {
          width: calc(100% + 20px);
          border-radius: 0;
          transform: translate(-50%, -50%);
        }

        .selected-range-day-overlay.range-end {
          width: calc(100% + 10px);
          border-radius: 0 4.5372e7px 4.5372e7px 0;
          transform: translate(calc(-50% + 10px), -50%);
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
          cursor: not-allowed;
          pointer-events: none;
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
          justify-content: space-between;
          align-items: center;
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

