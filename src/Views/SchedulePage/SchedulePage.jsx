import React, { useState } from 'react'
import './SchedulePage.scss'
// import "flatpickr/dist/themes/material_green.css";
// import Flatpickr from "react-flatpickr";
// import flatpickr from 'flatpickr';
import { InlineWidget, PopupWidget } from "react-calendly";



function SchedulePage() {
  // const [date, setDate] = useState()

  // flatpickr({
  //   altInput: true,
  //   altFormat: 'F j, Y',
  //   dateFormat: 'Y-m-d',
  //   minDate: 'today',
  //   disable: pickedDate;
  // })
   
  // const setAppt = (date) => {
  
  // }

  // const disablePickedDates = (date) => {
  //   if ( date === pickedDate ) {
  //     disable picked date
  //   }
  // }

  return (
    <div className='calendar'>
      <h1>Book an Appointment</h1>
      <InlineWidget 
      styles={{
        // display: 'block',
        height: '1000px',
        backgroundColor: 'grey',
        color: 'red',
      }}
      rootElement={document.getElementById("root")}
      text="Click here to schedule!"
      textColor="red"
      color="grey"
      url="https://calendly.com/alanapcalvo" />

      {/* <Flatpickr 
      data-enable-time
      // value={date}
      // onChange=
      /> */}
    </div>
  )
}

export default SchedulePage

