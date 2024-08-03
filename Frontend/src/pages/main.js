import React from "react";
import { useState } from 'react';
import videobg from "../assets/welcomesection.mp4";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaTelegramPlane, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../style/main.css";

const Main = () => {

    const [active, setActive] = useState('home');
  return (
    <div className="main-container">
      <header className="main-header">
        <div className="logo">
          <span>EPAMS</span>
          <img src="logo.png" alt="EPAMS Logo" />
        </div>
        <nav>
        <ul className="nav-links">
        <li className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')}>
          <a href="#">Home</a>
        </li>
        <li className={active === 'services' ? 'active' : ''} onClick={() => setActive('services')}>
          <a href="#services">Services</a>
        </li>
        <li className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')}>
          <a href="#about">AboutUs</a>
        </li>
        <li className={active === 'contactus' ? 'active' : ''} onClick={() => setActive('contactus')}>
          <a href="#contactus">ContactUs</a>
        </li>
       <Link to="/signup"> <li className={active === 'signup' ? 'active' : ''} onClick={() => setActive('signup')}>
          <a href="#">Signup-Login</a>
        </li></Link>
      </ul>
        </nav>
      </header>
      <section className="welcome-section" id="home">
        <div className="video-welcome">
          <video className="welcome-video" src={videobg} autoPlay loop muted />
        </div>
        <h1>Welcome to EPAMS</h1>
        <p className="tagline">What We Serve Is What We Provide</p>
        <div className="buttons">
          <Link to="/signup"><button className="register-button">Register</button></Link>
          <a href="#services"> <button className="events-button">Events</button></a>
        </div>
      </section>
      <section className="services-section" id="services">
        {/* <h2>Services</h2> */}
        <div className="services-container">
          <div className="service-card">
            <img src="Service1.jpg" alt="Service 1" />
            <button className="see-more-btn">See More</button>
            <p>Corporate events</p>
          </div>
          <div className="service-card">
            <img src="Service2.jpg" alt="Service 2" />
            <button className="see-more-btn">See More</button>
            <p>Corporate events</p>
          </div>
          <div className="service-card">
            <img src="Service3.jpg" alt="Service 3" />
            <button className="see-more-btn">See More</button>
            <p>Corporate events</p>
          </div>
          <div className="service-card">
            <img src="Service4.jpg" alt="Service 3" />
            <button className="see-more-btn">See More</button>
            <p>Corporate events</p>
          </div>
        </div>
      </section>
      <section className="about-section" id="about">
        <h1>About Us</h1>
        <div className="about-content">
          <p>
            Welcome to the Event and Promotion Affairs Management System
            (EPAMS), a cutting-edge platform developed to streamline event
            planning and management. Our system is designed to enhance
            efficiency, reduce costs, and provide superior management techniques
            for event organizers in Ethiopia. At EPAMS, we believe in leveraging
            technology to make event coordination seamless and user-friendly.
            Our platform offers comprehensive features such as event creation,
            registration, ticketing, and digital payments, all accessible online
            to ensure 24-hour availability. We are committed to eliminating
            paperwork, optimizing time, and facilitating high-quality event
            services for our clients. EPAMS not only simplifies the logistical
            aspects of event management but also enhances the overall experience
            for attendees. Our user-friendly interface ensures that event
            organizers can easily manage every detail, from initial planning to
            post-event analysis. We support a wide range of events, from small
            gatherings to large-scale conferences, ensuring that every event
            runs smoothly and successfully. 
          </p>
          <div className="about-logo">
            <img src="logo.png" alt="EPAMS Logo" />
          </div>
        </div>
      </section>
      <footer className="main-footer" id="contactus">
        <div className="footer">
          <div className="footer-content">
          <a href="#home">  <img
              src={`${process.env.PUBLIC_URL}/Logo.png`}
              alt="EPAMS Logo"
              className="logo"
            /></a>
            <div className="footer-section">
              <h3>EPAMS</h3>
              <p>• SERVE</p>
              <p>  • CONNECT </p>
              <p>  • SIMPLIFY</p>
            </div>
            <div className="footer-section">
             <a href="#"><h3>Home</h3></a>
              <p>Services</p>
              <p>About Us</p>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>0911111111</p>
              <p>info@epams.com</p>
            </div>
            <div className="social-icons">
              <a
                href="https://t.me/your_telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://twitter.com/your_twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/your_linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Main;
