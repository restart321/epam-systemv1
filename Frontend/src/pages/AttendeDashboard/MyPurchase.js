import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../assets/icons/profile.svg';
import DashboardIcon from '../../assets/icons/dashboard.svg';
import PurchaseIcon from '../../assets/icons/purchase.svg';
import ReportIcon from '../../assets/icons/report.svg';
import EventImage from '../../assets//events.jpg';
import bellIcon from '../../assets/icons/bell.svg';
import '../../style/Dashboardcopy.css';

const Dashboard = () => {
  const [showMessage, setShowMessage] = useState(false);
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
            <img src={ProfileIcon} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="sidebar-section">
        <div className="profile">
          <div className="profile-icon">
            <img src={ProfileIcon} alt="Profile" />
          </div>
          <div className="profile-name">Hello Ayi</div>
        </div>
        <div className="sidebar-icons">
          <div className="sidebar-icon">
          <Link to="/Dashboard"> <img src={DashboardIcon} alt="Dashboards" /></Link>
            <span>Dashboard</span>
          </div>
          <div className="sidebar-icon">
              <img src={PurchaseIcon} alt="My Purchase" />
              <span>My Purchase</span>
          </div>
          <div className="sidebar-icon">
          <Link to="/ReportDashboard">   <img src={ReportIcon} alt="Reports/Feedback" /></Link>
            <span>Reports/Feedback</span>
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="new-event-button">
          <button>NEW</button><p>Attend the brand new surprising event of 2016 EC</p>
        </div>
        <div className="event-cardspay">
          {[...Array(1)].map((_, index) => (
            <div key={index} className="event-cardpay">
              <img src={EventImage} alt="Event" />
              <div className="event-detailspay">
                <p className="event-descriptionpay">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="event-locationpay">Location: Local Air</p>
                <p className="event-pricepay">200 Birr</p>
                <button className="buy-ticket-buttonpay">Buy Ticket</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
