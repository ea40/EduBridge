import React from "react";
import aboutImg from "./../assets/about-img.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChalkboardUser,
  faGraduationCap,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import profilePic2 from "./../assets/pic-2.jpg";
import profilePic3 from "./../assets/pic-3.jpg";
import profilePic4 from "./../assets/pic-4.jpg";
import profilePic5 from "./../assets/pic-5.jpg";
import profilePic6 from "./../assets/pic-6.jpg";
import profilePic7 from "./../assets/pic-7.jpg";

function DAbout() {
  return (
    <>
      <section className="about">
        <div className="row">
          <div className="image">
            <Image src={aboutImg} alt="about" className="image" />
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              dolorum quasi illo? Distinctio expedita commodi, nemo a quam error
              repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur
              quaerat tenetur.
            </p>
            <a href="courses.html" className="inline-btn">
              our courses
            </a>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="flex-box">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div>
              <h3>+10k</h3>
              <p>online courses</p>
            </div>
          </div>

          <div className="box">
            <div className="flex-box">
              <FontAwesomeIcon icon={faUserGraduate} />
            </div>
            <div>
              <h3>+40k</h3>
              <p>brilliant students</p>
            </div>
          </div>

          <div className="box">
            <div className="flex-box">
              <FontAwesomeIcon icon={faChalkboardUser} />
            </div>
            <div>
              <h3>+2k</h3>
              <p>expert tutors</p>
            </div>
          </div>

          <div className="box">
            <div className="flex-box">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div>
              <h3>100%</h3>
              <p>job placement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h1 className="heading">student&apos;s reviews</h1>

        <div className="box-container">
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <Image src={profilePic2} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <Image src={profilePic3} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <Image src={profilePic4} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <Image src={profilePic5} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <Image src={profilePic6} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <Image src={profilePic7} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DAbout;
