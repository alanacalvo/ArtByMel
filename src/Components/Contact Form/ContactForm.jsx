import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="form-heading">
        <h4>Commissions</h4>
        <h2>Request Custom Artwork</h2>
      </div>
      <div className="all-inputs">
        <div className="left-input">
          <div className="input-box">
            <label className="form-label">Full Name</label>
            <input type="text" className="input-name" autoComplete="on" />
          </div>
          <div className="input-box">
            <label className="form-label">Email Address</label>
            <input type="email" className="input-email" autoComplete="on" />
          </div>
          <div className="input-box">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="input-phone" autoComplete="on" />
          </div>
        </div>
        <div className="right-input">
          <label className="form-label">Message</label>
          <textarea
            id="message"
            name="email message"
            rows="6"
            cols="35"
            className="message"
          />
          <button className="submit-btn">Submit Request</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
