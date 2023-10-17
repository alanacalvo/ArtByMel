import React from "react";
import "./Gallery.scss";

import sfx1 from "../../Views/SfxPage/sfx photos/sfx4.png";
import sfx2 from "../../Views/SfxPage/sfx photos/sfx3.png";
import sfx3 from "../../Views/SfxPage/sfx photos/sfx1.png";
import sfx4 from "../../Views/SfxPage/sfx photos/sfx5.png";
import sfx5 from "../../Views/SfxPage/sfx photos/sfx21.jpeg";
import sfx6 from "../../Views/SfxPage/sfx photos/sfx6.png";
import sfx7 from "../../Views/SfxPage/sfx photos/sfx16.jpeg";
import sfx8 from "../../Views/SfxPage/sfx photos/sfx17.jpeg";
import sfx9 from "../../Views/SfxPage/sfx photos/sfx15.jpeg";
import sfx10 from "../../Views/SfxPage/sfx photos/sfx9.jpeg";
import sfx11 from "../../Views/SfxPage/sfx photos/sfx18.jpeg";
import sfx12 from "../../Views/SfxPage/sfx photos/sfx12.png";
import sfx13 from "../../Views/SfxPage/sfx photos/sfx10.png";
import sfx14 from "../../Views/SfxPage/sfx photos/sfx14.png";
import sfx15 from "../../Views/SfxPage/sfx photos/sfx19.jpeg";
import sfx16 from "../../Views/SfxPage/sfx photos/sfx7.png";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <img src={sfx1} alt="A woman painted as a witch" />
      <img src={sfx2} alt="A man painted as wooden puppet" />
      <img
        src={sfx3}
        alt="A man painted as a lion next to a man painted as a lion tamer in a circus"
        className="third-img long-img"
      />
      <img src={sfx4} alt="A man painted as zombie covered in blood" />
      <img
        src={sfx5}
        alt="A woman with completely white eyes and thick blood dripping from the top of her head halfway in water"
        className="fifth-img wide-img"
      />
      <img src={sfx6} alt="A cardboard cutout of a clown head" />
      <img
        src={sfx7}
        alt="A woman painted to look like a leopard with black claw hands making a growling face"
      />
      <img
        src={sfx8}
        alt="A side by side of a man with no makeup and then the same man with a red devil makeup look with big horns at the top of his head"
      />
      <img src={sfx9} alt="A man painted as a werewolf with a bone necklace" />
      <img
        src={sfx10}
        alt="A man with a gray-blue skull makeup look and completely black eyes"
      />
      <img
        src={sfx11}
        alt="A woman dressed as the witch Maleficent from Snow White"
        className="eleventh-img long-img"
      />
      <img
        src={sfx12}
        alt="A man painted as a green sea goblin-type creature with horns going across from his nose to the back of his head and claws"
      />
      <img
        src={sfx13}
        alt="A woman painted as the Corpse Bride"
        className="top-img"
      />
      <img
        src={sfx14}
        alt="A man painted as a royal person with pink hair and a pink moustache and makeup and a painted on outfit including a pink fluffy cape and yellow armor"
        className="top-img"
      />
      <img src={sfx15} alt="A woman with a colorful flames skull makeup look" />
      <img
        src={sfx16}
        alt="A woman painted as an Avatar with long red hair in a crouched position"
        className="sixteenth-img wide-img"
      />
    </div>
  );
};

export default Gallery;
