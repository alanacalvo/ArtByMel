import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading";
import ContactForm from "../../Components/ReusableComponents/ContactForm";

import "./ArtPage.scss";
import PositiveQuotes from "../../Components/ReusableComponents/PositiveQuotes";

const ArtPage = () => {
  return (
    <div className="artPage">
      <Header />
      <div className="art-container">
        <PositiveQuotes />
        <PageHeading
          headline={
            "A journey through colors and brushstrokes in captivating paintings"
          }
        />
        <div className="art-gallery">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/908/original/painting1.png?1699064683"
            alt="painting of a man holding a rose in one hand and a letter in the other"
            className="art-pic"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/909/original/painting2.png?1699064691"
            alt="painting of a man sitting and crying into his hands with a tree growing from his back"
            className="art-pic"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/915/original/painting-3.jpeg?1699066532"
            alt="painting of an African American woman with blue clothing and a blue headwrap on and gold earrings"
            className="art-pic"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/916/original/painting-4.jpg?1699066556"
            alt="painting of a bunch of coconuts on a coconut tree"
            className="art-pic"
          />
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ArtPage;
