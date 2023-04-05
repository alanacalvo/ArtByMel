import React from 'react'
import './TestimonialsSection.scss'
import { useState } from 'react';

function TestimonialsSection() {

  // hooks
  const [currentSlide, setCurrentSlide] = useState(0)

  // data object
  const testimonials = [
    {
      id: '1',
      name: 'Jane Smith',
      testimonial: "lorem25",
      image: 'assets/testimonial.png'
    },
    {
      id: '2',
      name: 'Alana Keeton',
      testimonial: 'lorem25'
    }
  ]

  // map through data in object using hooks, on click


  return (
    <section className='testimonials-section'>
      {/* <div className='testimonialsContainer'> */}
      <div className='titleBlurb'>
        <p>TESTIMONIALS</p>
        <h2>See What My Satisfied Clients Have To Say</h2>
        <h3>I value my clients’ feedback and I am proud to showcase their kind words.</h3>
      </div>

      <div className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {/* <div className='border'> */}
        {testimonials ? testimonials.map((testimonial, i) => {
          return (

            <div key={i} className='testimonialContainer'>
              <div className="left">
                <h1>{testimonial.name}</h1>
                <h3>{testimonial.testimonial}</h3>
              </div>
              <div className="right">
                <img src={testimonial.image} alt="" />
              </div>
            </div>
          )
        })
          : <h1>NULL</h1>
        }
        {/* <div className='sliderContainer'>
              <img 
              src="Vector (1).png" 
              alt="" 
              // onClick={}
              />
              <p>1 / 5</p>
              <img 
              src="Vector.png" 
              alt="" 
              />

          </div> */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  )
}

export default TestimonialsSection