import "./about.css";
import coder1 from "../../img/coder5.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={coder1} alt="" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          As a Programmer,I write code for computer programs and mobile
          applications. They also are involved in maintaining, debugging and
          troubleshooting systems and software to ensure that everything is
          running smoothly.
        </p>
        <p className="a-desc">
          I used React as my primary programming language. React (also known as
          React.js or ReactJS) is a free and open-source front-end JavaScript
          library for building user interfaces based on UI components. It is
          maintained by Meta (formerly Facebook) and a community of individual
          developers and companies. React can be used as a base in the
          development of single-page, mobile, or server-rendered applications
          with frameworks like Next.js. However, React is only concerned with
          state management and rendering that state to the DOM, so creating
          React applications usually requires the use of additional libraries
          for routing, as well as certain client-side functionality.
        </p>
      </div>
    </div>
  );
};

export default About;
