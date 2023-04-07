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
      testimonial: "lorem25asdlkkhalskdeiuhfalsdjkfhna;eiwoeihfsdkjfnh.l",
      image: 'assets/testimonial.png'
    },
    {
      id: '2',
      name: 'Alana Keeton',
      testimonial: 'lorem25'
    }
  ]

  // map through data in object using hooks, on click
  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < testimonials.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <section className='testimonials-section'>
      <div className='titleBlurb'>
        <p>TESTIMONIALS</p>
        <h2>See What My Satisfied Clients Have To Say</h2>
        <h3>I value my clients’ feedback and I am proud to showcase their kind words.</h3>
      </div>

      <div className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {testimonials.map((i) => (

          <div className='testimonialContainer'>
            <div className="testimonial">
              <div className="left">
                <div className="leftContainer">
                  <h1>{i.name}</h1>
                  <h3>{i.testimonial}</h3>
                </div>
              </div>
              <div className="right">
                <img src={i.image} alt="" />
              </div>
            </div>
          </div>
        )
        )
        }
      </div>
      <img src="assets/left-arrow.png"
        className='arrow left' alt=""
        onClick={() => handleClick('left')} />
      <img src="assets/right-arrow.png"
        className='arrow right' alt=""
        onClick={() => handleClick('right')} />
    </section>
  )
}

export default TestimonialsSection