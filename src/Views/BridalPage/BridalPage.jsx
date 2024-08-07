import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading";
import Gallery from "../../Components/ReusableComponents/Gallery";
import { bridalImages } from "../../images";
import "./BridalPage.scss";

const BridalPage = () => {
  return (
    <div>
      <Header />
      <div className="bridalPage">
        <div className="bridal-container">
          <PageHeading headline={"A gallery of beautiful bridal looks"} />
          <Gallery array={bridalImages} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BridalPage;
