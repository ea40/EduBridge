"use client";
import Image from "next/image";
import "../../styles/profile.css";
import React, { useState } from "react";
import logo from "./../../assets/Logo.png";
import profilePic1 from "./../../assets/pic-1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faBook,
  faChalkboardUser,
  faGraduationCap,
  faHeadset,
  faHome,
  faMicroscope,
  faQuestion,
  faStar,
  faSun,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import DHome from "@/components/DHome";
import DProfile from "@/components/DProfile";
import DAbout from "@/components/DAbout";

function Profile() {
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState(0);
  return (
    <>
      <header className="header">
        <section className="flex">
          <div className="relative w-[70px] h-[70px]">
            <Image
              src={logo}
              alt="EduBridge Logo"
              fill
              className="object-cover"
            />
          </div>
          <a href="home.html" className="logo">
            {" "}
            EduBridge{" "}
          </a>
          <div className="icons">
            <button onClick={() => setMenu(true)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button>
              <FontAwesomeIcon icon={faSun} />
            </button>
            <button>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button>
              <FontAwesomeIcon icon={faStar} />
            </button>
          </div>
        </section>
      </header>

      <div className={`side-bar ${menu ? "active" : ""}`}>
        <button onClick={() => setMenu(false)} id="close-btn">
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="profile">
          <Image src={profilePic1} alt="profile" className="image" />
          <h3 className="name font-bold">
            <span>Hamza</span>
          </h3>
          <p className="role">
            <span className="addwho">Your boss Niggah</span>
          </p>
          <button onClick={() => setTab(0)} className="btn">
            view profile
          </button>
        </div>

        <nav className="navbar">
          <button id={tab === 1 ? "active" : ""} onClick={() => setTab(1)}>
            <FontAwesomeIcon icon={faHome} />
            <span>home</span>
          </button>
          <button id={tab === 2 ? "active" : ""} onClick={() => setTab(2)}>
            <FontAwesomeIcon icon={faQuestion} />
            <span>about</span>
          </button>
          <button id={tab === 3 ? "active" : ""} onClick={() => setTab(3)}>
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>courses</span>
          </button>
          <button id={tab === 4 ? "active" : ""} onClick={() => setTab(4)}>
            <FontAwesomeIcon icon={faChalkboardUser} />
            <span>mentors</span>
          </button>
          <button id={tab === 5 ? "active" : ""} onClick={() => setTab(5)}>
            <FontAwesomeIcon icon={faHeadset} />
            <span>contact us</span>
          </button>
          <button id={tab === 6 ? "active" : ""} onClick={() => setTab(6)}>
            <FontAwesomeIcon icon={faBook} />
            <span>library</span>
          </button>
          <button id={tab === 7 ? "active" : ""} onClick={() => setTab(7)}>
            <FontAwesomeIcon icon={faMicroscope} />
            <span>research</span>
          </button>
        </nav>
      </div>
      {tab === 0 && <DProfile />}
      {tab === 1 && <DHome />}
      {tab === 2 && <DAbout />}
      {tab === 3 && <div className="home-grid"></div>}
      {tab === 4 && <div className="home-grid"></div>}
      {tab === 5 && <div className="home-grid"></div>}
      {tab === 6 && <div className="home-grid"></div>}
      {tab === 7 && <div className="home-grid"></div>}
      <footer className="footer">
        &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights
        reserved!
      </footer>
    </>
  );
}

export default Profile;
