import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading";

import "./MakeupPage.scss";
import Gallery from "../../Components/ReusableComponents/Gallery";

const makeupImages = [
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/888/original/photo2.png?1699060648",
    id: "photo2.png",
    alt: "A woman with glam makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/891/original/photo6.png?1699060674",
    id: "photo6.png",
    alt: "A woman with glam makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/895/original/photo12.png?1699060709",
    id: "photo12.png",
    alt: "A woman with glam makeup on sticking her tongue out",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/887/original/photo1.png?1699060641",
    id: "photo1.png",
    alt: "A man with orange and blue smoked out eyeshadow on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/890/original/photo5.png?1699060666",
    id: "photo5.png",
    alt: "A woman with glam makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/894/original/photo9.png?1699060697",
    id: "photo9.png",
    alt: "A woman with glam makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/896/original/photo14.png?1699060718",
    id: "photo14.png",
    alt: "A woman with glam makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/900/original/makeup-3.jpeg?1699060945",
    id: "makeup-3.jpeg",
    alt: "Melvin with glam makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/901/original/makeup-4.jpeg?1699060975",
    id: "makeup-4.jpeg",
    alt: "A woman with glam makeup and a blue cut-crease eyeshadow on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/902/original/makeup-5.jpeg?1699060982",
    id: "makeup-5.jpeg",
    alt: "A woman with glam makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/899/original/makeup-2.jpeg?1699060831",
    id: "makeup-2.jpeg",
    alt: "A pregnant woman with a white dress and makeup on posing in a seated position",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/903/original/makeup-6.jpeg?1699061083",
    id: "makeup-6.jpeg",
    alt: "A woman with glam makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/893/original/photo8.png?1699060688",
    id: "photo8.png",
    alt: "A woman with glam makeup and a purple cut-crease eyeshadow on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/892/original/photo7.png?1699060680",
    id: "photo7.png",
    alt: "A woman with glam makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/904/original/makeup-7.jpeg?1699061092",
    id: "makeup-7.jpeg",
    alt: "A woman with glam makeup and long black gloves on posing with her hands under her face",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/898/original/makeup-1.jpeg?1699060821",
    id: "makeup-1.jpeg",
    alt: "Melvin doing glam makeup on a blonde woman",
  },
];

const MakeupPage = () => {
  return (
    <div className="makeupPage">
      <Header />
      <div className="makeup-container">
        <PageHeading headline={"A gallery of stunning looks"} />
        <Gallery array={makeupImages} />
      </div>
      <Footer />
    </div>
  );
};

export default MakeupPage;
