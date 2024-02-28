import React from "react";
import "./CustomRequestForm.scss";

const CustomRequestForm = () => {
  // const inputField = document.querySelector("input");

  // inputField.addEventListener("focus", () => {
  //   inputField.style.borderColor = "#ff0000";
  // });

  return (
    <div className="requestContainer">
      <h2>COMMISSIONS</h2>
      <h1>Request Custom Artwork</h1>
      <form action="">
        <div className="form-inputs">
          <label htmlFor="">Full Name</label>
          <input type="text" />
          <label htmlFor="">Email Address</label>
          <input type="email" />
          <label htmlFor="Phone Number">Phone Number</label>
          <input type="number" style={{ marginBottom: "20px" }} />
          <label htmlFor="message">Message</label>
          <textarea
            type="text-area"
            rows="5"
            cols="33"
            autoCorrect="on"
            wrap="hard"
            id="message"
          />
          <button type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default CustomRequestForm;
