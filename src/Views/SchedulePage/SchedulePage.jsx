import "./SchedulePage.scss";
import { InlineWidget, PopupWidget } from "react-calendly";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import CustomRequestForm from "../../Components/CustomRequestForm/CustomRequestForm";
import { useMediaQuery } from "@mui/material";
import ContactForm from "../../Components/ReusableComponents/ContactForm";
import PageHeading from "../../Components/ReusableComponents/PageHeading";

function SchedulePage() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Header />
      <div className="book-container">
        <PageHeading
          title="book"
          headline="Book your professional makeup appointment"
          subtitle="with Melvin Lozada"
        />
        <div className="calendar">
          {!isSmallScreen ? (
            <>
              <InlineWidget
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                url="https://calendly.com/melvinjr329"
                styles={{
                  height: "1000px",
                  width: "90vw",
                }}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <ContactForm
          title={"Appointments"}
          headline={"Ask About An Unavailable Date Or Different Location"}
        />
        {/* <CustomRequestForm /> */}
        <Footer />
      </div>
    </>
  );
}

export default SchedulePage;
