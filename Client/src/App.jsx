import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/contexts/auth_context';
import { PublicOnlyRoute, PrivateRoute, AdminRoute, ParentRoute, StudentRoute } from '@/contexts/routes';
import { useAuth } from '@/contexts/auth_context';
import "./app.css";

// Import your components
import Register from './page/login';
import Footer from './components/bottomnavbar';
import Services from './components/services';
import ProductivityAppLanding from "./components/video";
import ClientPage from "./components/landingpage";
import MenuBar, { CenteredLogoNavigationBar, DashboardHeader } from "./components/menu";
import { DashBoard } from './page/dashboard';
import TestimonialWithYouTubeVideo from "@/components/about_us";
import ReviewsSlider from "@/components/our_tutors";
import Courses from "@/components/course_content";
import {CoursesPage} from "@/page/courses";

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
      <>
        {isLoggedIn ? <CenteredLogoNavigationBar /> : <MenuBar />}
        <ProductivityAppLanding />
        <ClientPage />
        <Services />
          <TestimonialWithYouTubeVideo />
          <ReviewsSlider />
        <Footer />
      </>
  );
};

export default function App() {

  return (
      <AuthProvider>
        <div className='app'>
          <div className='ellipse' />
          <Router>
            <Routes>
                <Route path="/course_list" element={
                  <PublicOnlyRoute>
                      <MenuBar />
                      <CoursesPage />
                  </PublicOnlyRoute>
                } />
              <Route path="/about_us" element={<TestimonialWithYouTubeVideo />} />
              <Route path="/register" element={
                <PublicOnlyRoute>
                  <Register />
                </PublicOnlyRoute>
              } />
              <Route path="/dashboard/*" element={
                <PrivateRoute>
                  <DashBoard />
                </PrivateRoute>
              } />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </div>
      </AuthProvider>
  );
}