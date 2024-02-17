import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading.jsx";

import "./SfxPage.scss";
import Gallery from "../../Components/ReusableComponents/Gallery.jsx";

export const sfxImages = [
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/135/original/sfx1.png?1697590476",
    id: "sfx1.png",
    alt: "A woman painted as a witch",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/136/original/sfx2.png?1697590485",
    id: "sfx2.png",
    alt: "A man painted as wooden puppet",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/137/original/sfx3.png?1697590492",
    id: "sfx3.png",
    alt: "A man painted as a lion next to a man painted as a lion tamer in a circus",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/138/original/sfx4.png?1697590500",
    id: "sfx4.png",
    alt: "A man painted as zombie covered in blood",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/140/original/sfx5.jpeg?1697590527",
    id: "sfx5.jpeg",
    alt: "A woman with completely white eyes and thick blood dripping from the top of her head halfway in water",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/141/original/sfx6.png?1697590538",
    id: "sfx6.png",
    alt: "A cardboard cutout of a clown head",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/142/original/sfx7.jpeg?1697590549",
    id: "sfx7.jpeg",
    alt: "A woman painted to look like a leopard with black claw hands making a growling face",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/143/original/sfx8.jpeg?1697590556",
    id: "sfx8.jpeg",
    alt: "A side by side of a man with no makeup and then the same man with a red devil makeup look with big horns at the top of his head",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/144/original/sfx9.jpeg?1697590836",
    id: "sfx9.jpeg",
    alt: "A man painted as a werewolf with a bone necklace",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/145/original/sfx10.jpeg?1697590846",
    id: "sfx10.jpeg",
    alt: "A man with a gray-blue skull makeup look and completely black eyes",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/146/original/sfx11.jpeg?1697590852",
    id: "sfx11.jpeg",
    alt: "A woman dressed as the witch Maleficent from Snow White",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/147/original/sfx12.png?1697590862",
    id: "sfx12.png",
    alt: "A man painted as a green sea goblin-type creature with horns going across from his nose to the back of his head and claws",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/148/original/sfx13.png?1697590908",
    id: "sfx13.png",
    alt: "A woman painted as the Corpse Bride",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/149/original/sfx14.png?1697590915",
    id: "sfx14.png",
    alt: "A man painted as a royal person with pink hair and a pink moustache and makeup and a painted on outfit including a pink fluffy cape and yellow armor",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/150/original/sfx15.jpeg?1697590925",
    id: "sfx15.jpeg",
    alt: "A woman with a colorful flames skull makeup look",
  },
  {
    img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/151/original/sfx16.png?1697590936",
    id: "sfx16.png",
    alt: "A woman painted as an Avatar with long red hair in a crouched position",
  },
];

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
