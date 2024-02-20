import React from "react";
import "./Gallery.scss";

const Gallery = ({ array }) => {
  return (
    <div className="gallery-container">
      {array.map(({ img, id, alt }) => (
        <img src={img} key={id} alt={alt} />
      ))}
    </div>
  );
};

export default Gallery;
