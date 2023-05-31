import React from "react";
import "./ServicesCards.scss";

function ServicesCards() {
  return (
    <div className="cardHolder">
      {/* <Link to={'bridal'} className='link'> */}
      <div className="cards">
        <img src="Rectangle 14.png" alt="bridal makeup" className="card-img" />
        <div className="label">
          <p>Bridal Makeup</p>
        </div>
      </div>
      {/* </Link> */}
      {/* <Link to={'glam'} className='link'> */}
      <div className="cards">
        <img src="Rectangle 15.png" alt="glam makeup" className="card-img" />
        <div className="label">
          <p>Glam Makeup</p>
        </div>
      </div>
      {/* </Link> */}
      {/* <Link to={'sfx'} className='link'> */}
      <div className="cards">
        <img src="Rectangle 17.png" alt="SFX makeup" className="card-img" />
        <div className="label">
          <p>SFX Makeup</p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default ServicesCards;
