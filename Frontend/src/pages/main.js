import React from "react";
import { useState } from 'react';
import videobg from "../assets/welcomesection.mp4";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaTelegramPlane, FaTwitter, FaLinkedin } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../style/main.css";

const Main = () => {
    const [active, setActive] = useState('home');

    const logoSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
                            <a href="#about">About Us</a>
                        </li>
                        <li className={active === 'contactus' ? 'active' : ''} onClick={() => setActive('contactus')}>
                            <a href="#contactus">Contact Us</a>
                        </li>
                        <Link to="/signup">
                            <li className={active === 'signup' ? 'active' : ''} onClick={() => setActive('signup')}>
                                <a href="#">Signup-Login</a>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </header>
            <section className="welcome-section" id="home">
                <div className="video-welcome">
                    <video className="welcome-video" src={videobg} autoPlay loop muted />
                </div>
                <h1>Welcome to EPAM</h1>
                <p className="tagline">What We Serve Is What We Provide</p>
                <div className="buttons">
                    <Link to="/signup"><button className="register-button">Register</button></Link>
                    <a href="#services"><button className="events-button">Events</button></a>
                </div>
            </section>
            <section className="services-section" id="services">
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
                        <img src="Service4.jpg" alt="Service 4" />
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
                <div className="logo-slider">
                    <Slider {...logoSettings}>
                        <div>
                            <img src="agency.png" alt="Context Logo" />
                        </div>
                        <div>
                            <img src="BCD.png" alt="Faraday Logo" />
                        </div>
                        <div>
                            <img src="top.png" alt="Dassault Logo" />
                        </div>
                        <div>
                            <img src="first.png" alt="Nordea Logo" />
                        </div>
                        <div>
                            <img src="toosharptech.jfif" alt="Norton Logo" />
                        </div>
                    </Slider>
                </div>
            </section>
            <footer className="main-footer" id="contactus">
                <div className="footer">
                    <div className="footer-content">
                        <a href="#home">
                            <img
                                src={`${process.env.PUBLIC_URL}/Logo.png`}
                                alt="EPAMS Logo"
                                className="logo"
                            />
                        </a>
                        <div className="footer-section">
                            <h3>EPAM</h3>
                            <p>• SERVE</p>
                            <p>• CONNECT </p>
                            <p>• SIMPLIFY</p>
                        </div>
                        <div className="footer-section">
                            <a href="#"><h3>Home</h3></a>
                            <p>Services</p>
                            <p>About Us</p>
                        </div>
                        <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-phone"></i> 0911111111</p>
            <p><i className="fas fa-envelope"></i> info@epams.com</p>
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
