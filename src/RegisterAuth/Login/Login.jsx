import React, { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import './Login.css'; 
import Staffs from '../../assets/Bolatito.jpg'; 
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login successful');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="image-container">
          <img src={Staffs} alt="Login" />
        </div>
        <div className="form-container">
          <h2>Welcome Back!</h2>
          <form onSubmit={handleSubmit}>
            <input className="input-email" type="email" placeholder="Email" required />
            
            <div className="password-container">
              <input
                className="input-password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
                role="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
          
            <button type="submit" className="submit-login">Log In</button>
          </form>
          <div className="sign-up">
            <p>Don't have an account? <span className='login-span'><Link to="/auth/signup">Sign Up</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
