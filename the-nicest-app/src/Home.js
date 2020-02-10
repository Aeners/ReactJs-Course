import React from "react";
import { Link } from "react-router-dom";

import Section from "./Section";
import GuestBook from "./GuestBook";

import logo from "./logo.svg";
import "./styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Link className="Home-header-link" to="/secret-page">
          Go to secret page >
        </Link>
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Section />
      <GuestBook />
    </div>
  );
}

export default Home;
