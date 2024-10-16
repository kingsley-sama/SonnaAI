import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./app.css"
import Register from './page/login';
import { MeetingRoom } from './page/meeting';
import { BottomNavigation } from '@mui/material';
import Footer from './components/bottomnavbar';
import Services from './components/services';
import ProductivityAppLanding from "./components/video";
import ClientPage from "./components/landingpage";
import MenuBar from "./components/menu";
export default function App() {
  return (
    <div className='app'>
        < MenuBar ></MenuBar>
      <div className='ellipse' />
      <Router>
        <Routes >
          <Route path={'/register'} element={<Register />}  /> 
          <Route path={'/meeting'} element={<MeetingRoom />}   /> 
          <Route path='/' element={<><ProductivityAppLanding /><ClientPage/> <Services/> </>}   />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}
