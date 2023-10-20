import React from "react";
import "./Gallery.scss";

const Gallery = (props) => {
  return (
    <div className="gallery-container">
      <img src={props.img1} alt={props.alt1} />
      <img src={props.img2} alt={props.alt2} />
      <img
        src={props.img3}
        alt={props.alt3}
        className="third-img long-img sfx-third"
      />
      <img src={props.img4} alt={props.alt4} />
      <img
        src={props.img5}
        alt={props.alt5}
        className="fifth-img wide-img sfx-fifth"
      />
      <img src={props.img6} alt={props.alt6} />
      <img src={props.img7} alt={props.alt7} />
      <img src={props.img8} alt={props.alt8} />
      <img src={props.img9} alt={props.alt9} />
      <img src={props.img10} alt={props.alt10} />
      <img
        src={props.img11}
        alt={props.alt11}
        className="eleventh-img long-img"
      />
      <img src={props.img12} alt={props.alt12} />
      <img src={props.img13} alt={props.alt13} className="top-img" />
      <img src={props.img14} alt={props.alt14} className="top-img" />
      <img src={props.img15} alt={props.alt15} />
      <img
        src={props.img16}
        alt={props.alt16}
        className="sixteenth-img wide-img sfx-sixteenth"
      />
    </div>
  );
};

export default Gallery;
