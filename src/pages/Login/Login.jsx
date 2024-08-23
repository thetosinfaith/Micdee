import { IoEye, IoEyeOff } from "react-icons/io5";
import './Login.css'; 
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { loginUser } from "../../features/auth/authSlice";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [loginInfo, setLoginInfo] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkIfLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const loginFunc = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginInfo));
  };

  useEffect(() => {
    if (checkIfLoggedIn === true) {
      navigate('/');
    }
  }, [checkIfLoggedIn, navigate]);

  return (
    <div className="login-container"> 
      <div className="login-card"> 
        <h2>Log into your account</h2>
        <form onSubmit={(e) => loginFunc(e)}>
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setLoginInfo((r) => {
              return {
                ...r, 
                email: e.target.value 
              };
            })} 
            required={true} 
          />
          <div className="password-input"> 
            <input 
              placeholder="Password" 
              type={seePassword ? 'text' : 'password'} 
              onChange={(e) => setLoginInfo((r) => {
                return {
                  ...r, 
                  password: e.target.value
                };
              })} 
              required={true} 
            />
            {seePassword ? 
              <IoEyeOff onClick={() => setSeePassword(!seePassword)} /> 
              : 
              <IoEye onClick={() => setSeePassword(!seePassword)} />
            }
          </div>
          <button type="submit">Log In</button>
        </form>
        <div className="sign-in">
          <p>New user? <span className="login-span"><Link to="/auth/signup">Sign Up</Link></span></p> 
        </div>
      </div>
    </div>
  );
}

export default Login;
