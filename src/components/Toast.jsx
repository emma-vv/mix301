import React, { useEffect } from "react";
import "../index.css";

export default function Toast({ message, type = "success", onClose, duration = 3000 }) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        <i className={`fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}`}></i>
        <span>{message}</span>
      </div>
      <button className="toast-close" onClick={onClose} aria-label="Close">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

