import React from "react";
import Section2 from "../../pages/Section2";
import Section3 from "../../pages/Section3";
import Section4 from "../../pages/Section4";
import Section from "../../pages/Section5";
import Section6 from "../../pages/Section6";
import Section7 from "../../pages/Section7";
import "../../App.css";
import Typed from "react-typed";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div id="home">
        {/* <Navbar/> */}
        <img
          className="home-pic"
          src="https://files.codingninjas.in/438375-17407.webp"
          alt="home ima"
        />
        <img
          className="home-pic-two"
          src="https://files.codingninjas.com/group-3931-8996.svg"
          alt="home ima"
        />
        <div className="home-content">
          <Typed
            strings={[
              "Be more then a coder",
              "Chasing job? Let the job chase you",
              "World has enough coders",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
          <h2>Be a Coding Ninja</h2>
          <p className="content-text">
            50,000 Student from 300 colleges have trusted us
          </p>
          <button className="btn-explore">Explore Our Programs</button>
        </div>{" "}
        <br />
        <hr />
        <div id="section1">
          <p className="section-content">
            If you have the courage and the commitment to learn coding,
            <br /> then Coding Ninjas will empower you.
          </p>
          <p style={{ fontSize: "18px", color: " rgb(155, 180, 183)" }}>
            NO MATTER WHAT IT TAKES!
          </p>
          <div className="flex">
            <div className="child">
              <img
                className=""
                src="https://files.codingninjas.in/boxicon1-9659.svg"
                alt="home ima"
              />{" "}
              Content designed by IIT & <br /> Stanford alumni
            </div>
            <div className="child">
              <img
                className=""
                src="https://files.codingninjas.in/boxicon2-9658.svg"
                alt="home ima"
              />{" "}
              Instant 1:1 doubt
              <br /> resolution
            </div>
            <div className="child">
              <img
                className=""
                src="https://files.codingninjas.in/boxicon3-9657.svg"
                alt="home ima"
              />{" "}
              Practical learning with 100+ problems & 10+ <br />
              projects in each course
            </div>
          </div>
        </div>
        <p
          className="ma"
          style={{
            fontSize: "32px",
            margin: "auto",
            padding: "20px",
            fontWeight: "bolder",
          }}
        >
          14,000+ CODING NINJAS TO INSPIRE YOU
        </p>
        <Section2 />
        <Link to={"/final"}>
          {" "}
          <button className="btn-Load">
            Hear more stories from our alumni
          </button>
        </Link>
        <Section3 />
        <Section4 />
        <Section />
        <Section6 />
        <Section7 />
        <Footer />
      </div>
    </>
  );
}

export default Home;
