import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectImageLoader from "./ProjectImageLoader";

const Carousel = ({ neededProjectName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images array - replace with your actual images
  const images = ProjectImageLoader({ neededProjectName: neededProjectName });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full max-w-4xl mx-auto">
      {/* Image container */}
      <div className="relative overflow-hidden h-36">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`absolute w-full h-full transition-transform duration-300 ease-in-out ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={image}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute p-2 transition-colors -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-white/80 hover:bg-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 transition-colors -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-white/80 hover:bg-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
