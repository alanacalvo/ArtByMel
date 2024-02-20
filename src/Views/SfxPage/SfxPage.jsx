import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading.jsx";
import Gallery from "../../Components/ReusableComponents/Gallery.jsx";
import { sfxImages } from "../../images.js";
import "./SfxPage.scss";

const SfxPage = () => {
  return (
    <div className="sfxPage">
      <Header />
      <div className="sfx-container">
        <PageHeading headline={"A gallery of Special effects"} />
        <Gallery array={sfxImages} />
      </div>
      <Footer />
    </div>
  );
};

export default SfxPage;
