import React, { useEffect } from "react";
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
require("dotenv").config();

const Home = () => {
  useEffect(() => {
    fetchAll();
  }, []);
  const fetchAll = async () => {
    const present = localStorage.getItem("dsagym");
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
    if (present != null) return;
    const d = await axios.get(`/${REACT_APP_API_KEY}/sdesheet`);
    const content = d.data;
    console.log(content);
    localStorage.setItem("dsagym", JSON.stringify(content));
    console.log("here");
  };

  return (
    <div>
      {/* header */}
      <header>
        <nav>
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
        </nav>
      </header>

      {/* main content */}

      <section className="main-content">
        <div className="main-left-side">
          <h1>Data Structure And Algorithm In One Place</h1>
        </div>
        <div className="main-right-side">
          <div className="card-section">
            <h2>Resources</h2>
            <p>
              Best Resources To Learn Data Structure And Algorithm Topic-Wise
              For Free
            </p>
            <div className="button_center">
              <Link className="button" to="/resources">
                Check
              </Link>
            </div>
          </div>
          <div className="card-section">
            <h2>Practice</h2>
            <p>
              Best Data Structure And Algorithm Practice Problem Sheet Eg: SDE
              SHEET
            </p>
            <div className="button_center">
              <Link className="button" to="/sdesheet">
                Check
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
