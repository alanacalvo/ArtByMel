import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading";
import Gallery from "../../Components/ReusableComponents/Gallery";
import images from "../../images";
import altText from "../../altText";

import "./MakeupPage.scss";

const MakeupPage = () => {
  const makeupImgs = images[2];
  const makeupAlt = altText[2];

  return (
    <div className="makeupPage">
      <Header />
      <div className="makeup-container">
        <PageHeading headline={"A gallery of stunning looks"} />
        <Gallery
          img1={makeupImgs[1]}
          alt1={makeupAlt[1]}
          img2={makeupImgs[2]}
          alt2={makeupAlt[2]}
          img3={makeupImgs[3]}
          alt3={makeupAlt[3]}
          img4={makeupImgs[4]}
          alt4={makeupAlt[4]}
          img5={makeupImgs[5]}
          alt5={makeupAlt[5]}
          img6={makeupImgs[6]}
          alt6={makeupAlt[6]}
          img7={makeupImgs[7]}
          alt7={makeupAlt[7]}
          img8={makeupImgs[8]}
          alt8={makeupAlt[8]}
          img9={makeupImgs[9]}
          alt9={makeupAlt[9]}
          img10={makeupImgs[10]}
          alt10={makeupAlt[10]}
          img11={makeupImgs[11]}
          alt11={makeupAlt[11]}
          img12={makeupImgs[12]}
          alt12={makeupAlt[12]}
          img13={makeupImgs[13]}
          alt13={makeupAlt[13]}
          img14={makeupImgs[14]}
          alt14={makeupAlt[14]}
          img15={makeupImgs[15]}
          alt15={makeupAlt[15]}
          img16={makeupImgs[16]}
          alt16={makeupAlt[16]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MakeupPage;
