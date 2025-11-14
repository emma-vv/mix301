import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import BottomNav from "../components/BottomNav";
import StarButton from "../components/StarButton";
import "../index.css";

const courses = [
  { id: "MIX100", type: "mix", starred: true },
  { id: "TVP100", type: "tvp", starred: false },
  { id: "TVP102", type: "tvp", starred: false },
  { id: "TVP104", type: "tvp", starred: false },
  { id: "TVP204", type: "tvp", starred: false },
  { id: "TVP260", type: "tvp", starred: false },
  { id: "TVP261", type: "tvp", starred: false },
  { id: "MAN301", type: "man", starred: false },
  { id: "MAN302", type: "man", starred: false },
  { id: "JOU100", type: "jou", starred: false },
  { id: "JOU102", type: "jou", starred: false },
  { id: "JOU103", type: "jou", starred: false },
  { id: "JOU203", type: "jou", starred: false },
  { id: "JOU204", type: "jou", starred: false },
  { id: "JOU205", type: "jou", starred: false },
  { id: "JOU250", type: "jou", starred: false },
  { id: "JOU251", type: "jou", starred: false },
  { id: "UJ0301", type: "ujo", starred: false },
  { id: "UJ0304", type: "ujo", starred: false },
  { id: "UJ0350", type: "ujo", starred: false },
  { id: "MIX114", type: "mix", starred: false },
  { id: "MIX203", type: "mix", starred: false },
  { id: "MIX204", type: "mix", starred: false },
  { id: "MIX250", type: "mix", starred: false },
  { id: "MIX301", type: "mix", starred: false },
  { id: "MIX303", type: "mix", starred: false },
  { id: "MIX333", type: "mix", starred: false },
  { id: "MIX350", type: "mix", starred: false },
];

export default function Courses() {
  const [courseStars, setCourseStars] = useState(
    Object.fromEntries(courses.map((c) => [c.id, c.starred]))
  );

  const handleStarToggle = (courseId, starred) => {
    setCourseStars((prev) => ({ ...prev, [courseId]: starred }));
  };

  return (
    <>
      <BackgroundBlur />
      <div className="courses-body" style={{ position: "relative", zIndex: 1 }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="header">
            <div
              style={{ width: "42.657px", height: "42.657px", opacity: 0 }}
            ></div>
            <h1 className="header-title">Media City Bergen</h1>
            <div className="header-icon"></div>
          </div>

          <div className="divider"></div>

          {courses.map((course) => (
            <Link
              key={course.id}
              to={course.id === "MIX100" ? "/mix100" : "#"}
              className="course-list-item"
            >
              <div className={`course-glow ${course.type}`}></div>
              <p className="course-title">{course.id}</p>
              <div
                className="course-star-wrapper"
                onClick={(e) => e.preventDefault()}
              >
                <StarButton
                  initialStarred={courseStars[course.id]}
                  onToggle={(starred) => handleStarToggle(course.id, starred)}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BottomNav />
      <style>{`
        .courses-body {
          padding: 60px 24px 115px 24px;
        }

        .course-list-item {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 16px 24px;
          margin-bottom: 12px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 51px;
          text-decoration: none;
        }

        .course-list-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .course-title {
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0;
          flex: 1;
        }

        .course-star-wrapper {
          width: 19.987px;
          height: 19.987px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .course-glow {
          position: absolute;
          width: 159.981px;
          height: 159.981px;
          border-radius: 45372000px;
          filter: blur(60px);
          opacity: 0.6;
          pointer-events: none;
          left: 182px;
          top: -57px;
        }

        .course-glow.mix {
          background: linear-gradient(to bottom, rgba(193, 241, 90, 0.8), rgba(168, 212, 68, 0.8));
        }

        .course-glow.tvp {
          background: linear-gradient(to bottom, rgba(255, 184, 157, 0.8), rgba(245, 160, 132, 0.8));
        }

        .course-glow.man {
          background: linear-gradient(to bottom, rgba(107, 219, 219, 0.8), rgba(79, 196, 196, 0.8));
        }

        .course-glow.jou {
          background: linear-gradient(to bottom, rgba(107, 216, 227, 0.8), rgba(85, 195, 207, 0.8));
        }

        .course-glow.ujo {
          background: linear-gradient(to bottom, rgba(107, 216, 227, 0.8), rgba(85, 195, 207, 0.8));
        }
      `}</style>
    </>
  );
}
