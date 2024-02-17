import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading";
import Gallery from "../../Components/ReusableComponents/Gallery";

import "./BridalPage.scss";

const bridalImages = [
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/746/original/2.jpeg?1698965693",
    id: "2.jpeg",
    alt: "A woman with bridal makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/748/original/4.jpeg?1698965709",
    id: "4.jpeg",
    alt: "A woman with bridal makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/745/original/1.jpeg?1698965686",
    id: "1.jpeg",
    alt: "A woman in a traditional Indian wedding gown and bridal makeup",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/747/original/3.jpeg?1698965702",
    id: "3.jpeg",
    alt: "A woman posing in a seated position in a white wedding dress with her eyes closed",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/754/original/10.jpeg?1698965760",
    id: "10.jpeg",
    alt: "Melvin doing a bride's makeup as she smiles",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/749/original/5.jpeg?1698965720",
    id: "5.jpeg",
    alt: "A woman with bridal makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/752/original/8.jpeg?1698965744",
    id: "8.jpeg",
    alt: "A woman in a traditional Indian wedding gown and bridal makeup with her eyes closed",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/753/original/9.jpeg?1698965751",
    id: "9.jpeg",
    alt: "A woman posing in a seated position in a white wedding dress",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/751/original/7.jpeg?1698965737",
    id: "7.jpeg",
    alt: "A woman with bridal makeup on",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/750/original/6.jpeg?1698965729",
    id: "6.jpeg",
    alt: "Melvin applying lipstick to a seated bride",
  },
];

const BridalPage = () => {
  return (
    <div className="bridalPage">
      <Header />
      <div className="bridal-container">
        <PageHeading headline={"A gallery of beautiful bridal looks"} />
        <Gallery array={bridalImages} />
      </div>
      <Footer />
    </div>
  );
};

export default BridalPage;
