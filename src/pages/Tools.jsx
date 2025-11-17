import React from "react";
import { Link } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import BottomNav from "../components/BottomNav";
import "../index.css";

const equipment = [
  {
    id: 1,
    name: "Canon EOS 2000D",
    slug: "canon-eos-2000d",
    imageSize: { width: "93px", height: "86px" },
  },
  {
    id: 2,
    name: "Godox LEDP260C",
    slug: "godox-ledp260c",
    imageSize: { width: "78px", height: "78px" },
  },
  {
    id: 3,
    name: "Rode VideoMic Rycote",
    slug: "rode-videomic-rycote",
    imageSize: { width: "100px", height: "100px" },
  },
  {
    id: 4,
    name: "GoPro Hero 11 Black Mini",
    slug: "gopro-hero-11-black-mini",
    imageSize: { width: "92px", height: "100px" },
  },
  {
    id: 5,
    name: "Joby Gorillapod 500 Action mount",
    slug: "joby-gorillapod-500",
    imageSize: { width: "100px", height: "100px" },
  },
  {
    id: 6,
    name: "HDMI cable 10m",
    slug: "hdmi-cable-10m",
    imageSize: { width: "100px", height: "100px" },
  },
];

export default function Tools() {
  return (
    <>
      <BackgroundBlur />
      <div className="tools-body" style={{ position: "relative", zIndex: 1 }}>
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
            <div style={{ width: "42.657px", height: "42.657px" }}></div>
            <h1 className="header-title">Tool Catalogue</h1>
            <div style={{ width: "42.66px", height: "42.66px" }}></div>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Search and Filter */}
          <div className="tools-search-filter">
            <div className="tools-search-bar">
              <i
                className="fas fa-search"
                style={{
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 0.6)",
                  flexShrink: 0,
                }}
              ></i>
              <input
                type="text"
                placeholder="Search for equipment..."
                className="tools-search-input"
              />
            </div>
            <button className="tools-filter-button" aria-label="Filter">
              <i
                className="fas fa-filter"
                style={{ fontSize: "18px", color: "white" }}
              ></i>
            </button>
          </div>

          {/* Popular Equipment Section */}
          <div className="tools-popular-section">
            <h2 className="tools-popular-heading">Popular equipment</h2>
            <div className="tools-equipment-container">
              {/* Row 1 */}
              <div className="tools-equipment-row">
                <Link
                  to={`/tools/${equipment[0].slug}`}
                  className="tools-equipment-card"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="tools-equipment-image tools-equipment-image-standard"
                    style={{
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
                        fontSize: "24px",
                        color: "rgba(255, 255, 255, 0.3)",
                      }}
                    ></i>
                  </div>
                  <p className="tools-equipment-name">{equipment[0].name}</p>
                </Link>
                <div className="tools-equipment-card">
                  <div
                    className="tools-equipment-image tools-equipment-image-standard"
                    style={{
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
                        fontSize: "24px",
                        color: "rgba(255, 255, 255, 0.3)",
                      }}
                    ></i>
                  </div>
                  <p className="tools-equipment-name">{equipment[1].name}</p>
                </div>
              </div>
              {/* Row 2 */}
              <div className="tools-equipment-row">
                <div className="tools-equipment-card">
                  <div
                    className="tools-equipment-image tools-equipment-image-standard"
                    style={{
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
                        fontSize: "24px",
                        color: "rgba(255, 255, 255, 0.3)",
                      }}
                    ></i>
                  </div>
                  <p className="tools-equipment-name">{equipment[2].name}</p>
                </div>
                <div className="tools-equipment-card">
                  <div
                    className="tools-equipment-image tools-equipment-image-standard"
                    style={{
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
                        fontSize: "24px",
                        color: "rgba(255, 255, 255, 0.3)",
                      }}
                    ></i>
                  </div>
                  <p className="tools-equipment-name">{equipment[3].name}</p>
                </div>
              </div>
              {/* Row 3 - different gap - copied from row 2 */}
              <div className="tools-equipment-row tools-equipment-row-3">
                <div className="tools-equipment-card">
                  <div
                    className="tools-equipment-image tools-equipment-image-standard"
                    style={{
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
                        fontSize: "24px",
                        color: "rgba(255, 255, 255, 0.3)",
                      }}
                    ></i>
                  </div>
                  <p className="tools-equipment-name">{equipment[4].name}</p>
                </div>
                <div className="tools-equipment-card">
                  <div
                    className="tools-equipment-image tools-equipment-image-standard"
                    style={{
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
                        fontSize: "24px",
                        color: "rgba(255, 255, 255, 0.3)",
                      }}
                    ></i>
                  </div>
                  <p className="tools-equipment-name">{equipment[5].name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
      <style>{`
        .tools-body {
          padding: 0;
        }

        .tools-search-filter {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          width: 100%;
        }

        .tools-search-bar {
          flex: 1;
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 10px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          height: 43px;
        }

        .tools-search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 100%;
        }

        .tools-search-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .tools-filter-button {
          width: 42.657px;
          height: 42.657px;
          background: rgba(255, 255, 255, 0.05);
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        .tools-filter-button:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .tools-popular-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .tools-popular-heading {
          font-size: 16px;
          font-weight: 600;
          color: white;
          text-align: left;
          white-space: nowrap;
        }

        .tools-equipment-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .tools-equipment-row {
          display: flex;
          gap: 24px;
          width: 100%;
        }

        .tools-equipment-row-3 {
          gap: 34px;
        }

        .tools-equipment-card {
          flex: 0 0 calc((100% - 24px) / 2);
          background: rgba(255, 255, 255, 0.05);
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 12px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 165.98px;
          min-height: 165.98px;
          max-height: 165.98px;
          box-sizing: border-box;
          width: calc((100% - 24px) / 2);
          max-width: calc((100% - 24px) / 2);
        }
        
        .tools-equipment-row-3 .tools-equipment-card {
          flex: 0 0 calc((100% - 24px) / 2);
          width: calc((100% - 24px) / 2);
          max-width: calc((100% - 24px) / 2);
        }
        
        .tools-equipment-row-3 .tools-equipment-card:last-child {
          margin-left: -10px;
        }

        .tools-equipment-image {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .tools-equipment-image-standard {
          width: 100px;
          height: 100px;
          min-width: 100px;
          min-height: 100px;
        }
        
        .tools-equipment-card img,
        .tools-equipment-image > * {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .tools-equipment-name {
          font-size: 12px;
          font-weight: 400;
          color: white;
          text-align: center;
          margin: 0;
          line-height: normal;
        }
      `}</style>
    </>
  );
}
