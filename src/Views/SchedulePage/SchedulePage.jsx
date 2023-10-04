import React from "react";
import "./SchedulePage.scss";
import { InlineWidget, PopupWidget } from "react-calendly";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer.js";
import CustomRequestForm from "../../Components/CustomRequestForm/CustomRequestForm";

function SchedulePage() {
  return (
    <div className="container">
      <Header
      // style={{
      //   position: "static",
      // }}
      />
      <div className="calendar">
        <h1>Book an Appointment</h1>
        {/* <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/melvinjr329"
          style="min-width:320px;height:650px;"
        > */}
        <InlineWidget
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          url="https://calendly.com/melvinjr329"
          styles={{
            height: "700px",
            width: "90vw",
            backgroundColor: "gold",
            borderRadius: "15px",
          }}
        />
        {/* </div> */}
        <div className="background"></div>
      </div>
      <CustomRequestForm />
      <Footer />
    </div>
  );
}

export default SchedulePage;
