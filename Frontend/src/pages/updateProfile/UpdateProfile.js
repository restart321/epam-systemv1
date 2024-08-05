import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './UpdateProfile.css';

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
  });
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });
      const data = await res.json();
      setFormData({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.company || '',
        password: '',
        confirmPassword: '',
      });
      setRole(data.role); // Assuming the role is part of the user data
    };
    fetchUserData();
  }, []);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, company, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    const updatedUser = { fullName, email, phone, company, password };
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:5000/api/auth/Profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(updatedUser),
      });

      const data = await res.json();
      console.log(data); // Debugging statement

      if (res.status === 200) {
        setMessage('Profile updated successfully');
        setTimeout(() => {
          if (role === 'ATTENDEE') {
            navigate('/Dashboard'); // Adjust the path to your attendee dashboard
          } else if (role === 'VENDOR') {
            navigate('/DashboardVendor'); // Adjust the path to your vendor dashboard
          }
        }, 2000); // 2-second delay before navigating to the dashboard
      } else {
        setMessage(data.msg);
      }
    } catch (err) {
      console.error(err.message);
      setMessage('Front error');
    }
  };

  return (
    <div className="update-profile-container">
      <Link to={role === 'ATTENDEE' ? '/Dashboard' : '/DashboardVendor'}>
        <img src="logo.png" alt="EPAMS Logo" />
      </Link>
      <h1>Update Profile</h1>
      <form onSubmit={onSubmit}>
        <div className="updateinput-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={onChange}
            required
          />
        </div>
        <div className="updateinput-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="updateinput-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={onChange}
            required
          />
        </div>
        <div className="updateinput-group">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={onChange}
          />
        </div>
        <div className="updateinput-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={onChange}
          />
        </div>
        <div className="updateinput-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={onChange}
          />
        </div>
        <button className="updatebutton" type="submit">Update Profile</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default UpdateProfile;
