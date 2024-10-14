import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import googleIcon from '../assets/images/017ba966-637e-4533-b993-19f8fc48010f.png';
import './login.css';

export default function Register() {
  return (
    <>

      <div className='main-container'>
        <div className='form'>
          <div className='image' />
          <AuthForm />
        </div>
      </div>
    </>
  );
}
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
    childNameOrId: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? 'login' : 'signup';
      const response = await axios.post(`https://your-actual-api-endpoint.com/${endpoint}`, {
        ...formData,
        userType
      });
      console.log(`${isLogin ? 'Login' : 'Signup'} successful:`, response.data);
      alert(`${isLogin ? 'Login' : 'Signup'} successful!`);
    } catch (error) {
      console.error(`${isLogin ? 'Login' : 'Signup'} error:`, error);
      alert(`${isLogin ? 'Login' : 'Signup'} failed. Please try again.`);
    }
  };

  return (
    <div className="sf-container">
      <h1 className="sf-title">
        {isLogin ? 'Welcome back' : 'Join us today'} <span role="img" aria-label="waving hand">👋</span>
      </h1>
      <p className="sf-subtitle">
        {isLogin
          ? 'Log in to access your account and continue your learning journey.'
          : 'Create an account to start your learning adventure with us.'}
      </p>
      <button className="sf-google-btn">
        <img src={googleIcon} alt="Google" className="sf-google-icon" />
        {isLogin ? 'Log in' : 'Sign up'} with Google
      </button>
      <form onSubmit={handleSubmit} className="sf-form">
        {!isLogin && (
          <div className="sf-input-group">
            <label htmlFor="name">First & Last Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="i.e. Davon Lean"
              value={formData.name}
              onChange={handleChange}
              required={!isLogin}
            />
          </div>
        )}
        <div className="sf-input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="i.e. davon@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="sf-input-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-wrapper">
            <div style={{ display: "flex", }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>
        {userType === 'parent' && (
          <div className="sf-input-group">
            <label htmlFor="childNameOrId">Child's Name or ID</label>
            <input
              type="text"
              id="childNameOrId"
              name="childNameOrId"
              placeholder="Child's Name or ID"
              value={formData.childNameOrId}
              onChange={handleChange}
              required={userType === 'parent'}
            />
          </div>
        )}
        <div className="sf-radio-group">
          <label>
            <input
              type="radio"
              name="userType"
              value="student"
              checked={userType === 'student'}
              onChange={() => setUserType('student')}
            /> Student
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="parent"
              checked={userType === 'parent'}
              onChange={() => setUserType('parent')}
            /> Parent
          </label>
        </div>

        <div className="sf-checkbox-group">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit" className="sf-submit-btn">
          {isLogin ? 'Log In' : 'Create Account'}
        </button>
      </form>
      <p className="sf-login-link">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <a href="#" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign up' : 'Log in'}
        </a>
      </p>
    </div>
  );
};

