import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading";
import Gallery from "../../Components/ReusableComponents/Gallery";
import { makeupImages } from "../../images";
import "./MakeupPage.scss";

const MakeupPage = () => {
  return (
    <div>
      <Header />
      <div className="makeupPage">
        <div className="makeup-container">
          <PageHeading headline={"A gallery of stunning looks"} />
          <Gallery array={makeupImages} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MakeupPage;
