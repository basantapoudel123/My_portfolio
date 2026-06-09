import "./about.css";

const About = () => {
  return (
    <div id="aboutId" className="about">
      <div className="a-left">
        <div className="a-card bg">
          <img src="../../img/scene1.jpg" alt="" className="a-img" />

        </div>
        <div className="a-card">
          <img src="../../img/mountainview.jpg" alt="" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>

        <p className="a-sub">
          I am a Software Engineer with 3+ years of experience building scalable
          and high-performance web applications, specializing in frontend
          development and real-time systems.
        </p>

        <p className="a-desc">
          I have worked at Smart Ideas Pvt. Ltd. (Hamro Patro), contributing to
          large-scale systems like E-commerce platforms, CMS systems, payment
          systems, and Jyotish-related applications. My work includes building
          dynamic page builders, managing order workflows, and integrating
          payment and real-time features.

          <br /><br />

          I mainly use React.js, Svelte, TypeScript, and Redux Toolkit, along
          with REST APIs, WebSockets, and tools like Git and Firebase. I enjoy
          building scalable, maintainable, and user-focused applications.
        </p>
      </div>
    </div>
  );
};

export default About;
