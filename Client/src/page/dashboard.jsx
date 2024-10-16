import React, { useState } from "react";
import "./dashboard.css"; // External CSS for styling
import { DashboardHeader } from "../components/menu";
import ResponsiveDashboard from "../components/courses";
import SideMenu from "../components/dashboarb_menu";
import {Routes, Route, Navigate} from "react-router-dom"
import VideoConference from "../components/video_conference";
import Courses from "../components/course_content";
const DashBoard = () => {
  const [route, UseRoute] = useState("dashboard")
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <DashboardHeader />
      </div>
      <div className="dashboard-sidebar">
        <SideMenu />
      </div>
      <div className="dashboard-main">
        <Routes>
          <Route path="/" element={<ResponsiveDashboard />} />
          <Route path="/video_meeting" element={<VideoConference />} />
          <Route path="/Courses" element={<Courses />} />
          </Routes>
      </div>
    </div>
  );
};

export { DashBoard };
