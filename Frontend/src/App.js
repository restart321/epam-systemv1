import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import MyPurchase from './pages/MyPurchase';
import ReportDashboard from './pages/ReportDashboard';
import UpdateProfile from './pages/updateProfile/UpdateProfile';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MyPurchase" element={<MyPurchase/>} />
          <Route path="/ReportDashboard" element={<ReportDashboard/>} />
          <Route path="/Updateprofile" element={<UpdateProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
