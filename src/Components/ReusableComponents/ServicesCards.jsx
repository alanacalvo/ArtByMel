import React from "react";
import "./ServicesCards.scss";

import bridalImg from "./homePageImages/bridal-makeup.jpeg";
import glamImg from "./homePageImages/glam-makeup.jpeg";
import sfxImg from "./homePageImages/sfx-makeup.jpeg";

function ServicesCards() {
  return (
    <div className="cardHolder">
      {/* <Link to={'bridal'} className='link'> */}
      <div className="cards">
        <img
          src={bridalImg}
          alt="bridal makeup"
          className="card-img bridal-img"
        />
        <div className="label">
          <p>Bridal Makeup</p>
        </div>
      </div>
      {/* </Link> */}
      {/* <Link to={'glam'} className='link'> */}
      <div className="cards">
        <img src={glamImg} alt="glam makeup" className="card-img glam-img" />
        <div className="label">
          <p>Glam Makeup</p>
        </div>
      </div>
      {/* </Link> */}
      {/* <Link to={'sfx'} className='link'> */}
      <div className="cards">
        <img src={sfxImg} alt="SFX makeup" className="card-img sfx-img" />
        <div className="label">
          <p>SFX Makeup</p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default ServicesCards;
