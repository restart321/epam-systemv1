import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/AttendeDashboard/Dashboard';
import UpdateProfile from './pages/updateProfile/UpdateProfile';
import DashboardVendor from './pages/VendorDashboard/DashboardVendor';
import Dashboardo from './pages/OrganizerDashboard/Dashboard/Dashboardo';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Updateprofile" element={<UpdateProfile />} />
          <Route path="/DashboardVendor" element={<DashboardVendor />} />
          <Route path="/Dashboardo" element={<Dashboardo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
