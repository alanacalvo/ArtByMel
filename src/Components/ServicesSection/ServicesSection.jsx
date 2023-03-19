import React from 'react'
// import { Link } from 'react-router-dom';
import ServicesCards from '../ReusableComponents/ServicesCards'
import './ServicesSection.scss'

function ServicesSection() {



  return (
    <div className='servicessection'>
      <div className='copy'>
        <p>Services Offered</p>
        <h2>Your Makeup Needs, Met.</h2>
        <h3>Specializing in a variety of makeup and art services, so you can enjoy your special event.</h3>
      </div>
      <div className='cards'>
        <ServicesCards/>
      </div>

    </div>
  )
}

export default ServicesSection