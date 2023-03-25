import React from 'react'

function ServicesCards() {



  return (
    <div className='cardHolder'>
          {/* <Link to={'bridal'} className='link'> */}
          <div className='cards'>
            <img src="Rectangle 14.png" alt="bridal makeup" />
            <p>Bridal Makeup</p>
          </div>
        {/* </Link> */}
        {/* <Link to={'glam'} className='link'> */}
          <div className='cards'>
            <img src="Rectangle 15.png" alt="glam makeup" />
          </div>
        {/* </Link> */}
        {/* <Link to={'sfx'} className='link'> */}
          <div className='cards'>
            <img src="Rectangle 17.png" alt="SFX makeup" />
          </div>
        {/* </Link> */}
    </div>
  )
}

export default ServicesCards