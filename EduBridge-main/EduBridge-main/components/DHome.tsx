import React from "react";
import profilePic2 from "./../assets/pic-2.jpg";
import profilePic3 from "./../assets/pic-3.jpg";
import profilePic4 from "./../assets/pic-4.jpg";
import profilePic5 from "./../assets/pic-5.jpg";
import profilePic6 from "./../assets/pic-6.jpg";
import coursePic1 from "./../assets/thumb-1.png";
import coursePic2 from "./../assets/thumb-2.png";
import coursePic3 from "./../assets/thumb-3.png";
import Image from "next/image";

function DHome() {
  return (
    <>
      <section className="teachers">
        <h1 className="heading">My mentors</h1>

        <div className="box-container">
          <div className="box">
            <div className="tutor">
              <Image src={profilePic2} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <Image src={profilePic3} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <Image src={profilePic4} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <Image src={profilePic5} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <Image src={profilePic6} alt="profile" className="image" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <a href="mentor_profile.html" className="inline-btn">
              view profile
            </a>
          </div>

          <a href="mentor.html" className="inline-btn">
            Show more{" "}
          </a>
        </div>
      </section>

      <section className="courses">
        <h1 className="heading">our courses</h1>

        <div className="box-container">
          <div className="box">
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <Image src={coursePic1} alt="course" className="image" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <Image src={coursePic2} alt="course" className="image" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete CSS tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <Image src={coursePic3} alt="course" className="image" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JS tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>
        </div>

        <div className="more-btn">
          <a href="courses.html" className="inline-option-btn">
            view all courses
          </a>
        </div>
      </section>
      <section className="courses">
        <h1 className="heading">Opportunity alert</h1>

        <div className="">
          <div
            className="box"
            style={{ backgroundColor: "#959090", color: "#fff" }}
          >
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <a href="#" className="inline-btn">
              view more
            </a>
          </div>
          <div
            className="box"
            style={{
              marginTop: "20px",
              backgroundColor: "#959090",
              color: "#fff",
            }}
          >
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <h3 className="title">complete CSS tutorial</h3>
            <a href="#" className="inline-btn">
              view more
            </a>
          </div>

          <div
            className="box"
            style={{
              marginTop: "20px",
              backgroundColor: "#959090",
              color: "#fff",
            }}
          >
            <div className="tutor">
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <h3 className="title">complete JS tutorial</h3>
            <a href="#" className="inline-btn">
              view more
            </a>
          </div>
        </div>

        <div className="more-btn">
          <a href="#" className="inline-option-btn">
            view all opportunities
          </a>
        </div>
      </section>
    </>
  );
}

export default DHome;
