import { useContext } from "react";
import { ThemeContext } from "../context";
import "./Intro.css";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="introId" className="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro" style={{ color: darkMode && "white" }}>Hello, I’m</h2>

          <h1 className="i-name">Basanta Raj Poudel</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-item-title">Software Engineer</div>
              <div className="i-item-title">Frontend Developer</div>
              <div className="i-item-title">React / Svelte Developer</div>
              <div className="i-item-title">CMS & System Designer</div>
              <div className="i-item-title">Real-time App Engineer</div>
            </div>
          </div>

          <p className="i-desc" style={{ color: darkMode ? "lightgray" : "black" }}>
            3+ years experience at Smart Ideas Pvt. Ltd. (Hamro Patro),
            building scalable systems like E-commerce CMS, Election CMS,
            Payment CMS, and real-time applications. Specialized in frontend
            architecture, dynamic page builders, payment systems, and
            WebSocket-based features.
          </p>

          <div className="i-tags">
            <span>React</span>
            <span>Svelte</span>
            <span>TypeScript</span>
            <span>Redux Toolkit</span>
            <span>WebSocket</span>
            <span>Node</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>

      <div className="i-right">
        {/* <div className="i-bg"></div> */}
        <img src="../img/myImage.jpeg" alt="Basanta" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;