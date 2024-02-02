import React, { useState } from 'react';
import './BildKarusell.scss';

const BildKarusell = ({ images }) => {
  // State to track the current index of the displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to handle moving to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Check if images are undefined or empty before rendering
  if (!images || images.length === 0) {
    return <p>No images to display.</p>;
  }

  return (
    <div className="image__carousel">
      {/* Button to navigate to the previous image */}
      <button onClick={handlePrev} className="nav__button">
        &lt;
      </button>

      {/* Image element displaying the current image */}
      <img
        src={`../assets/images/${images[currentIndex]}`}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel__image"
      />

      {/* Button to navigate to the next image */}
      <button onClick={handleNext} className="nav__button">
        &gt;
      </button>
    </div>
  );
};

export default BildKarusell;
