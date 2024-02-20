import React from "react";
import "./SchedulePage.scss";
import { InlineWidget, PopupWidget } from "react-calendly";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CustomRequestForm from "../../Components/CustomRequestForm/CustomRequestForm";

function SchedulePage() {
  return (
    <>
      <div className="book-container">
        <Header />
        <div className="calendar">
          <h1>Book An Appointment</h1>
          <div className="background">
            <InlineWidget
              rootElement={document.getElementById("root")}
              text="Click here to schedule!"
              url="https://calendly.com/melvinjr329"
              styles={{
                height: "1000px",
                width: "60vw",
              }}
            />
          </div>
        </div>
        <CustomRequestForm />
        <Footer />
      </div>
    </>
  );
}

export default SchedulePage;
