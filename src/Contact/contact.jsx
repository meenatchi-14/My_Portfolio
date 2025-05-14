import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vtdr3qn",
        "template_vtdr3qn",
        form.current,
        "AY133yB7MjAu5iJRJ"
      )
      .then(
        () => {
          alert("You email Successfulyy sent");
          window.location.reload(false);
        },
        () => {
          alert("Error While sending and Email");
        }
      );
  };
  return (
    <div className="contact-page">
      <h1 className="home-content">
        Contact Me
      </h1>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" className="submit-btn" />
        </form>
      </div>
      <br/>
      <div className="footer-contact">
        <p>&#169; Meenatchi. All right reserved</p>
        </div>
    </div>
  );
};
export default Contact;