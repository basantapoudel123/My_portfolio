import emailjs from "@emailjs/browser";
import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { ThemeContext } from "../context";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const [disabled, setDisabled] = useState(false);
  const [userRegister, setUserRegister] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleInput = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setDisabled(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ymkm9sm",
        "template_blfe1pq",
        formRef.current,
        "xRFFe4bGiubMQDw3x"
      )
      .then((result) => {
        toast.success("Thank You....");
        setDisabled(false);

        setUserRegister({
          user_name: "",
          user_subject: "",
          user_email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("err", err);
        setDisabled(false);
      });
  };

  return (
    <div id="contactId" className="con">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="../../img/phone.png" alt="" className="c-icon" />
              +977 9806706686
            </div>
            <div className="c-info-item">
              <img src="../../img/email.png" alt="" className="c-icon" />
              basanta.poudel1221@gmail.com
            </div>
            <div className="c-info-item">
              <img src="../../img/address.png" alt="" className="c-icon" />
              Balkumari-8, Lalitpur, Nepal
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b>
            <br />
            Get in touch.Always do react developer job well. Work hard and get
            the right result using different features provided by react.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333", color: darkMode && "white", borderColor: darkMode && "lightgray", borderWidth: "1px" }}
              type="text"
              required
              autoComplete="off"
              placeholder="Name"
              name="user_name"
              onChange={handleInput}
              value={userRegister.user_name}
            />
            <input
              style={{ backgroundColor: darkMode && "#333", color: darkMode && "white", borderColor: darkMode && "lightgray", borderWidth: "1px" }}
              type="text"
              required
              autoComplete="off"
              placeholder="Subject"
              name="user_subject"
              onChange={handleInput}
              value={userRegister.user_subject}
            />
            <input
              style={{ backgroundColor: darkMode && "#333", color: darkMode && "white", borderColor: darkMode && "lightgray", borderWidth: "1px" }}
              type="text"
              required
              autoComplete="off"
              placeholder="Email"
              name="user_email"
              onChange={handleInput}
              value={userRegister.user_email}
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333", color: darkMode && "white", borderColor: darkMode && "lightgray", borderWidth: "1px" }}
              rows="5"
              placeholder="Message"
              name="message"
              onChange={handleInput}
              value={userRegister.message}
            />
            <button disabled={disabled} type="submit" className="c-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
