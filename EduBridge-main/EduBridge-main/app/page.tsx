// pages/index.tsx
"use client"; // This line makes the component a Client Component
import "../styles/home.css";

import React from "react";
import Image from "next/image";
import logo from "../assets/Logo.png";
import heroImage from "../assets/1143.jpg";

const LandingPage: React.FC = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>

      <body style={{ backgroundColor: "#eee" }}>
        {/* Header */}
        <div
          className="container"
          style={{
            backgroundColor: "#fff",
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
          }}
        >
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
              <a
                href="/"
                className="d-inline-flex link-body-emphasis text-decoration-none"
              >
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={logo} // Use the imported logo
                    alt="EduBridge Logo" // Accessibility text
                    width={150} // Specify the width
                    height={75} // Specify the height
                    style={{ maxWidth: "75%" }} // Optional: Set max width in CSS
                    layout="responsive" // Use responsive layout for better handling
                  />
                </div>
              </a>
            </div>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  About
                </a>
              </li>
            </ul>
            <div className="col-md-3 text-end">
              <button
                type="button"
                className="btn btn-outline-primary me-2"
                onClick={() => (window.location.href = "/log-in")}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => (window.location.href = "pages/SIGNUP.html")}
              >
                Sign-up
              </button>
            </div>
          </header>
        </div>

        {/* Hero */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row d-flex align-items-center g-5 py-5 flex-row">
            <div className="col-lg-6 order-1">
              <div className="d-block mx-lg-auto">
                <Image
                  src={heroImage} // Use the imported hero image
                  alt="Bootstrap Themes" // Accessibility text
                  width={1200} // Specify the width based on your design
                  height={800} // Specify the height based on your design
                  layout="responsive" // Use responsive layout
                  loading="lazy" // Lazy load the image
                />
              </div>{" "}
            </div>
            <div className="col-lg-6 order-0">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                EduBridge
              </h1>
              <h2>Together, We Build Tomorrow&apos;s Leaders</h2>
              <p className="lead">
                EduBridge aims to be a transformative force in the educational
                landscape of the global South, addressing challenges of access,
                collaboration, and research isolation.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                  onClick={() => (window.location.href = "pages/SIGNUP.html")}
                >
                  Sign-up
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                  onClick={() => (window.location.href = "pages/LOGIN.html")}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row d-flex align-items-center g-5 py-5 flex-row">
            <div className="order-0">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Organization of Southern Cooperation
              </h1>
              <h2>Unlock a World of Knowledge and Collaboration!</h2>
              <p>
                Imagine a platform where learning knows no borders, where
                teachers, students, and researchers from 28 diverse countries
                come together to share knowledge, innovate, and grow. Welcome to
                EduBridge OSC - the gateway to boundless opportunities in
                education and research!
                <br />
                <br />
                By registering, you become part of a global community,
                connecting with brilliant minds, gaining access to exclusive
                resources, and participating in transformative collaborations.
                Whether you are an educator shaping the future, a student eager
                to learn, or a researcher striving for innovation, EduBridge OSC
                is the platform where your journey begins.
                <br />
                <br />
                <strong>Why wait?</strong> <br /> Join us today and be a part of
                the change that's bridging the gap and fostering growth across
                the Global South!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-heading">About EduBridge</h4>
              <p className="footer-text">
                EduBridge aims to be a transformative force in education,
                fostering collaboration and innovation in the global South.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Follow Us</h4>
              <ul className="footer-social">
                <li>
                  <a href="#" className="footer-social-link">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-social-link">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-social-link">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-bottom-text">
              © 2024 EduBridge. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default LandingPage;
