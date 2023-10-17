import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading.jsx";
import Gallery from "../../Components/ReusableComponents/Gallery";

import "./SfxPage.scss";

function SfxPage() {
  return (
    <>
      <Header />
      <div className="sfx-container">
        <PageHeading headline={"A gallery of Special effects"} />
        <div className="sfx-gallery">
          <Gallery />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SfxPage;
