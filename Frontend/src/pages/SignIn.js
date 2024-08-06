import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import signinImage from '../assets/Signup.jpg';
import '../style/Signin.css';


const SignIn = () => {
  const [userType, setUserType] = useState('ATTENDEE');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const res = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role: userType }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setMessage('Login successful');
        setShowMessage(true);
        setTimeout(() => {
          if (userType === 'ATTENDEE') {
            navigate('/Dashboard'); // Adjust the path to your attendee dashboard
          } else if (userType === 'VENDOR') {
            navigate('/DashboardVendor'); // Adjust the path to your vendor dashboard
          }
        }, 1000); // 1-second delay before navigating to the dashboard
      } else {
        setMessage(data.msg);
        setShowMessage(true);
      }
    } catch (err) {
      console.error(err.message);
      setMessage('Server error');
      setShowMessage(true);
    }
  };

  return (
    <div className="signin-container">
      <div className="form-container">
        <div className="header">
          <div className="logo">
            EPAMS
            <Link to="/">
              <img src="logo.svg" alt="EPAMS Logo" />
            </Link>
          </div>
          <div className="nav">
            <a href="#" className="signup-link active">
              <Link to="/signup">Sign up</Link>
            </a>
            <a href="#" className="signin-link">
              Sign in
            </a>
          </div>
        </div>
        <h1>Sign In</h1>
        <div className="user-type">
          <button
            className={userType === 'ATTENDEE' ? 'active' : ''}
            onClick={() => setUserType('ATTENDEE')}
          >
            ATTENDEE
          </button>
          <button
            className={userType === 'VENDOR' ? 'active' : ''}
            onClick={() => setUserType('VENDOR')}
          >
            VENDOR
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              required
            />
          </div>
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
          <button type="submit">Log in</button>
        </form>
        {showMessage && <p className="message">{message}</p>}
      </div>
      <div className="image-container">
        <img src={signinImage} alt="signin" />
      </div>
    </div>
  );
};

export default SignIn;
