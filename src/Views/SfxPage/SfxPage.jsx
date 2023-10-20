import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading.jsx";
import Gallery from "../../Components/ReusableComponents/Gallery";

import "./SfxPage.scss";
import sfx1 from "./sfx photos/sfx1.png";
import sfx2 from "./sfx photos/sfx2.png";
import sfx3 from "./sfx photos/sfx3.png";
import sfx4 from "./sfx photos/sfx4.png";
import sfx5 from "./sfx photos/sfx5.jpeg";
import sfx6 from "./sfx photos/sfx6.png";
import sfx7 from "./sfx photos/sfx7.jpeg";
import sfx8 from "./sfx photos/sfx8.jpeg";
import sfx9 from "./sfx photos/sfx9.jpeg";
import sfx10 from "./sfx photos/sfx10.jpeg";
import sfx11 from "./sfx photos/sfx11.jpeg";
import sfx12 from "./sfx photos/sfx12.png";
import sfx13 from "./sfx photos/sfx13.png";
import sfx14 from "./sfx photos/sfx14.png";
import sfx15 from "./sfx photos/sfx15.jpeg";
import sfx16 from "./sfx photos/sfx16.png";

function SfxPage() {
  return (
    <>
      <Header />
      <div className="sfx-container">
        <PageHeading headline={"A gallery of Special effects"} />
        <div className="sfx-gallery">
          <Gallery
            img1={sfx1}
            alt1={"A woman painted as a witch"}
            img2={sfx2}
            alt2={"A man painted as wooden puppet"}
            img3={sfx3}
            alt3={
              "A man painted as a lion next to a man painted as a lion tamer in a circus"
            }
            img4={sfx4}
            alt4={"A man painted as zombie covered in blood"}
            img5={sfx5}
            alt5={
              "A woman with completely white eyes and thick blood dripping from the top of her head halfway in water"
            }
            img6={sfx6}
            alt6={"A cardboard cutout of a clown head"}
            img7={sfx7}
            alt7={
              "A woman painted to look like a leopard with black claw hands making a growling face"
            }
            img8={sfx8}
            alt8={
              "A side by side of a man with no makeup and then the same man with a red devil makeup look with big horns at the top of his head"
            }
            img9={sfx9}
            alt9={"A man painted as a werewolf with a bone necklace"}
            img10={sfx10}
            alt10={
              "A man with a gray-blue skull makeup look and completely black eyes"
            }
            img11={sfx11}
            alt11={"A woman dressed as the witch Maleficent from Snow White"}
            img12={sfx12}
            alt12={
              "A man painted as a green sea goblin-type creature with horns going across from his nose to the back of his head and claws"
            }
            img13={sfx13}
            alt13={"A woman painted as the Corpse Bride"}
            img14={sfx14}
            alt14={
              "A man painted as a royal person with pink hair and a pink moustache and makeup and a painted on outfit including a pink fluffy cape and yellow armor"
            }
            img15={sfx15}
            alt15={"A woman with a colorful flames skull makeup look"}
            img16={sfx16}
            alt16={
              "A woman painted as an Avatar with long red hair in a crouched position"
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SfxPage;
