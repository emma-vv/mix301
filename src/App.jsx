import React from "react";
import { Routes, Route } from "react-router-dom";
import Login1 from "./pages/Login1";
import Login2 from "./pages/Login2";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Rooms from "./pages/Rooms";
import Mix100 from "./pages/Mix100";
import Profile from "./pages/Profile";
import "./index.css";

function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Routes>
        <Route path="/" element={<Login1 />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/mix100" element={<Mix100 />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
