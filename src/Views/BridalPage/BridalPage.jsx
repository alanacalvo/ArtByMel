import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading";
import Gallery from "../../Components/ReusableComponents/Gallery";
import images from "../../images";
import altText from "../../altText";

import "./BridalPage.scss";

const BridalPage = () => {
  const bridalImgs = images[1];
  const bridalAlt = altText[1];

  return (
    <>
      <Header />
      <div className="bridal-container">
        <PageHeading headline={"A gallery of beautiful bridal looks"} />
        <Gallery
          img1={bridalImgs[1]}
          alt1={bridalAlt[1]}
          img2={bridalImgs[2]}
          alt2={bridalAlt[2]}
          img3={bridalImgs[3]}
          alt3={bridalAlt[3]}
          img4={bridalImgs[4]}
          alt4={bridalAlt[4]}
          img5={bridalImgs[5]}
          alt5={bridalAlt[5]}
          img6={bridalImgs[6]}
          alt6={bridalAlt[6]}
          img7={bridalImgs[7]}
          alt7={bridalAlt[7]}
          img8={bridalImgs[8]}
          alt8={bridalAlt[8]}
          img9={bridalImgs[9]}
          alt9={bridalAlt[9]}
          img10={bridalImgs[10]}
          alt10={bridalAlt[10]}
        />
      </div>
      <Footer />
    </>
  );
};

export default BridalPage;
