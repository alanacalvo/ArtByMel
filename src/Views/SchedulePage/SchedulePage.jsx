import "./SchedulePage.scss";
import { InlineWidget } from "react-calendly";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import { useMediaQuery } from "@mui/material";
import ContactForm from "../../Components/ReusableComponents/ContactForm";
import PageHeading from "../../Components/ReusableComponents/PageHeading";

function SchedulePage() {
  // const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <main className="bookPage">
      <Header />
      <div className="book-container">
        <PageHeading
          title="book"
          headline="Book your professional makeup appointment"
          subtitle="with Melvin Lozada"
        />
        <div className="calendar">
          <InlineWidget
            url="https://calendly.com/melvinjr329"
            styles={{
              height: "500px",
              width: "100vw",
            }}
          />
          {/* {!isSmallScreen ? (
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
          )} */}
        </div>
        <ContactForm
          title={"Appointments"}
          headline={"Ask About An Unavailable Date Or Different Location"}
        />
      </div>
      <Footer />
    </main>
  );
}

export default SchedulePage;
