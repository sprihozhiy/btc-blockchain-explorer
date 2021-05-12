import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="/" className="Navbar-Brand">
        Bitcoin Explorer
      </a>
      <div className="Navbar-Search">
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
}
