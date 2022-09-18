import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-link">
        <ul>
          <li>
            <div
              onClick={() => {
                const intro = document.querySelector("#introId");
                intro?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Home
            </div>
          </li>
          <li>
            <a href="/aboutus">About</a>
          </li>
          <li>
            <a href="/product">Project</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
