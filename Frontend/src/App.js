import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/AttendeDashboard/Dashboard';
// import MyPurchase from './pages/AttendeDashboard/MyPurchase';
// import ReportDashboard from './pages/AttendeDashboard/ReportDashboard';
import UpdateProfile from './pages/updateProfile/UpdateProfile';
import DashboardVendor from './pages/VendorDashboard/DashboardVendor';
// import MyPurchaseVendor from './pages/VendorDashboard/MyPurchaseVendor';
// import ReportDashboardVendor from './pages/VendorDashboard/ReportDashboardVendor';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* <Route path="/MyPurchase" element={<MyPurchase/>} />
          <Route path="/ReportDashboard" element={<ReportDashboard/>} /> */}
          <Route path="/Updateprofile" element={<UpdateProfile />} />
          <Route path="/DashboardVendor" element={<DashboardVendor />} />
          {/* <Route path="/MyPurchaseVendor" element={<MyPurchaseVendor />} />
          <Route path="/ReportDashboardVendor" element={<ReportDashboardVendor />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
