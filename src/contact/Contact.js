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

  const validateForm = () => {

    const { user_name, user_subject, user_email, message } =
      userRegister;

    // NAME
    if (!user_name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (user_name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return false;
    }

    // SUBJECT
    if (!user_subject.trim()) {
      toast.error("Subject is required");
      return false;
    }

    if (user_subject.trim().length < 5) {
      toast.error("Subject must be at least 5 characters");
      return false;
    }

    // EMAIL
    if (!user_email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user_email)) {
      toast.error("Invalid email address");
      return false;
    }

    // MESSAGE
    if (!message.trim()) {
      toast.error("Message is required");
      return false;
    }

    if (message.trim().length < 10) {
      toast.error("Message must be at least 10 characters");
      return false;
    }

    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;
    setDisabled(true);

    emailjs
      .sendForm(
        "service_ymkm9sm",
        "template_blfe1pq",
        formRef.current,
        "agoBnog-Qz1Gp2Zk0"
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
