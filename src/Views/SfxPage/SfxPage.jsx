import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading.jsx";
import Gallery from "../../Components/ReusableComponents/Gallery";
import images from "../../images";
import altText from "../../altText.js";

import "./SfxPage.scss";

const SfxPage = () => {
  const SFXImgs = images[0];
  const SFXalt = altText[0];

  return (
    <>
      <Header />
      <div className="sfx-container">
        <PageHeading headline={"A gallery of Special effects"} />
        <Gallery
          img1={SFXImgs[1]}
          alt1={SFXalt[1]}
          img2={SFXImgs[2]}
          alt2={SFXalt[2]}
          img3={SFXImgs[3]}
          alt3={SFXalt[3]}
          img4={SFXImgs[4]}
          alt4={SFXalt[4]}
          img5={SFXImgs[5]}
          alt5={SFXalt[5]}
          img6={SFXImgs[6]}
          alt6={SFXalt[6]}
          img7={SFXImgs[7]}
          alt7={SFXalt[7]}
          img8={SFXImgs[8]}
          alt8={SFXalt[8]}
          img9={SFXImgs[9]}
          alt9={SFXalt[9]}
          img10={SFXImgs[10]}
          alt10={SFXalt[10]}
          img11={SFXImgs[11]}
          alt11={SFXalt[11]}
          img12={SFXImgs[12]}
          alt12={SFXalt[12]}
          img13={SFXImgs[13]}
          alt13={SFXalt[13]}
          img14={SFXImgs[14]}
          alt14={SFXalt[14]}
          img15={SFXImgs[15]}
          alt15={SFXalt[15]}
          img16={SFXImgs[16]}
          alt16={SFXalt[16]}
        />
      </div>
      <Footer />
    </>
  );
};

export default SfxPage;
