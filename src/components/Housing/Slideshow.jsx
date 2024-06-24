import { useState } from "react";
import PropTypes from "prop-types";
import arrowLeftIcon from "../../images/arrow_left.png";
import arrowRightIcon from "../../images/arrow_right.png";

const Slideshow = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const showNextSlide = () => {
    if (currentSlideIndex < images.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };

  const showPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(images.length - 1);
    }
  };

  // Early return if images is empty
  if (images.length === 0) {
    return <div className="slideshow">No images available</div>;
  }

  return (
    <div className="slideshow">
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
