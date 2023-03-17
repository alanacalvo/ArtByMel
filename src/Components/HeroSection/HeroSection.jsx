import React from 'react';
import Style from './HeroSection.scss';


function HeroSection() {
  

  return (
  <> 
    <div className='hero-container'> 
    {/* <img src="src/Components/HeroSection/abm-hero.png" alt="Paris" /> */}
    <button className="book">Book With Melvin</button>   
     <div className='headline'>
     <h1>Melvin Lozada</h1>
     <div className='subtitle'>Get flawless Looks for any Occasion</div>
     </div>
    </div>
  </>
  )
}

export default HeroSection