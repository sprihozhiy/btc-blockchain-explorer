import React from "react";
import SearchBlock from "../components/SearchBlock";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="/" className="Navbar_Brand">
        Bitcoin Explorer
      </a>
      <div className="Navbar_Search">
        <SearchBlock />
      </div>
    </div>
  );
}
