import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
    console.log(e.target.name);
    console.log(e.target.value);
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
        console.log("err");
        setDisabled(false);
      });
  };

  return (
    <div className="con">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +123456789
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              contact@gmai.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              214 Sarswati Marga,Balkumari-8,Lalitpur
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
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              required
              autoComplete="off"
              placeholder="Name"
              name="user_name"
              onChange={handleInput}
              value={userRegister.user_name}
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              required
              autoComplete="off"
              placeholder="Subject"
              name="user_subject"
              onChange={handleInput}
              value={userRegister.user_subject}
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              required
              autoComplete="off"
              placeholder="email"
              name="user_email"
              onChange={handleInput}
              value={userRegister.user_email}
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              onChange={handleInput}
              value={userRegister.message}
            />
            <button disabled={disabled} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
