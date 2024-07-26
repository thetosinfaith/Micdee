import React, { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import './Signup.css';
import Staffs from '../../assets/Kawthar.jpg';
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="image-container">
          <img src={Staffs} alt="Signup" />
        </div>
        <div className="form-container">
          <h2>Create a new account</h2>
          <form onSubmit={handleSubmit}>
            <input className="input-name" type="text" placeholder="Name" required />
            <input className="input-email" type="email" placeholder="Email" required />
            <div className="choose-option">
              <select className="select-account-type" required>
                <option value="">Select Account Type</option>
                <option value="Individual">Individual [searching for property]</option>
                <option value="Landlord">Landlord</option>
                <option value="Estate Agent">Estate Agent</option>
                <option value="Property Developer">Property Developer</option>
              </select>
            </div>
            
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

            <div className="password-container">
              <input
                className="input-confirm-password"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
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
          
            <button type="submit" className="submit-up">Sign Up</button>
          </form>
          <div className="sign-in">
            <p>Already have an account? <span className='signup-span'><Link to="/auth/login">Log In</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
