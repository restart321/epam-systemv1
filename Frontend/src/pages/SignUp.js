import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import signupImage from '../assets/Signup.jpg';
import '../style/SignUp.css';

const SignUp = () => {
  const [activeRole, setActiveRole] = useState('ATTENDEE');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    setActiveRole(role);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, company, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setShowMessage(true);
      return;
    }

    const newUser = {
      fullName,
      email,
      phone,
      company,
      password,
      role: activeRole,
    };

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (res.status === 200) {
        setMessage('User registered successfully');
        setShowMessage(true);
        setTimeout(() => {
          navigate('/signin');
        }, 2000); // 2-second delay before navigating to sign-in
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
    <div className="signup-container">
      <div className="left-container">
        <div className="logo">
          EPAMS
          <Link to="/">
            <img src="logo.svg" alt="EPAMS Logo" />
          </Link>
        </div>

        <div className="signup-nav">
          <a href="#" className="signup-link">
            Sign up
          </a>
          <Link to="/signin">
            <a href="#" className="signin-link active">
              Sign in
            </a>
          </Link>
        </div>

        <div className="signup-content">
          <h1>Create new account</h1>
          <p>Are you</p>
          <div className="role-selection">
            <button
              className={`role-btn ${activeRole === 'ATTENDEE' ? 'active' : ''}`}
              onClick={() => handleRoleClick('ATTENDEE')}
            >
              ATTENDEE
            </button>
            <button
              className={`role-btn ${activeRole === 'VENDOR' ? 'active' : ''}`}
              onClick={() => handleRoleClick('VENDOR')}
            >
              VENDOR
            </button>
          </div>
          <form className="signup-form" onSubmit={onSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={onChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              onChange={onChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={onChange}
              required
            />
            <button type="submit">Create Account</button>
          </form>
          {showMessage && <p className="message">{message}</p>}
        </div>
      </div>
      <div className="right-container">
        {/* <img src={signupImage} alt="signup" /> */}
      </div>
    </div>
  );
};

export default SignUp;
