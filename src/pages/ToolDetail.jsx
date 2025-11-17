import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import "../index.css";

const toolData = {
  "canon-eos-2000d": {
    name: "Canon EOS 2000D",
    imageUrl: "",
    notes:
      "Includes: DSLR camera, 2 lenses (24-70mm, 50mm), tripod, memory cards, battery pack.",
  },
  "godox-ledp260c": {
    name: "Godox LEDP260C",
    imageUrl: "",
    notes:
      "Includes: LED light panel, power adapter, carrying case, diffuser panel.",
  },
  "rode-videomic-rycote": {
    name: "Rode VideoMic Rycote",
    imageUrl: "",
    notes: "Includes: Shotgun microphone, windshield, shock mount, XLR cable.",
  },
  "gopro-hero-11-black-mini": {
    name: "GoPro Hero 11 Black Mini",
    imageUrl: "",
    notes:
      "Includes: Action camera, waterproof housing, mounting accessories, USB-C cable.",
  },
  "joby-gorillapod-500": {
    name: "Joby Gorillapod 500 Action mount",
    imageUrl: "",
    notes: "Includes: Flexible tripod, action camera mount, carrying case.",
  },
  "hdmi-cable-10m": {
    name: "HDMI cable 10m",
    imageUrl: "",
    notes: "High-speed HDMI cable, 10 meters length, supports 4K resolution.",
  },
  "sony-a7-iii": {
    name: "Sony A7 III",
    imageUrl: "",
    notes:
      "Includes: Mirrorless camera body, battery, charger, USB cable, strap.",
  },
  "aputure-300d": {
    name: "Aputure 300D",
    imageUrl: "",
    notes: "Includes: LED light, power supply, remote control, carrying case.",
  },
  "shure-sm7b": {
    name: "Shure SM7B",
    imageUrl: "",
    notes: "Includes: Dynamic microphone, XLR cable, shock mount, pop filter.",
  },
  "dji-mini-3-pro": {
    name: "DJI Mini 3 Pro",
    imageUrl: "",
    notes:
      "Includes: Drone, remote controller, batteries, charger, propellers, carrying case.",
  },
  "manfrotto-tripod": {
    name: "Manfrotto Tripod",
    imageUrl: "",
    notes:
      "Includes: Carbon fiber tripod, ball head, quick release plate, carrying bag.",
  },
  "xlr-cable-5m": {
    name: "XLR Cable 5m",
    imageUrl: "",
    notes: "Professional XLR cable, 5 meters, balanced audio connection.",
  },
  "canon-24-70mm-lens": {
    name: "Canon 24-70mm Lens",
    imageUrl: "",
    notes:
      "Includes: EF 24-70mm f/2.8L lens, lens cap, lens hood, carrying case.",
  },
  "neewer-led-panel": {
    name: "Neewer LED Panel",
    imageUrl: "",
    notes:
      "Includes: LED light panel, dimmer control, power adapter, color filters.",
  },
  "zoom-h6-recorder": {
    name: "Zoom H6 Recorder",
    imageUrl: "",
    notes:
      "Includes: Portable audio recorder, XLR inputs, SD card, USB cable, windscreen.",
  },
  "usb-c-cable-3m": {
    name: "USB-C Cable 3m",
    imageUrl: "",
    notes: "USB-C to USB-C cable, 3 meters, fast charging and data transfer.",
  },
};

export default function ToolDetail() {
  const navigate = useNavigate();
  const { toolId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const totalImages = 5; // Based on the carousel dots in the design

  const tool = toolData[toolId] || {
    name: toolId
      ? toolId
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "Tool",
    imageUrl: "",
    notes: "No additional information available for this tool.",
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <BackgroundBlur />
      <div
        className="tool-detail-body"
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
              onClick={() => navigate("/tools")}
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
            <button
              onClick={() => setIsInfoModalOpen(true)}
              aria-label="Info"
              style={{
                width: "42.657px",
                height: "42.657px",
                background: "transparent",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "white",
                fontSize: "20px",
              }}
            >
              <i className="fas fa-info-circle"></i>
            </button>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Product Display Card */}
          <div className="tool-product-card">
            <div className="tool-product-content">
              <div className="tool-image-container">
                <div
                  className="tool-image-placeholder"
                  style={{
                    width: "175px",
                    height: "162px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fas fa-image"
                    style={{
                      fontSize: "48px",
                      color: "rgba(255, 255, 255, 0.3)",
                    }}
                  ></i>
                </div>
              </div>
              <p className="tool-product-name">{tool.name}</p>

              {/* Image Carousel Navigation */}
              <div className="tool-carousel-nav">
                <button
                  className="tool-carousel-arrow"
                  onClick={handlePreviousImage}
                  aria-label="Previous image"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="tool-carousel-dots">
                  {[...Array(totalImages)].map((_, index) => (
                    <div
                      key={index}
                      className={`tool-carousel-dot ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                    />
                  ))}
                </div>
                <button
                  className="tool-carousel-arrow"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Notes Card */}
          <div className="tool-notes-card">
            <div className="tool-notes-content">
              <p className="tool-notes-label">Additional Notes</p>
              <p className="tool-notes-text">{tool.notes}</p>
            </div>
          </div>

          {/* Book Button */}
          <button
            className="button-component tool-book-button"
            onClick={() => navigate(`/tools/${toolId}/booking-guide`)}
          >
            Book
          </button>
        </div>
      </div>

      {/* Info Modal */}
      <div
        className={`tool-info-modal-overlay ${
          isInfoModalOpen ? "modal-open" : "modal-closed"
        }`}
        onClick={() => setIsInfoModalOpen(false)}
      >
        <div
          className={`tool-info-modal ${
            isInfoModalOpen ? "modal-content-open" : "modal-content-closed"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="tool-info-modal-header">
            <div style={{ width: "42.657px", height: "42.657px" }}></div>
            <h2 className="tool-info-modal-title">{tool.name}</h2>
            <button
              className="tool-info-modal-close"
              onClick={() => setIsInfoModalOpen(false)}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <p className="tool-info-modal-text">
            You can download a PDF document with manual on how to use the Canon
            EOS 2000D Camera.
          </p>
          <p className="tool-info-modal-text">
            You can also download its specifications.
          </p>
          <button className="button-component tool-info-download-button">
            <span>Download Manual</span>
            <i className="fas fa-download" style={{ fontSize: "12px" }}></i>
          </button>
          <button className="button-component tool-info-download-button">
            <span>Download Specifications</span>
            <i className="fas fa-download" style={{ fontSize: "12px" }}></i>
          </button>
        </div>
      </div>

      <style>{`
        .tool-detail-body {
          padding: 0;
        }

        .tool-product-card {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 24px;
          width: 100%;
        }

        .tool-product-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .tool-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tool-product-name {
          font-size: 20px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          width: 175px;
        }

        .tool-carousel-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 24px;
        }

        .tool-carousel-arrow {
          width: 20px;
          height: 20px;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .tool-carousel-dots {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .tool-carousel-dot {
          width: 20px;
          height: 20px;
          border-radius: 100px;
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tool-carousel-dot.active {
          background: transparent;
          border: 1.352px solid rgba(255, 255, 255, 0.1);
        }

        .tool-notes-card {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 24px;
          width: 100%;
        }

        .tool-notes-content {
          display: flex;
          flex-direction: column;
          gap: 3.993px;
        }

        .tool-notes-label {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .tool-notes-text {
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0;
          line-height: normal;
        }

        .tool-book-button {
          margin-top: 29px;
        }

        .tool-info-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(101, 33, 241, 0.03);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 24px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .tool-info-modal-overlay.modal-open {
          opacity: 1;
          pointer-events: all;
        }

        .tool-info-modal-overlay.modal-closed {
          opacity: 0;
          pointer-events: none;
        }

        .tool-info-modal {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 345px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-sizing: border-box;
          transform: scale(0.9) translateY(20px);
          opacity: 0;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
        }

        .tool-info-modal.modal-content-open {
          transform: scale(1) translateY(0);
          opacity: 1;
        }

        .tool-info-modal.modal-content-closed {
          transform: scale(0.9) translateY(20px);
          opacity: 0;
        }

        .tool-info-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .tool-info-modal-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          white-space: nowrap;
        }

        .tool-info-modal-close {
          width: 42.657px;
          height: 42.657px;
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          font-size: 16px;
          transition: background 0.2s ease;
        }

        .tool-info-modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .tool-info-modal-text {
          font-size: 16px;
          font-weight: 400;
          color: white;
          text-align: center;
          margin: 0;
          line-height: normal;
        }

        .tool-info-download-button {
          margin-top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box;
        }
        
        .tool-info-download-button span {
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}
