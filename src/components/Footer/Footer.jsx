import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, selectDarkMode } from '../../features/darkModeSlice';
// retrieve social media icons
import SocialIcon from '../SocialIcon';
import Config from '../Config';


function Footer() {
  // Retrieve the current dark mode state from the Redux store
  const isDarkMode = useSelector(selectDarkMode);

  // Retrieve the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Handler function to toggle dark mode on button click
  const handleToggleDarkMode = () => {
    // Dispatch the toggleDarkMode action to update the state
    dispatch(toggleDarkMode());
  };


  return (
    <div className="footer">
      <button onClick={handleToggleDarkMode}>
        Toggle Dark Mode: {isDarkMode ? 'On' : 'Off'}
      </button>
	  {/* add social media icons */}
      <SocialIcon platform="linkedin" link="https://www.linkedin.com/in/emily-saletti-w%C3%A5hlin-7978132b1/" size={32} />
      <SocialIcon platform="github" link="https://github.com/EmilyWahlin" size={32} />

      {/* Display telephone number and email using props */}
      <div className="contact__info">
        <p>📞 Tele: {Config.telephone}</p>
        <p>✉️ Email: {Config.email}</p>
      </div>
    </div>
  );
}

export default Footer;