import React from "react";
import { Link, NavLink } from "react-router-dom";
import bg_Image from "../images/logo_variants-white-25005.png";
import male_image from "../images/student-24426.png";
import female_image from "../images/professional-24427.png";
const Nav = () => {
  return (
    <>
      <div className="Navbar">
        <img src={bg_Image} alt="" className="icon" width={150} />
        <NavLink to={"/courses"} className="Nav-items">
          <div className="dropdown">
            <div className="dropbtn">Courses </div>
            <div className="dropdown-content">
              <p className="courses_select_heading">
                What is your Work Experience ?
              </p>
              <p style={{ margin: 15, color: "black" }}>
                This will help us recommend the best programs for you.
              </p>
              <div className="courses_flex_main">
                <div className="courses_flex_child">
                  <img src={male_image} alt="" style={{ paddingLeft: 18 }} />{" "}
                  <p style={{ fontWeight: "bold", paddingLeft: 18 }}>
                    No Work <br /> Experience
                  </p>
                </div>
                <div className="courses_flex_child">
                  <img src={female_image} alt="" style={{ paddingLeft: 18 }} />
                  <p style={{ fontWeight: "bold", paddingLeft: 18 }}>
                    Having Work <br /> Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/scholarship"} className="Nav-items">
          <div className="dropdown">
            <div className="dropbtn">Scholarship </div>
            <div className="dropdown-content-scholarship"></div>
          </div>
        </NavLink>
        <NavLink to={"/community"} className="Nav-items">
          <div className="dropdown">
            <div className="dropbtn">Community </div>
            <div className="dropdown-content"></div>
          </div>
        </NavLink>
        <NavLink to={"/practise"} className="Nav-items">
          <div className="dropdown">
            <div className="dropbtn">Practise </div>
            <div className="dropdown-content-practise"></div>
          </div>
        </NavLink>

       <Link to={"/login"}>
        <button  className="btn-Login">Login</button>
        </Link>

        <Link to={"/register"}>
          <button className="btn-register">Enroll Now</button>
        </Link>
      </div>
    </>
  );
};

export default Nav;
