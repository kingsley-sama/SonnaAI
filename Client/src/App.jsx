import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./app.css"
import Register from './page/login';
import { MeetingRoom } from './page/meeting';
export default function App() {
  return (
    <div className='app'>
      <div className='ellipse' />
      <Router>
        <Routes >
          <Route path={'/register'} element={<Register />}  /> 
          <Route path={'/meeting'} element={<MeetingRoom />}   /> 
          <Route path='/' element={<h1> Home Page</h1>}   />
        </Routes>
      </Router>
    </div>
  );
}
