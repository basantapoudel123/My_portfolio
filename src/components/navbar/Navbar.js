import { useEffect, useState } from "react";
import Toggle from "../../toggle/Toggle";
import "./navbar.css";

const Navbar = () => {

  const [activeNav, setActiveNav] = useState("introId");

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {

    const handleScroll = () => {
      const sections = [
        "introId",
        "aboutId",
        "productId",
        "contactId",
      ];

      const scrollPosition = window.scrollY + 200;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveNav(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-link">
      <a href="/" className="logo-wrapper">
        <img src="../img/logo1.png" alt="logo" className="logo" />
      </a>

      <ul>

        <li>
          <a
            className={`nav-ele ${activeNav === "introId" ? "active-nav" : ""
              }`}
            onClick={() => scrollToSection("introId")}
          >
            Home
          </a>
        </li>

        <li>
          <a
            className={`nav-ele ${activeNav === "aboutId" ? "active-nav" : ""
              }`}
            onClick={() => scrollToSection("aboutId")}
          >
            About
          </a>
        </li>

        <li>
          <a
            className={`nav-ele ${activeNav === "productId" ? "active-nav" : ""
              }`}
            onClick={() => scrollToSection("productId")}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            className={`nav-ele ${activeNav === "contactId" ? "active-nav" : ""
              }`}
            onClick={() => scrollToSection("contactId")}
          >
            Contact
          </a>
        </li>

      </ul>

      <Toggle />

    </div>
  );
};

export default Navbar;