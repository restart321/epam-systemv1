// src/components/Dashboard/Dashboard.js
import React from 'react';
import CompanyFacts from '../Widgets/CompanyFacts';
import Statistics from '../Widgets/Statistics';
import AssignedRisks from '../Widgets/Tickets';
import AssignedActionItems from '../Widgets/AssignedActionItems';
import './Dashboardo.css';  // Adjusted the name to Dashboard.css
import '../Navbar/Navbar.css';
import '../Sidebar/Sidebar.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <div className="logoo">
                    <img src="./Logo.png" alt="Logo" />
                    <span>Event Organizer</span>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Quick search" />
                </div>
                <div className="profile">
                    <span className="notification-icon">🔔</span>
                </div>
            </nav>

            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <div className="logo-icon"></div>
                        <span>Event Organizer</span>
                    </div>
                    <div className="dropdown-icon"></div>
                </div>
                <ul className="sidebar-menu">
                    <li className="sidebar-item active"><i className="fas fa-tachometer-alt"></i>Dashboard</li>
                    <li className="sidebar-item"><i className="fas fa-users"></i>Tickets</li>
                    <li className="sidebar-item"><i className="fas fa-project-diagram"></i>Projects</li>
                    <li className="sidebar-item"><i className="fas fa-calendar-alt"></i>Calendar</li>
                    <li className="sidebar-item"><i className="fas fa-clock"></i>Timesheet</li>
                    <li className="sidebar-item"><i className="fas fa-file-alt"></i>Reports</li>
                    <li className="sidebar-item"><i className="fas fa-cogs"></i>Administration</li>
                    <li className="sidebar-item"><i className="fas fa-question-circle"></i>Help</li>
                </ul>
                <div className="sidebar-footer">
                    <div className="version-info">
                        EPAM<br />Version: 1.0.0.11
                    </div>
                </div>
            </aside>

            <main className="main-content">
                <button className="add-event-button">+Add Event</button>
                <div className="dashboard-widgets">
                    <div className="widget"><CompanyFacts /></div>
                    <div className="widget"><Statistics /></div>
                    <div className="widget"><AssignedRisks /></div>
                    <div className="widget"><AssignedActionItems /></div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
