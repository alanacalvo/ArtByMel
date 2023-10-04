import React from "react";
import "./CustomRequestForm.scss";

const CustomRequestForm = () => {
  return (
    <div className="requestContainer">
      <h2>COMMISSIONS</h2>
      <h1>Request Custom Artwork</h1>
      <form action="">
        <label htmlFor="">Full Name</label>
        <input type="text" />
        <label htmlFor="">Email Address</label>
        <input type="email" />
        <label htmlFor="Phone Number">Phone Number</label>
        <input type="number" />
        <br />
        <label htmlFor="message">Message</label>
        <input type="text-area" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomRequestForm;
