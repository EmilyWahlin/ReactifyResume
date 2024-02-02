import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../../features/darkModeSlice';
import './Kontaktformulär.scss';

const Kontaktformulär = () => {
  const isDarkMode = useSelector(selectDarkMode);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Hanterar ändringar i formulärinput
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hanterar formulärets submit-event
  const handleSubmit = (e) => {
    e.preventDefault();
    // API eller annan backend.

    // loggar formulärdata till console
    console.log('Formulärdata:', formData);
  };

  return (
    <form className={`contact-form ${isDarkMode ? 'dark-mode' : ''}`} onSubmit={handleSubmit}>
      <label>
        Namn:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        E-post:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Meddelande:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Skicka</button>
    </form>
  );
};

export default Kontaktformulär;