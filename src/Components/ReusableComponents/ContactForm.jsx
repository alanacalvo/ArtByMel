import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <>
      <div className="contact-form">
        <div className="form-title">
          <h4 className="section-title">Commissions</h4>
          <h2 className="headline">Request Custom Artwork</h2>
        </div>
        <form>
          <div className="left-side">
            <div className="name-textbox">
              <label>Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="email-textbox">
              <label>Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="phone-textbox">
              <label>Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>
          <div className="right-side">
            <div className="message-textbox">
              <label>Message</label>
              <textarea id="message" name="message" rows="10" />
            </div>
            <button className="submit-btn">Submit Request</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
