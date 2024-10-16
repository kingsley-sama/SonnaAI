import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./app.css";
import Register from './page/login';
import Footer from './components/bottomnavbar';
import Services from './components/services';
import ProductivityAppLanding from "./components/video";
import ClientPage from "./components/landingpage";
import MenuBar, { CenteredLogoNavigationBar, DashboardHeader } from "./components/menu";
import { DashBoard } from './page/dashboard';

export default function App() {
  return (
    <div className='app'>
      <div className='ellipse' />
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="/" element={
            <>
              <CenteredLogoNavigationBar  />
              <ProductivityAppLanding />
              <ClientPage />
              <Services />
              <Footer />
            </>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
