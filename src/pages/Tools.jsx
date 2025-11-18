import React, { useState } from "react";
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
    categories: ["Camera", "Video"],
  },
  {
    id: 2,
    name: "Godox LEDP260C",
    slug: "godox-ledp260c",
    imageSize: { width: "78px", height: "78px" },
    categories: ["Light"],
  },
  {
    id: 3,
    name: "Rode VideoMic Rycote",
    slug: "rode-videomic-rycote",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Sound"],
  },
  {
    id: 4,
    name: "GoPro Hero 11 Black Mini",
    slug: "gopro-hero-11-black-mini",
    imageSize: { width: "92px", height: "100px" },
    categories: ["Camera", "Video"],
  },
  {
    id: 5,
    name: "Joby Gorillapod 500 Action mount",
    slug: "joby-gorillapod-500",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Mount"],
  },
  {
    id: 6,
    name: "HDMI cable 10m",
    slug: "hdmi-cable-10m",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Cable"],
  },
  {
    id: 7,
    name: "Sony A7 III",
    slug: "sony-a7-iii",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Camera", "Video"],
  },
  {
    id: 8,
    name: "Aputure 300D",
    slug: "aputure-300d",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Light"],
  },
  {
    id: 9,
    name: "Shure SM7B",
    slug: "shure-sm7b",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Sound"],
  },
  {
    id: 10,
    name: "DJI Mini 3 Pro",
    slug: "dji-mini-3-pro",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Camera", "Video"],
  },
  {
    id: 11,
    name: "Manfrotto Tripod",
    slug: "manfrotto-tripod",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Mount"],
  },
  {
    id: 12,
    name: "XLR Cable 5m",
    slug: "xlr-cable-5m",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Cable", "Sound"],
  },
  {
    id: 13,
    name: "Canon 24-70mm Lens",
    slug: "canon-24-70mm-lens",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Camera"],
  },
  {
    id: 14,
    name: "Neewer LED Panel",
    slug: "neewer-led-panel",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Light"],
  },
  {
    id: 15,
    name: "Zoom H6 Recorder",
    slug: "zoom-h6-recorder",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Sound", "Media"],
  },
  {
    id: 16,
    name: "USB-C Cable 3m",
    slug: "usb-c-cable-3m",
    imageSize: { width: "100px", height: "100px" },
    categories: ["Cable", "IT"],
  },
];

export default function Tools() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const filterCategories = [
    "Camera",
    "Video",
    "Light",
    "Electricity",
    "Sound",
    "Media",
    "Cable",
    "Key",
    "Mount",
    "IT",
  ];

  const handleFilterToggle = (category) => {
    setSelectedFilters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  // Filter equipment based on selected filters and search query
  const filteredEquipment = equipment.filter((item) => {
    // Search filter
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory =
      selectedFilters.size === 0 ||
      item.categories.some((cat) => selectedFilters.has(cat));

    return matchesSearch && matchesCategory;
  });

  // Group filtered equipment into rows of 2
  const equipmentRows = [];
  for (let i = 0; i < filteredEquipment.length; i += 2) {
    equipmentRows.push(filteredEquipment.slice(i, i + 2));
  }

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="tools-filter-button"
              aria-label="Filter"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <i
                className={isFilterOpen ? "fas fa-times" : "fas fa-filter"}
                style={{ fontSize: "18px", color: "white" }}
              ></i>
            </button>
          </div>

          {/* Filter Menu */}
          <div
            className={`tools-filter-menu ${
              isFilterOpen
                ? "tools-filter-menu-open"
                : "tools-filter-menu-closed"
            }`}
          >
            <div className="tools-filter-menu-content">
              {filterCategories.map((category) => (
                <div
                  key={category}
                  className={`pill-filter ${
                    selectedFilters.has(category) ? "active" : ""
                  }`}
                  onClick={() => handleFilterToggle(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Filters Pills */}
          <div
            className={`pill-filters ${
              selectedFilters.size > 0 ? "pill-filters-visible" : ""
            } ${!isFilterOpen ? "pill-filters-no-menu" : ""}`}
          >
            {Array.from(selectedFilters).map((category) => (
              <div
                key={category}
                className="pill-filter active pill-filter-enter"
                onClick={() => handleFilterToggle(category)}
              >
                <i
                  className="fas fa-times"
                  style={{ marginRight: "6px", fontSize: "12px" }}
                ></i>
                {category}
              </div>
            ))}
          </div>

          {/* Popular Equipment Section */}
          <div className="tools-popular-section">
            <h2 className="tools-popular-heading">Popular equipment</h2>
            {filteredEquipment.length === 0 ? (
              <div className="empty-state">
                <i className="fas fa-search"></i>
                <h3>No equipment found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="tools-equipment-container">
                {equipmentRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`tools-equipment-row ${
                      rowIndex === equipmentRows.length - 1 &&
                      equipmentRows.length === 3
                        ? "tools-equipment-row-3"
                        : ""
                    }`}
                  >
                    {row.map((item) => (
                      <Link
                        key={item.id}
                        to={`/tools/${item.slug}`}
                        className="tools-equipment-card tools-equipment-card-enter"
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
                        <p className="tools-equipment-name">{item.name}</p>
                      </Link>
                    ))}
                    {/* Add empty placeholder if row has only one item */}
                    {row.length === 1 && (
                      <div
                        style={{ flex: "0 0 calc((100% - 24px) / 2)" }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            )}
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

        .tools-filter-button i {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(1);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }

        .tools-equipment-card:active {
          transform: scale(0.96);
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
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

        .tools-filter-menu {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 20px;
          margin-top: -16px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tools-filter-menu-closed {
          max-height: 0 !important;
          opacity: 0;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          border-width: 0 !important;
          height: 0 !important;
          min-height: 0 !important;
        }

        .tools-filter-menu-open {
          max-height: 500px;
          opacity: 1;
        }

        .tools-filter-menu-content {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: -24px;
          margin-bottom: 0;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pill-filters-visible {
          max-height: 100px;
          opacity: 1;
          margin-top: -8px;
          margin-bottom: 4px;
        }

        .pill-filters-no-menu.pill-filters-visible {
          margin-top: -20px;
        }

        .pill-filter {
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 14px;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          font-family: "Roboto", sans-serif;
          transform: scale(1);
        }

        .pill-filter:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        .pill-filter.active {
          background: linear-gradient(
            to bottom,
            rgba(193, 241, 90, 0.8),
            rgba(168, 212, 68, 0.8)
          );
          border-color: transparent;
        }

        .pill-filter-enter {
          animation: pillFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes pillFadeIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .tools-equipment-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
        }

        .tools-equipment-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .tools-equipment-card:active {
          transform: translateY(-2px);
        }

        .tools-equipment-card-enter {
          animation: cardFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
