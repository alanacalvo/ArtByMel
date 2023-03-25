import React from 'react'
import './TestimonialsSection.scss'

function TestimonialsSection() {

  return (
    <section className='testimonials-section'>
      <div className='testimonialsContainer'>
        <div className='copy'>
          <p>TESTIMONIALS</p>
          <h2>See What My Satisfied Clients Have To Say</h2>
          <h3>I value my clients’ feedback and I am proud to showcase their kind words.</h3>
        </div>
        <div className='testimonials'>
          <div className='border'>

          <div className='testimonialsCopy'>
            <h1>Jane Smith</h1>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae dignissimos aperiam ullam esse laudantium soluta reiciendis non cum nihil impedit, velit a cupiditate nam vero tempore necessitatibus ipsum? Voluptas sunt velit sit veritatis, eos quia doloremque iusto enim accusantium veniam possimus voluptatum nostrum, libero ratione delectus eligendi, a mollitia."</p>
            <div className='sliderContainer'>
              <img src="Vector (1).png" alt="" />
              <p>1 / 5</p>
              <img src="Vector.png" alt="" />

            </div>
          </div>
          <img src="Rectangle 27.png" alt="testimonials" />
        </div>
          </div>
      </div>
    </section>
  )
}

export default TestimonialsSection