import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yajj29g", // Your service ID
        "template_7xn3i3u", // Your template ID
        form.current, // The form reference
        "JKmSRMnjao6M2v8z3" // Your user ID or public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* Left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact us</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* Right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className="user" placeholder="Name" required />
          <input type="email" name="to_name" className="user" placeholder="Email" required />
          <textarea name="message" className="user" placeholder="Message" required />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting CITID!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;