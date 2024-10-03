import React from "react";
import profilePic1 from "./../assets/pic-1.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function DProfile() {
  return (
    <>
      <section className="user-profile">
        <h1 className="heading">your profile</h1>

        <div className="info">
          <div className="user">
            <Image src={profilePic1} alt="profile" className="image" />
            <h3>shaikh anas</h3>
            <p>student</p>
            <a href="update.html" className="inline-btn">
              update profile
            </a>
          </div>

          <div className="box-container">
            <div className="box">
              <div className="flex">
                <div className="flex-box">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <div>
                  <span>4</span>
                  <p>saved playlist</p>
                </div>
              </div>
              <a href="#" className="inline-btn">
                view playlists
              </a>
            </div>

            <div className="box">
              <div className="flex">
                <div className="flex-box">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div>
                  <span>33</span>
                  <p>videos liked</p>
                </div>
              </div>
              <a href="#" className="inline-btn">
                view liked
              </a>
            </div>

            <div className="box">
              <div className="flex">
                <div className="flex-box">
                  <FontAwesomeIcon icon={faComment} />
                </div>
                <div>
                  <span>12</span>
                  <p>videos comments</p>
                </div>
              </div>
              <a href="#" className="inline-btn">
                view comments
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DProfile;
