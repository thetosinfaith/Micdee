import { IoEye, IoEyeOff } from "react-icons/io5";
import './Signup.css';
import { Link } from "react-router-dom";

const Signup = () => {

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create your own account</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Confirm Password" />
          
          <h4>Account Type</h4>
          <div>
            <input type="radio" id="individual" name="accountType" value="Individual" />
            <label htmlFor="individual">Individual [searching for property]</label>
          </div>
          <div>
            <input type="radio" id="landLord" name="accountType" value="Landlord" />
            <label htmlFor="propertyOwner">Landlord</label>
          </div>
          <div>
            <input type="radio" id="estateAgent" name="accountType" value="Estate Agent" />
            <label htmlFor="estateAgent">Estate Agent</label>
          </div>
          <div>
            <input type="radio" id="propertyDeveloper" name="accountType" value="Property Developer" />
            <label htmlFor="propertyDeveloper">Property Developer</label>
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <div className="sign-in">
        <p>Already have an account? <span className='signup-span'><Link to="/auth/login">Log In</Link></span></p>
        </div>

      </div>
    </div>
  );
} 

export default Signup;
