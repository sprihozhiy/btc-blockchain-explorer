import React from "react";
import SearchBlock from "../components/SearchBlock";

export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="/" className="Navbar-Brand">
        Bitcoin Explorer
      </a>
      <div className="Navbar-Search">
        <SearchBlock />
      </div>
    </div>
  );
}
