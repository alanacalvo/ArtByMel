import "./ServicesCards.scss";

import bridalImg from "./homePageImages/bridal-makeup.jpeg";
import glamImg from "./homePageImages/glam-makeup.jpeg";
import sfxImg from "./homePageImages/sfx-makeup.jpeg";

function ServicesCards() {
  return (
    <div className="cardHolder">
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
      <div className="cards">
        <img src={glamImg} alt="glam makeup" className="card-img glam-img" />
        <div className="label">
          <p>Glam Makeup</p>
        </div>
      </div>
      <div className="cards">
        <img src={sfxImg} alt="SFX makeup" className="card-img sfx-img" />
        <div className="label">
          <p>SFX Makeup</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
