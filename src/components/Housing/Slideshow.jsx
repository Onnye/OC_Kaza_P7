import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import arrowLeftIcon from "../../images/arrow_left.png";
import arrowRightIcon from "../../images/arrow_right.png";

const Slideshow = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const showNextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const showPrevSlide = useCallback(() => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        showPrevSlide();
      } else if (event.key === "ArrowRight") {
        showNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showNextSlide, showPrevSlide]);

  // Early return if images is empty
  if (images.length === 0) {
    return <div className="slideshow">No images available</div>;
  }

  return (
    <div
      className="slideshow"
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          showPrevSlide();
        } else if (event.key === "ArrowRight") {
          showNextSlide();
        }
      }}>
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={showPrevSlide}
            className="slideshow__arrow slideshow__arrow--left">
            <img src={arrowLeftIcon} alt="Previous" />
          </button>
          <button
            aria-label="Next image"
            onClick={showNextSlide}
            className="slideshow__arrow slideshow__arrow--right">
            <img src={arrowRightIcon} alt="Next" />
          </button>
        </>
      )}
      <img
        src={images[currentSlideIndex]}
        alt={`Slide ${currentSlideIndex}`}
        className="slideshow__image"
      />
      {images.length > 1 && (
        <div className="slideshow__counter">
          {currentSlideIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
