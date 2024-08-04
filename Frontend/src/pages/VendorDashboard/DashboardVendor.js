
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../assets/icons/profile.svg';
import DashboardIcon from '../../assets/icons/dashboard.svg';
import PurchaseIcon from '../../assets/icons/purchase.svg';
import ReportIcon from '../../assets/icons/report.svg';
import EventImage from '../../assets/booth.jfif';
import bellIcon from '../../assets/icons/bell.svg';
import '../../style/Dashboard.css';

const Dashboard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [userData, setUserData] = useState({});
  const notificationRef = useRef(null);

  const handleClickOutside = (event) => {
    if (notificationRef.current && !notificationRef.current.contains(event.target)) {
      setShowMessage(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
      setUserData(data);
    };
    fetchUserData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="navigation-section">
        <div className="navigation-bar">
          <div className="logo">
            <span>EPAMS</span>
            <Link to="/"> <img src="logo.png" alt="EPAMS Logo" /></Link>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search Events" />
          </div>
          <div className="nav-links">
            <Link to="/"> <span>About us</span></Link>
            <img
              src={bellIcon}
              alt="Notifications"
              className="notification-icon"
              onClick={() => setShowMessage(!showMessage)}
            />
            {showMessage && (
              <div className="mini-message">
                <p>new notifications!</p>
              </div>
            )}
            <Link to="/UpdateProfile"><img src={ProfileIcon} alt="Profile" /> Profile</Link>
          </div>
        </div>
      </div>
      <div className="sidebar-section">
        <div className="profile">
          <div className="profile-icon">
            <img src={ProfileIcon} alt="Profile" />
          </div>
          <div className="profile-name">Hello {userData.fullName}</div>
        </div>
        <div className="sidebar-icons">
          <div className="sidebar-icon">
            <img src={DashboardIcon} alt="Dashboard" />
            <span>Dashboard</span>
          </div>
          <div className="sidebar-icon">
            <Link to="/MyPurchaseVendor"><img src={PurchaseIcon} alt="My Purchase" /></Link>
            <span>My Purchase</span>
          </div>
          <div className="sidebar-icon">
            <Link to="/ReportDashboardVendor"><img src={ReportIcon} alt="Reports/Feedback" /></Link>
            <span>Reports/Feedback</span>
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="new-event-button">
          <button>NEW</button><p>Attend the brand new surprising event of 2016 EC
          </p>        
        </div>
        <div className="event-cards">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="event-card">
              <img src={EventImage} alt="Event" />
              <div className="event-details">
                <p className="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="event-location">Location: Local Air</p>
                <p className="event-price">200 Birr</p>
                <Link to="/MyPurchaseVendor"><button className="buy-ticket-button">Buy Booth</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
