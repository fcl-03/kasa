import { useState } from "react";
import "./Slideshow.scss";

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultiplePictures = pictures.length > 1;

  function goToNext() {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  }

  function goToPrev() {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  }

  return (
    <div className="slideshow">
      <img
        className="slideshow__image"
        src={pictures[currentIndex]}
        alt={title}
      />

      {hasMultiplePictures && (
        <>
          <button
            className="slideshow__button slideshow__button--left"
            type="button"
            onClick={goToPrev}
            aria-label="Image précédente"
          >
            ‹
          </button>

          <button
            className="slideshow__button slideshow__button--right"
            type="button"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            ›
          </button>

          <p className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Slideshow;
