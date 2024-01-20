import React, { useState } from "react";
<<<<<<< HEAD
import axios from "axios";
import { useNavigate } from "react-router";
import "./ScheduleForm.scss";

export default function ScheduleForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    apptType: "",
    location: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
=======
import { useNavigate } from "react-router";
import './ScheduleForm.scss'
 
export default function ScheduleForm() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    apptType: '',
    location: '',
    name: '',
 });
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value});
>>>>>>> 69b0997bab5546dc66b9cc5ca08b6734b586e000
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log(form);

    const data = {
      apptType: useState.apptType,
      location: useState.location,
      name: useState.name,
    };
    axios.post("/:id", data);
    setForm();
    console.log(form);
    navigate("/");
  };

  return (
    <div>
      <h3>Schedule New Appt</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="apptType">Appointment Type:</label>
        <select id="apptType" onChange={handleChange} value={form.apptType}>
          <option value="bridal">Bridal Makeup</option>
          <option value="full glam">Full Glam Makeup</option>
          <option value="soft glam">Soft Glam Makeup</option>
          <option value="sfx">SFX Makeup</option>
          <option value="full body paint">Full Body Paint</option>
        </select>

        <label htmlFor="location">Location:</label>
        <select id="location" onChange={handleChange} value={form.location}>
          <option value="tallahassee">Tallahassee</option>
          <option value="St Petersburg">St. Petersburg</option>
          <option value="Clearwater">Clearwater</option>
          <option value="Spring Hill">Spring Hill</option>
          <option value="new port richie">New Port Richie</option>
        </select>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={form.name}
        />

        <button type="submit">Schedule</button>
      </form>
    </div>
  );
}
=======
    console.log(form)

    const data = {
      apptType: apptType,
      location: location,
      name: name,
    }
    axios.post('/:id', data)
    setForm()
    console.log(form)
    navigate('/')
  }

 return (
   <div>
     <h3>Schedule New Appt</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="apptType">Appointment Type:</label>
          <select id="apptType"
            onChange={handleChange}
            value={form.apptType}>
            <option value="bridal">Bridal Makeup</option>
            <option value="full glam">Full Glam Makeup</option>
            <option value="soft glam">Soft Glam Makeup</option>
            <option value="sfx">SFX Makeup</option>
            <option value="full body paint">Full Body Paint</option>
          </select>

        <label htmlFor="location">Location:</label>
        <select id="location"
            onChange={handleChange}
            value={form.location}>
            <option value="tallahassee">Tallahassee</option>
            <option value="St Petersburg">St. Petersburg</option>
            <option value="Clearwater">Clearwater</option>
            <option value="Spring Hill">Spring Hill</option>
            <option value="new port richie">New Port Richie</option>
          </select>

          <label htmlFor="name">Name:</label>
          <input type="text"
            id="name"
            onChange={handleChange}
            value={form.name}/>

          <button type="submit">Schedule</button>
      </form>
   </div>
 );
}

>>>>>>> 69b0997bab5546dc66b9cc5ca08b6734b586e000
