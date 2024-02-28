import React from "react";
import "./SchedulePage.scss";
import { InlineWidget, PopupWidget } from "react-calendly";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CustomRequestForm from "../../Components/CustomRequestForm/CustomRequestForm";
import { useMediaQuery } from "@mui/material";

function SchedulePage() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div className="book-container">
        <Header />
        <div className="calendar">
          {!isSmallScreen ? (
            <>
              <h1>Book An Appointment</h1>
              {/* <div className="background"> */}
              <InlineWidget
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                url="https://calendly.com/melvinjr329"
                styles={{
                  height: "1000px",
                  width: "90vw",
                }}
              />
              {/* </div> */}
            </>
          ) : (
            <>
              {/* <div className="background"> */}
              <h1>Book An Appointment</h1>

              <InlineWidget
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                url="https://calendly.com/melvinjr329"
                styles={{
                  height: "1000px",
                  width: "100vw",
                  margin: "0",
                  padding: "0",
                }}
              />
              {/* </div> */}
            </>
          )}
        </div>

        <CustomRequestForm />
        <Footer />
      </div>
    </>
  );
}

export default SchedulePage;
